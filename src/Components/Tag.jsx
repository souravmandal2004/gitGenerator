import React, { useEffect, useState } from 'react'
import axios from 'axios';
import Spinner from './Spinner';
import useGif from '../Hooks/useGif';


const API_KEY = "jM0bUFTYCDCFhjYyhvERN4s2am8tNllq";
function Tag () {

  const [tag, setTag] = useState ("");

  const {gif, loading, fetchData} = useGif (tag);

  return (

    <div className='w-1/2 bg-blue-500 gap-y-5 mt-[50px]  rounded-md border-white flex flex-col items-center '>
      <h1 className='text-2xl underline font-bold uppercase mt-3'>Random {tag} Gif</h1>

      {
        loading ? (<Spinner />) : (<img src={gif} alt="Random Gif pic" width={450}/>) 
      }

      <input 
        className='w-10/12 text-lg py-2 rounded-lg mb-[6px] text-center'
        onChange={(event) => setTag (event.target.value)}
        value={tag}
        type="text"
        placeholder='Enter your text here to get the GIF'
        />

      <button onClick={ () => fetchData (tag)} className='w-10/12 bg-slate-600 text-white text-2xl py-1 rounded-lg cursor-pointer hover:bg-orange-300 transition-all duration-200 mb-[20px]'>Generate</button>
    </div>
  )
}

export default Tag;