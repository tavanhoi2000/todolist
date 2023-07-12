import {useRef, useState, useContext} from "react";
import {ParentsData} from "./App";
// import Form from "./form";
import axios from "axios";

function AddItem() {

    const childrenData = useContext(ParentsData)
    const [inputValue, setInputValue] = useState('')
    const refValue = useRef()
    const [error, setError] = useState(null)
    const url = 'https://jsonplaceholder.typicode.com/users/'

    const handleSubmit = async (name) => {
        if(name !== '') {
            let newData = await axios.post(url, {name: name})
            childrenData[1]([...childrenData[0], newData.data])
        } else {
            setError('Không thể để trống trường này ')
        }
        refValue.current.focus()
        setInputValue('')
    }
    return (
        <form className="form-inline">
            <div className="form-group">
                <input type="text" ref={refValue} value={inputValue} onChange={(e) => setInputValue(e.target.value)}
                       className="form-control" placeholder="Item Name"/>

                <button type="button" onClick={() => handleSubmit(inputValue)} className="btn btn-primary">Add</button>
                <button type="button" onClick={() => setInputValue('')} className="btn btn-default">Cancel</button>
                {
                    error && <p className="text-danger" style={{textAlign: 'left'}}>{error}</p>
                }
            </div>

        </form>
    )
}

export default AddItem