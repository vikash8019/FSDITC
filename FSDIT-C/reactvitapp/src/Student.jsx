import React from 'react'
import './style.css'
function Student({data}){
  return (
    <div className="icard"> 
    <table>
        <th style={{backgroundcolor:'brown' , color:'white'}} colspan={2}>Student Information</th>
        <tbody>
            <tr><td colspan={2}><img src={data.image} height={100} width={100} ></img></td></tr>
            <tr><td>Name:</td><td>{data.name}</td></tr>
            <tr><td>Roll:</td><td>{data.roll}</td></tr>
            <tr><td>college</td><td>{data.college}</td></tr>
        </tbody>
        </table>
        </div>
  )
}

export default Student