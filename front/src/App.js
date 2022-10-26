import React, { useEffect, useState } from "react";
import {
  BrowserRouter as Router,
  Link,
  Routes,
  Route,
} from "react-router-dom";
import { UsersRights } from "./components/admin/usersRights";
import { AddMusic } from "./components/admin/addMusic";
import { Home } from "./components/Home";
// import { AlbumLibrary } from "./components/albumLibrary/albumLibrary";
import { SignIn } from "./components/SignIn-SignUp/SignIn";
import { SignUp } from "./components/SignIn-SignUp/SignUp";
import instance from "./utils/instanceHttp";

function App() {
  const [isConnected, setIsConnected] = useState(!!localStorage.jwt);
  const [isAdmin, setIsAdmin] = useState(false);

  useEffect(() => {
    instance
      .get("/admin")
      .then((res) => {
        setIsAdmin(true)
      })
      .catch(err => {
        setIsAdmin(false)
        console.log(err.response.data)
      })
  }, [isConnected])

  const signOut = () => {
    instance.defaults.headers.common['authorization'] = 0;
    localStorage.removeItem('jwt');
    setIsConnected(false)
  }

  return (
    <Router>
      <nav>
        <ul>
          <li><Link to="/">Home</Link></li>
          {!isConnected
            ? <li><Link to="signIn">Sign in</Link></li> 
            : <li onClick={() => {signOut()}}>Sign out</li>
          }
          {
            isAdmin &&
            <ul>admin
              <li><Link to="admin/usersRights">Users Rights</Link></li>
              <li><Link to="admin/addMusic">add Music</Link></li>
            </ul>
          }
          
        </ul>
      </nav>
      {/* <AlbumLibrary /> */}
      <Routes>
        <Route index element={<Home />}/>
        <Route path="signIn" element={<SignIn setIsConnected={setIsConnected} />}/>
        <Route path="signUp" element={<SignUp />}/>
        <Route path="admin/usersRights" element={<UsersRights />}/>
        <Route path="admin/addMusic" element={<AddMusic />}/>
      </Routes>
    </Router>
  );
}

export default App;
