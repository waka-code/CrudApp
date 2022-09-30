import React from "react";
import styled from "styled-components";
import { async } from "@firebase/util";
import analytics from "../firebaseConfig";
import {
  getAuth,
  createUserWithEmailAndPassword,
  signInWithEmailAndPassword,
} from "firebase/auth";
import { getFirestore, doc, setDoc } from "firebase/firestore";
import { useState } from "react";
const auth = getAuth();
const firestore = getFirestore();

function Login() {
  const [registrar, setRegistar] = useState(false);

  //registro
  async function SingUP(inputEmail, inputPassword) {
    try {
      const infoUser = await createUserWithEmailAndPassword(
        auth,
        inputEmail,
        inputPassword
      ).then((usuario) => {
        return usuario;
      });
      //db_firebase
      const docuRef = doc(firestore, `NewUser/${infoUser.user.uid}`);
      setDoc(docuRef, { Email: inputEmail, Pass: inputPassword });
    } catch {
      alert("Email existente");
    }
  }

  const submitHandler = (e) => {
    e.preventDefault();
    const inputEmail = e.target.elements.inputEmail.value;
    const inputPassword = e.target.elements.inputPassword.value;
    const inputBtn = e.target.elements.inputBtn.value;

    //registro
    if (registrar) {
      SingUP(inputEmail, inputPassword, inputBtn);
    } else {
      //login
      signInWithEmailAndPassword(auth, inputEmail, inputPassword);
    }
  };

  return (
    <LoginCss>
      <div className="login">
        <form className="login_singIn" onSubmit={submitHandler}>
          <h1>{registrar ? "Sing up" : "Login"}</h1>

          <div>
            <div>
              <input
                type="text"
                className="form-control-plaintext input"
                id="inputEmail"
                placeholder="Email"
                required
              />
            </div>
          </div>
          <div>
            <div>
              <input
                type="password"
                className="form-control input"
                id="inputPassword"
                placeholder="Password"
                required
              />
            </div>
          </div>
          <input
            type="submit"
            id="inputBtn"
            className="btn btn-primary"
            value={registrar ? "Sing up" : "Login"}
          />
          <p className="crearlogin">
            {" "}
            {registrar ? "Dont have an account?" : "Return to log"}{" "}
            <a href="#" onClick={() => setRegistar(!registrar)}>
              {registrar ? "Im already registered" : "Click here to sign up"}
            </a>
          </p>
          <p className="crearlogin">©2022 WakaCode. All rights reserved</p>
        </form>
      </div>
    </LoginCss>
  );
}

const LoginCss = styled.div`
  .login {
    width: 30vw;
    padding: 20px;
    position: relative;
    top: 150px;
    /* From https://css.glass */
    border-radius: 16px;
    box-shadow: 0 4px 30px #00000034;
    backdrop-filter: blur(5px);
    -webkit-backdrop-filter: blur(5px);
    border: 1px solid rgba(255, 255, 255, 0.3);
    .login_singIn {
      text-align: center;
      line-height: 38px;
      h1 {
        color: rgba(39, 39, 39, 0.979);
      }
      .input {
        height: 7vh;
        border-radius: 10px;
        width: 22vw;
        margin: 15px auto;
        padding: 10px;
        outline: none;
        border: none;
        font-size: 15px;
      }
      .btn {
        width: 10vw;
        height: 5vh;
        cursor: pointer;
        border: none;
        background: rgba(255, 255, 255, 0.2);
        color: #000;
      }
      .btn:hover {
        background: rgba(48, 130, 252, 0.54);
        color: #fff;
        border-radius: 5px;
      }
    }
  }
`;

export default Login;
