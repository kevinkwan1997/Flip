import axios from 'axios'
import { useSelector } from 'redux'

const initialState = {
    items: []
}


export default function itemReducer(state = initialState , action) {
    switch (action.type) {
        case 'INITIALIZE': 
            return {
                ...state, items: action.payload
            }
        default: return state
    }
}