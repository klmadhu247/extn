import { useState } from 'react';
import './App.css';

function App() {

  return (
    <>
      <div className="logo h-[380px] w-[300px] ">
       <div className='flex flex-col items-center p-[30px] gap-3'> <img src="/wxt.svg" alt="" className='h-8 w-8 bg-black rounded-full ' />
       <h1 className='text-lg font-bold'>ChatGpt Writer</h1></div>
       <div className='pl-[30px] pr-[30px] '>
        <p className='text-base font-semibold text-slate- mb-2 text-center'>Welcome to Linkedin AI Writer</p>
        <p className='text-sm text-center'>It is an AI assistant that suggest text as you write</p>
        <div className='mt-4 flex justify-center items-center'><button className='bg-black text-white pb-[6px] pt-[6px] w-52 rounded-md hover:bg-slate-950'>Get Started</button></div>
       </div>
      </div>
    </>
  );
}

export default App;
