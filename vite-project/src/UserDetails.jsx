import Backarrow from "./assets/images/Vector.svg";

import star from "./assets/images/Vector-1.svg";
import profile from "./assets/images/np_user.svg";
import starvoid from "./assets/images/star-void.svg";

import "./scss/userdetails.scss";

export default function UserDetails() {
  return (
    <main className="user-details">
      <button className="back-btn">
        <span>
          <img src={Backarrow} alt="" />
        </span>
        <span>Back to Users</span>
      </button>

      <div className="user-ctrls-sect">
        <h1 className="sect-title">User Details</h1>
        <div className="user-ctrls">
          <button className="blk">BLACKLIST USER</button>
          <button className="act">ACTIVATE USER</button>
        </div>
      </div>

      <article>
        <div className="personal-details-box">
          <div className="personal-details">
            <div className="personal-details-user">
              <div className="profile-pic-box">
                <img src={profile} alt="" />
              </div>
              <div>
                <h2>Grace Effiom</h2>
                <p>LSQFf587g90</p>
              </div>
            </div>
            <div className="tier-info">
              <p>User's Tier</p>
              <span>
                <img src={star} alt="" />
                <img src={starvoid} alt="" />
                <img src={starvoid} alt="" />
              </span>
            </div>
            <div className="acct-info">
              <h2>₦200,000.00</h2>
              <p>9912345678/Providus Bank</p>
            </div>
          </div>
          <div className="nav-btn">
            <button className="active">General Details</button>
            <button>Documents</button>
            <button>Bank Details</button>
            <button>Loans</button>
            <button>Savings</button>
            <button>App and System</button>
          </div>
        </div>

        <div className="more-details-box">
          <div className="info-grp">
            <h3>Personal Information</h3>
            <div className="info-row">
              <div>
                <p className="info">LEVEL OF EDUCATION</p>
                <p className="value">B.Sc</p>
              </div>
              <div>
                <p className="info">EMPLOYMENT STATUS</p>
                <p className="value">Employed</p>
              </div>
              <div>
                <p className="info">SECTOR OF EMPLOYMENT</p>
                <p className="value">FinTech</p>
              </div>
              <div>
                <p className="info">DURATION OF EMPLOYMENT</p>
                <p className="value">2 years</p>
              </div>
              <div>
                <p className="info">OFFICE EMAIL</p>
                <p className="value">grace@lendsqr.com</p>
              </div>
              <div>
                <p className="info">MONTHLY INCOME</p>
                <p className="value">₦200,000.00 - ₦400,000.00</p>
              </div>
              <div>
                <p className="info">lOAN REPAYMENT</p>
                <p className="value">₦40,000</p>
              </div>
            </div>
          </div>
          <div className="info-grp">
            <h3>Personal Information</h3>
            <div className="info-row">
              <div>
                <p className="info">LEVEL OF EDUCATION</p>
                <p className="value">B.Sc</p>
              </div>
              <div>
                <p className="info">EMPLOYMENT STATUS</p>
                <p className="value">Employed</p>
              </div>
              <div>
                <p className="info">SECTOR OF EMPLOYMENT</p>
                <p className="value">FinTech</p>
              </div>
              <div>
                <p className="info">DURATION OF EMPLOYMENT</p>
                <p className="value">2 years</p>
              </div>
              <div>
                <p className="info">OFFICE EMAIL</p>
                <p className="value">grace@lendsqr.com</p>
              </div>
              <div>
                <p className="info">MONTHLY INCOME</p>
                <p className="value">₦200,000.00 - ₦400,000.00</p>
              </div>
              <div>
                <p className="info">lOAN REPAYMENT</p>
                <p className="value">₦40,000</p>
              </div>
            </div>
          </div>
        </div>
      </article>
    </main>
  );
}
