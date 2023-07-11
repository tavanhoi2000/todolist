import {useState} from "react";

function  Form() {

    const [options, setOption] = useState([
        "Small", "Medium", " Hight"
        ]
    )
    const [level, setLevel] = useState("Small")

    const handleChangeLevel = () => {

    }
    return (
        <select className="form-control" onChange={handleChangeLevel}>
            {
                options.map((option, index) => {
                   return <option key={index} value={index}>{option}</option>

                })
            }
        </select>
    )
}

export default Form