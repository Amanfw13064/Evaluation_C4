import { useEffect, useState } from "react"
import { useParams } from "react-router-dom"
import axios from 'axios'
export const Author=()=>{
    const {id}=useParams()
    const [text,setText]=useState('')
    const [data,setdata]=useState([])
    useEffect(()=>{
        axios.get(`https://fast-reef-22226.herokuapp.com/data?id=${id}`).then(({data})=>{
           
             setdata(data)
    }) 
},[])

    return <div>
        <div id="navbar">
        <img src="https://www.bing.com/th?id=OIP.SqEICC59PL1VrdefhGEqqgHaCg&w=308&h=104&c=8&rs=1&qlt=90&o=6&pid=3.1&rm=2" alt="" /><br/>
        <input className="search-box" type="text" onChange={(e)=>{
            setText(e.target.value)
        }} />
        <button onClick={()=>{
        handle()
        }}>Search</button><br/><br/><br/>
        </div>
        <div id="search-result ">
        {data.map(e=>(
            <div key={e.id} className="result">
                {e.url}<br/>
                <h2>{e.title} | {e.author}</h2>
                <p>{e.description}</p>
                <h3>Creation_date:{e.creation_date}</h3>
                <h3>explicit:{e.explicit?"Yes":"No"}</h3>
                <h3>Quality:{e.quality}</h3>
            </div>
        ))}
        </div>
    </div>
}