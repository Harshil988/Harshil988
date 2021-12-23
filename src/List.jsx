import React, { useState } from 'react'
import { useDispatch } from "react-redux"
import  {newcontect} from "./Action/Action"
import shortid from 'shortid';


export default function List() {
    // let history=useHisroty();
    // console.log("props",props);
    const dispach = useDispatch();
    const [name, setname] = useState("");
    const [email, setEmail] = useState("");
    const [phone, setPhone] = useState("");

    const createContect = e => {
        e.preventDefault();
        console.log("click", name, phone, email);

        const new_contect = {
            id:shortid.generate(),
            name: name,
            phone: phone,
            email: email,
        };
        dispach(newcontect(new_contect));
    //    props.history.push('/dashboard');
    }

    return (

        <div className='add-contect'>
            <h1 className="add title">ADD TO CONTECT</h1>

            <div className='form'>
                <form onSubmit={(e) => createContect(e)}>
                    <input
                        type="text"
                        placeholder='enter the name'
                        className='input-group'
                        value={name}
                        onChange={(e) => setname(e.target.value)}
                    /><br></br>
                    <input
                        type="number"
                        placeholder='enter the number'
                        className='input-group'
                        value={phone}
                        onChange={(e) => setPhone(e.target.value)}

                    />
                    <br />

                    <input
                        type="email"
                        placeholder='enter the email'
                        className='input-group'
                        value={email}
                        onChange={(e) => setEmail(e.target.value)}

                    />


                        <button
                        className='create-button-add-contect'>
                        create contect
                    </button>
                </form>
            </div>

        </div>
    )
}
