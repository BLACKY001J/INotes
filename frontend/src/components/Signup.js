import { useEffect, useState } from "react"
import React from "react"
import { useNavigate } from "react-router";

const Signup = ()=> {

    const [name, setName] = useState('');
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const navigate = useNavigate();

    useEffect(()=>{
        const checkIfUserIsLogedIn = localStorage.getItem('user')
        if(checkIfUserIsLogedIn){
            navigate('/')
        }
    }, [])
    
    
    const collectData = async ()=> {
        let result = await fetch("https://i-notesbackend.vercel.app/register",{
            method: 'post',
            body: JSON.stringify({name,email,password}),
            headers: {
                'Content-Type' : 'application/json'
            }
        })
        result = await result.json();
        console.log(result)
        if(result.token){
        localStorage.setItem("user", JSON.stringify(result.resultFromdb))
        localStorage.setItem('token', JSON.stringify(result.token))
        }
        navigate('/');

    }

    return (
        <div className="register">
        <h1>Register</h1>
        <input className="inputBox" type="text" placeholder="Enter Name"
            value={name} onChange={(e) => setName(e.target.value)}
        />
        <input className="inputBox" type="text" placeholder="Enter Email"
            value={email} onChange={(e) => setEmail(e.target.value)}
        />
        <input className="inputBox" type="password" placeholder="Enter password"
            value={password} onChange={(e) => setPassword(e.target.value)}
        />
        <button onClick={collectData} className="appButton" type="button">Sign Up</button>
    </div>
    )
}

export default Signup;
