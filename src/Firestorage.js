import React,{useState,useEffect} from 'react';
import Firebase1 from './Firebase1'
import {storage} from './firebase'
function Firestorage() {
    const [file,setFile]=useState('')
    const [file1,setFile1]=useState(null)
    const upload=()=>{
        const uploadTask=storage.ref(`${file}/${file}`).put(file);
        uploadTask.on('state_changed',fn1,fn2,fn3)
        function fn1(snapshot) {
            console.log('progress')
        }
        function fn2(error) {
            console.log(error)
        }
        function fn3() {
            uploadTask.snapshot.ref.getDownloadURL().then((url)=>{
                console.log(url)
                setFile1(url)
                
            })
            
        }
    }
  return <div>
      {file1==null?<div> <input  onChange={(e)=>{
          setFile(e.target.files[0]);
      }} type="file" accept="image/*/"></input>
      <button onClick={upload}>upload</button></div>:<div><Firebase1 n={file1}/></div>}
     
  </div>;
}

export default Firestorage;
