
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
import Whatyouget from './Wharyouget';

function Presentation() {

  const [presentation, setPresentation] = useState([]);
  // const [presentation, setImage] = useState([]);



useEffect(()=>{
  getPresentation();
},[])





  const getPresentation = () => {
    axios.get(`${API}/ui-presentation`)
      .then((response) => {
        console.log("presentation", response.data)
        setPresentation(response.data)
        
      }).catch((error) => {
        console.log("error", error)
      })

  }
    return(


<section className="presentation-block">
<div className="presentation-block__main wrapper">
  <h3 className="presentation-block__title main-title main-title_white" data-title="Watch our UI presentation" id="ui">
    <span className="main-title__text">{presentation.Heading}</span>
  </h3>
  <div className="ui-slider js-slider">
    <div className="ui-slider__arrows arrows-1 js-slider-arrows">
    </div>
    <div className="ui-slider__all">
      <div className="ui-slider__list-wrap js-slider-loader loaded">
        <div className="ui-slider__list js-slider-list">
          <div className="ui-slider__item js-slider-item">
            <div className="ui-slider__image-wrap">
              {}
              <img className="ui-slider__image" src={app1} data-lazy={app1} alt="" />
            </div>
          </div>
          <div className="ui-slider__item js-slider-item">
            <div className="ui-slider__image-wrap">
              <img className="ui-slider__image" src={app2} data-lazy={app2} alt="" />
            </div>
          </div>
          <div className="ui-slider__item js-slider-item">
            <div className="ui-slider__image-wrap">
              <img className="ui-slider__image" src={app3} data-lazy={app3} alt="" />
            </div>
          </div>
          <div className="ui-slider__item js-slider-item">
            <div className="ui-slider__image-wrap">
              <img className="ui-slider__image" src={app4} data-lazy={app4} alt="" />
            </div>
          </div>
          <div className="ui-slider__item js-slider-item">
            <div className="ui-slider__image-wrap">
              <img className="ui-slider__image" data-lazy={app5} src={app5} alt="" />
            </div>
          </div>
          <div className="ui-slider__item js-slider-item">
            <div className="ui-slider__image-wrap">
              <img className="ui-slider__image" src="./assets/img/App-1.png" data-lazy="./assets/img/App-1.png" alt="" />
            </div>
          </div>
          <div className="ui-slider__item js-slider-item">
            <div className="ui-slider__image-wrap">
              <img className="ui-slider__image" src="./assets/img/App-2.png" data-lazy="./assets/img/App-2.png" alt="" />
            </div>
          </div>
          <div className="ui-slider__item js-slider-item">
            <div className="ui-slider__image-wrap">
              <img className="ui-slider__image" src="./assets/img/App-3.png" data-lazy="./assets/img/App-3.png" alt="" />
            </div>
          </div>
          <div className="ui-slider__item js-slider-item">
            <div className="ui-slider__image-wrap">
              <img className="ui-slider__image" src="./assets/img/App-4.png" data-lazy="./assets/img/App-4.png" alt="" />
            </div>
          </div>
          <div className="ui-slider__item js-slider-item">
            <div className="ui-slider__image-wrap">
              <img className="ui-slider__image" src="./assets/img/App-1.png" data-lazy="./assets/img/App-1.png" alt="" />
            </div>
          </div>
          <div className="ui-slider__item js-slider-item">
            <div className="ui-slider__image-wrap">
              <img className="ui-slider__image" src="./assets/img/App-2.png" data-lazy="./assets/img/App-2.png" alt="" />
            </div>
          </div>
          <div className="ui-slider__item js-slider-item">
            <div className="ui-slider__image-wrap">
              <img className="ui-slider__image" src="./assets/img/App-3.png" data-lazy="./assets/img/App-3.png" alt="" />
            </div>
          </div>
        </div>
        <div className="ui-slider__bg">
          <img className="ui-slider__bg-left" src={app1} data-lazy="assets/img/svg/presentation-left.svg" alt="" />
          <img className="ui-slider__bg-right" src="data:image/gif;base64,iVBORw0KGgoAAAANSUhEUgAAAAEAAAABCAQAAAC1HAwCAAAAC0lEQVR42mNkYAAAAAYAAjCB0C8AAAAASUVORK5CYII=" data-lazy="assets/img/svg/presentation-right.svg" alt="" />
        </div>
      </div>
    </div>
  </div>
</div>
<div className="presentation-block__bg" />
</section>

    )}
    export default Presentation;