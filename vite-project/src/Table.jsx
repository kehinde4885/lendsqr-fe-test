import filter from "./assets/images/filter.svg";
import ham from "./assets/images/Vector-4.svg";
import next from "./assets/images/np_next.svg";
import view from "./assets/images/np_view.svg";
import blacklist from "./assets/images/blacklist.png";
import activate from "./assets/images/Vector-2.svg";

import "./scss/table.scss";

import { useEffect, useState } from "react";
import ReactPaginate from "react-paginate";

export default function UsersTable(props) {
  const { users } = props;

  const [itemsPerPage, changePaginate] = useState(10);

  const [itemOffset, setItemOffset] = useState(0);
  const endOffset = itemOffset + itemsPerPage;
  //console.log(`Loading items from ${itemOffset} to ${endOffset}`);
  const currentItems = users.slice(itemOffset, endOffset);
  const pageCount = Math.ceil(users.length / itemsPerPage);

  // Invoke when user click to request another page.
  const handlePageClick = (event) => {
    const newOffset = (event.selected * itemsPerPage) % users.length;
    console.log(
      `User requested page number ${event.selected}, which is offset ${newOffset}`
    );
    setItemOffset(newOffset);
  };

  function handleChange(e) {
    changePaginate(e.target.value);
  }

  return (
    <div className="container">
      <table className="user-table">
        <thead>
          <tr className="head-row">
            <th>
              <span className="text">ORGANISATION</span>
              <button>
                <img src={filter} alt="" />
              </button>
            </th>
            <th>
              <span className="text">USERNAME</span>
              <button>
                <img src={filter} alt="" />
              </button>
            </th>
            <th>
              <span className="text">EMAIL</span>
              <button>
                <img src={filter} alt="" />
              </button>
            </th>
            <th>
              <span className="text">PHONE NUMBER</span>
              <button>
                <img src={filter} alt="" />
              </button>
            </th>
            <th>
              <span className="text">DATE JOINED</span>
              <button>
                <img src={filter} alt="" />
              </button>
            </th>
            <th>
              <span className="text">STATUS</span>
              <button>
                <img src={filter} alt="" />
              </button>
            </th>
          </tr>
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

      {/* <aside className="filt-modal">
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
      </aside> */}
    </div>
  );
}

function TableRow(props) {
  const { currentItems } = props;

  return currentItems.map((user, index) => {
    return (
      <tr key={index} className="body-row z-1">
        <td>{user.orgName}</td>
        <td>{user.userName}</td>
        <td>{user.email}</td>
        <td>{user.phoneNumber}</td>
        <td>{userCreatedAt(user.createdAt)}</td>
        <td>
          <span className="inactive">Inactive</span>
        </td>
        <td className="ham-button">
          <button className="button-img">
            <img src={ham} alt="" />
          </button>
          {/* <div className="button-modal">
                <button>
                  <span>
                    <img src={view} alt="" />
                  </span>
                  <span>View Details</span>
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
              </div> */}
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
