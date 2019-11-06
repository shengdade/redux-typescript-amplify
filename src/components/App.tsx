import React, { useState, useEffect } from 'react';
import { connect } from 'react-redux';
import { AppState } from '../store';
import { PostState } from '../store/post/types';
import { addPost, fetchPosts } from '../store/post/actions';

interface AppProps {
  post: PostState;
  addPost: any;
  fetchPosts: any;
}

const App: React.FC<AppProps> = ({ post, addPost, fetchPosts }) => {
  const [title, setTitle] = useState('');

  useEffect(() => {
    fetchPosts();
  }, [fetchPosts]);

  const submit = async () => {
    if (title) {
      setTitle('');
      addPost(title);
    }
  };

  const keyPress = (e: React.KeyboardEvent<any>) => {
    if (e.key === 'Enter') {
      submit();
    }
  };

  return (
    <div>
      <input
        value={title}
        onChange={e => {
          setTitle(e.target.value);
        }}
        onKeyPress={keyPress}
        placeholder="Post something..."
      />
      <button onClick={submit}>Post</button>
      {post.posts.map(post => (
        <div key={post.id}>
          <h3>{post.title}</h3>
          <p>{new Date(post.timestamp).toLocaleString()}</p>
        </div>
      ))}
    </div>
  );
};

const mapStateToProps = (state: AppState) => ({
  post: state.post
});

export default connect(
  mapStateToProps,
  { addPost, fetchPosts }
)(App);
