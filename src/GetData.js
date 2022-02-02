import React,{useState,useEffect} from 'react';
import {database} from './firebase'

import Link from 'react-router-dom'
function Firebase({n}) {
    const [name,setName]=useState('')
    const [no,setNo]=useState('')
    const [user,setUser]=useState(null)
    const [d,setD]=useState('hello')
 
    const getTodos = async() => {
        let q=[]
        let data=await database.users.get();
        data.forEach((obj)=>{
            if(obj.data().email)
            {
                console.log(obj.data())
                q.push(obj.data().email)
            }
           
        })
        setD(q)
          
        }
    
    useEffect(async()=>{
      getTodos()
      console.log()
    },[])
  return <div>
    {d}
     
      
  </div>;
}

export default Firebase;
