import axios from 'axios'

export const getItems = () => async dispatch => {
    try {
        const res = await axios.get("http://localhost:8080/items/all", {
        headers: {
          'Content-Type': "application/json",
          'Accept': 'application/json',
          'Access-Control-Allow-Origin': '*',
          'Authorization': `Bearer  `
        }
      })
        dispatch( {
            type: 'INITIALIZE',
            payload: res.data
        })
    } catch (e) {
        console.error(e)
    }
}