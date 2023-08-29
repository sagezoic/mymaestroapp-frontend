import React, { useState,useEffect } from 'react'
import config from "../../config";


function MaestroCard({List}) {
    const [dpUrl, setDpUrl] = useState();
    const [randomRating, setRandomRating] = useState(0);
    const [randomFollower, setRandomFollower]=useState(0);

 useEffect(()=>
 {
    if(List!=null)
    setDpUrl(
        config.serverURL + "/users/finddp?path=" +List.dpUrl)
        setRandomRating(Math.random() * 10);
        setRandomFollower(Math.floor(Math.random()*100));
 },[]);
 
 
    

    debugger;
  return (
            <div class="card mb-4">
                <div class="card-body">
                    <div class="text-center">
                        <img src={dpUrl} class="rounded-circle avatar-xl mb-3" style={{width:"200px",height:"200px"}} alt=""/>
                        <h4 class="mb-0">{List.firstName+" "+List.lastName}</h4>
                        <p class="mb-0">{List.interest}</p>
                    </div>
                    <div class="d-flex justify-content-between border-bottom py-2 mt-4">
                        <span>Email</span>
                        <span class="text-dark">{List.email}</span>
                    </div>
                    <div class="d-flex justify-content-between border-bottom py-2">
                        <span>Instructor Rating</span>
                        <span class="text-warning">
                        {randomRating.toFixed(1)}
                         <i class="mdi mdi-star"></i>
                        </span>
                    </div>
                    <div class="d-flex justify-content-between pt-2">
                        <span>MAESTRO {List.interest} FOLLOWER</span>
                        <span class="text-dark"> {randomFollower} </span>
                    </div>
                </div>
            </div>
        )
}

export default MaestroCard