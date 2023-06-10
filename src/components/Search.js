import React, { useEffect, useState } from 'react'
import Fooddata from './FoodData'
import Form from 'react-bootstrap/Form'
import "./style.css"
import Cards from './Cards'
import Set from './Set'

const Search = () => {
    const [fdata, setFdata] = useState(Fooddata)
    // console.log(fdata);

    const[copydata, setCopyData] = useState([]);
    // console.log(copydata);

    const changeData = (e)=>{
        // console.log(e)
        let getChangedData = e.toLowerCase();
        if(getChangedData === ""){
          setCopyData(fdata)
        }else{
          let storedata = copydata.filter((ele,k)=>{
            return ele.rname.toLowerCase().match(getChangedData);
          });

           setCopyData(storedata)
        }
    }

    const zomatologo = "https://b.zmtcdn.com/web_assets/b40b97e677bc7b2ca77c58c61db266fe1603954218.png"

    useEffect(()=>{

      setTimeout(()=>{
        setCopyData(Fooddata);
      },3000)
    },[])

  return (
    <>
       <div className="container d-flex justify-content-between align-items-center">  
        <img src={zomatologo} style={{width: "8rem", position:"relative", left:"2%",cursor:"pointer"}} alt="" />
        <h2 style={{color: "#1b1464", cursor:"pointer",}} className='mt-3'>Search Filter App</h2>
       </div> 

       <Form className='d-flex justify-content-center align-items-center mt-3'>
      <Form.Group className=" mx-2 col-lg-4" controlId="formBasicEmail">
        
        <Form.Control type="text" 
            onChange={(e)=>changeData(e.target.value)}
         placeholder="Search Restaurant" />
     
      </Form.Group>
      <button className='btn text-light col-lg-1' style={{background:"#ed4c67"}}>Submit</button>
      </Form>

      <section className='items_section mt-4 container'>
        <h2 className='px-4' style={{fontWeight:400}}> Restuarants in Virar open now!!</h2>

        <div className="row mt-2 d-flex justify-content-around align-items-center">
         {copydata && copydata.length ? <Cards data={copydata}/>:<Set sdata={fdata}></Set>} 
        </div>
      </section>
      
    </>
  )
}

export default Search;
