import React,{useState} from 'react'
import "./Client.css"
import axios from 'axios';

const Client = () => {
  const [data, setData] = useState('');
  const handleChange=(e)=>{
    setData(e.target.value);
  }
  const handleClick= async ()=>{
       await axios.post('http://localhost:4000/sendMessage',{
        data:data
      }).then((response)=>{
          alert(response.data)
      })
  }
  const getDetails= async ()=>{
    axios.get('http://localhost:4000/getDetails',{

    }).then((res)=>{
      alert(res.data);
    })
  }
  const getMessage= async ()=>{
    axios.get('http://localhost:4000/getMessage',{

    }).then((res)=>{
      alert(res.data);
    })
  }
  return (
    <div>
        <div className='post'>
            <input placeholder='enter a text' onChange={handleChange}/>
            <div className='button'>
            <button onClick={handleClick}>Send Message</button>
            </div>
        </div>
        <div className='post'>
        <h1>Get Details</h1><br/>
        <button onClick={getDetails}>Get Details</button>
        </div>
        <div className='post'>
        <h1>Get Message</h1><br/>
        <button onClick={getMessage}>Get Message</button>
        </div>
    </div>
  )
}

export default Client