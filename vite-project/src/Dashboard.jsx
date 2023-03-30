//Components
import Header from "./Header";
import Nav from "./Nav";
import Users from "./Users";

export default function Dashboard() {
  return (
    <section className="dashboard grid grid-cols-5">
      <Header />
      <Nav/>
      <Users/>
    </section>
  );
}


