import React, { useState } from 'react';
import { connect } from 'react-redux';
import { AppState } from '../store';
import { PostState } from '../store/post/types';
import { createPost } from '../store/post/actions';

interface AppProps {
  post: PostState;
  createPost: typeof createPost;
}

const App: React.FC<AppProps> = ({ post, createPost }) => {
  const [title, setTitle] = useState('');

  const submit = () => {
    if (title) {
      createPost({
        title,
        timestamp: new Date().getTime()
      });
      setTitle('');
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
        <div key={post.timestamp}>
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
  { createPost }
)(App);
