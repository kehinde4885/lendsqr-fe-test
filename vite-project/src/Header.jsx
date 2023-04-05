//Component
import Logo from "./Logo";

//Assets
import bell from './assets/images/bell.png'
import deji from './assets/images/deji.svg'
import search from './assets/images/search.svg'
import dropdown from './assets/images/dropdown.svg'


//Style Sheets
import './scss/header.scss'

export default function Header({username}) {
  return (
    <header>
      <Logo />

      <div className="form">
        <input
          type="text"
          name="search"
          id="search"
          placeholder="Search for anything"
        />
        <button className="search">
          <img src={search} alt="" />
        </button>
      </div>

      <div className="user-btns">
        <a href="">Docs</a>
        <img className="bell" src={bell} alt="" />
        <div className="user-pic">
          <img src={deji} alt="" />
          <p>{`Jonathan`}</p>
          <button>
            <img src={dropdown} alt="" />
          </button>
        </div>
      </div>
    </header>
    
  );
}
