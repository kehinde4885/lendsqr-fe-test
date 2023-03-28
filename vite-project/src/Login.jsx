import loginBanner from "./assets/images/pablo.svg";
import union from "./assets/images/Union.svg";
import lendsqr from "./assets/images/lendsqr.svg";

export default function Login() {
  return (
    <section className="login-section grid grid-cols-2">
      {/* <div className="logo flex">
        <img src={union} alt="" />
        <img src={lendsqr} alt="" />
      </div> */}

      <div>
        <img src={loginBanner} alt="" />
      </div>

      <article>
        <h1>Welcome!</h1>
        <p>Enter details to login.</p>
        <form className='form' action="">
            <input type="email" name="" id="" placeholder="Email"/>

            <input type="password" name="" id="" placeholder="Password"/>

            <button className="fgt-btn">FORGOT PASSWORD ?</button>

            <button className="login-btn">LOG IN</button>
        </form>
      </article>
    </section>
  );
}
