import './App.css';
import Title from "./title";
import ListItem from "./listItem";
import Search from "./search";
import Sort from "./sort";
import AddItem from "./addItem";
import {useState, createContext} from "react";

export const ArrayContext = createContext()

console.log(ArrayContext)

function App() {
  const [listItem, setListItem] = useState([])

  return (
      <ArrayContext.Provider value={[listItem, setListItem]}>
        <div className="App">
          <div className="container">
            <Title/>

            <div className="row">
              <div className="col-xs-4 col-sm-4 col-md-4 col-lg-4">
                <Search />
              </div>
              <div className="col-xs-3 col-sm-3 col-md-3 col-lg-3">
                <Sort />
              </div>
              <div className="col-xs-5 col-sm-5 col-md-5 col-lg-5 marginB10">

                <AddItem listItem={listItem} setListItem={setListItem}/>
              </div>
            </div>


            <ListItem />
          </div>
        </div>
      </ArrayContext.Provider>

  );
}

export default App;
