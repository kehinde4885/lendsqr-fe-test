import filter from "./assets/images/filter.svg";
import ham from "./assets/images/Vector-4.svg";

export default function Table() {
  return (
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
        <tr className="body-row">
          <td>Lendsqr</td>
          <td>Adedeji</td>
          <td>adedeji@lendsqr.com</td>
          <td>08078903721</td>
          <td>May 15, 2020 10:00AM</td>
          <td>
            <span className="inactive">Inactive</span>
          </td>
          <td className="button">
            <button>
              <img src={ham} alt="" />
            </button>
          </td>
        </tr>
        <tr className="body-row">
          <td>Lendsqr</td>
          <td>Adedeji</td>
          <td>adedeji@lendsqr.com</td>
          <td>08078903721</td>
          <td>May 15, 2020 10:00AM</td>
          <td>
            <span className="inactive">Inactive</span>
          </td>
          <td className="button">
            <button>
              <img src={ham} alt="" />
            </button>
          </td>
        </tr>
        <tr className="body-row">
          <td>Lendsqr</td>
          <td>Adedeji</td>
          <td>adedeji@lendsqr.com</td>
          <td>08078903721</td>
          <td>May 15, 2020 10:00AM</td>
          <td>
            <span className="inactive">Inactive</span>
          </td>
          <td className="button">
            <button>
              <img src={ham} alt="" />
            </button>
          </td>
        </tr>
        <tr className="body-row">
          <td>Lendsqr</td>
          <td>Adedeji</td>
          <td>adedeji@lendsqr.com</td>
          <td>08078903721</td>
          <td>May 15, 2020 10:00AM</td>
          <td>
            <span className="inactive">Inactive</span>
          </td>
          <td className="button">
            <button>
              <img src={ham} alt="" />
            </button>
          </td>
        </tr>
      </tbody>
    </table>
  );
}
