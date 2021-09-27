import React from 'react';
import Header from '../Header';
import './service.css'


const Services =()=>{
return(
    <>
   <Header></Header>
   <div className="ourteamheader" style={{
        width:"100%",
        height:"60vh",
        backgroundRepeat:"no-repeat",
        backgroundImage:`url(https://www.cliqvenus.com/wp-content/uploads/2019/01/our-services.jpg)`,
        backgroundPosition:"center",
        backgroundSize:"cover"

    }}>
    </div>
    <div class='container-fluid mx-auto mt-5 mb-5 col-12' style={{textAlign:"center"}}>
    <div class="hd">Why People Believe in Us</div>
    <p><small class="text-muted">Services:  you have to write brief summary for each ( 5 lines each), when user click on more, it will open a new page and describe the details may be 50 words for each, please looks at the below example.
</small></p>

<div className="container">
    <div className="row" style={{justifyContent:"center"}}>
        <div class="card col-md-4 col-12">
            <div class="card-content">
                <div class="card-body"> <img class="img" src="https://i.imgur.com/S7FJza5.png" />
                    <div class="shadow"></div>
                    <div class="card-title"> Connect People </div>
                    <div class="card-subtitle">
                        <p> <small class="text-muted">We spent thousands of hours creating on algorithm that does this for you in seconds. We collect a small fee from the professional after they meet your</small> </p>
                        <a className="first-screen__button button" href="#">
                      <span className="button__text">Read More</span>
                    </a>
                    </div>

                </div>
            </div>
        </div>
        <div class="card col-md-4 col-12 ml-2">
            <div class="card-content">
                <div class="card-body"> <img class="img" src="https://i.imgur.com/xUWJuHB.png" />
                    <div class="card-title">Share Business Card </div>
                    <div class="card-subtitle">
                        <p> <small class="text-muted"> We don't accept ads from anyone. We use actual data to match you who the best person for each job </small> </p>
                        <a className="first-screen__button button" href="#">
                      <span className="button__text">Read More</span>
                    </a>
                    </div>
                </div>
            </div>
        </div>
        <div class="card col-md-4 col-12 ml-2">
            <div class="card-content">
                <div class="card-body"> <img class="img rck" src="https://i.imgur.com/rG3CGn3.png" />
                    <div class="card-title">One on One Chat</div>
                    <div class="card-subtitle">
                        <p> <small class="text-muted">Buying or selling a home is often the largest transaction anyone does in their life. we guide you through the process so that you can be confident in reaching your dream outcome.</small> </p>
                        <a className="first-screen__button button" href="#">
                      <span className="button__text">Read More</span>
                    </a>
                    </div>
                </div>
            </div>
        </div>
        <div class="card col-md-4 col-12 ml-2">
            <div class="card-content">
                <div class="card-body"> <img class="img rck" src="https://i.imgur.com/rG3CGn3.png" />
                    <div class="card-title">Group Chatt</div>
                    <div class="card-subtitle">
                        <p> <small class="text-muted">Buying or selling a home is often the largest transaction anyone does in their life. we guide you through the process so that you can be confident in reaching your dream outcome.</small> </p>
                        <a className="first-screen__button button" href="#">
                      <span className="button__text">Read More</span>
                    </a>
                    </div>
                </div>
            </div>
        </div>
        <div class="card col-md-4 col-12 ml-2 container">
            <div class="card-content">
                <div class="card-body"> <img class="img rck" src="https://i.imgur.com/rG3CGn3.png" />
                    <div class="card-title">Schedule Meetings</div>
                    <div class="card-subtitle">
                        <p> <small class="text-muted">Buying or selling a home is often the largest transaction anyone does in their life. we guide you through the process so that you can be confident in reaching your dream outcome.</small> </p>
                        <a className="first-screen__button button" href="#">
                      <span className="button__text">Read More</span>
                    </a>
                    </div>
                </div>
            </div>
        </div>
        <div class="card col-md-4 col-12 ml-2">
            <div class="card-content">
                <div class="card-body"> <img class="img rck" src="https://i.imgur.com/rG3CGn3.png" />
                    <div class="card-title">Business Shoutout</div>
                    <div class="card-subtitle">
                        <p> <small class="text-muted">Buying or selling a home is often the largest transaction anyone does in their life. we guide you through the process so that you can be confident in reaching your dream outcome.</small> </p>
                        <a className="first-screen__button button" href="#">
                      <span className="button__text">Read More</span>
                    </a>
                    </div>
                </div>
            </div>
        </div>
    </div>
    </div>
    <div class="ft">
        <p class="chk"><small class="text-muted">Still not sure?</small></p>
        <div class="btn btn-primary">Read All Testimonials</div>
      
    </div>
</div>
    </>
)


}
export default Services;