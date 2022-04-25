let store = {
  _state: {
    profilePage: {
      posts: [
        {id: '1', message: 'Hi, how are you', likesCount: 12},
        {id: '2', message: 'It\'s my first post', likesCount: 10}
      ],
      newPostText: ''
    },
    dialogsPage: {
      dialogs: [
        {id: '1', name: 'Francis'},
        {id: '2', name: 'Benjamin'},
        {id: '3', name: 'Olivia'},
        {id: '4', name: 'Kate'},
        {id: '5', name: 'Sean'},
        {id: '6', name: 'Clifford'}
      ],
      messages: [
        {id: '1', message: 'Hi!'},
        {id: '2', message: 'How are you?'},
        {id: '3', message: 'What is your name?'},
        {id: '4', message: 'How old are you?'},
        {id: '5', message: 'Have a good day!'},
        {id: '6', message: 'Good bye!'}
      ]
    },
    sidebar: {}
  },
  _callSubscriber() {
    console.log('state was changed');
  },

  getState() {
    return this._state;
  },
  subscribe(observer) {
    this._callSubscriber = observer;
  },
  dispatch(action) {
    if(action.type === 'ADD-POST') {
      let newPost = {
        id: 5,
        message: this._state.profilePage.newPostText,
        likesCount: 0
      }
      this._state.profilePage.posts.push(newPost);
      this._state.profilePage.newPostText = '';
      this._callSubscriber(this._state);
    } else if (action.type === 'UPDATE-NEW-POST-TEXT') {
      this._state.profilePage.newPostText = action.newText;
      this._callSubscriber(this._state);
    }
  }
}

export default store;
window.store = store;