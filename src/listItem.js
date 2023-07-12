import {useRef, useState, useContext} from "react";
import {ParentsData} from "./App";
import axios from "axios";


function ListItem() {
    const childrenData = useContext(ParentsData)
    const refValue = useRef(null)
    const [isEdit, setEdit] = useState(false)
    const [newValue, setValue] = useState('')
    const [itemId, setItemId] = useState(null)
    const url = 'https://jsonplaceholder.typicode.com/users/'


    // const [newValueInput, setValueInput] = useState('')
    const handleUpdate = async (item,id) => {
        setItemId(id)
        await setEdit(true)
    }

    async function handleDelete(id) {

        const newData = await axios.delete(url + id)
        const newTodos = childrenData[0].filter((item) =>{
            return item.id !== id
        } )
        childrenData[1](newTodos)

    }

    const handleSaveUpdate = async (id, item) => {
        const res = await axios.put(url + id, {name: newValue})
            item.name = res.data.name
        setValue('')
        setEdit(false)

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
                    childrenData[0] && childrenData[0].map((item, index) => {
                        return (
                            <tr key={index}>
                                <td className="text-center">{index + 1}</td>
                                { isEdit ?
                                    <td>

                                        {
                                            itemId == item.id ? <input type="text" className="form-control" placeholder='Write new name you want updadte'
                                                                       ref={refValue} value={newValue} onChange={(e) => setValue(e.target.value)}/> : item.name
                                        }
                                    </td>
                                    : <td className='change-value'>{item.name}</td>
                                }
                                <td className="text-center"><span className="label label-danger">High</span></td>
                                <td>
                                    <button type="button" onClick={(e) => handleUpdate(item,item.id)}
                                            className="btn btn-warning btn-sm">Edit
                                    </button>
                                    <button type="button" onClick={() => handleDelete(item.id)}
                                            className="btn btn-danger btn-sm">Delete
                                    </button>
                                    {
                                        isEdit && itemId == item.id ? <button type="button" onClick={() => handleSaveUpdate(item.id, item)} className="btn btn-success btn-sm">Save
                                        </button> : ''
                                    }
                                </td>
                            </tr>
                        )
                    })
                }

                </tbody>
            </table>
        </div>
    )
}

export default ListItem
