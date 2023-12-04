import { useEffect, useState } from "react";
import Home from "./components/Home";
import Navbar from "./components/Navbar";
import axios from "axios";

export default function App() {
  
  const [items, setItems] = useState(null);

  useEffect(()=>{

    const sites = async() =>{
      try {
        const resp = await axios.get('../src/db/list.json');
        setItems(resp.data);

      }
      catch (Error){
        console.log('Error in fetching data:', Error);
      }


    }

    sites()

  },[])
  
  return (

    <>
      
      <Navbar/>
      <Home items = {items}/>
    
    </>
  );
}
