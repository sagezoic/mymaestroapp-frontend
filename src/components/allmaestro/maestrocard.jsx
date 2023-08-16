import React from 'react'

function MaestroCard() {
  return (
            <div class="card mb-4">
                <div class="card-body">
                    <div class="text-center">
                        <img src={require("../../images/maestros/avatar.jpg")} class="rounded-circle avatar-xl mb-3" alt=""/>
                        <h4 class="mb-0">Wade Warren</h4>
                        <p class="mb-0">Web Developer, Designer</p>
                    </div>
                    <div class="d-flex justify-content-between border-bottom py-2 mt-4">
                        <span>Students</span>
                        <span class="text-dark">50,274</span>
                    </div>
                    <div class="d-flex justify-content-between border-bottom py-2">
                        <span>Instructor Rating</span>
                        <span class="text-warning">
                        4.5 <i class="mdi mdi-star"></i>
                        </span>
                    </div>
                    <div class="d-flex justify-content-between pt-2">
                        <span>Courses</span>
                        <span class="text-dark"> 12 </span>
                    </div>
                </div>
            </div>
        )
}

export default MaestroCard