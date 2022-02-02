import React,{useState,useEffect} from 'react';
import {database} from './firebase'

import Link from 'react-router-dom'
function Firebase({n}) {
    const [name,setName]=useState('')
    const [no,setNo]=useState('')
    const [user,setUser]=useState(null)
    const [d,setD]=useState('hello')
    const [im,setIm]=useState('')
 
    const getTodos = async() => {
        let q=[]
        let data=await database.users.get();
        data.forEach((obj)=>{
            if(obj.data().email=='saitama')
            {
                console.log(obj.data())
                q.push(obj.data().email)
                setIm(obj.data().image)
            }
           
        })
        setD(q)
          
        }
    
    useEffect(async()=>{
      getTodos()
      console.log()
    },[])
  return <div>
    
     <img src={`https://firebasestorage.googleapis.com/v0/b/reels-2def6.appspot.com/o/%5Bobject%20File%5D%2F%5Bobject%20File%5D?alt=media&token=31778697-0dad-4d95-95c3-a197939b715e`}>

       
     </img>
      
  </div>;
}

export default Firebase;
