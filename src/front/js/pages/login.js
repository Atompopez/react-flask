import React, {useState} from "react";
import { Link } from 'react-router-dom';

export const Login = () => {
    const[email,setEmail] = useState("");
    const[password,setPassword] = useState("");
    const[msg,setMsg] = useState("");

    const data = {
        email : email,
        password : password
    }

    const login = ()=>{
        fetch("https://orange-eureka-5pjgjwxq9v5f76w6-3001.app.github.dev/api/login",
        {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json'
            },
            body: JSON.stringify(data)
        }).then((response) => response.json())
        .then((data) => {setMsg(data)})
    }

    return (
        <div className="container" style={{"width":"40%"}}>
            <div>
                <h1>Login</h1>
            </div>
            <div className="mb-3 row">
                <label htmlFor="inputEmail" className="col-sm-2 col-form-label">Email</label>
                <div className="col-sm-10">
                    <input type="text" className="form-control-plaintext" id="inputEmail" placeholder="email@example.com" value={email}
                    onChange={e => setEmail(e.target.value)}/>
                </div>
            </div>
            <div className="mb-3 row">
                <label htmlFor="inputPassword" className="col-sm-2 col-form-label">Password</label>
                <div className="col-sm-10">
                    <input type="password" className="form-control" id="inputPassword" value={password} 
                    onChange={e => setPassword(e.target.value)}/>
                </div>
            </div>
            <div>
                {msg}
            </div>
            <div>
                <Link to="/">
                    <button onClick={login}>Login</button>
				</Link>
            </div>
        </div>
    );
};