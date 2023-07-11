import {useRef, useState, useContext} from "react";
import { ArrayContext } from "./App";

function AddItem() {

    const Array = useContext(ArrayContext)


    const [inputValue, setInputValue] = useState('')
    const refValue = useRef()

    const handleSubmit = () => {
        refValue.current.focus()
        setInputValue('')
        return Array[1]([...Array[0], inputValue])
    }
    return (
        <form className="form-inline">
            <div className="form-group">
                <input type="text" ref={refValue} value={inputValue} onChange={(e) => setInputValue(e.target.value)} className="form-control" placeholder="Item Name"/>
            </div>
            <div className="form-group">
                <select className="form-control">
                    <option value={0}>Small</option>
                    <option value={1}>Medium</option>
                    <option value={2}>High</option>
                </select>
            </div>
            <button type="button" onClick={handleSubmit} className="btn btn-primary">Add</button>
            <button type="button" onClick={() => setInputValue('')} className="btn btn-default">Cancel</button>
        </form>
    )
}

export default AddItem