
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
import Presentation from './Presentation';

function Home() {

  const [navData, setNavData] = useState([])
  const [heroData, setHeroData] = useState([])
  const [dataPopular, setDataPopular] = useState([])
  const [faq, setFaq] = useState([])
  const [news, setNews] = useState([])
  const [client, setClient] = useState([])
  const [index, setIndex] = useState(0);
  const result =[
    {
      text:'Work Faster With Powerful Tools',
      image:bannerPhone1
    },
    {
      text:'A PERFECT PLACE TO CONVERGE,CONNECT & CELEBRATE',
      image:bannerPhone2
    },
    {
      text:'test3',
      image:bannerPhone1
    },

  ]
  useEffect(() => {

    getNavData();
    getHeroData();
    getMostPopular();
    getFaq();
    getPricing();
    getNews();
    getClient();
  }, []);
  const [pricing, setPricing] = useState([])



    const getPricing = () => {
        axios.get(`${API}/pricingplans`)
          .then((response) => {
            console.log("pricingandplan", response.data)
            setPricing(response.data)
          }).catch((error) => {
            console.log("error", error)
          })
    
      }
    const getNews = () => {
        axios.get(`${API}/updates`)
          .then((response) => {
            console.log("news data", response.data)
            setNews(response.data)
          }).catch((error) => {
            console.log("error", error)
          })
    
      }
    const getClient = () => {
        axios.get(`${API}/clientreviews`)
          .then((response) => {
            console.log("news client data", response.data)
            setClient(response.data)
          }).catch((error) => {
            console.log("error", error)
          })
    
      }

  const getNavData = () => {
    axios.get(`${API}/nav-bars`)
      .then((response) => {
        console.log("response", response.data[0])
        setNavData(response.data[0])
      }).catch((error) => {
        console.log("error", error)
      })

  }
  const getHeroData = () => {
    axios.get(`${API}/heroes`)
      .then((response) => {
        console.log("herodata", response.data)
        setHeroData(response.data)
      }).catch((error) => {
        console.log("error", error)
      })

  }
  const getFaq = () => {
    axios.get(`${API}/faqs`)
      .then((response) => {
        console.log("faqdata", response.data)
        setFaq(response.data)
      }).catch((error) => {
        console.log("error", error)
      })

  }

  const getMostPopular = () => {
    axios.get(`${API}/data-populars`)
      .then((response) => {
        console.log("responseMostPopular", response.data[0])
        setDataPopular(response.data[0])
      }).catch((error) => {
        console.log("error", error)
      })

  }

  const   handleSelect = (selectedIndex, e) => {
    setIndex(selectedIndex);
  };

  return (
    <div className="loaded">
      <div className="page-container">
        {/* BEGIN HEADER */}
<Header/>
        {/* HEADER END */}
        {/* MOBILE NAVIGATION */}
        <div className="hide-mob js-mob-hide">
          <div className="hide-mob__bg">
            <button className="hide-mob__close close-button close-button_orange js-mob-close" />
            <div className="hide-mob__mask js-mob-close" />
            <div className="hide-mob__content js-to-1" />
            <div className="hide-mob__bottom js-to-2" />
          </div>
        </div>
        {/* MOBILE NAVIGATION END */}
        {/* BEGIN MAIN */}
        <main className="main">
          {/* BEGIN FIRST SCREEN */}
          <section className="first-screen">
            <div className="first-screen__main wrapper">
              <div className="first-screen__max">
                <div className="first-screen__content">
                  <div className="first-screen__cell">
                    {heroData&&heroData[index]&&
 <span className="above-title">{heroData[index].title}</span>
                    }
                   
                    {heroData&&heroData[index]&&

<h1 className="first-screen__title">{heroData[index].titleHead}</h1>
                    }
                    <h2 style={{color:"white"}}>{heroData&&heroData[index]&&heroData[index].subtitile}</h2>
                    
                    {/* <h1 className="first-screen__title">{data.textfield}</h1>
                    <h1 className="first-screen__title">{data.textfield2}</h1>
                    <h1 className="first-screen__title">{data.textfield3}</h1> */}
                    {/* <p class="first-screen__text">Laboris culpa ea incididunt dolore ipsum tempor duis&nbsp;do ullamco eiusmod officia magna ad id.</p> */}
                    <a className="first-screen__button button" href="#">
                      <span className="button__text">Learn More</span>
                    </a>
                  </div>
                </div>
                {/* <img className="first-screen__phone" src={bannerPhone} data-lazy={bannerPhone} alt="" data-lazy-mob /> */}
                <img className="first-screen__elements" src="data:image/gif;base64,iVBORw0KGgoAAAANSUhEUgAAAAEAAAABCAQAAAC1HAwCAAAAC0lEQVR42mNkYAAAAAYAAjCB0C8AAAAASUVORK5CYII=" data-lazy="assets/img/svg/first-screen-elements.svg" alt="" data-lazy-mob />
              <div className="first-screen__elements2">
              <Carousel activeIndex={index} nextIcon="" nextLabel="" prevIcon="" prevLabel=''   onSelect={handleSelect} >{
                heroData.map((x)=>(

                  <Carousel.Item>
      
                  {/* <div className="container "> */}
                    <div className="row align-items-center ">
                      <div className="col">
                      <div className="first-screen__content">
                        {/* <div className="first-screen__cell">
                          <span className="above-title">TEST</span>
                          <h1 className="first-screen__title">A PERFECT PLACE TO CONVERGE,CONNECT & CELEBRATE A LONGLASTING RELATIONSHIP WITH PEOPLE</h1>
                        
                          <a className="first-screen__button button" href="#">
                            <span className="button__text">Learn More</span>
                          </a>
                        </div> */}
                      </div>
                      </div>
                      <div className="col first-screen__phone  position-relative">
                      <img className="img-fluid header-image" src={API+x.phoneImages.map(y=>y.url)} data-lazy={x.image} alt="" data-lazy-mob />
                      {/* <img className="first-screen__elements" src="data:image/gif;base64,iVBORw0KGgoAAAANSUhEUgAAAAEAAAABCAQAAAC1HAwCAAAAC0lEQVR42mNkYAAAAAYAAjCB0C8AAAAASUVORK5CYII=" data-lazy="assets/img/svg/first-screen-elements.svg" alt="" data-lazy-mob /> */}
                       <div className="titleimg">{x.titleHead}</div>
                      </div>

                    </div>
                  {/* </div> */}
             
              </Carousel.Item>

                 ) )
              }
       
       
        </Carousel>
              </div>
              
              </div>
            </div>
              <div className="first-screen__pseudotext" data-title="The Human Hub … Transforming Relationships" />
            
            
            <img className="first-screen__bg-1" data-bg={bannerFront} src={bannerFront} data-lazy-mob />
            <img className="first-screen__bg-2" data-bg={bannerButton} src={bannerButton} data-lazy-mob />
          </section>
          {/* FIRST SCREEN END */}
          <div className="main-top">
            {/* BEGIN THE MOST POPULAR */}
           <Mostpopular/>
            {/* THE MOST POPULAR END */}
            {/* BEGIN WHAT YOU GET */}
           <Whatyouget/>
            {/* WHAT YOU GET END */}
          </div>
          {/* BEGIN PRESENTATION */}
<Presentation/>
          {/* PRESENTATION END */}
          {/* BEGIN DOWNLOAD */}
          <section className="downloads-block">
            <div className="downloads-block__main wrapper">
              <div className="downloads-block__cols">
                <div className="downloads-block__left">
                  <div className="downloads">
                    <h3 className="downloads__title main-title main-title_align-left" data-title="Easy download and ready to use" id="download">
                      <span className="main-title__text">Easy download and ready to use</span>
                    </h3>
                    <p className="downloads__text">Velit occaecat duis occaecat nostrud. Veniam occaecat id ea Lorem est officia excepteur cupidatat consectetur. Labore do nulla ipsum dolore ipsum. Proident excepteur ex aliqua cupidatat adipisicing.</p>
                    <div className="downloads__buttons">
                      <div className="downloads__button-wrap">
                        <a className="downloads__button button button_big" target="_blank" href="https://play.google.com/store/apps/details?id=com.nobhub.app">
                          <span className="button__cols">
                            <span className="button__col">
                              <span className="button__icon button__icon_1" />
                            </span>
                            <span className="button__col">
                              <span className="button__text-small">Download on the</span>
                              <span className="button__text-big">Google play</span>
                            </span>
                          </span>
                        </a>
                      </div>
                      <div className="downloads__button-wrap">
                        <a className="downloads__button button button_big button_border" href="#">
                          <span className="button__cols">
                            <span className="button__col">
                              <span className="button__icon button__icon_2" />
                            </span>
                            <span className="button__col">
                              <span className="button__text-small">Download on the</span>
                              <span className="button__text-big">App store</span>
                            </span>
                          </span>
                        </a>
                      </div>
                    </div>
                  </div>
                </div>
                <div className="downloads-block__right">
                  <div className="prices">
                    {pricing.map((x)=>{

                      return(
                        <div className="prices__col">
                        <div className="prices__top">
                          <h4 className="prices__title">{x.planTitle}</h4>
                          <span className="prices__cost">{x.planPricing}<span></span></span>
                          <span className="prices__per">/{x.duration}</span>
                        </div>
                        <ul className="unordered">
                          {x.plandetails.map((y)=>{
                            return(<li className="unordered__item">{y.planPoint}</li>)
                          })
                            
                          }
                          
                          {/* <li className="unordered__item">Veniam occaecat id ea</li>
                          <li className="unordered__item"><b>Labore do nulla ipsum</b></li>
                          <li className="unordered__item">Culpa non ex tempor qui</li> */}
                        </ul>
                      </div>
                      )
                    })}
               
                    {/* <div className="prices__col">
                      <div className="prices__top">
                        <h4 className="prices__title">Premium</h4>
                        <span className="prices__cost">$12<span>.99</span></span>
                        <span className="prices__per">/per month</span>
                      </div>
                      <ul className="unordered">
                        <li className="unordered__item">Proident excepteur</li>
                        <li className="unordered__item">Veniam occaecat id ea</li>
                        <li className="unordered__item"><b>Labore do nulla ipsum</b></li>
                        <li className="unordered__item">Culpa non ex tempor qui</li>
                      </ul>
                    </div>
                    <div className="prices__col">
                      <div className="prices__top">
                        <h4 className="prices__title">Enterprise</h4>
                        {/* <span className="prices__cost"><span></span></span> 
                        <span className="prices__per">contact Us</span>
                      </div>
                      <ul className="unordered">
                        <li className="unordered__item"><b>Connect with People</b></li>
                        <li className="unordered__item">Scan Business Cards</li>
                        <li className="unordered__item">Share Business Cards</li>
                        <li className="unordered__item">Proident excepteur</li>
                      </ul>
                    </div> */}
                  </div>
                </div>
              </div>
            </div>
            <img className="downloads-block__right-element side-element" src="data:image/gif;base64,iVBORw0KGgoAAAANSUhEUgAAAAEAAAABCAQAAAC1HAwCAAAAC0lEQVR42mNkYAAAAAYAAjCB0C8AAAAASUVORK5CYII=" data-lazy="assets/img/svg/side-element_1.svg" alt="" />
          </section>
          {/* DOWNLOAD END */}
          {/* BEGIN RESPONSES */}
          <div className="responses-block">
            <div className="responses-block__main wrapper js-slider">
              <div className="responses-block__cols">
                <div className="responses-block__left">
                  <h3 className="responses-block__title main-title main-title_align-left" data-title="They say about us" id="testimonials">
                    <span className="main-title__text">They say about us</span>
                  </h3>
                </div>
                <div className="responses-block__right arrows-2 js-slider-arrows" />
              </div>
              <div className="responses js-slider-loader loaded">
                <div className="responses__list js-slider-list js-slider-news js-cols">

                  {client&&client.map((x)=>{
                    return(
                      <div className="responses__item js-slider-item">
                      <div className="responses__bg">
                        <blockquote className="responses__quote">
                          <p className="responses__text js-col">{x.message}</p>
                          <footer className="respondent">
                            <div className="respondent__col">
                              <img className="respondent__image" src="https://via.placeholder.com/60x60" alt="" />
                            </div>
                            <div className="respondent__col">
                              <span className="respondent__name">{x.name}</span>
                            </div>
                          </footer>
                        </blockquote>
                      </div>
                    </div>
                    )
                  })}
               
                  {/* <div className="responses__item js-slider-item">
                    <div className="responses__bg">
                      <blockquote className="responses__quote">
                        <p className="responses__text js-col">Velit occaecat duis occaecat nostrud. Veniam occaecat id ea Lorem est officia excepteur cupidatat consectetur. Labore do nulla ipsum dolore ipsum. Proident excepteur ex aliqua cupidatat.</p>
                        <footer className="respondent">
                          <div className="respondent__col">
                            <img className="respondent__image" src="https://via.placeholder.com/60x60" alt="" />
                          </div>
                          <div className="respondent__col">
                            <span className="respondent__name">Brooklyn Simmons</span>
                          </div>
                        </footer>
                      </blockquote>
                    </div>
                  </div>
                  <div className="responses__item js-slider-item">
                    <div className="responses__bg">
                      <blockquote className="responses__quote">
                        <p className="responses__text js-col">Velit occaecat duis occaecat nostrud. Veniam occaecat id ea Lorem est officia excepteur cupidatat consectetur. Labore do nulla ipsum dolore ipsum. Proident excepteur ex aliqua cupidatat.</p>
                        <footer className="respondent">
                          <div className="respondent__col">
                            <img className="respondent__image" src="https://via.placeholder.com/60x60" alt="" />
                          </div>
                          <div className="respondent__col">
                            <span className="respondent__name">Brooklyn Simmons</span>
                          </div>
                        </footer>
                      </blockquote>
                    </div>
                  </div>
                  <div className="responses__item js-slider-item">
                    <div className="responses__bg">
                      <blockquote className="responses__quote">
                        <p className="responses__text js-col">Velit occaecat duis occaecat nostrud. Veniam occaecat id ea Lorem est officia excepteur cupidatat consectetur. Labore do nulla ipsum dolore ipsum. Proident excepteur ex aliqua cupidatat.</p>
                        <footer className="respondent">
                          <div className="respondent__col">
                            <img className="respondent__image" src="https://via.placeholder.com/60x60" alt="" />
                          </div>
                          <div className="respondent__col">
                            <span className="respondent__name">Brooklyn Simmons</span>
                          </div>
                        </footer>
                      </blockquote>
                    </div>
                  </div>
                  <div className="responses__item js-slider-item">
                    <div className="responses__bg">
                      <blockquote className="responses__quote">
                        <p className="responses__text js-col">Velit occaecat duis occaecat nostrud. Veniam occaecat id ea Lorem est officia excepteur cupidatat consectetur. Labore do nulla ipsum dolore ipsum. Proident excepteur ex aliqua cupidatat.</p>
                        <footer className="respondent">
                          <div className="respondent__col">
                            <img className="respondent__image" src="assets/img/author_2.png" alt="" />
                          </div>
                          <div className="respondent__col">
                            <span className="respondent__name">Brooklyn Simmons</span>
                          </div>
                        </footer>
                      </blockquote>
                    </div>
                  </div> */}
                </div>
              </div>
            </div>
            <img className="responses-block__left-element side-element" src="data:image/gif;base64,iVBORw0KGgoAAAANSUhEUgAAAAEAAAABCAQAAAC1HAwCAAAAC0lEQVR42mNkYAAAAAYAAjCB0C8AAAAASUVORK5CYII=" data-lazy="assets/img/svg/side-element_2.svg" alt="" />
          </div>
          {/* RESPONSES END */}
          {/* BEGIN FREE TRIAL */}
          <section className="trial-block">
            <div className="trial-block__main wrapper">
              <div className="trial" id="trial">
                <div className="trial__bg">
                  <img className="trial__bg-left" src="data:image/gif;base64,iVBORw0KGgoAAAANSUhEUgAAAAEAAAABCAQAAAC1HAwCAAAAC0lEQVR42mNkYAAAAAYAAjCB0C8AAAAASUVORK5CYII=" data-lazy="assets/img/svg/trial-left.svg" alt="" />
                  <img className="trial__bg-right" src="data:image/gif;base64,iVBORw0KGgoAAAANSUhEUgAAAAEAAAABCAQAAAC1HAwCAAAAC0lEQVR42mNkYAAAAAYAAjCB0C8AAAAASUVORK5CYII=" data-lazy="assets/img/svg/trial-right.svg" alt="" />
                </div>
                <div className="trial__icons-wrap">
                  <span className="trial__pseudotext">Get a free trial for 30 days</span>
                  <img className="trial__icons" src="data:image/gif;base64,iVBORw0KGgoAAAANSUhEUgAAAAEAAAABCAQAAAC1HAwCAAAAC0lEQVR42mNkYAAAAAYAAjCB0C8AAAAASUVORK5CYII=" data-lazy="assets/img/svg/trial-icons.svg" alt="" />
                </div>
                <div className="trial__content">
                  <div className="trial__cell">
                    <span className="above-title">trendy application</span>
                    <h3 className="trial__title">Get a free trial for <span className="orange">30</span> days</h3>
                    <a className="trial__button button js-popup-open" href="#trial-popup">
                      <span className="button__text">Get a free trial</span>
                    </a>
                  </div>
                </div>
              </div>
            </div>
            <div className="trial-block__bg" />
            <img className="trial-block__right-element side-element" src="data:image/gif;base64,iVBORw0KGgoAAAANSUhEUgAAAAEAAAABCAQAAAC1HAwCAAAAC0lEQVR42mNkYAAAAAYAAjCB0C8AAAAASUVORK5CYII=" data-lazy="assets/img/svg/side-element_2.svg" alt="" />
          </section>
          {/* FREE TRIAL END */}
          {/* BEGIN FAQ */}
          <div className="faq-block">
            <div className="faq-block__main wrapper">
              <div className="faq-block__cols">
                <div className="faq-block__left">
                  <a className="open-video js-popup-open js-popup-video" data-frame="https://www.youtube.com/embed/pYRIfaKGo-c?autoplay=1" data-width={560} data-height={315} href="#video-popup">
                    <video width="100%" height="100%" controls>
                      <source src="https://nobhub.com/assets/BannerVideo.mp4" type="video/mp4" />
                    </video>
                    <span className="open-video__icon" />
                  </a>
                </div>
                <div className="faq-block__right">
                  <h3 className="faq-block__title main-title main-title_align-left" data-title="Frequently Asked Questions" id="faq">
                    <span className="main-title__text">Frequently Asked Questions</span>
                  </h3>
                  <div className="faq js-faq">
                    {faq.map((x)=>{
                      return(
                        <article className="faq__item js-faq-item active">
                        <h3 className="faq__title">
                          <a className="faq__button js-faq-button" href="javascript:void(0);">{x.question}</a>
                        </h3>
                        <div className="faq__hide js-faq-hide">
                          <div className="faq__content">
                            <p>{x.answer}</p>
                          </div>
                        </div>
                      </article>
                      )

                    })}
            
                    {/* <article className="faq__item js-faq-item">
                      <h3 className="faq__title">
                        <a className="faq__button js-faq-button" href="javascript:void(0);">How can I
                        register?</a>
                      </h3>
                      <div className="faq__hide js-faq-hide">
                        <div className="faq__content">
                          <p>Velit occaecat duis occaecat nostrud. Veniam occaecat id ea Lorem est officia excepteur cupidatat consectetur. Labore do nulla ipsum dolore ipsum. Proident excepteur ex aliqua cupidatat adipisicing in cillum
                          amet eu dolore labore in aliquip. Proident excepteur ex aliqua cupidatat adipisicing in cillum amet eu dolore labore in aliquip.</p>
                        </div>
                      </div>
                    </article>
                    <article className="faq__item js-faq-item">
                      <h3 className="faq__title">
                        <a className="faq__button js-faq-button" href="javascript:void(0);">Can I use free
                        plan permanently?</a>
                      </h3>
                      <div className="faq__hide js-faq-hide">
                        <div className="faq__content">
                          <p>Velit occaecat duis occaecat nostrud. Veniam occaecat id ea Lorem est officia excepteur cupidatat consectetur. Labore do nulla ipsum dolore ipsum. Proident excepteur ex aliqua cupidatat adipisicing in cillum
                          amet eu dolore labore in aliquip. Velit occaecat duis occaecat nostrud. Veniam occaecat id ea Lorem est officia excepteur cupidatat consectetur. Labore do nulla ipsum dolore ipsum.</p>
                        </div>
                      </div>
                    </article> */}
                  </div>
                </div>
              </div>
            </div>
            <img className="faq-block__left-element side-element" src="data:image/gif;base64,iVBORw0KGgoAAAANSUhEUgAAAAEAAAABCAQAAAC1HAwCAAAAC0lEQVR42mNkYAAAAAYAAjCB0C8AAAAASUVORK5CYII=" data-lazy="assets/img/svg/side-element_1.svg" alt="" />
          </div>
          {/* FAQ END */}
          {/* BEGIN LATEST NEWS*/}
          <div className="latest-block">
            <div className="latest-block__main wrapper">
              <div className="latest-block__cols">
                <div className="latest-block__left">
                  <h2 className="latest-block__title main-title main-title_align-left" data-title="Read the latest news and articles">
                    <span className="main-title__text">Read the latest news and articles</span>
                  </h2>
                  <p className="latest-block__text">Culpa non ex tempor qui nulla laborum. Laboris culpa ea incididunt dolore ipsum tempor duis do ullamc.</p>
                  <a className="read-more" href="#">Read more</a>
                </div>
                <div className="latest-block__right">
                  <div className="latest-news js-slider">
                    <div className="latest-news__arrows js-slider-arrows arrows-2" />
                    <div className="latest-news__list-wrap js-slider-loader loaded">
                      <div className="latest-news__list js-slider-list js-slider-news js-cols">
                        {news&&news.map((x)=> {return(<article className="latest-news__article js-slider-item">
                            <div className="latest-news__bg">
                              <div className="latest-news__content js-col">
                                <span className="latest-news__date">{x.date}</span>
                                <h4 className="latest-news__title">
                                  <a className="latest-news__link" href="post.html">{x.title}</a>
                                </h4>
                                <p className="latest-news__text">{x.richdesc}</p>
                              </div>
                              <div className="latest-news__bottom">
                                <div className="latest-news__col">
                                  <div className="author">
                                    <div className="author__col">
                                      <img className="author__image" src="https://via.placeholder.com/20x20" alt="" />
                                    </div>
                                    <div className="author__col">
                                      <span className="author__name">{x.author}</span>
                                    </div>
                                  </div>
                                </div>
                                <div className="latest-news__col">
                                  <a className="share-button" href="#">Share</a>
                                </div>
                              </div>
                            </div>
                          </article>)

                          
                  })}
                       
                        {/* <article className="latest-news__article js-slider-item">
                          <div className="latest-news__bg">
                            <div className="latest-news__content js-col">
                              <span className="latest-news__date">Dec 10, 2020</span>
                              <h4 className="latest-news__title">
                                <a className="latest-news__link" href="post.html">What you need to
                                know before using Upland Application</a>
                              </h4>
                              <p className="latest-news__text">Culpa non ex tempor qui nulla laborum. Laboris culpa ea incididunt dolore ipsum tempor duis do ullamc.
                            </p>
                            </div>
                            <div className="latest-news__bottom">
                              <div className="latest-news__col">
                                <div className="author">
                                  <div className="author__col">
                                    <img className="author__image" src="https://via.placeholder.com/20x20" alt="" />
                                  </div>
                                  <div className="author__col">
                                    <span className="author__name">Annette Black</span>
                                  </div>
                                </div>
                              </div>
                              <div className="latest-news__col">
                                <a className="share-button" href="#">Share</a>
                              </div>
                            </div>
                          </div>
                        </article>
                        <article className="latest-news__article js-slider-item">
                          <div className="latest-news__bg">
                            <div className="latest-news__content js-col">
                              <span className="latest-news__date">Dec 10, 2020</span>
                              <h4 className="latest-news__title">
                                <a className="latest-news__link" href="post.html">Launch of a new
                                convenient feature this Saturday. Trend 2020</a>
                              </h4>
                              <p className="latest-news__text">Labore do nulla ipsum dolore ipsum. Proident excepteur ex aliqua cupidatat adipisicing in cillum.
                            </p>
                            </div>
                            <div className="latest-news__bottom">
                              <div className="latest-news__col">
                                <div className="author">
                                  <div className="author__col">
                                    <img className="author__image" src="https://via.placeholder.com/20x20" alt="" />
                                  </div>
                                  <div className="author__col">
                                    <span className="author__name">Annette Black</span>
                                  </div>
                                </div>
                              </div>
                              <div className="latest-news__col">
                                <a className="share-button" href="#">Share</a>
                              </div>
                            </div>
                          </div>
                        </article>
                        <article className="latest-news__article js-slider-item">
                          <div className="latest-news__bg">
                            <div className="latest-news__content js-col">
                              <span className="latest-news__date">Dec 10, 2020</span>
                              <h4 className="latest-news__title">
                                <a className="latest-news__link" href="post.html">What you need to
                                know before using Upland Application</a>
                              </h4>
                              <p className="latest-news__text">Culpa non ex tempor qui nulla laborum. Laboris culpa ea incididunt dolore ipsum tempor duis do ullamc.
                            </p>
                            </div>
                            <div className="latest-news__bottom">
                              <div className="latest-news__col">
                                <div className="author">
                                  <div className="author__col">
                                    <img className="author__image" src="https://via.placeholder.com/20x20" alt="" />
                                  </div>
                                  <div className="author__col">
                                    <span className="author__name">Annette Black</span>
                                  </div>
                                </div>
                              </div>
                              <div className="latest-news__col">
                                <a className="share-button" href="#">Share</a>
                              </div>
                            </div>
                          </div>
                        </article>
                        <article className="latest-news__article js-slider-item">
                          <div className="latest-news__bg">
                            <div className="latest-news__content js-col">
                              <span className="latest-news__date">Dec 10, 2020</span>
                              <h4 className="latest-news__title">
                                <a className="latest-news__link" href="post.html">Launch of a new
                                convenient feature this Saturday. Trend 2020</a>
                              </h4>
                              <p className="latest-news__text">Labore do nulla ipsum dolore ipsum. Proident excepteur ex aliqua cupidatat adipisicing in cillum.
                            </p>
                            </div>
                            <div className="latest-news__bottom">
                              <div className="latest-news__col">
                                <div className="author">
                                  <div className="author__col">
                                    <img className="author__image" src="https://via.placeholder.com/20x20" alt="" />
                                  </div>
                                  <div className="author__col">
                                    <span className="author__name">Annette Black</span>
                                  </div>
                                </div>
                              </div>
                              <div className="latest-news__col">
                                <a className="share-button" href="#">Share</a>
                              </div>
                            </div>
                          </div>
                        </article>
                        <article className="latest-news__article js-slider-item">
                          <div className="latest-news__bg">
                            <div className="latest-news__content js-col">
                              <span className="latest-news__date">Dec 10, 2020</span>
                              <h4 className="latest-news__title">
                                <a className="latest-news__link" href="post.html">What you need to
                                know before using Upland Application</a>
                              </h4>
                              <p className="latest-news__text">Culpa non ex tempor qui nulla laborum. Laboris culpa ea incididunt dolore ipsum tempor duis do ullamc.
                            </p>
                            </div>
                            <div className="latest-news__bottom">
                              <div className="latest-news__col">
                                <div className="author">
                                  <div className="author__col">
                                    <img className="author__image" src="https://via.placeholder.com/20x20" alt="" />
                                  </div>
                                  <div className="author__col">
                                    <span className="author__name">Annette Black</span>
                                  </div>
                                </div>
                              </div>
                              <div className="latest-news__col">
                                <a className="share-button" href="#">Share</a>
                              </div>
                            </div>
                          </div>
                        </article> */}
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
          {/* LATEST NEWS END */}
        </main>
        {/* MAIN END */}
        {/* BEGIN FOOTER */}
      <Footer/>
        {/* FOOTER END */}
      </div>
      {/* BEGIN TRIAL POPUP */}
      <div className="popup js-popup" id="trial-popup">
        <div className="popup__row">
          <div className="popup__cell">
            <div className="popup__window popup__window_bg">
              <button className="popup__close close-button js-popup-close" />
              <div className="popup__content">
                <form>
                  <div className="trial-form">
                    <span className="trial-form__title">Get a free trial for <span className="orange">30</span>&nbsp;days</span>
                    <span className="trial-form__text">Culpa non ex tempor qui nulla laborum. Laboris culpa ea
                    incididunt dolore ipsum tempor duis do ullamc.</span>
                    <input className="text-input" type="text" placeholder="Name" />
                    <input className="text-input" type="email" placeholder="Email" />
                    <textarea className="textarea" placeholder="Message" defaultValue={""} />
                    <button className="trial-form__button button" type="submit">
                      <span className="button__text">Get a free trial</span>
                    </button>
                  </div>
                </form>
              </div>
              <span className="popup__pseudotitle" data-title="Get a free trial for 30 days" />
            </div>
          </div>
          <div className="popup__mask js-popup-close" />
        </div>
      </div>
      {/* TRIAL POPUP END */}
      {/* BEGIN VIDEO POPUP */}
      <div className="popup popup_video js-popup" id="video-popup">
        <div className="popup__row">
          <div className="popup__cell">
            <div className="popup__window">
              <button className="popup__close close-button close-button_white js-popup-close" />
              <div className="video-frame js-responsive-video js-video-frame" />
            </div>
          </div>
          <div className="popup__mask js-popup-close" />
        </div>
      </div>
    </div>
  );
}

export default Home;