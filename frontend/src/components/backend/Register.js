import React, { Component } from 'react';
import './Register.css';

class Register extends Component {
    render() {
      return (
        <div className="signup__container">
        <div className="container__child signup__form">
        <center>
        <h1>REGISTER</h1>
        </center>
            <form action="#">
            <div className="form-group">
                <label htmlFor="username">Username</label>
                <input className="form-control" type="text" name="username" id="username" placeholder="Username" required />
            </div>
            <div className="form-group">
                <label htmlFor="email">Email</label>
                <input className="form-control" type="text" name="email" id="email" placeholder="john.doe@example.com" required />
            </div>
            <div className="form-group">
                <label htmlFor="password">Password</label>
                <input className="form-control" type="password" name="password" id="password" placeholder="********" required />
            </div>
            <div className="form-group">
                <label htmlFor="passwordRepeat">Repeat Password</label>
                <input className="form-control" type="password" name="passwordRepeat" id="passwordRepeat" placeholder="********" required />
            </div>
            <div className="m-t-lg">
                <ul className="list-inline">
                <li>
                    <input className="btn btn--form" type="submit" defaultValue="Register" />
                </li>
                <li>
                    <a className="signup__link" href="#">I am already a member</a>
                </li>
                </ul>
            </div>
            </form>  
        </div>
        </div>





    );
}
}
export default Register;