import './App.css';
import { useEffect, useState } from 'react';
import './assets/css/main.css'
import popular from './assets/img/most-popular.png';
import axios from "axios"
import API from './config';

function Mostpopular() {
  
    const [dataPopular, setDataPopular] = useState([])
  
  
    useEffect(() => {
        getMostPopular();
    
      }, []);

    const getMostPopular = () => {
        axios.get(`${API}/most-popular`)
          .then((response) => {
            console.log("responseMostPopular", response.data)
            setDataPopular(response.data)
          }).catch((error) => {
            console.log("error", error)
          })
    
      }




return(
<article className="most-popular">
<div className="most-popular__main wrapper">
  <div className="most-popular__cols">
    <div className="most-popular__right">
  
      <h2 className="most-popular__title main-title main-title_align-left" data-title={dataPopular.titleHead}>
  
  
       {dataPopular&&

<span className="main-title__text">{dataPopular.titleHead}</span>
       }
      </h2>
      <p className="most-popular__text">{dataPopular.Description}</p>
      <ul className="check-list">
        <li className="check-list__item">{dataPopular.shortPoint1}</li>
        <li className="check-list__item">{dataPopular.shortPoint2}</li>
        <li className="check-list__item">{dataPopular.shortPoint3}</li>
      </ul>
    </div>
    <div className="most-popular__left">
        {dataPopular&&dataPopular.image&&

<img className="most-popular__image" src={API+dataPopular.image.url} data-lazy={API+dataPopular.image.url} alt="" />
        }
     
    </div>
  </div>
</div>
<img className="most-popular__left-element side-element" src="data:image/gif;base64,iVBORw0KGgoAAAANSUhEUgAAAAEAAAABCAQAAAC1HAwCAAAAC0lEQVR42mNkYAAAAAYAAjCB0C8AAAAASUVORK5CYII=" data-lazy="assets/img/svg/side-element_2.svg" alt="" />
</article>
)}

export default Mostpopular;