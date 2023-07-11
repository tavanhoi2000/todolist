import {useState, useContext} from "react";
import {ArrayContext} from "./App";

function Search() {
    const Array = useContext(ArrayContext)

    const [searchInput, setSearchInput] = useState('')

    const searchName = () => {
        const arrayFilter = Array[0].filter(name => name == searchInput)
        console.log(arrayFilter)
    }

    return (
        <div className="input-group">
            <input type="text" className="form-control" value={searchInput} onChange={(e) => setSearchInput(e.target.value)} placeholder="Search item name"/>
            <span className="input-group-btn">
                <button onClick={searchName} className="btn btn-info" type="button">Search</button>
            </span>

            <ul>
                {

                }
            </ul>
        </div>
    )
}

export default Search