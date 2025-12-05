import React,{useEffect,useState} from 'react'

function Github() {
    const [data,setdata]=useState([]);
    useEffect(()=>{
      fetch('https://api.github.com/users/AtharvChavan-45')
      .then(response=>response.json())
      .then(data=>{console.log(data);{/* Converts API response into JSON format */}
        setdata(data); {/*Stores the returned GitHub user data inside data state */}
      })
    },[])
  return (
    <div className='text-center m-4 bg-gray-600 text-white p-4 text-3xl'>
      Github Followers:{data.followers}
      <img src={data.avatar_url} alt="Git picture" width={300}/>
    </div>
  )
}

export default Github
//useEffect runs the function only ones when component load
//[] empty dependency means run only on page first load
{/* */}