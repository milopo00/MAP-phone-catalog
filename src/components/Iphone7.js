import React,{useState,useEffect} from 'react';
import { Paper } from "@material-ui/core";
import {Link } from "react-router-dom";
 
   function Iphone7() {
    const [data,setData]=useState([]);
    const getData=()=>{
      fetch('phones.json'
      ,{
        headers : { 
          'Content-Type': 'application/json',
          'Accept': 'application/json'
         }
      }
      )
        .then(function(response){
          console.log(response)
          return response.json();
        })
        .then(function(myJson) {
          setData(myJson)
        });
    }
    useEffect(()=>{
      getData()
    },[])
     
    return (
        <div className="Iphone7">{
           
            data && data.length>0 && data.slice(0,1).map((item,index)=>
 
            <ul>
                <Paper
                    style={{
                    margin: "20px auto",
                    padding: "20px",
                    maxWidth: "350px",
                    position: "relative",
                    backgroundColor: "pink",
            }} >
                <p>Phone Details:</p>
                <img 
                    style={{
                        width: "100px",
                        margin: "10px 20px 0 0",
                      }}
                    src={item.imageFileName} 
                    alt={item.name} />
                <div>
                    <h2>{item.name}</h2>
                </div>


                <li>Manufacturer: {item.manufacturer}</li>
                <li>Description: {item.description}</li>
                <li>Color: {item.color}</li>
                <li>Price: {item.price}€</li>
                <li>Screen: {item.screen}</li>
                <li>Processor: {item.processor}</li>
                <li>Ram: {item.ram}GB</li>
                <Link to="/"><button>
                    Home
                </button>
                </Link>
                </Paper>
            </ul>
           
            )
            }
           
        </div>
   );


 }
    export default Iphone7;
