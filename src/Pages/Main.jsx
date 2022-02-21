import { useEffect, useState } from "react"
import axios from "axios"
import { useDispatch,useSelector } from "react-redux"
import { WebUrll } from "../Redux/action"
import {Link} from 'react-router-dom'


export const Main=()=>{
    const [text,setText]=useState()
    const [data,setdata]=useState([])
    const Web=useSelector((store)=>store.Web)
  const dispatch=useDispatch()
    const handle=()=>{
        axios.get(`https://fast-reef-22226.herokuapp.com/data?title=${text}`).then(({data})=>{
           dispatch(WebUrll(data)) 
           console.log(Web)
            setdata(data)
         if(data.length==0){
             alert("Not Found")
         }
        })
       
        }
      const SortBydate=()=>{
          for(let i=0;i<data.length-1;i++){
              for(let j=0;j<data.length-1-i;j++){
               if(data[j].creation_date<data[j+1].creation_date){
                   let swap=data[j]
                   data[j]=data[j+1]
                   data[j+1]=swap
               }
              }
          }
      }
      const SortBydate2=()=>{
        for(let i=0;i<data.length-1;i++){
            for(let j=0;j<data.length-1-i;j++){
             if(data[j].creation_date>data[j+1].creation_date){
                 let swap=data[j]
                 data[j]=data[j+1]
                 data[j+1]=swap
             }
            }
        } 
      }
    return <div>
        <img src="https://www.bing.com/th?id=OIP.SqEICC59PL1VrdefhGEqqgHaCg&w=308&h=104&c=8&rs=1&qlt=90&o=6&pid=3.1&rm=2" alt="" /><br/>
        <input className="search-box" type="text" onChange={(e)=>{
            setText(e.target.value)
        }} />
        <button className="search" onClick={()=>{
        handle()
        }}>Search</button><br/><br/><br/>
        <button id="sort-alphabetically" onClick={()=>{
             data.sort((a,b)=>{
                return a-b
            })
        }}>sort A-Z</button><button id="sort-alphabetically-desc">sort-Z-A</button><button id="sort-by-date" onClick={()=>{
            SortBydate()
        }}>sort by date(asc)</button><button id="sort-by-date-desc" >sort by date(desc)</button><button id="sort-by-quality">sort by quality(asc)</button><button id="sort-by-quality-desc " onClick={()=>{
            SortBydate2()
        }}>sort by quality(desc)</button><button id="filter-explicit">Filter explicite</button>
       <div id="search-result ">
       <div id="detailed-result">
        {data.map(e=>(
            <div key={e.id} className="result">
                {e.url}<br/>
                <Link to={`/page/${e.id}`}><span className="title">{e.title}</span></Link>
                <p className="desc">{e.description}</p>
                <p className="author">{e.author}</p>
                <h3 className="creation-date">Creation_date:{e.creation_date}</h3>
                <h3 className="explicit">  explicit:{e.explicit?"Yes":"No"}</h3>
                <h3 className="quality">Quality:%{e.quality}</h3>
            </div>
        ))}
          </div>
          </div>
    </div>
}