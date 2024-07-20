
import React, { useEffect, useState } from "react"
import { useNavigate } from "react-router";

const Login = () => {

    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const navigate = useNavigate();

    useEffect(() => {
        const checkIfUserIsLogedIn = localStorage.getItem('user')     // trigger the action after the DOM reload
        if (checkIfUserIsLogedIn) {
            navigate('/')
        }
    }, [])


    const collectData = async () => {
        let result = await fetch('https://inotesbackend-hzxc.onrender.com/login', {
            method: 'post',
            body: JSON.stringify({ email, password }),
            headers: {
                'Content-Type': 'application/json'          // tells the browser the content-type of returned content
            }
        })
        result = await result.json();
        console.log(result)
        // storing in local Storage to send token in other APIs and if user close the browser or refresh 
        // the page then to know whether the user is loged in or not.
        if(result.token){
        localStorage.setItem("user", JSON.stringify(result.resultFromdb))
        localStorage.setItem('token', JSON.stringify(result.token))
        navigate('/')
    } else {
        alert("Enter correct credentials")
    }


    }

    return (
        <div className="login">
            <h1>LogIn</h1>
            <input className="inputBox" type="text" placeholder="Enter Email"
                value={email} onChange={(e) => setEmail(e.target.value)}
            />
            <input className="inputBox" type="password" placeholder="Enter password"
                value={password} onChange={(e) => setPassword(e.target.value)}
            />
            <button onClick={collectData} className="appButton" type="button">LogIn</button>
        </div>
    )
}

export default Login;
