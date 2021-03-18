import React from 'react';
import ReactDOM from 'react-dom';
import './index.scss';
import App from './App.jsx';
import reportWebVitals from './reportWebVitals';

let postsData = [
  {id: 1, message: 'Post 1'},
  {id: 2, message: 'Post 2'}
];

let dialogsData = [
  {id: 1, name: 'Dialog 1'},
  {id: 2, name: 'Dialog 2'},
  {id: 3, name: 'Dialog 3'},
  {id: 4, name: 'Dialog 4'}
];

let messagesData = [
  {id: 1, message: 'Message 1'},
  {id: 2, message: 'Message 2'},
  {id: 3, message: 'Message 3'}
];

ReactDOM.render(
  <React.StrictMode>
    <App posts={postsData} dialogs={dialogsData} messages={messagesData} />
  </React.StrictMode>,
  document.getElementById('root')
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
