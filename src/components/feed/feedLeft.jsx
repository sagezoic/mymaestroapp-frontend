import React from 'react'

function FeedLeft() {
  return (
        <div class="col-2 col-sm-2 col-md-2 col-lg-2 col-xl-2">
            <div class="card" style={{width: '14rem'}}>
                <div
                    class="card-header text-center"
                    style={{
                    backgroundImage: 'url(https://thumbor.forbes.com/thumbor/fit-in/1200x0/filters%3Aformat%28jpg%29/https%3A%2F%2Fblogs-images.forbes.com%2Falejandrocremades%2Ffiles%2F2018%2F12%2Fbusiness-3605367_1920-1200x741.jpg)',
                    height: '53px'
                    }}
                >
                    <img
                    src= {require('../../images/users/user1/dp.jpg')}
                    class=""
                    style={{
                        borderRadius: '50%',
                        border: '2px solid white',
                        width: '70px',
                        height: '70px'
                    }}
                    />
                </div>
                <div class="card-body">
                    <p class="card-title text-center mt-4 header">
                    <a href="https://www.linkedin.com/in/cengizcmataraci/" target="_blank" 
                        style={{color: '#212529'}}
                    >
                        Tamnnah Bhatia
                    </a>
                    </p>
                    <div
                    style={{
                        fontSize: '12px',
                        textAlign: 'center',
                        marginTop: '-10px',
                        marginBottom: '10px',
                        color: '#5f5f5f'
                    }}
                    >
                    Software Developer at MyMaestro - SDE IV
                    </div>
                    <hr />
                    <div class="card-text">
                    <div>
                        <span class="view">Followers </span
                        ><span class="float-right view mt-1" style={{color: '#0a66c2'}}
                        >447</span
                        >
                    </div>
                    <div>
                        <span class="view">Following </span
                        ><span class="float-right view mt-1" style={{color: '#0a66c2'}}
                        >150</span
                        >
                    </div>
                    </div>
                </div>
                <div class="card-footer bg-white">
                    <i class="fas fa-bookmark mr-2"></i
                    ><span class="ms-4" style={{fontSize: '12px', fontWeight: 'bold'}}
                    >Saved Posts</span
                    >
                </div>
            </div>

            <div class="card mt-2" style={{width: '14rem'}}>
                <div
                    class="card-header bg-white border-0"
                    style={{marginBottom: '-22px', fontSize: '18px'}}
                >
                    My Favorite Maestro
                </div>
                <div class="card-body">
                    <div class="card-title">
                    <img
                        src={require('../../images/users/user1/favMaestro/m1.jpg')}
                        style={{width: '32px', height: '32px'}}
                    />
                    <div
                        style={{
                        fontSize: '15px',
                        fontWeight: 'bold',
                        marginTop: '-35px',
                        marginLeft: '37px',
                        }}
                    >
                        Lomas Chaudhary
                    </div>
                    <div
                        class="d-flex justify-content-between"
                        style={{
                        fontSize: '13px',
                        fontWeight: 'bold',
                        color: 'gray',
                        marginLeft: '38px'
                        }}
                    >
                        Followers
                        <span class="float-right" style={{color: '#0a66c2'}}>10</span>
                    </div>
                    </div>
                </div>
            </div>
            
            <div
            class="card mt-2"
            style={{width: '14rem', position: 'sticky', top: '4rem', overflow: 'visible'}}
            >
            <div
                class="card-header bg-white border-0"
                style={{marginBottom: '-22px', fontSize: '12px'}}
            >
                En Yeni
            </div>
            <div class="card-body">
                <div class="card-title">
                <div>
                    <i
                    class="fas fa-hashtag"
                    style={{fontSize: '13px', fontWeight: 'bold'}}
                    ></i
                    ><span
                    class="ml-2 fontWeight-bold"
                    style={{fontSize: '13px', color: '#5f5f5f'}}
                    >kodluyoruz</span
                    >
                </div>
                <div>
                    <i
                    class="fas fa-hashtag"
                    style={{fontSize: '13px', fontWeight: 'bold'}}
                    ></i
                    ><span
                    class="ml-2 fontWeight-bold"
                    style={{fontSize: '13px', color: '#5f5f5f'}}
                    >front-end</span
                    >
                </div>
                <div>
                    <i
                    class="fas fa-hashtag"
                    style={{fontSize: '13px', fontWeight: 'bold'}}
                    ></i
                    ><span
                    class="ml-2 fontWeight-bold"
                    style={{fontSize: '13px', color: '#5f5f5f'}}
                    >html</span
                    >
                </div>
                <div>
                    <i
                    class="fas fa-hashtag"
                    style={{fontSize: '13px', fontWeight: 'bold'}}
                    ></i
                    ><span
                    class="ml-2 fontWeight-bold"
                    style={{fontSize: '13px', color: '#5f5f5f'}}
                    >css</span
                    >
                </div>
                <div>
                    <i
                    class="fas fa-hashtag"
                    style={{fontSize: '13px', fontWeight: 'bold'}}
                    ></i
                    ><span
                    class="ml-2 fontWeight-bold"
                    style={{fontSize: '13px', color: '#5f5f5f'}}
                    >bootstrap</span
                    >
                </div>
                <div class="mt-3 categories">Gruplar</div>
                <span class="mt-2 categories">Etkinlikler</span>
                <span
                    class="float-right mb-5"
                    style={{fontSize: '23px', color: '#5f5f5f'}}
                    >+</span
                >
                <div class="mt-3 mb-1 categories">Takip edilen hashtagler</div>
                <div>
                    <i
                    class="fas fa-hashtag"
                    style={{fontSize: '13px', fontWeight: 'bold'}}
                    ></i
                    ><span
                    class="ml-2 fontWeight-bold"
                    style={{fontSize: '13px', color: '#5f5f5f'}}
                    >kodluyoruz</span
                    >
                </div>
                <div>
                    <i
                    class="fas fa-hashtag"
                    style={{fontSize: '13px', fontWeight: 'bold'}}
                    ></i
                    ><span
                    class="ml-2 fontWeight-bold"
                    style={{fontSize: '13px', color: '#5f5f5f'}}
                    >front-end</span
                    >
                </div>
                </div>
            </div>
            <div
                class="card-footer bg-white"
                style={{fontSize: '13px', fontWeight: 'bold', textAlign: 'center'}}
            >
                Daha fazla keşfet
            </div>
            </div>
        </div>
  )
}

export default FeedLeft