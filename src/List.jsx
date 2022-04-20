import React, { useState } from 'react'
import { useDispatch } from "react-redux"
import { newcontect } from "./Action/Action"
import shortid from 'shortid';

import { useNavigate} from 'react-router-dom';


export default function List() {
    const navigate = useNavigate()
    const dispach = useDispatch();
    const [name, setname] = useState("");
    const [email, setEmail] = useState("");
    const [phone, setPhone] = useState("");

    const createContect = e => {
        e.preventDefault();
        console.log("click", name, phone, email);
        if (name && phone && email) {
            const new_contect = {
                id: shortid.generate(),
                name: name,
                phone: phone,
                email: email,
            };
            dispach(newcontect(new_contect));
            navigate("/contectlist")

        }
        else {
            alert("complate fill the all datas")
        }


    }
    function onlyNumberKey(evt) {
        var ASCIICode = evt.which ? evt.which : evt.keyCode;
        if (ASCIICode > 31 && (ASCIICode < 48 || ASCIICode > 57)) {
            evt.preventDefault();
        }
    }

    return (
        <>
            <div className='container'>
                <div className='row justify-content-center align-items-center'>
                    <div className='col-7'>
                        <div className="shadow-lg p-3 mb-5 bg-white rounded m-5 col-12 ">
                            <h1 className="text-center">ADD TO CONTECT</h1>

                            <div className='form'>
                                <form onSubmit={(e) => createContect(e)}>
                                    <input
                                        type="text"
                                        placeholder='enter the name'
                                        className='input-group fs-4'
                                        value={name}
                                        onChange={(e) => setname(e.target.value)}
                                    /><br></br>
                                    <input
                                        type="text"
                                        placeholder='enter the number'
                                        className='input-group fs-4'
                                        maxlength="10"
                                        value={phone}
                                        onChange={(e) => setPhone(e.target.value)}
                                        onKeyPress={(e) => {
                                            onlyNumberKey(e);
                                        }}

                                    />
                                    <br />

                                    <input
                                        type="email"
                                        placeholder='enter the email'
                                        className='input-group fs-4'
                                        value={email}
                                        onChange={(e) => setEmail(e.target.value)}

                                    />


                                    <button
                                        className='btn btn-outline-success mt-3'>
                                        create contect
                                    </button>
                                </form>
                            </div>

                        </div>
                    </div>
                </div>

            </div>

            
        </>
    )
}
