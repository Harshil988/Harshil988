import React, { useState, useEffect } from 'react'
import { useDispatch, useSelector } from "react-redux"
import { getcontect, update } from "./Action/Action"
import { useParams } from 'react-router-dom';
import { Link } from 'react-router-dom';



export default function Edit() {
    let { id } = useParams();
    const dispach = useDispatch();
    const contect = useSelector((state) => state.data.contect)
    console.log("edit", contect);
    const [name, setname] = useState("");
    const [email, setEmail] = useState("");
    const [phone, setPhone] = useState("");


    useEffect(() => {

        if (contect != null) {
            setname(contect.name);
            setEmail(contect.email);
            setPhone(contect.phone);
        }
        dispach(getcontect(id));
    }, [contect]);

    const updateContext = e => {

        e.preventDefault();

        const update_contect = {
            id: id,
            name: name,
            email: email,
            phone: phone,
        };
        console.log("update", update_contect);
        dispach(update(update_contect))

    }

    return (
        <div className='container'>
            <div className='row justify-content-center align-items-center'>
                <div className='col-7'>
                    <div className=' shadow-lg p-3 mb-5 bg-white rounded m-5 col-12'>
                        <h1 className="text-center">EDIT TO CONTECT</h1>

                        <div className='form'>
                            <form onSubmit={(e) => updateContext(e)} >
                                <input
                                    type="text"
                                    placeholder='enter the name'
                                    className='input-group fs-4'
                                    value={name}
                                    onChange={(e) => setname(e.target.value)}
                                /><br></br>
                                <input
                                    type="number"
                                    placeholder='enter the number'
                                    className='input-group fs-4'
                                    value={phone}
                                    onChange={(e) => setPhone(e.target.value)}

                                />
                                <br />

                                <input
                                    type="email"
                                    placeholder='enter the email'
                                    className='input-group fs-4'
                                    value={email}
                                    onChange={(e) => setEmail(e.target.value)}

                                />

                                <div className='d-flex justify-content-between'>
                                    <button
                                        className='btn btn-outline-warning mt-3 '>
                                        edit contect
                                    </button>


                                    <Link to="/">
                                        <button
                                            className='btn btn-outline-danger mt-3 '>
                                            cancle
                                        </button>
                                    </Link>
                                </div>
                            </form>
                        </div>

                    </div>
                </div>
            </div>

        </div>

    )
}
