/*login.jsx*/
import React from "react";
/* We simply can use an array and loop and print each user */
const LoginPage = () => {
  return (
    <div>
        {/* <link href="signin.css" rel="stylesheet" /> */}
        <main className="form-signin">
          <form>
            <h1 className="h3 mb-3 fw-normal">Please sign in</h1>
            <div className="form-floating">
              <input type="email" className="form-control" id="floatingInput" placeholder="user id"/>
              <label htmlFor="floatingInput">ID</label>
            </div>
            <div className="form-floating">
              <input type="password" className="form-control" id="floatingPassword" placeholder="Password" />
              <label htmlFor="floatingPassword">Password</label>
            </div>
            <div className="checkbox mb-3">
              <label>
                <input type="checkbox" defaultValue="remember-me" /> Remember me
              </label>
            </div>
            <button className="w-100 btn btn-lg btn-primary" type="submit">Sign in</button>
          </form>
        </main>
      </div>
  );
};

export default LoginPage;