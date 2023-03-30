import filter from "./assets/images/filter.svg";
import ham from "./assets/images/Vector-4.svg";
import next from "./assets/images/np_next.svg";
import view from "./assets/images/np_view.svg";
import blacklist from "./assets/images/blacklist.png";
import activate from "./assets/images/Vector-2.svg";

import "./scss/table.scss";

export default function UsersTable() {
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
          <tr className="body-row z-1">
            <td>Lendsqr</td>
            <td>Adedeji</td>
            <td>adedeji@lendsqr.com</td>
            <td>08078903721</td>
            <td>May 15, 2020 10:00AM</td>
            <td>
              <span className="inactive">Inactive</span>
            </td>
            <td className="ham-button">
              <button className="button-img">
                <img src={ham} alt="" />
              </button>
              <div className="button-modal">
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
              </div>
            </td>
          </tr>
        </tbody>
      </table>

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

      <form className="ctrl-btns">
        <div className="grpBy">
          <label>
            Showing{" "}
            <select name="" id="">
              <option>10</option>
              <option>25</option>
              <option>50</option>
              <option>100</option>
            </select>{" "}
            out of 100
          </label>
        </div>

        <div className="pgn">
          <button className="ctrl ctrl-left">
            <img className="disabled" src={next} alt="" />
          </button>
          <div className="pages">
            <button className="active">
              <span>1</span>
            </button>
            <button>
              <span>2</span>
            </button>
            <button>
              <span>3</span>
            </button>
          </div>
          <button className="ctrl ">
            <img src={next} alt="" />
          </button>
        </div>
      </form>
    </div>
  );
}
