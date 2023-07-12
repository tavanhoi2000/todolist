import './App.css';
import Title from "./title";
import ListItem from "./listItem";
import Search from "./search";
import AddItem from "./addItem";
import {useState, createContext, useEffect} from "react";
import axios from "axios";

export const ParentsData = createContext()

function App() {
  const [listItem, setListItem] = useState([])
  const url = 'https://jsonplaceholder.typicode.com/users/'


  useEffect( () => {
    const getData = async () => {
      const response = await axios.get(url)
      const data = response.data
      setListItem(data)
    }

    getData()

    return () => false
  },[])

  return (
      <ParentsData.Provider value={[listItem, setListItem]}>
        <div className="App">
          <div className="container">
            <Title/>

            <div className="row">
              <div className="col-xs-4 col-sm-4 col-md-4 col-lg-4">
                <Search />
              </div>
              <div className="col-xs-3 col-sm-3 col-md-3 col-lg-3">

              </div>
              <div className="col-xs-5 col-sm-5 col-md-5 col-lg-5 marginB10">

                <AddItem />
              </div>
            </div>


            <ListItem />
          </div>
        </div>
      </ParentsData.Provider>

  );
}

export default App;
