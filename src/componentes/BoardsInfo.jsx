import React from "react";

function BoardsInfo(props) {
  return (
    <>
      <table className="informtion">
        <thead>
          <tr>
            <th>Name</th>
            <th>Email</th>
            <th>Addres</th>
            <th>Phone</th>
            <th>Action</th>
          </tr>
        </thead>
        <tbody>
          {props.info.length === 0 ? (
            <p style={{ textAlign: "center" }}>Non-existing data</p>
          ) : (
            props.info.map((user) => {
              return (
                <tr key={user.id}>
                  <th>{user.name}</th>
                  <th>{user.Email}</th>
                  <th>{user.Addres}</th>
                  <th>{user.Phone}</th>
                  <td>
                    <button
                      className="edit"
                      onClick={() => {
                        props.editBoard(user);
                      }}
                    >
                      Edit
                    </button>
                    <button
                      className="del"
                      onClick={() => {
                        props.DelInfo(user.id);
                      }}
                    >
                      Del
                    </button>
                  </td>
                </tr>
              );
            })
          )}
        </tbody>
      </table>
    </>
  );
}

export default BoardsInfo;
