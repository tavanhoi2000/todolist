import { useRef, useState, useContext, useEffect } from "react";
import { UsersData } from "./App.js";
import { getAllUsers, handleDelete, handleUpdate } from "./services.js";

function ListItem() {
  const listUser = useContext(UsersData);
  const refValue = useRef(null);
  const [isEdit, setEdit] = useState(false);
  const [newValue, setValue] = useState("");
  const [itemId, setItemId] = useState(null);

  const handleValue = async (id) => {
    setItemId(id);
    await setEdit(true);
  };

  useEffect(() => {
    async function getData() {
      const data = await getAllUsers();
      listUser[1](data.data);
    }
    getData();
    return () => false;
  }, []);

  async function handleDelete(id) {
    const newTodos = listUser[0].filter((item) => {
      return item.id !== id;
    });
    listUser[1](newTodos);
  }

  async function handleSaveUpdate(id, item) {
    const res = await handleUpdate(id, item);
    const data = (res.data.name = newValue);
    item.name = data;
    setValue("");
    setEdit(false);
  }

  const cancelDelete = () => {
    setItemId(null);
    setEdit(false);
    setValue(null);
  };

  return (
    <div className="panel panel-success">
      <div className="panel-heading">List Item</div>
      <table className="table table-hover">
        <thead>
          <tr>
            <th style={{ width: "10%" }} className="text-center">
              #
            </th>
            <th style={{ textAlign: "center" }}>Name</th>
            <th style={{ width: "15%" }} className="text-center">
              Level
            </th>
            <th style={{ width: "20%" }}>Action</th>
          </tr>
        </thead>
        <tbody>
          {listUser[0] &&
            listUser[0].map((item, index) => {
              return (
                <tr key={index}>
                  <td className="text-center">{index + 1}</td>
                  {isEdit ? (
                    <td>
                      {itemId === item.id ? (
                        <input
                          type="text"
                          className="form-control"
                          placeholder="Write new name you want updadte"
                          ref={refValue}
                          value={newValue}
                          onChange={(e) => setValue(e.target.value)}
                        />
                      ) : (
                        item.name
                      )}
                    </td>
                  ) : (
                    <td className="change-value">{item.name}</td>
                  )}
                  <td className="text-center">
                    <span className="label label-danger">High</span>
                  </td>
                  <td>
                    {isEdit && itemId === item.id ? (
                      <button
                        type="button"
                        onClick={(e) => cancelDelete(e)}
                        className="btn btn-default btn-sm"
                      >
                        Cancel
                      </button>
                    ) : (
                      <button
                        type="button"
                        onClick={() => handleValue(item.id)}
                        className="btn btn-warning btn-sm"
                      >
                        Edit
                      </button>
                    )}
                    <button
                      type="button"
                      onClick={() => handleDelete(item.id)}
                      className="btn btn-danger btn-sm"
                    >
                      Delete
                    </button>
                    {isEdit && itemId === item.id ? (
                      <button
                        type="button"
                        onClick={() => handleSaveUpdate(item.id, item)}
                        className="btn btn-success btn-sm"
                      >
                        Save
                      </button>
                    ) : (
                      ""
                    )}
                  </td>
                </tr>
              );
            })}
        </tbody>
      </table>
    </div>
  );
}

export default ListItem;
