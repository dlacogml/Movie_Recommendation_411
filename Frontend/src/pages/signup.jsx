/*login.jsx*/
import React from "react";
/* We simply can use an array and loop and print each user */
const SignUpPage = () => {
  return (
    <div>
        <main className="form-signin">
          <form>
            <h1 className="h3 mb-3 fw-normal">Sign Up for an Account</h1>
            <div className="form-floating">
              <input type="email" className="form-control" id="floatingInput" placeholder="user id"/>
              <label htmlFor="floatingInput">ID</label>
            </div>
            <div className="form-floating">
              <input type="password" className="form-control" id="floatingPassword" placeholder="Password" />
              <label htmlFor="floatingPassword">Password</label>
            </div>
            <div className="form-floating">
              <input type="birthday" className="form-control" id="floatingBirthday" placeholder="mm/dd/yyyy" />
              <label htmlFor="floatingBirthday">Birthday</label>
            </div>
            <button className="w-100 btn btn-lg btn-primary" type="submit">Sign Up</button>
          </form>
        </main>
      </div>
  );
};

export default SignUpPage;