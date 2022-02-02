import React,{useState,useEffect} from 'react';
import {database} from './firebase'
function Firebase1({n}) {
    const [name,setName]=useState('')
    const [no,setNo]=useState('')
    const [user,setUser]=useState('')
    const [data,setData]=useState('hello')
    let createUserInDB=async()=>{
        let data=await database.users.get();
        data.forEach((obj)=>{
            if(obj.data().name=="saitama")
            {
                database.users.doc(obj.id).set({...obj.data(),image:n})
                
                 //console.log(obj.id)
                //q.push(obj.data().email)
            }
           
        })
      
        setUser("123456")
    }
    
  return <div>
      {/* {user==null?:<div>{data}</div>} */}
      {n}
      <div>name<input value={name} onChange={(e)=>{
          setName(e.target.value)
      }}></input>
      <br></br>
      no<input value={no} onChange={(e)=>{
          setNo(e.target.value)
      }}></input>
      <br></br>
      <button onClick={createUserInDB}>Create</button></div>
      <br></br>
      <button onClick={fetch}>get data</button>
      {/* {data} */}
  </div>;
}

export default Firebase1;
