import union from "./assets/images/Union.svg";
import lendsqr from "./assets/images/lendsqr.svg";

import './scss/logo.scss'

export default function Logo() {
  return (
    <div className="logo">
      <img src={union} alt="" />
      <img src={lendsqr} alt="" />
    </div>
  );
}
