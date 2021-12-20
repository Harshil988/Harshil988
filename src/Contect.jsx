import React from 'react'
import "./Style.css"
import {Link}from "react-router-dom"

export default function Contect() {
    return (
        <div>
            <div className='nav'>
               <Link to="/" className='title'><h2>contect book</h2></Link> 
              <button className='create-button' ><Link to="/newcontectlist"className='create-button-none'>create contect</Link></button> 
            </div>
        </div>
    )
}
