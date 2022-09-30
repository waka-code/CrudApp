import React from "react";
import { useState } from "react";
import styled from "styled-components";
import { v4 as uuidv4 } from "uuid";
import AddInfiUser from "./AddInfiUser";
import BoardsInfo from "./BoardsInfo";
import EditUserInfo from "./EditUserInfo";
import { getDatabase, ref, set } from "firebase/database";
const database = getDatabase();

const Datos = [
  {
    id: uuidv4(),
    name: "Louis",
    Email: "Shenryvladimil@gmail.com",
    Addres: "Invivienda",
    Phone: "8295041112",
  },
];

function Crud() {
  const [info, setInfo] = useState(Datos);
  const [editInfo, setEditInfo] = useState(false);
  const [currentInfo, setCurrentInfo] = useState({
    id: null,
    name: "",
    Email: "",
    Addres: "",
    Phone: "",
  });

  //EditInfoUser
  const editBoard = (user) => {
    setEditInfo(true);
    setCurrentInfo({
      id: user.id,
      name: user.name,
      Email: user.Email,
      Addres: user.Addres,
      Phone: user.Phone,
    });
  };

  //AddInfo
  const addInfo = (datos) => {
    datos.id = uuidv4();
    setInfo([...info, datos]);
  };

  //DelInfo
  const DelInfo = (id) => {
    setInfo(info.filter((user) => user.id !== id));
  };

  //updateInfo

  const updateInfo = (id, updateInfo) => {
    setEditInfo(false);
    setInfo(info.map((user) => (user.id === id ? updateInfo : user)));
  };

  return (
    <CrudCss>
      <div className="Crud">
        <h2>CRUD APP</h2>
        {editInfo ? (
          <EditUserInfo updateInfo={updateInfo} currentInfo={currentInfo} />
        ) : (
          <AddInfiUser addInfo={addInfo} />
        )}
        <BoardsInfo DelInfo={DelInfo} info={info} editBoard={editBoard} />
      </div>
    </CrudCss>
  );
}

const CrudCss = styled.div`
  .Crud {
    padding: 10px;
    font-family: "Poppins", sans-serif;
    height: auto;
    width: 95vw;
    h3 {
      font-size: 20px;
      margin: auto 10px;
      color: #0084ff;
      font-weight: 700;
    }
    h2 {
      font-size: 30px;
      margin: 10px;
    }
    .addInformation {
      display: grid;
      grid-template-columns: repeat(2, 1fr);
      gap: 10px;
      padding: 5px;
      margin: 5px;
      input {
        height: 7vh;
        border: none;
        width: 80%;
        padding: 5px;
        outline: none;
        background-color: #e3ecf3;
        font-size: 17px;
      }
      button {
        width: 20vw;
        height: 5vh;
        border-radius: 5px;
        border: none;
        font-size: 15px;
        cursor: pointer;
        color: #ffffff;
        background-color: #679cff;
      }
    }
    .informtion {
      width: 100%;
      margin: 20px auto;
      border: 2px solid #bdcbe6;

      .edit {
        width: 5vw;
        height: 5vh;
        border-radius: 5px;
        border: none;
        font-size: 15px;
        cursor: pointer;
        color: #ffffff;
        background-color: #679cff;
      }
      .del {
        width: 5vw;
        height: 5vh;
        border-radius: 5px;
        border: none;
        font-size: 15px;
        cursor: pointer;
        color: #ffffff;
        background-color: #ff2c2c;
        margin: 0 10px;
      }
      td {
        display: flex;
        justify-content: center;
        padding: 5px;
        border: 2px solid #bdcbe6;
      }
      th {
        border: 2px solid #bdcbe6;
        padding: 5px;
      }
    }
  }
`;

export default Crud;
