//StyleSheet
import "./scss/users.scss";

//Assets
import users from "./assets/images/np_users.svg";
import loans from "./assets/images/np_loan.svg";
import savings from "./assets/images/np_money.svg";
import userActive from "./assets/images/np_users_1.svg";

//components
import Table from "./Table";

export default function Users() {
  return (
    <main className="users">
      <h1>Users</h1>
      <div className="user-details">
        <div className="detail-box">
          <div className="img">
            <img src={users} alt="" />
          </div>
          <h2>USERS</h2>
          <p>2,453</p>
        </div>

        <div className="detail-box">
          <div className="img1">
            <img src={userActive} alt="" />
          </div>
          <h2>ACTIVE USERS</h2>
          <p>2,453</p>
        </div>

        <div className="detail-box">
          <div className="img2">
            <img src={loans} alt="" />
          </div>
          <h2>USERS WITH LOANS</h2>
          <p>12,453</p>
        </div>

        <div className="detail-box">
          <div className="img3">
            <img src={savings} alt="" />
          </div>
          <h2>USERS WITH SAVINGS</h2>
          <p>102,453</p>
        </div>
      </div>

      <Table />
    </main>
  );
}
