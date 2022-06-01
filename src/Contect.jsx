import React from 'react'
import "./Style.css"
import {Link}from "react-router-dom"

export default function Contect() {
    return (
        <div>
            <div className='bg-dark  d-flex flex-row p-3 col-12'>
               <Link to="contectlist" className='text-decoration-none col-9'><h2>contect book</h2></Link> 
               <Link to="/newcontectlist"><button className='btn btn-outline-primary  ' >create contect</button> </Link>
            </div>
        </div>
    )
}
