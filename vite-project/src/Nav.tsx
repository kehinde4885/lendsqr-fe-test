//Images Import
import users from "./assets/images/users.svg";
import organisation from "./assets/images/organisation.svg";
import arrowDown from "./assets/images/arrowDown.svg";
import dashboard from "./assets/images/dashboard.svg";
import guarantors from "./assets/images/guarantors.svg";
import loans from "./assets/images/loans.svg";
import decisionModels from "./assets/images/decisionModels.svg";
import savings from "./assets/images/savings1.svg";
import loanRequests from "./assets/images/loanrequest.svg";
import whitelist from "./assets/images/whitelist.svg";
import karma from "./assets/images/karma.svg";

import savingsProduct from "./assets/images/savings2.svg";
import feesCharges from "./assets/images/fees.svg";
import transactions from "./assets/images/transactions.svg";
import services from "./assets/images/services.svg";
import serviceAccount from "./assets/images/serviceAcct.svg";
import settlements from "./assets/images/scroll.svg";
import reports from "./assets/images/reports.svg";

import preferences from "./assets/images/preferences.svg";
import pricing from "./assets/images/badge-percent.svg";
import audit from "./assets/images/logs.svg";

//StyleSheets
import "./scss/nav.scss";
import { Link } from "react-router-dom";

let customersOptions = [
  { Users: users },
  { Guarantors: guarantors },
  { Loans: loans },
  { "Decision Models": decisionModels },
  { Savings: savings },
  { "Loan Requests": loanRequests },
  { Whitelist: whitelist },
  { Karma: karma },
];

let buisnessOptions = [
  { Organization: organisation },
  { "Loan Products": loanRequests },
  { "Savings Products": savingsProduct },
  { "Fees and Charges": feesCharges },
  { Transactions: transactions },
  { Services: services },
  { "Service Account": serviceAccount },
  { Settlements: settlements },
  { Reports: reports },
];

let settingsOptions = [
  { Preferences: preferences },
  { "Fees and Pricing": pricing },
  { "Audit Logs": audit },
];

export default function Nav() {
  return (
    <nav className="nav">
      <ul>
        <li className="org_switch">
          <span className="img">
            <img src={organisation} alt="" />
          </span>
          <span>Switch Organization</span>
          <span>
            <img src={arrowDown} alt="" />
          </span>
        </li>
        <li className="option dash-btn">
          <span className="img">
            <img src={dashboard} alt="" />
          </span>
          <span>Dashboard</span>
        </li>
        <ul className="opt-grp">
          <p className="opt-grp-title">CUSTOMERS</p>
          {customersOptions.map((option) => {
            for (const property in option) {
              return (
                <Link key={property} to="users">
                  <li
                    onClick={showActiveLink}
                    
                    className="option"
                  >
                    <span className="img">
                      <img src={option[property]} alt="" />
                    </span>
                    <span>{property}</span>
                  </li>
                </Link>
              );
            }
          })}
        </ul>
        <ul className="opt-grp">
          <p className="opt-grp-title">BUISINESSES</p>
          <ul>
            {buisnessOptions.map((option) => {
              for (const property in option) {
                return (
                  <li key={property} className="option">
                    <span className="img">
                      <img src={option[property]} alt="" />
                    </span>
                    <span>{property}</span>
                  </li>
                );
              }
            })}
          </ul>
        </ul>
        <ul className="opt-grp">
          <p className="opt-grp-title">SETTINGS</p>
          <ul>
            {settingsOptions.map((option) => {
              for (const property in option) {
                return (
                  <li key={property} className="option">
                    <span className="img">
                      <img src={option[property]} alt="" />
                    </span>
                    <span>{property}</span>
                  </li>
                );
              }
            })}
          </ul>
        </ul>
      </ul>
    </nav>
  );

  function showActiveLink(event: React.MouseEvent<HTMLElement>) {
    console.log();

    let grandParent = event.currentTarget.parentElement.parentElement;

    if (grandParent.querySelector(".selected")) {
      grandParent.querySelector(".selected").classList.toggle("selected");
    }
    event.currentTarget.classList.add("selected");
  }
}
