import profileReducer, { addPostActionCreator, deletePostActionCreator } from './profile-reducer';

let state = {
    posts: [
        {id: 1, message: 'Post 1'},
        {id: 2, message: 'Post 2'}
    ],
};

test('lenght of posts should be incremented', () => {
    //1. start data
    let action = addPostActionCreator("my text");

    //2. action
    let newState = profileReducer(state, action);

    //3. expectation
    expect(newState.posts.length).toBe(3);
});

test('message of new posts should be correct', () => {
    //1. start data
    let action = addPostActionCreator("my text");
    
    //2. action
    let newState = profileReducer(state, action);

    //3. expectation
    expect(newState.posts[2].message).toBe('my text');
});

test('after deleting length of messages should be decrement', () => {
    //1. start data
    let action = deletePostActionCreator(1);
    
    //2. action
    let newState = profileReducer(state, action);

    //3. expectation
    expect(newState.posts.length).toBe(1);
});