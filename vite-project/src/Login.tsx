import loginBanner from "./assets/images/pablo.svg";
import Logo from "./Logo";

import { useNavigate } from "react-router-dom";

export default function Login({ useAuth }) {
  const Auth = useAuth();
  let navigate = useNavigate();

  let to = "/dashboard";

  return (
    <section className="login-section grid grid-cols-2">
      <Logo />

      <div>
        <img src={loginBanner} alt="" />
      </div>

      <article>
        <h1>Welcome!</h1>
        <p>Enter details to login.</p>
        <form onSubmit={handleSubmit} className="form" action="">
          <input
            type="text"
            name="username"
            id="username"
            placeholder="Username"
          />

          <input
            type="password"
            name="password"
            id="password"
            placeholder="Password"
          />

          <button className="fgt-btn">FORGOT PASSWORD ?</button>

          <button className="login-btn">LOG IN</button>
        </form>
      </article>
    </section>
  );

  function handleSubmit(event: React.FormEvent<HTMLFormElement>) {
    event.preventDefault();

    let formData = new FormData(event.currentTarget);
    let username = formData.get("username") as string;

    Auth.signin(username, () => {
      // Send them back to the page they tried to visit when they were
      // redirected to the login page. Use { replace: true } so we don't create
      // another entry in the history stack for the login page.  This means that
      // when they get to the protected page and click the back button, they
      // won't end up back on the login page, which is also really nice for the
      // user experience.
      navigate(to, { replace: true, state: username });
    });
  }
}
