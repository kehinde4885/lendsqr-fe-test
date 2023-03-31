//StyleSheet
import "./scss/users.scss";

//Assets
import users from "./assets/images/np_users.svg";
import loans from "./assets/images/np_loan.svg";
import savings from "./assets/images/np_money.svg";
import userActive from "./assets/images/np_users_1.svg";

//components
import UsersTable from "./Table";
import { DetailBox } from "./DetailBox";

import { useState } from "react";
import { useEffect } from "react";

export default function Users() {
  const [usersList, editUsers] = useState([]);

  useEffect(function () {
    fetch("https://6270020422c706a0ae70b72c.mockapi.io/lendsqr/api/v1/users")
      .then((res) => res.json())
      .then((data) => editUsers(data));
  }, []);

  return (
    <main className="users">
      <h1 className="sect-title">Users</h1>
      <div className="users-details">
        <DetailBox img={users} text="USERS" func={() => usersList.length} />
        <DetailBox img={userActive} text="ACTIVE USERS" func={getActiveUsers} />
        <DetailBox img={loans} text="USERS WITH LOANS" func={getLoansUsers} />
        <DetailBox
          img={savings}
          text="USERS WITH SAVINGS"
          func={getSavingsUsers}
        />
      </div>

      <UsersTable users={usersList} />
    </main>
  );

  function getActiveUsers() {
    return usersList.filter((user) => {
      let userYear = new Date(user.lastActiveDate).getFullYear();
      let currentYear = new Date().getFullYear();

      if (userYear < currentYear) {
        return user;
      } else {
        //console.log("ninf");
      }
    }).length;
  }

  function getSavingsUsers() {
    return usersList.filter((user) => {
      let savings = user.accountBalance;

      if (savings > 0) {
        return user;
      }
    }).length;
  }

  function getLoansUsers() {
    return usersList.filter((user) => {
      let loans = user.education.loanRepayment;

      if (loans > 0) {
        return user;
      }
    }).length;
  }
}
