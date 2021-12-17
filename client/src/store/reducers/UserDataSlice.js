const initialState = {
    username: '',
    token: ''
  }  

function userReducer(state = initialState, action) {
    switch(action.type) {
      case 'login': return {
        ...state, username: action.payload.username, token: action.payload.token
      }
      case 'logout': return {
        ...state, username: '', token: ''
      }
      default: return state;
    }
  }
  
