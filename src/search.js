import {useState, useContext} from "react";
import {ParentsData} from "./App";

function Search() {
    const childrenData = useContext(ParentsData)
    const [searchInput, setSearchInput] = useState('')


    const handleSearchItem = (e) =>{
        let value = e.toLowerCase()
        let result = []
        result = childrenData[0].filter(data => {
            return data.name.search(value) != -1
        })

        childrenData[1](result)
        console.log(value)

      // const arrayFilter = childrenData[0].filter(name => {})
      //
      //   console.log(arrayFilter)
      //
      //  return arrayFilter.length > 0 ? childrenData[1](arrayFilter) : childrenData[0]

    }

    return (
        <div className="input-group">
            <input type="text" className="form-control" value={searchInput} onChange={(e) => handleSearchItem(e.target.value)} placeholder="Search item name"/>

        </div>
    )
}

export default Search