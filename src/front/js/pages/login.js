import React, {useState, useContext} from "react";
import { Link } from 'react-router-dom';
import { Context } from "../store/appContext.js";
import { Navigate } from "react-router-dom";

export const Login = () => {
    const {store , actions} = useContext(Context)
    const[email,setEmail] = useState("");
    const[password,setPassword] = useState("");

    return (
        <div className="container" style={{"width":"40%"}}>
            { store.auth === true ? <Navigate to="/single"/> :
                <>
                    <div>
                        <h1>Login</h1>
                        <h2 style={{'color':'red'}}>{store.msg}</h2>
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
                        <button onClick={()=>{actions.login(email,password)}}>Login</button>
                    </div>
                </>
            }
        </div>
    );
};