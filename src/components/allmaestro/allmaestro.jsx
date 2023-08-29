import React,{useState, useEffect} from 'react'
import { Link } from "react-router-dom";
import "../../css/style.css";
import MaestroCard from './maestrocard'
import axios from "axios";
import config from "../../config";

function AllMaestro() {
    const [maestroList, setMaestroList] = useState([]);

    const userId=sessionStorage.getItem("userId");
    const token=sessionStorage.getItem("jwt");

    // const [searchText, setSearchText]=useState("All");
    
    // const OnSearch = (args) => {
    //     setSearchText(args);
    //   };

      if (token != null)
    axios.defaults.headers.common["Authorization"] = "Bearer " + token;
    
    debugger;

    useEffect(() => {
        getMaestro();
      }, []);
      
    const getMaestro = () => {
        axios
          .get(config.serverURL +`/users/getallmeastro`)
          .then((response) => {
            debugger;
            console.log(response);
            setMaestroList(response.data.data);
            debugger;
            console.log(maestroList);
            //debugger;
          })
          .catch((error) => {
            console.log(error);
          });
      };

  return (
    <div className="container">
        <div className="row container-fluid row-cols-1 row-cols-md-3">
            <div className='col'>
            {maestroList.map((list) =>{
                debugger;
                return(
                    <MaestroCard List={list}
                    key={list.id}> 
                    </MaestroCard>
                )
            }
            )}
            </div>
            
            {/* <div className='col'>
                <MaestroCard />
            </div>
            <div className='col'>
                <MaestroCard />
            </div>
            <div className='col'>
                <MaestroCard />
            </div>
            <div className='col'>
                <MaestroCard />
            </div>
            <div className='col'>
                <MaestroCard />
            </div>
            <div className='col'>
                <MaestroCard />
            </div> */}
      </div>
    </div>
  )
}

export default AllMaestro