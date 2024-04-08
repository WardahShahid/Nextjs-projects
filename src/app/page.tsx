"use client";
import { FormEvent, useState } from "react";
import { useRouter} from "next/navigation";

export default function Home() {
  const {push} = useRouter();
  const [inputVal,setInputVal] =useState("");

  const handleSubmit=(event:FormEvent)=>{
    event.preventDefault();
    push(`/prediction/${inputVal}`);
  }

  return (
    
      <div className="min-h-screen flex items-center justify-center bg-gray-100">
        <div className="p-4 shadow-md bg-white rounded-md">
          <h1 className="text-2xl font-semibold mb-4 text-black">Enter your name</h1>
        
        
          <form onSubmit={handleSubmit} className="space-y-3">
            <input type="text" 
            placeholder="Enter your name..." 
            value={inputVal}
            className="w-full p-2 border border-gray-300 rounded text-black "
            onChange={(e)=>setInputVal(e.target.value)
            }/>
            <button type="submit"
            className="wfull py-2 px-4 bg-blue-500 hover:bg-blue-600 text-white font-semibold rounded-lg shadow-md focus:outline-none focus:ring-2 focus:ring-blue-400 focus:ring-opacity-75"
            >Predict Data</button>
          </form>
          </div>
      </div>
    
  );
}

