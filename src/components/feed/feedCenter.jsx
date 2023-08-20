import React from 'react'

function FeedCenter() {
  return (
    <div class="col-6 col-sm-6 col-md-6 col-lg-6 col-xl-6 ml-5"
         style={{marginRight: '-10px'}}
          >
            <div class="card">
              <div class="card-body">
                <input
                  type="text"
                  class="form-control content"
                  placeholder="       Bir gönderi başlat"
                />
                <span
                  ><button class="mediatext btn btn-light mt-3">
                    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" data-supported-dps="24x24" fill="#70B5F9" width="24" height="24" focusable="false">
    <path d="M19 4H5a3 3 0 00-3 3v10a3 3 0 003 3h14a3 3 0 003-3V7a3 3 0 00-3-3zm1 13a1 1 0 01-.29.71L16 14l-2 2-6-6-4 4V7a1 1 0 011-1h14a1 1 0 011 1zm-2-7a2 2 0 11-2-2 2 2 0 012 2z"></path>
  </svg><span class="ml-1 mediatext">Fotoğraf</span>
                  </button></span
                >
                <span
                  ><button class="mediatext btn btn-light mt-3 ml-4">
                    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" data-supported-dps="24x24" fill="#7FC15E" width="24" height="24" focusable="false">
    <path d="M19 4H5a3 3 0 00-3 3v10a3 3 0 003 3h14a3 3 0 003-3V7a3 3 0 00-3-3zm-9 12V8l6 4z"></path>
  </svg><span class="ml-1 mediatext">Video</span>
                  </button></span
                >
                <span
                  ><button class="mediatext btn btn-light mt-3 ml-4">
  <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" data-supported-dps="24x24" fill="#E7A33E" width="24" height="24" focusable="false">
    <path d="M3 3v15a3 3 0 003 3h12a3 3 0 003-3V3zm13 1.75A1.25 1.25 0 1114.75 6 1.25 1.25 0 0116 4.75zm-8 0A1.25 1.25 0 116.75 6 1.25 1.25 0 018 4.75zM19 18a1 1 0 01-1 1H6a1 1 0 01-1-1V9h14zm-5.9-3a1 1 0 00-1-1H12a3.12 3.12 0 00-1 .2l-1-.2v-3h3.9v1H11v1.15a3.7 3.7 0 011.05-.15 1.89 1.89 0 012 1.78V15a1.92 1.92 0 01-1.84 2H12a1.88 1.88 0 01-2-1.75 1 1 0 010-.25h1a.89.89 0 001 1h.1a.94.94 0 001-.88z"></path>
  </svg><span class="ml-1 mediatext">Etkinlik</span>
                  </button></span
                >
                <span
                  ><button class="mediatext btn btn-light mt-3 ml-2">
  <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" data-supported-dps="24x24" fill="#F5987E" width="24" height="24" focusable="false">
    <path d="M21 3v2H3V3zm-6 6h6V7h-6zm0 4h6v-2h-6zm0 4h6v-2h-6zM3 21h18v-2H3zM13 7H3v10h10z"></path>
  </svg><span class="ml-1 mediatext">Yazı yaz</span>
                  </button></span
                >
              </div>
            </div>
            <div>
              <hr />
            </div>
            <div class="card">
              <div class="card-header bg-white border-0">
                <img src="https://media-exp1.licdn.com/dms/image/C4E03AQEq7HNPXtEvvw/profile-displayphoto-shrink_200_200/0/1596227507685?e=1617235200&v=beta&t=Br4sHpegbSSX-GR1RnrEqRrZxTr55k3R80qTImOV0i0" 
                style={{borderRadius: '50%', width: '50px', height: '50px'}}/>
                <span 
                style={{fontFamily:'-apple-system, BlinkMacSystemFont, Roboto, Oxygen, Ubuntu, Cantarell, sans-serif', fontWeight: 'bold', fontSize: '14px', marginLeft: '8px'}} class="align-top"><a href="https://www.linkedin.com/in/malan/" target="_blank" style={{color: '#212529'}}>David J. Malan</a></span>
                <span class="float-right">
                  <i class="fas fa-ellipsis-h fa-md"></i>
                </span>
                <span class="align-middle" style={{marginLeft: '-96px', fontFamily:'-apple-system, BlinkMacSystemFont, Roboto, Oxygen, Ubuntu, Cantarell, sans-serif', fontSize: '13px', color: '#474747'}}>I teach CS50</span>
                <span class="align-bottom" style={{marginLeft: '-78px', fontFamily:'-apple-system, BlinkMacSystemFont, Roboto, Oxygen, Ubuntu, Cantarell sans-serif', fontSize: '13px', color: '#474747'}}>25a  <i class="fas fa-globe-americas fa-sm"></i></span>
              </div>
              <div>
                <p class="card-text ml-3" style={{fontFamily: '-apple-system, BlinkMacSystemFont, Roboto, Oxygen, Ubuntu, Cantarell, sans-serif', fontSize: '15px', color: 'black'}}>
                  They have done great things! Tebrikler Kodluyoruz!
                </p>
                <div>
                <img
                  src="https://pbs.twimg.com/media/Em2_xBbXUAEVDx1.jpg"
                  class="card-img-top mb-1"
                  alt="..."
                />
                </div>
                <span class="ml-3 mt-5">
                  <img src="https://static-exp1.licdn.com/sc/h/d310t2g24pvdy4pt1jkedo4yb" alt=""/>
                  </span>
                <span class="mt-5">
                  <img src="https://static-exp1.licdn.com/sc/h/5thsbmikm6a8uov24ygwd914f" alt=""/>
                </span>
                <span class="mt-5" style={{fontFamily:'-apple-system, BlinkMacSystemFont, Roboto, Oxygen, Ubuntu, Cantarell, sans-serif', fontSize: '13px', color: '#474747'}}>
                  <img src="https://static-exp1.licdn.com/sc/h/7fx9nkd7mx8avdpqm5hqcbi97" alt=""/>
                  958
              </span>
                <div class="card-footer bg-white mt-1">
                  <span
                  ><button class="ref btn btn-light btn-sm">
                    <i class="far fa-thumbs-up fa-md" style={{fontSize: '1.2rem'}}
                      ><span class="ml-2 mediatext">Beğen</span></i
                    >
                  </button></span
                >
                                <span
                  ><button class="ref btn btn-light btn-sm">
                    <i class="far fa-comment fa-md" style={{fontSize: '1.2rem'}}
                      ><span class="ml-2 mediatext">Yorum Yap</span></i
                    >
                  </button></span
                >
                                <span
                  ><button class="ref btn btn-light btn-sm">
                    <i class="fas fa-share fa-md" style={{fontSize: '1.2rem'}}
                      ><span class="ml-2 mediatext">Paylaş</span></i
                    >
                  </button></span
                >
                                <span
                  ><button class="ref btn btn-light btn-sm">
                    <i class="fas fa-paper-plane fa-md" style={{fontSize: '1.2rem'}}
                      ><span class="ml-2 mediatext">Gönder</span></i
                    >
                  </button></span
                >
                </div>
              </div>
            </div>
            <div class="card mt-2">
              <div class="card-header bg-white border-0">
                <img src="https://media-exp1.licdn.com/dms/image/C4D03AQElb-DNAAEmdw/profile-displayphoto-shrink_100_100/0/1612346194572?e=1617840000&v=beta&t=h3L8-3LHbhYLbAv1rsO744OwtBSZmYXvsEqdEEPrQyU" 
                      style={{borderRadius: '50%', width: '50px', height: '50px'}}/>
                  <span style={{fontFamily:'-apple-system, BlinkMacSystemFont, Roboto, Oxygen, Ubuntu, Cantarell, sans-serif', fontWeight: 'bold', fontSize: '14px', marginLeft: '8px'}} 
                      class="align-top">
                      <a href="https://www.linkedin.com/in/ozanhalis/" target="_blank" style={{color: '#212529'}}>
                      Ozan Halis İLTER
                      </a>
                  </span>
                <span class="float-right">
                  <i class="fas fa-ellipsis-h fa-md"></i>
                </span>
                <span class="align-middle" style={{marginLeft: '-110px', fontFamily:'-apple-system, BlinkMacSystemFont, Roboto, Oxygen, Ubuntu, Cantarell, sans-serif', fontSize: '13px', color: '#474747'}}>Team Leader at YetGen | CodeCraft | Kablosuz Beyin | IEEE MEF...</span>
                <span class="align-bottom" style={{marginLeft: '-377px', fontFamily:'-apple-system, BlinkMacSystemFont, Roboto, Oxygen, Ubuntu, Cantarell, sans-serif', fontSize: '13px', color: '#474747'}}>
                  1s  
                  <i class="fas fa-globe-americas fa-sm"></i>
                  </span>
              </div>
              <div>
                <p class="card-text ml-3" style={{fontFamily: '-apple-system, BlinkMacSystemFont, Roboto, Oxygen, Ubuntu, Cantarell, sans-serif', fontSize: '15px', color: 'black'}}>
                  Erhan Erkut hocamız ile birlikte YetGen'de harika şeyler yapmak için geliyoruz!
                </p>
                <div>
                <img
                  src="https://miro.medium.com/max/1080/1*gdDWFSvHDt57DS2zsh_0Bg.png"
                  class="card-img-top mb-1"
                  alt="..."
                />
                </div>
                <span class="ml-3 mt-5">
                  <img src="https://static-exp1.licdn.com/sc/h/d310t2g24pvdy4pt1jkedo4yb" alt=""/>
                </span>
                <span class="mt-5">
                  <img src="https://static-exp1.licdn.com/sc/h/5thsbmikm6a8uov24ygwd914f" alt=""/>
                </span>
                <span class="mt-5" style={{fontFamily:'-apple-system, BlinkMacSystemFont, Roboto, Oxygen, Ubuntu, Cantarell, sans-serif', fontSize: '13px', color: '#474747'}}>
                  <img src="https://static-exp1.licdn.com/sc/h/7fx9nkd7mx8avdpqm5hqcbi97" alt=""/>
                  210
                </span>
                <div class="card-footer bg-white mt-1">
                  <span
                  ><button class="ref btn btn-light btn-sm">
                    <i class="far fa-thumbs-up fa-md" style={{fontSize: '1.2rem'}}
                      ><span class="ml-2 mediatext">Beğen</span></i
                    >
                  </button></span
                  >
                                <span
                  ><button class="ref btn btn-light btn-sm">
                    <i class="far fa-comment fa-md" style={{fontSize: '1.2rem'}}
                      ><span class="ml-2 mediatext">Yorum Yap</span></i
                    >
                  </button></span
                >
                                <span
                  ><button class="ref btn btn-light btn-sm">
                    <i class="fas fa-share fa-md" style={{fontSize: '1.2rem'}}
                      ><span class="ml-2 mediatext">Paylaş</span></i
                    >
                  </button></span
                >
                                <span
                  ><button class="ref btn btn-light btn-sm">
                    <i class="fas fa-paper-plane fa-md" style={{fontSize: '1.2rem'}}
                      ><span class="ml-2 mediatext">Gönder</span></i
                    >
                  </button></span
                >
                </div>
              </div>
            </div>
              <div class="card mt-2">
              <div class="card-header bg-white border-0">
                <img src="https://media-exp1.licdn.com/dms/image/C4E03AQH4JkiPZoa8rA/profile-displayphoto-shrink_200_200/0/1599749901304?e=1617840000&v=beta&t=f7PcMP3AD9cAr7oMWdgIxVW4XESNdh2R_7alX7oVltY" style={{borderRadius: '50%', width: '50px', height: '50px'}}/>
                <span style={{fontFamily:'-apple-system, BlinkMacSystemFont, Roboto, Oxygen, Ubuntu, Cantarell, sans-serif', fontWeight: 'bold', fontSize: '14px', marginLeft: '8px'}} 
                class="align-top">
                  <a href="https://www.linkedin.com/in/ramazansancar/" target="_blank" style={{color: 'black'}}>
                      Ramazan Sancar
                  </a>
                </span>
                <span class="float-right">
                  <i class="fas fa-ellipsis-h fa-md"></i>
                </span>
                <span class="align-middle" style={{marginLeft: '-110px', fontFamily:'-apple-system, BlinkMacSystemFont, Roboto, Oxygen, Ubuntu, Cantarell, sans-serif', fontSize: '13px', color: '#474747'}}>Co-Founder at Kablosuz Beyin | Intern & Community Lead at Kod...</span>
                <span class="align-bottom" style={{marginLeft: '-383px', fontFamily:'-apple-system, BlinkMacSystemFont, Roboto, Oxygen, Ubuntu, Cantarell, sans-serif', fontSize: '13px', color: '#474747'}}>25a  <i class="fas fa-globe-americas fa-sm"></i></span>
              </div>
              <div>
                <p class="card-text ml-3" style={{fontFamily: '-apple-system, BlinkMacSystemFont, Roboto, Oxygen, Ubuntu, Cantarell, sans-serif', fontSize: '15px', color: '#212529'}}>
                  Cat Özel Harekat'a katılmak isteyenleri şöyle alalım..
                </p>
                <div>
                <img
                  src="https://media-exp1.licdn.com/dms/image/C4D22AQEm8KJthEJcwA/feedshare-shrink_800/0/1608202571866?e=1615420800&v=beta&t=YvPxACnfgaojpTgKIaeOd_apcdEzTVS82cM-kJYKv4U"
                  class="card-img-top mb-1"
                  alt="..."
                />
                </div>
                <span class="ml-3 mt-5"><img src="https://static-exp1.licdn.com/sc/h/d310t2g24pvdy4pt1jkedo4yb" alt=""/></span>
                <span class="mt-5"><img src="https://static-exp1.licdn.com/sc/h/5thsbmikm6a8uov24ygwd914f" alt=""/></span>
                <span class="mt-5" style={{fontFamily:'-apple-system, BlinkMacSystemFont, Roboto, Oxygen, Ubuntu, Cantarell', fontSize: '13px', color: '#474747'}}>
                  <img src="https://static-exp1.licdn.com/sc/h/7fx9nkd7mx8avdpqm5hqcbi97" alt=""/>
                  224
                  </span>
                <div class="card-footer bg-white mt-1">
                  <span
                  ><button class="ref btn btn-light btn-sm">
                    <i class="far fa-thumbs-up fa-md" style={{fontSize: '1.2rem'}}
                      ><span class="ml-2 mediatext">Beğen</span></i
                    >
                  </button></span
                >
                                <span
                  ><button class="ref btn btn-light btn-sm">
                    <i class="far fa-comment fa-md" style={{fontSize: '1.2rem'}}
                      ><span class="ml-2 mediatext">Yorum Yap</span></i
                    >
                  </button></span
                >
                                <span
                  ><button class="ref btn btn-light btn-sm">
                    <i class="fas fa-share fa-md" style={{fontSize: '1.2rem'}}
                      ><span class="ml-2 mediatext">Paylaş</span></i
                    >
                  </button></span
                >
                                <span
                  ><button class="ref btn btn-light btn-sm">
                    <i class="fas fa-paper-plane fa-md" style={{fontSize: '1.2rem'}}
                      ><span class="ml-2 mediatext">Gönder</span></i
                    >
                  </button></span
                >
                </div>
              </div>
            </div>
          </div>
  )
}

export default FeedCenter