import React, { useState } from 'react'

const Auth = () => {

    // const [email, setEmail] = useState('');
    // const [password, setPassword] = useState('');
    // const [passwordConfirm, setConfim] = useState('');
    const [users, setUsers] = useState([]);
    console.log(users);
    const [signupState, setSignupState] = useState({
        email: '',
        password: '',
        passwordConfirm: ''
    })

    const [loginState, setLoginState] = useState({
        email: '',
        password: '',
    })


    const handleChange = (e, propertyName) => {
        setSignupState({
            ...signupState,
           [propertyName]: e.target.value
        })
    }

    const handleSubmit = (e) => {
        e.preventDefault();
        // check stuff isn't undefined
        // let newArray = [...users];
        // newArray.push(signupState);
        // setUsers(newArray)
        setUsers([...users, signupState])
        setSignupState({
            email: "",
            password: "",
            passwordConfirm: ""
        })
    }

  return (
    // sign up / login form / edit info form
    <div id="auth-container">
        <form className="signup" onSubmit={handleSubmit}>
            <h3>Signup</h3>
            <label for="email">Type your email here</label>
            <input 
                type="text" 
                placeholder="email" 
                value={signupState.email} 
                name="email"
                onChange={(e) => handleChange(e, "email")}
            />
            <input 
                type="text" 
                placeholder="password" 
                value={signupState.password}
                onChange={(e) => handleChange(e, "password")}
            />
            <input 
                type="text" 
                placeholder="confirm password" 
                name="passwordConfirm"
                value={signupState.passwordConfirm}
                onChange={(e) => handleChange(e, "passwordConfirm")}
            />
            <button type="submit">SUBMIT</button>
        </form>
        {users.length ?
            <form className="login">
                <h3>Login</h3>
                <input type="text" placeholder="email"/>
                <input type="text" placeholder="password"/>
            </form>
            : <></>
        }
        
    </div>
  )
}

export default Auth