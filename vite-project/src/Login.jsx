//Assets
import loginBanner from "./assets/images/pablo.svg";

//Component
import Logo from "./Logo";

//StyleSheet
import './scss/login.scss'

export default function Login() {
  return (
    <section className="login-section grid grid-cols-2">
      <Logo />

      <div>
        <img src={loginBanner} alt="" />
      </div>

      <article>
        <h1>Welcome!</h1>
        <p>Enter details to login.</p>
        <form className="form" action="">
          <input type="email" name="email" id="email" placeholder="Email" />

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
}
