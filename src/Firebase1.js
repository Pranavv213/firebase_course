import React,{useState,useEffect} from 'react';
import {database} from './firebase'
function Firebase1({n}) {
    const [username,setUsername]=useState('')
    const [no,setNo]=useState('')
    const [user,setUser]=useState('')
    const [data,setData]=useState('hello')
    const [info,setInfo]=useState('')
    let createUserInDB=async()=>{
         let data=await database.users.get()
        data.forEach((obj)=>{
            if(obj.data().name=="docs")
            {
                let array=obj.data().arr;
                let i=0;
                array.forEach(x=>{
                    if(x.username==username)
                    {
                        i=1;
                    }
                })
                if(i==1)
                {
                    console.log('user already found')
                    setInfo('username not available, try with different username')
                    i=0;
                }
                else
                {
                    let name1=obj.data().name;
                    array.push({username,no})
                  
                    
                    database.users.doc(obj.id).set({name:'docs',arr:array})
                }
               
                
            }
           
        })
      
        setUser("123456")
    }
    
  return <div>
      {/* {user==null?:<div>{data}</div>} */}
      {n}
      <div>username<input value={username} onChange={(e)=>{
          setUsername(e.target.value)
      }}></input>
      <br></br>
      password<input type="password" value={no} onChange={(e)=>{
          setNo(e.target.value)
      }}></input>
      <br></br>
      <button onClick={createUserInDB}>Signup</button></div>
      <br></br>
      {info}
      <a href="/login">already have an account</a>
      {/* {data} */}
  </div>;
}

export default Firebase1;
