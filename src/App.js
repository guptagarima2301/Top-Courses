import React, { useEffect, useState } from "react";
import {apiUrl, apiurl,filterData} from "./data";
import Navbar from "./Navbar";
import Filter from "./Filter";
import Cards from "./Cards";
import {toast} from "react-toastify";

const App = () => {
 const[courses,setCourses]=useState(null);

  useEffect(()=>{
    const fetchData=async()=>{
      try{
        const res=await fetch(apiUrl);
        const data=await res.json();
        // save data

        setCourses(data.data);
        

      }
      catch(error){
        toast.error("something went wrong");

      }
    }
    fetchData();
  },[]);


  return (
    <div>
      <Navbar></Navbar>
      <Filter 
      filterData={filterData}></Filter>
      <Cards courses={courses}></Cards>
    </div>

  );
};

export default App;
