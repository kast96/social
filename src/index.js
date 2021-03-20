import reportWebVitals from './reportWebVitals';
import React from 'react';
import ReactDOM from 'react-dom';
import './index.scss';
import App from './App.jsx';
import state from './redux/state.js';
import {addPost, updateNewPostText, addMessage, updateNewMessageText, subscribe} from './redux/state.js';

let rerenderEntireTree = (state) => {
  ReactDOM.render(
    <React.StrictMode>
      <App state={state} addPost={addPost} updateNewPostText={updateNewPostText} addMessage={addMessage} updateNewMessageText={updateNewMessageText} />
    </React.StrictMode>,
    document.getElementById('root')
  );
}

rerenderEntireTree(state);

subscribe(rerenderEntireTree);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
