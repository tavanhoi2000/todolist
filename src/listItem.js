import {useRef, useState, useEffect} from "react";
// import {ArrayContext} from "./App";
import Form from "./form";
import axios from "axios";


function ListItem() {
    const refValue = useRef()
    const [listItem, setListItem] = useState([])
    const [isEdit, setEdit] = useState(false)
    const [newValue, setValue] = useState('')
    const url = 'https://jsonplaceholder.typicode.com/users/'

    useEffect( () => {
        const getData = async () => {
            const response = await axios.get(url)
            const data = response.data
            setListItem(data)
            console.log(typeof listItem)
        }

        getData()



        return () => false
    },[])


    const [newValueInput, setValueInput] = useState('')
    const handleUpdate = async (item,id) => {
        setValueInput(item.name)

        await setEdit(true)
        console.log(refValue.current.value)
        // refValue.current.focus()
        // refValue.current.value= ''
    }

    async function handleDelete(id) {
        // const newTodos = Array[0].filter((item, i) => i !== e)
        // Array[1](newTodos)
        const newData = await axios.delete(url + id)
        const newTodos = listItem.filter((item) =>{
            return item.id !== id
        } )
        setListItem(newTodos)

    }

    const handleSaveUpdate = async (id, name) => {
        console.log(name)
        console.log(id)

        // const response = await axios.patch(url + id, {}  )

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
                    listItem && listItem.map((item, index) => {
                        return (
                            <tr key={index}>
                                <td className="text-center">{index + 1}</td>
                                { isEdit ?
                                    <td>
                                        <input type="text" className="form-control" placeholder='Write new name you want updadte'
                                               ref={refValue} value={item.name} onChange={(e) => setValueInput(e.target.value)}/>
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
                                    <button type="button" onClick={() => handleSaveUpdate(item.id, item.name)} className="btn btn-success btn-sm">Save
                                    </button>
                                </td>
                            </tr>
                        )
                    })
                }
                {/*{*/}
                {/*    isEdit && <tr>*/}
                {/*        <td className="text-center">change</td>*/}
                {/*        <td><input type="text" className="form-control" placeholder='Write new name you want updadte'*/}
                {/*                   ref={refValue} value={newValueInput} onChange={(e) => setValueInput(e.target.value)}/>*/}
                {/*        </td>*/}
                {/*        <td className="text-center">*/}
                {/*            <Form/>*/}
                {/*        </td>*/}
                {/*        <td>*/}
                {/*            <button type="button" className="btn btn-default btn-sm">Cancel</button>*/}
                {/*            <button type="button" onClick={(e) => handleSaveUpdate(e)} className="btn btn-success btn-sm">Save*/}
                {/*            </button>*/}
                {/*        </td>*/}
                {/*    </tr>*/}
                {/*}*/}
                </tbody>
            </table>
        </div>
    )
}

export default ListItem
