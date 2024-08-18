import React, { useState } from 'react';

const Card = () => {
    const [username, setUsername] = useState('');
    const [password, setPassword] = useState('');
    function nameSetter(event){
        setUsername(event.target.value);
    }
    function passwordSetter(event){
            setPassword(event.target.value);
    }
    return (
        <div>
            <h1 className="display-3 text-center mb-3 fw-bold">Login Here</h1>
            <div className="card w-50 m-auto shadow border-0">
                <div className="card-body">
                    <h2 className="text-center fw-semibold">Login</h2>
                    <form action="">
                        <div className="mb-3">
                            <label htmlFor="username" className="mb-2">Username</label>
                            <input type="text" id="username" className = "form-control" onChange={nameSetter}/>
                        </div>
                        <div className="mb-3">
                            <label htmlFor="password" className="mb-2">Password</label>
                            <input type="password" id="password" className= "form-control" onChange={passwordSetter}/>
                        </div>
                        <div className="card my-3">
                            <div className="card-body">
                                <div className="card-header">Output</div>
                                    <strong>Username: </strong>{username.toUpperCase()}
                                    <br />
                                    <strong>Password: </strong> {password.split('').map((letter) => '*').join("")}
                            </div>
                        </div>
                        <div className="d-grid gap-2">
                            <button className="btn btn-primary">Submit</button>
                        </div>
                    </form>
                </div>
            </div>
        </div>
    );
}

export default Card;
