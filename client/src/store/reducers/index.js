import { combineReducers } from "redux";
import UserDataSlice from './UserDataSlice'
import item from './item'

export default combineReducers({
    users: UserDataSlice,
    items: item
})