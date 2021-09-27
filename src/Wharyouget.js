
import './App.css';
import './assets/css/main.css'
import bannerFront from './assets/img/new-1.png';
import app1 from './assets/img/App-1.png';
import app2 from './assets/img/App-2.png';
import app3 from './assets/img/App-3.png';
import app4 from './assets/img/App-4.png';
import app5 from './assets/img/App-5.png';
import axios from "axios"
import bannerButton from './assets/img/new-2.png';
import { useEffect, useState } from 'react';
import bannerPhone1 from './assets/img/App-1.png';
import bannerPhone2 from './assets/img/App-2.png';
import subscription from './assets/img/svg/subscription.svg';
import popular from './assets/img/most-popular.png';
import feature1 from './assets/img/feature_1.png';
import feature2 from './assets/img/feature_2.png';
import feature3 from './assets/img/feature_3.png';
import { Carousel } from "react-bootstrap";
import Header from './Header';
import Footer from './Footer'
import Mostpopular from './Mostpopular'
import API from './config';
import { Link } from 'react-router-dom';

function Whatyouget() {
    const [dataPopular, setDataPopular] = useState([])


    useEffect(() => {


        getMostPopular();
    
      }, []);

    const getMostPopular = () => {
        axios.get(`${API}/data-populars`)
          .then((response) => {
            console.log("responseMostPopular test", response.data)
            setDataPopular(response.data)
          }).catch((error) => {
            console.log("error", error)
          })
    
      }
return(
<section className="what-you-get">
<div className="what-you-get__main wrapper">
  <h3 className="main-title" data-title="See what you will get with us" id="features">
    <span className="main-title__text">See what you will get with&nbsp;us</span>
  </h3>
  <div className="features">
    {dataPopular.map((x)=>{
      return(  
     
        <article className="feature">
      <div className="feature__bg">
        <img className="feature__image" src={feature1} data-lazy={feature1} alt="" />
        <div className="feature__content">
        <Link to="#" >
          <h4 className="feature__title">{x.title1}</h4>
          </Link>
          <p className="feature__text">{x.titleHead1}</p>
        </div>
      </div>
    </article>
   )

    })}

    {/* <article className="feature">
      <div className="feature__bg">
        <img className="feature__image" src={feature2} data-lazy={feature2} alt="" />
        <div className="feature__content">
          <h4 className="feature__title">{dataPopular.titlt2}</h4>
          <p className="feature__text">{dataPopular.titleHead2}</p>
        </div>
      </div>
    </article>
    <article className="feature">
      <div className="feature__bg">
        <img className="feature__image" src={feature3} data-lazy={feature3} alt="" />
        <div className="feature__content">
          <h4 className="feature__title">{dataPopular.titile3}</h4>
          <p className="feature__text">{dataPopular.titleHead3}</p>
        </div>
      </div>
    </article> */}
  </div>
</div>
<img className="what-you-get__right-element side-element" src="data:image/gif;base64,iVBORw0KGgoAAAANSUhEUgAAAAEAAAABCAQAAAC1HAwCAAAAC0lEQVR42mNkYAAAAAYAAjCB0C8AAAAASUVORK5CYII=" data-lazy="assets/img/svg/side-element_1.svg" alt="" />
</section>
)}
export default Whatyouget;