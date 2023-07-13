import "./App.css";
import Title from "./Title";
import ListItem from "./ListItem";
import Search from "./Search";
import AddItem from "./AddItem";
import { useState, createContext } from "react";

export const UsersData = createContext();

function App() {
  const [listUser, setListUser] = useState([]);

  return (
    <UsersData.Provider value={[listUser, setListUser]}>
      <div className="app">
        <div className="container">
          <Title />

          <div className="row">
            <div className="col-xs-4 col-sm-4 col-md-4 col-lg-4">
              <Search />
            </div>
            <div className="col-xs-3 col-sm-3 col-md-3 col-lg-3"></div>
            <div className="col-xs-5 col-sm-5 col-md-5 col-lg-5 marginB10">
              <AddItem />
            </div>
          </div>

          <ListItem />
        </div>
      </div>
    </UsersData.Provider>
  );
}

export default App;
