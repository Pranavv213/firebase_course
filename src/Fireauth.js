import React,{useState,useEffect} from 'react';
import {auth} from './firebase'
import GetData from './GetData'
function Fireauth() {
   
    const [email,setEmail]=useState('');
    const [password,setPassword] = useState('')
    const [user,setUser] = useState('')
    const [u,setU]=useState('')
    let create=async()=>{
        let res=await auth.createUserWithEmailAndPassword(email,password)
        setUser(res)
        console.log('button clicked')
      
    }
    let signin=async()=>{
        await auth.signInWithEmailAndPassword(email,password)
        alert('Logged In')
    }
    let signout=async()=>{
        await auth.signOut()
    }
  return <div>
      {!user?<div><input value={email} onChange={(e)=>{
          setEmail(e.target.value);
          setU(email)
      }}></input>
      <input value={password} onChange={(e)=>{
          setPassword(e.target.value);
      }}></input>
      <button onClick={create}>sign up</button>
      <br></br>
      <button onClick={()=>{
          setUser(1)
      }}>Already have an account</button>
      {u}
      </div>
      :<div>
    <GetData/>
     </div>}
      
     
  </div>;
   
}

export default Fireauth;
