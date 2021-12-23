import React from 'react'
import Avatar from 'react-avatar';
import { Link } from 'react-router-dom';
import {remove} from "./Action/Action"
import { useSelector ,useDispatch} from 'react-redux'
import "../node_modules/bootstrap/dist/css/bootstrap.min.css"


export default function Table() {

    const contectData = useSelector((state) => state.data.contects)
    const dispach=useDispatch();
    console.log("================>>data", contectData);
    return (
        <div>
            <table class="table table-hover align-middle">
                <thead>
                    <tr>
                        <th>no.</th>
                        <th>name</th>
                        <th>number</th>
                        <th>email</th>
                        <th>action</th>
                    </tr>
                </thead>
                <tbody>

                    {
                        contectData && contectData.length && contectData.map((item, i) => (
                            <tr key={item.id}>
                                <td>{i+1}</td>
                               
                                <td><Avatar name={item.name} size='50' className='avatar' /><span>{item.name}</span></td>
                                <td>{item.phone}</td>
                                <td>{item.email}</td>
                                <td className='action'>
                                   <Link to={`/Editlist/${item. id}`}><button className='btn btn-info'>edit</button></Link> 
                                    <button className='btn btn-danger mx-2' onClick={()=>dispach(remove(item.id))}> remove</button>
                                </td>
                            </tr>
                        ))
 
                    }
                </tbody>
            </table>
  
        </div>
    )
}
