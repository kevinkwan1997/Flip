import React, { useState } from 'react'
import axios from 'axios'
import { useDispatch } from 'react-redux'


function LoginForm ({ error }) {

    const dispatch = useDispatch();

    const Login = async (loginDetails) => {
        try {
          const resp = await axios.post("http://localhost:8080/login", JSON.stringify(loginDetails), {
            headers: { 
              'Content-Type': "application/json",
              'Accept': 'application/json',
              'Access-Control-Allow-Origin': '*',
             },
          }).then (resp => {
            const currUser = {
              username: loginDetails.username,
              token: resp.data.token
            }
            dispatch({ type: 'login', payload: currUser })
            localStorage.setItem('user', JSON.stringify(currUser))
          })
        }catch(e) {
          console.error(e.message);
        }
      }

    const [details, setDetails] = useState({username: "", password: ""});

    const submitHandler = e => {
        e.preventDefault();
        Login(details)
    }

    return (
        <div className='login-container'>
        <form className="login-form" onSubmit={ submitHandler }>
            <div className="form-inner">
                <h2>Login</h2>
                {/* Error! */}
                <div className="form-group">
                    <label htmlFor="username">Username: </label>
                    <input type="text" name="username" id="username" onChange={ e => setDetails({ ...details, username: e.target.value }) } value={ details.username } />
                </div>
                <div className="form-group">
                    <label htmlFor="password">Password: </label>
                    <input type="text" name="password" id="password" onChange={ e => setDetails({ ...details, password: e.target.value}) } value={ details.password } />
                </div>
                <input type="submit" value="Login" />
            </div>
        </form>
    </div>
    )
}

export default LoginForm
