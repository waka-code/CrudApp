import React from "react";
import styled from "styled-components";
import Crud from "./Crud";
import CrudAbout from "./CrudAbout";
import { BrowserRouter, Routes, Route, NavLink } from "react-router-dom";
import analytics from "../firebaseConfig";
import { getAuth, signOut } from "firebase/auth";
import { async } from "@firebase/util";
const auth = getAuth();

function Naybar(props) {
  return (
    <NavCss>
      <div className="nav">
        <BrowserRouter>
          <nav>
            <ul>
              <NavLink to="/*" className="navlink">
                <li>Home</li>
              </NavLink>
              <NavLink to="/About" className="navlink">
                <li>About</li>
              </NavLink>
            </ul>
            <button
              onClick={() => {
                signOut(auth);
              }}
            >
              cerrar seccion
            </button>
          </nav>
          <Routes>
            <Route
              exact
              path="/*"
              element={<Crud userFirebase={props.userFirebase} />}
            />
            <Route exact path="/About" element={<CrudAbout />} />
          </Routes>
        </BrowserRouter>
      </div>
    </NavCss>
  );
}
const NavCss = styled.div`
  .nav {
    background-color: #fff;
    height: auto;
    width: 95vw;
    nav {
      display: flex;
      justify-content: space-around;
      padding: 5px;
      height: 10vh;
      align-items: center;
      font-size: 25px;
      width: 100%;
      border-bottom: 2px solid #bdbdbd;
      ul {
        display: flex;
        justify-content: space-around;
        width: 20vw;
        li {
          list-style: none;
        }
      }
      .navlink {
        text-decoration: none;
        color: #000;
      }
      button {
        width: 10vw;
        height: 5vh;
        border-radius: 5px;
        border: none;
        font-size: 15px;
        cursor: pointer;
        color: #ffffff;
        background-color: #679cff;
      }
      button:hover {
        color: #000000;
      }
    }
  }
`;

export default Naybar;
