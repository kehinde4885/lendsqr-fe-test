//Components
import Header from "./Header";
import Nav from "./Nav";
import Users from "./Users";
import UserDetails from "./UserDetails.jsx"

export default function Dashboard() {
  return (
    <section className="dashboard grid grid-cols-5">
      <Header />
      <Nav/>
      {/* <Users/> */}
      <UserDetails/>
    </section>
  );
}


