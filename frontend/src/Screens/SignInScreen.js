import React, { useEffect, useState } from 'react';
import { useDispatch } from 'react-redux';
import { Link } from 'react-router-dom';
import './cartScreen.css';

const SignInScreen = (props) =>  {

    const dispatch = useDispatch();

    const [email, setEmail] = useState('');
    const [password, setPassword] = useState(''); 

    useEffect(() => {
        return () => {

        };
    },[]);


    const submitHandler = (e) => {
        e.preventDefault();
    }

    return (
        <div className="form">
            <form onSubmit={submitHandler}>
                <ul className="form-container">
                    <li>
                        <label for="email">
                            Email
                        </label>
                        <input type="email" name="email" id="email" onChange={(e) => setEmail(e.target.value)}>
                        </input>
                    </li>
                    <li>
                        <label for="password">
                            password
                        </label>
                        <input type="password" name="password" id="password" onChange={(e) => setPassword(e.target.value)}>
                        </input>
                    </li>
                    <li>
                        <button type="submit" className="button-primary">SignIn</button>
                    </li>
                    <li>
                        New to Amazona?
                    </li>
                    <li>
                        <Link to="/register" className="button full-width">Create your amazona account</Link>
                    </li>
                </ul>

            </form>
        </div>
    )
}

export default SignInScreen;
