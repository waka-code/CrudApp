import "./App.css";
import { useState } from "react";
import analytics from "./firebaseConfig";
import Login from "./componentes/Login";
import Naybar from "./componentes/Naybar";
import { getAuth, onAuthStateChanged } from "firebase/auth";
const auth = getAuth();

function App() {
  const [userFirebase, setUserFirebase] = useState(null);
  //user_login
  onAuthStateChanged(auth, (usuario) => {
    if (usuario) {
      setUserFirebase(usuario);
    } else {
      setUserFirebase(null);
    }
  });

  return (
    <div className="App">
      {userFirebase ? <Naybar userFirebase={userFirebase} /> : <Login />}
    </div>
  );
}

export default App;
