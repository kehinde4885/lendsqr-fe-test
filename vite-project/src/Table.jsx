import filter from "./assets/images/filter.svg";
import ham from "./assets/images/Vector-4.svg";
import view from "./assets/images/np_view.svg";
import blacklist from "./assets/images/blacklist.png";
import activate from "./assets/images/Vector-2.svg";

import "./scss/table.scss";

import { useReducer, useState } from "react";
import ReactPaginate from "react-paginate";
import {Link} from 'react-router-dom'
//REDUCER FUNCTION
function reducer(state, action) {}

export default function UsersTable(props) {
  const { users } = props;

  //Logic for Filter
  //Use state to Manage modal Visibility
  //Turn Modal into a Controlled Components to monitor Values
  //Pass Values to Reducer function when Filter button is Clicked
  const [view, changeView] = useReducer(reducer, users);

  const [filter, toFilter] = useState(false);

  //console.log(view);
  //console.log(filter);

  const [itemsPerPage, changePaginate] = useState(10);

  const [itemOffset, setItemOffset] = useState(0);

  const endOffset = itemOffset + itemsPerPage;
  //console.log(`Loading items from ${itemOffset} to ${endOffset}`);
  const currentItems = view.slice(itemOffset, endOffset);
  const pageCount = Math.ceil(view.length / itemsPerPage);

  let tableHeaders = [
    "ORGANISATION",
    "USERNAME",
    "EMAIL",
    "PHONE NUMBER",
    "DATE JOINED",
    "STATUS",
  ];

  return (
    <div
      onClick={(e) => {
        closeModals(e);
      }}
      className="container"
    >
      <table className="user-table">
        <thead>
          <HeaderRow headers={tableHeaders} func={toFilter} />
        </thead>
        <tbody>
          <TableRow currentItems={currentItems} />
        </tbody>
      </table>

      <Paginate
        handlePageClick={handlePageClick}
        handleChange={handleChange}
        length={users.length}
        pageCount={pageCount}
      />

      {filter && <FilterModal />}
    </div>
  );

  // Invoke when user click to request another page.
  function handlePageClick(event) {
    const newOffset = (event.selected * itemsPerPage) % users.length;
    // console.log(
    //   `User requested page number ${event.selected}, which is offset ${newOffset}`
    // );
    setItemOffset(newOffset);
  }

  function handleChange(e) {
    changePaginate(e.target.value);
  }

  function closeModals(e) {
    if (e.currentTarget.querySelector(".visible")) {
      let modals = e.currentTarget.querySelectorAll(".visible");
      let rows = e.currentTarget.querySelectorAll(".z-1");

      modals.forEach((element) => {
        element.classList.toggle("visible");
      });

      rows.forEach((element) => {
        element.classList.toggle("z-1");
      });
    }

    if (filter) {
      toFilter(false);
    }
  }
}

function HeaderRow({ headers, func }) {
  return (
    <tr className="head-row">
      {headers.map((heading) => (
        <th key={heading}>
          <span className="text">{heading}</span>
          <button onClick={headerClicked}>
            <img src={filter} alt="" />
          </button>
        </th>
      ))}
    </tr>
  );

  function headerClicked() {
    func((oldValue) => {
      return !oldValue;
    });
  }
}

function TableRow(props) {
  const { currentItems } = props;

  return currentItems.map((user, index) => {
    return (
      <tr key={index} className="body-row">
        <td>{user.orgName}</td>
        <td>{user.userName}</td>
        <td>{user.email}</td>
        <td>{user.phoneNumber}</td>
        <td>{userCreatedAt(user.createdAt)}</td>
        <td>{getUserStatus(user)}</td>
        <td className="ham-button">
          <button
            onClick={(e) => {
              moreOptions(e);
            }}
            className="button-img"
          >
            <img src={ham} alt="" />
          </button>
          <Modal id={user.id}/>
        </td>
      </tr>
    );
  });

  function userCreatedAt(date) {
    let dated = new Date(date);
    let month = dated.getMonth();
    let day = dated.getDate();
    let year = dated.getFullYear();
    let time = dated.toLocaleTimeString();

    let created = `${month} ${day} ${year} ${time}`;

    let createdAt = dated.toDateString();

    return createdAt;
  }

  function getUserStatus(user) {
    let userActiveYear = new Date(user.lastActiveDate).getFullYear();
    let createdYear = new Date(user.createdAt).getFullYear();

    let currentYear = new Date().getFullYear();

    if (userActiveYear < currentYear) {
      return <span className="active">Active</span>;
    } else if (createdYear > currentYear) {
      return <span className="inactive">Inactive</span>;
    } else {
      return <span className="pending">Pending</span>;
    }
  }

  function moreOptions(e) {
    let element = e.currentTarget;

    let rowParent = element.parentElement.parentElement;

    rowParent.classList.toggle("z-1");

    rowParent.querySelector("#button-modal").classList.toggle("visible");

    e.stopPropagation();
  }
}

function Paginate(props) {
  const { paginateView, handleChange, length, handlePageClick, pageCount } =
    props;

  return (
    <form className="ctrl-btns">
      <div className="grpBy">
        <label>
          Showing{" "}
          <select
            onChange={(e) => {
              handleChange(e);
            }}
            value={paginateView}
            name=""
            id=""
          >
            <option>10</option>
            <option>25</option>
            <option>50</option>
            <option>100</option>
          </select>{" "}
          out of {length}
        </label>
      </div>

      <ReactPaginate
        breakLabel="..."
        nextLabel=">"
        onPageChange={handlePageClick}
        pageRangeDisplayed={3}
        pageCount={pageCount}
        previousLabel="<"
        renderOnZeroPageCount={null}
        containerClassName="pgn"
        activeLinkClassName="active"
        previousClassName="ctrl"
        nextClassName="ctrl"
        disabledLinkClassName="disabled"
      />
    </form>
  );
}

function Modal({id}) {
  return (
    <div id="button-modal" className="button-modal">
      <button
        onClick={(e) => {
          modalClicked(e);
        }}
      >
        <Link to={`${id}`} state={id}>
        <span>
          <img src={view} alt="" />
        </span>
        <span>View Details</span>
        </Link>
      </button>
      <button>
        <span>
          <img src={blacklist} alt="" />
        </span>
        <span>Blacklist User</span>
      </button>
      <button>
        <span>
          <img src={activate} alt="" />
        </span>
        <span>Activate User</span>
      </button>
    </div>
  );

  function modalClicked(e) {
    console.log("modal Clicked");
  }
}

function FilterModal() {
  const [filterBy, changeFilter] = useState({
    org: "",
    user: "",
    email: "",
    date: "",
    phone: "",
    status: "",
  });


  return (
    <aside className="filt-modal">
      <form className="filt-form" action="">
        <label htmlFor="Organization">Organization</label>
        <select name="Organization" id="Organization"></select>
        <label htmlFor="username">Username</label>
        <input type="text" name="username" id="username" />
        <label htmlFor="email">Email</label>
        <input type="email" name="email" id="email" />
        <label htmlFor="date">Date</label>
        <input type="date" name="date" id="date" />
        <label htmlFor="phone">Phone Number</label>
        <input type="number" name="phone" id="phone" />
        <label htmlFor="status">Status</label>
        <select name="status" id="status"></select>

        <div className="modal-btn">
          <button className="reset">Reset</button>
          <button className="filter">Filter</button>
        </div>
      </form>
    </aside>
  );

  function handleChange(){

  }
}
