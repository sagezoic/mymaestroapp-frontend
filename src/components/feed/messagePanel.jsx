import React from 'react'

function MessagePanel() {
  return (
    <nav
          class="navbar navbar-expand-xl navbar-light bg-light position-sticky fixed-bottom border bg-white"
          style={{width: '300px', height: '50px', position: '-webkit-sticky', borderRadius: '5px', marginLeft: 'auto', right: '15px'}}
        >
          <a class="navbar-brand" href="#"
            ><img
              src="https://media-exp1.licdn.com/dms/image/C4D03AQFpMjVJ_N2wRQ/profile-displayphoto-shrink_100_100/0/1582787654653?e=1616630400&v=beta&t=C1X2NxhcN0R0GmELl1Ew7BeOoyGbwJXCw8c7lHm6XuA"
              style={{width: '30px', height: '30px', borderRadius: '50%'}}
          /></a>
          <span style={{fontSize: '14px', fontWeight: 'bold', fontFamily:'Arial, Helvetica, sans-serif'}}><strong>Mesajlaşma</strong></span>
          <span class="offset-3">
            <img src="/assets/edit-regular.svg" width="15px" height="15px" />
          </span>
          <span>
            <i class="fas fa-ellipsis-h fa-sm ml-3"></i></span>
          <span><i class="fas fa-chevron-up fa-sm ml-3"></i></span>
        </nav>
  )
}

export default MessagePanel