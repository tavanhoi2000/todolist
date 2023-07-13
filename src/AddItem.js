import { useRef, useState, useContext } from "react";
import { UsersData } from "./App";
import { addUser } from "./services";

function AddItem() {
  const listUser = useContext(UsersData);
  const [inputValue, setInputValue] = useState("");
  const refValue = useRef();
  const [error, setError] = useState(null);

  async function handleSubmit(name) {
    if (name !== "") {
      const res = await addUser(name);
      const newUser = res.data;
      listUser[1]([...listUser[0], newUser]);
      setError(null);
    } else {
      setError("Không thể để trống trường này ");
    }
    refValue.current.focus();
    setInputValue("");
  }
  return (
    <form className="form-inline">
      <div className="form-group">
        <input
          type="text"
          ref={refValue}
          value={inputValue}
          onChange={(e) => setInputValue(e.target.value)}
          className="form-control"
          placeholder="Item Name"
        />

        <button
          type="button"
          onClick={() => handleSubmit(inputValue)}
          className="btn btn-primary"
        >
          Add
        </button>
        <button
          type="button"
          onClick={() => setInputValue("")}
          className="btn btn-default"
        >
          Cancel
        </button>
        {error && (
          <p className="text-danger" style={{ textAlign: "left" }}>
            {error}
          </p>
        )}
      </div>
    </form>
  );
}

export default AddItem;
