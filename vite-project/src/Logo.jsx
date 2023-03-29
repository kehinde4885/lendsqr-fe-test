import union from "./assets/images/Union.svg";
import lendsqr from "./assets/images/lendsqr.svg";

export default function Logo() {
  return (
    <div className="logo flex">
      <img src={union} alt="" />
      <img src={lendsqr} alt="" />
    </div>
  );
}
