import React from 'react';
import { Link } from 'react-router-dom';
import './Singup.css';

const Signup = () => {
    return (
        <div className='form-container'>
            <h2 className='form-title'>Sign Up</h2>
            <form>
                <div className="form-control">
                    <label htmlFor="email">Email</label>
                    <input type="email" name="email" required/>
                </div>
                <div className="form-control">
                    <label htmlFor="password">Password</label>
                    <input type="password" name="password" required/>
                </div>
                <input className='btn-submit' type="submit" value="Sign Up" />
            </form>
            <p className='warning-message'><small>Already have an account? <Link to='/login'>Login</Link></small></p>
        </div>
    );
};

export default Signup;