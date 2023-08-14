import React, { useState } from 'react'
import {useHistory} from 'react-router-dom';

function NotFound() {
    return (
        <div className='main-container'>
            <h1>Not Found what you looking for! 404</h1>
            <br></br>
            <br></br>
            <a href='/'>go back to home....</a>
        </div>
    )
}

export default NotFound