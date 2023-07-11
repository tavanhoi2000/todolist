import {useRef, useState, useContext} from "react";
import {ArrayContext} from "./App";
import Form from "./form";

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

    const handleSaveUpdate = (ites) => {
        const item = document.getElementsByClassName('change-value')
        console.log(item.target.value)
        setEdit(false)
        setValueInput('')
    }

    function handleDelete(e) {
        const newTodos = Array[0].filter((item, i) => i !== e)
        Array[1](newTodos)
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
                    Array[0] && Array[0].map((item, index) => {
                        // console.log(item)
                        return (
                            <tr key={index}>
                                <td className="text-center">{index + 1}</td>
                                <td className='change-value'>{item}</td>
                                <td className="text-center"><span className="label label-danger">High</span></td>
                                <td>
                                    <button type="button" onClick={(e) => handleUpdate(item)}
                                            className="btn btn-warning btn-sm">Edit
                                    </button>
                                    <button type="button" onClick={() => handleDelete(index)}
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
                            <Form/>
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