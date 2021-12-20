import React, { useState,useEffect } from 'react'
import { useDispatch, useSelector} from "react-redux"
import {getcontect,update} from "./Action/Action"
import { useParams } from 'react-router-dom';



export default function Edit() {
    let {id} = useParams();
    const dispach = useDispatch();
    const contect=useSelector((state)=> state.data.contect)
    console.log("edit",contect);
    const [name, setname] = useState("");
    const [email, setEmail] = useState("");
    const [phone, setPhone] = useState("");

    
    useEffect(()=>{

        if(contect!= null){
            setname(contect.name);
            setEmail(contect.email);
            setPhone(contect.phone);
        }
   dispach(getcontect(id));
    },[contect]);

    const updateContext = e =>{

        e.preventDefault();

        const update_contect={
            id:id,
     name:name,
     email:email,
     phone:phone,
        };
        console.log("update",update_contect);
        dispach(update(update_contect))

    }

    return (

        <div className='add-contect'>
            <h1 className="add title">EDIT TO CONTECT</h1>

            <div className='form'>
                <form onSubmit={(e)=>updateContext(e)} >
                    <input 
                        type="text"
                        placeholder='enter the name'
                        className='input-group'
                        value={name}
                        onChange={(e) => setname(e.target.value)}
                    /><br></br>
                    <input
                        type="text"
                        placeholder='enter the number'
                        className='input-group'
                        value={phone}
                        onChange={(e) => setPhone(e.target.value)}

                    />
                    <br />

                    <input
                        type="text"
                        placeholder='enter the email'
                        className='input-group'
                        value={email}
                        onChange={(e) => setEmail(e.target.value)}

                    />


                        <button
                        className='create-button-add-contect'>
                        edit contect
                    </button>
                </form>
            </div>

        </div>
    )
}
