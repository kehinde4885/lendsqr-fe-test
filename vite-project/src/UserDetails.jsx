import Backarrow from "./assets/images/Vector.svg";

import star from "./assets/images/Vector-1.svg";
import profile from "./assets/images/np_user.svg";
import starvoid from "./assets/images/star-void.svg";

import "./scss/userdetails.scss";
import { useEffect, useState } from "react";
import { Link, useLocation } from "react-router-dom";

export default function UserDetails() {
  let location = useLocation();
  let [loading, isLoaded] = useState(false);
  let id = location.state;

  useEffect(() => {
    fetch(
      `https://6270020422c706a0ae70b72c.mockapi.io/lendsqr/api/v1/users/${id}`
    )
      .then((res) => res.json())
      .then((data) => {
        window.localStorage.setItem("user", JSON.stringify(data));
        isLoaded(true);
      });
  }, []);

  return loading && <Details />;

  function Details() {
    let user = JSON.parse(localStorage.getItem("user"));

    let socials = user.socials;

    function getSocials() {
      let array = [];
      for (const key in socials) {
        array.push(
          <div key={key}>
            <p className="info uppercase">{key}</p>
            <p className="value">{socials[key]}</p>
          </div>
        );
      }
      return array;
    }

    return (
      <main className="user-details">
        <Link to="../users">
          <button className="back-btn">
            <span>
              <img src={Backarrow} alt="" />
            </span>
            <span>Back to Users</span>
          </button>
        </Link>

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
                  <img src={user.profile.avatar} alt="" />
                </div>
                <div>
                  <h2>{`${user.profile.firstName} ${user.profile.lastName}`}</h2>
                  <p>{user.accountNumber}</p>
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
                <h2>₦{user.accountBalance}</h2>
                <p>{user.profile.bvn}/Providus Bank</p>
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
                  <p className="info">FULL NAME</p>
                  <p className="value">{`${user.profile.firstName} ${user.profile.lastName}`}</p>
                </div>
                <div>
                  <p className="info">PHONE NUMBER</p>
                  <p className="value">{user.profile.phoneNumber}</p>
                </div>
                <div>
                  <p className="info">EMAIL ADDRESS</p>
                  <p className="value">{user.email}</p>
                </div>
                <div>
                  <p className="info">BVN</p>
                  <p className="value">{user.profile.bvn}</p>
                </div>
                <div>
                  <p className="info">GENDER</p>
                  <p className="value">{user.profile.gender}</p>
                </div>
                <div>
                  <p className="info">MARITAL STATUS</p>
                  <p className="value">
                    {user.profile.maritalStatus
                      ? user.profile.maritalStatus
                      : "Single"}
                  </p>
                </div>
                <div>
                  <p className="info">CHILDREN</p>
                  <p className="value">
                    {user.profile.children ? user.profile.children : "None"}
                  </p>
                </div>
                <div>
                  <p className="info">TYPE OF RESIDENCE</p>
                  <p className="value">{user.profile.address}</p>
                </div>
              </div>
            </div>
            <div className="info-grp">
              <h3>Education and Employment</h3>
              <div className="info-row">
                <div>
                  <p className="info">LEVEL OF EDUCATION</p>
                  <p className="value">{user.education.level}</p>
                </div>
                <div>
                  <p className="info">EMPLOYMENT STATUS</p>
                  <p className="value">{user.education.employmentStatus}</p>
                </div>
                <div>
                  <p className="info">SECTOR OF EMPLOYMENT</p>
                  <p className="value">{user.education.sector}</p>
                </div>
                <div>
                  <p className="info">DURATION OF EMPLOYMENT</p>
                  <p className="value">{user.education.duration}</p>
                </div>
                <div>
                  <p className="info">OFFICE EMAIL</p>
                  <p className="value">{user.education.officeEmail}</p>
                </div>
                <div>
                  <p className="info">MONTHLY INCOME</p>
                  <p className="value">{`₦${user.education.monthlyIncome[0]} - ₦${user.education.monthlyIncome[1]} `}</p>
                </div>
                <div>
                  <p className="info">lOAN REPAYMENT</p>
                  <p className="value">{`₦${user.education.loanRepayment}`} </p>
                </div>
              </div>
            </div>
            <div className="info-grp">
              <h3>Socials</h3>
              <div className="info-row">{getSocials()}</div>
            </div>
            <div className="info-grp">
              <h3>Guarantor</h3>
              <div className="info-row">
                <div>
                  <p className="info">FULL NAME</p>
                  <p className="value">{`${user.guarantor.firstName} ${user.guarantor.lastName}`}</p>
                </div>
                <div>
                  <p className="info">PHONE NUMBER</p>
                  <p className="value">{user.guarantor.phoneNumber}</p>
                </div>
                <div>
                  <p className="info">EMAIL ADDRESS</p>
                  <p className="value">
                    {user.guarantor.email ? user.guarantor.email : "NA"}
                  </p>
                </div>
                <div>
                  <p className="info">RELATIONSHIP</p>
                  <p className="value">
                    {user.guarantor.relationship
                      ? user.guarantor.relationship
                      : "NA"}
                  </p>
                </div>
              </div>
            </div>
          </div>
        </article>
      </main>
    );
  }
}
