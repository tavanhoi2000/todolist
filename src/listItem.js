import {useRef, useState, useContext} from "react";
import {ArrayContext} from "./App";

function ListItem() {
    const refValue = useRef()
    const Array = useContext(ArrayContext)
    const [isEdit, setEdit] = useState(false)

    const [newValueInput, setValueInput] = useState('')
    const handleUpdate = async (e) => {
        await setEdit(true)
        refValue.current.focus()
        // refValue.current.value= ''

    }

    const handleSaveUpdate = () => {
        setEdit(false)
        setValueInput('')
    }

    const handleDelete = () => {
        console.log(1)
    }
    return (
        <div className="panel panel-success">
            <div className="panel-heading">List Item</div>
            <table className="table table-hover">
                <thead>
                <tr>
                    <th style={{width: '10%'}} className="text-center">#</th>
                    <th>Name</th>
                    <th style={{width: '15%'}} className="text-center">Level</th>
                    <th style={{width: '15%'}}>Action</th>
                </tr>
                </thead>
                <tbody>

                {
                    Array[0].map((item, index) => {
                        return (
                            <tr key={index}>
                                <td className="text-center">{index + 1}</td>
                                <td>{item}</td>
                                <td className="text-center"><span className="label label-danger">High</span></td>
                                <td>
                                    <button type="button" onClick={handleUpdate}
                                            className="btn btn-warning btn-sm">Edit
                                    </button>
                                    <button type="button" onClick={(e, ind) => {
                                        console.log(item.index)
                                    }}
                                            className="btn btn-danger btn-sm">Delete
                                    </button>
                                </td>
                            </tr>
                        )
                    })
                }
                {
                    isEdit && <tr>
                        <td className="text-center">change</td>
                        <td><input type="text" className="form-control" placeholder='Write new name you want updadte'
                                   ref={refValue} value={newValueInput} onChange={(e) => setValueInput(e.target.value)}/>
                        </td>
                        <td className="text-center">
                            <select className="form-control">
                                <option>Small</option>
                                <option>Medium</option>
                                <option>High</option>
                            </select>
                        </td>
                        <td>
                            <button type="button" className="btn btn-default btn-sm">Cancel</button>
                            <button type="button" onClick={handleSaveUpdate} className="btn btn-success btn-sm">Save
                            </button>
                        </td>
                    </tr>
                }
                </tbody>
            </table>
        </div>
    )
}

export default ListItem