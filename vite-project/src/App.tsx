//StyleSheet
import "./scss/App.scss";
import "./scss/login.scss";

//Assets

//Components
import Login from "./Login";

import Dashboard from "./Dashboard";

import { createContext, useContext, useState } from "react";

//React Router
import {
  Routes,
  Route,
  Link,
  useNavigate,
  useLocation,
  Navigate,
  Outlet,
} from "react-router-dom";

import { fakeAuthProvider } from "./auth";

export default function App() {
  return (
    <div className="App">
      <AuthProvider>
        <Routes>
          {/* <Route path="/" element={<Login useAuth={useAuth}/>} /> */}
          {/* <Route
            path="/dashboard/*"
            element={
              <RequireAuth>
                <Dashboard />
              </RequireAuth>
            }
          ></Route> */}
          <Route path="/*" element={<Dashboard />}></Route>
        </Routes>
      </AuthProvider>
    </div>
  );
}

interface AuthContextType {
  user: any;
  signin: (user: string, callback: VoidFunction) => void;
  signout: (callback: VoidFunction) => void;
}

let AuthContext = createContext<AuthContextType>(null!);

//Gets the Values in the AuthContext
function useAuth() {
  return useContext(AuthContext);
}

//This Sets a Context Provider with the
//SignIn and SignOut Function as Context
//Returns the Context with the Initial Children intact but serves
//the functions as context values so they can be accessed by all
//Children
function AuthProvider({ children }: { children: React.ReactNode }) {
  let [user, setUser] = useState<any>(null);

  let signin = (newUser: string, callback: VoidFunction) => {
    return fakeAuthProvider.signin(() => {
      setUser(newUser);
      callback();
    });
  };

  let signout = (callback: VoidFunction) => {
    return fakeAuthProvider.signout(() => {
      setUser(null);
      callback();
    });
  };

  let value = { user, signin, signout };

  return <AuthContext.Provider value={value}>{children}</AuthContext.Provider>;
}

function RequireAuth({ children }: { children: JSX.Element }) {
  let auth = useAuth();
  let location = useLocation();

  if (!auth.user) {
    // Redirect them to the /login page, but save the current location they were
    // trying to go to when they were redirected. This allows us to send them
    // along to that page after they login, which is a nicer user experience
    // than dropping them off on the home page.
    return <Navigate to="/" state={{ from: location }} replace />;
  }

  return children;
}
