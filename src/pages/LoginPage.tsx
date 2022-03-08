import React, { useState } from "react";
import { useHistory } from "react-router-dom";
import { Alert } from "react-bootstrap";
import "../App.css";

import { clients } from "../constants";

const LoginPage = () => {
  let history = useHistory();

  const [error, setError] = useState(false);

  const handleSubmit = (event: any) => {
    event.preventDefault();
    const email = event.target.email.value;
    const password = event.target.password.value;

    const found = clients.find(
      (login) => login.email === email && login.password === password
    );
    if (found) {
      history.push(`/dashboard/${found.id}`);
      setError(false);
    } else {
      setError(true);
    }
  };

  return (
    <section className="form-signin">
      <form onSubmit={handleSubmit}>
        <img
          className="mb-4"
          src="https://getbootstrap.com/docs/5.1/assets/brand/bootstrap-logo.svg"
          alt=""
          width="72"
          height="57"
        />
        <h1 className="h3 mb-3 fw-normal">Please sign in</h1>

        {error && (
          <Alert variant="success">Email and Password does not match</Alert>
        )}

        <div className="form-floating">
          <input
            type="email"
            className="form-control"
            id="floatingInput"
            placeholder="name@example.com"
            name="email"
            required
          />
          <label htmlFor="floatingInput">Email address</label>
        </div>
        <div className="form-floating">
          <input
            type="password"
            name="password"
            className="form-control"
            id="floatingPassword"
            placeholder="Password"
            required
          />
          <label htmlFor="floatingPassword">Password</label>
        </div>

        <div className="checkbox mb-3">
          <label>
            <input type="checkbox" value="remember-me" /> Remember me
          </label>
        </div>
        <button className="w-100 btn btn-lg btn-primary" type="submit">
          Sign in
        </button>
      </form>
    </section>
  );
};

export default LoginPage;
