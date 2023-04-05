//Components
import Header from "./Header";
import Nav from "./Nav";
import Users from "./Users";
import UserDetails from "./UserDetails.jsx";

import { Route, Routes, useLocation } from "react-router-dom";

export default function Dashboard() {

  let username = useLocation().state

  
  return (
    <section className="dashboard grid grid-cols-5">
      <Header username={username}/>
      <Nav />
      <Users/>
      {/* <Routes>
        <Route path="users" element={<Users />} />
        <Route path="users/:id" element={<UserDetails />} />
      </Routes> */}
    </section>
  );
}
