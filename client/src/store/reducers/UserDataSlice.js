const initialState = {
    username: '',
    token: '',
    loggedIn: false
  }  

function userReducer(state = initialState, action) {
    switch(action.type) {
      case 'login': return {
        ...state, username: action.payload.username, token: action.payload.token, loggedIn: true
      }
      case 'logout': return {
        ...state, username: initialState.username, token: initialState.token, loggedIn: false
      }
      default: return state;
    }
  }

  export default userReducer;
  
