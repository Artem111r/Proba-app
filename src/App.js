import "./App.css";
import img_cover from "../src/assets/img/mainblock/cover.jpg";
import img_service from "../src/assets/img/services/01.svg";
import img_service2 from "../src/assets/img/services/02.svg";
import img_service3 from "../src/assets/img/services/03.svg";
import img_advantage1 from "../src/assets/img/advantages/01.svg";
import img_advantage2 from "../src/assets/img/advantages/02.svg";
import img_advantage3 from "../src/assets/img/advantages/03.svg";
import img_advantage4 from "../src/assets/img/advantages/04.svg";
import img_practice01 from "../src/assets/img/practice/01.jpg";
import img_practice02 from "../src/assets/img/practice/02.jpg";
import img_practice03 from "../src/assets/img/practice/03.jpg";
import img_practice04 from "../src/assets/img/practice/04.jpg";
import svg_whoweare01 from "../src/assets/img/whoweare/icons/01.svg"
import svg_whoweare02 from "../src/assets/img/whoweare/icons/02.svg"
import svg_client01 from "../src/assets/img/clients/01.png"
import svg_client02 from "../src/assets/img/clients/02.png"
import svg_client03 from "../src/assets/img/clients/03.png"
import svg_client04 from "../src/assets/img/clients/04.png"
import svg_client05 from "../src/assets/img/clients/05.png"
import svg_client06 from "../src/assets/img/clients/06.png"
import svg_getintouch_01 from "../src/assets/img/getintouch/01.svg"
import svg_getintouch_02 from "../src/assets/img/getintouch/02.svg"
import svg_getintouch_03 from "../src/assets/img/getintouch/03.svg"
import svg_info_menu_01 from "../src/assets/img/footer/icons/01.svg"
import svg_info_menu_02 from "../src/assets/img/footer/icons/02.svg"
import svg_info_menu_03 from "../src/assets/img/footer/icons/03.svg"
import svg_footer_logo_01 from "../src/assets/img/footer/social/01.svg"
import svg_footer_logo_02 from "../src/assets/img/footer/social/02.svg"
import svg_footer_logo_03 from "../src/assets/img/footer/social/03.svg"
import svg_footer_logo_04 from "../src/assets/img/footer/social/04.svg"


function App() {
  return (
    <div className="wrapper">
      <header className="header">
        <div className="header__container _container">
          <a href="" className="header__logo">
            Relvise
          </a>
          <nav className="header__menu menu">
            <ul className="menu__list">
              <li className="menu__item">
                <a href="" className="menu__link">
                  Home
                </a>
              </li>
              <li className="menu__item">
                <a href="" className="menu__link">
                  Product
                </a>
              </li>
              <li className="menu__item">
                <a href="" className="menu__link">
                  Pricing
                </a>
              </li>
              <li className="menu__item">
                <a href="" className="menu__link">
                  Contact
                </a>
              </li>
            </ul>
          </nav>
        </div>
      </header>
      <main className="page">
        <div className="page__main-block main-block">
          <div className="main-block__container _container">
            <div className="main-block__body">
              <div className="main-block__title">
                Finance and Consultancy Solution
              </div>
              <div className="main-block__text">
                We know how large objects will act, but things on a small scale.
              </div>
              <div className="main-block__buttons">
                <a
                  href=""
                  className="main-block__button main-block__button_orange"
                >
                  Get Quote Now{" "}
                </a>
                <a
                  href=""
                  className="main-block__button main-block__button_border"
                >
                  Learn More
                </a>
              </div>
            </div>
          </div>
          <div className="main-block__image _ibg">
            <img src={img_cover} alt="cover" />
          </div>
        </div>
        <section className="page__services">
          <div className="services__constainer _container">
            <div className="services__body">
              <div className="services__column">
                <div className="services__item item-service">
                  <div className="item-service__icon">
                    <img src={img_service} alt="service-icon" />
                  </div>
                  <h3 className="item-service__title">
                    Environmental Consulting
                  </h3>
                  <div className="item-service__text">
                    We focus on ergonomics and meeting you where you work.{" "}
                  </div>
                </div>
              </div>
              <div className="services__column">
                <div className="services__item item-service">
                  <div className="item-service__icon">
                    <img src={img_service2} alt="service-icon" />
                  </div>
                  <h3 className="item-service__title">
                    Finance and consultancy{" "}
                  </h3>
                  <div className="item-service__text">
                    Just type what's on your mind and we'll get you there.{" "}
                  </div>
                </div>
              </div>
              <div className="services__column">
                <div className="services__item item-service item-service-green">
                  <div className="item-service__icon">
                    <img src={img_service3} alt="service-icon" />
                  </div>
                  <h3 className="item-service__title">
                    Financial Services Consulting
                  </h3>
                  <div className="item-service__text">
                    the quick fox jumps over the lazy dog{" "}
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>
        <section className="page__advantages advantages">
          <div className="advantages__container _container">
            <div className="advantages__header header-block">
              <div className="header-block__title">
                Designing Better Experience
              </div>
              <div className="header-block__sub-title">
                Problems trying to resolve the conflict between the two major
                realms <br /> of Classical physics: Newtonian mechanics{" "}
              </div>
            </div>
            <div className="advantages__body test">
              <div className="advantages__column">
                <div className="advantages__item">
                  <div className="advantages__icon ">
                    <img src={img_advantage1} alt="icon" />
                  </div>
                  <div className="advantages__value">972 +</div>
                  <div className="advantages__text">Consumer Products </div>
                </div>
              </div>
              <div className="advantages__column">
                <div className="advantages__item">
                  <div className="advantages__icon">
                    <img src={img_advantage2} alt="icon" />
                  </div>
                  <div className="advantages__value">181 +</div>
                  <div className="advantages__text">Financial Services </div>
                </div>
              </div>
              <div className="advantages__column">
                <div className="advantages__item">
                  <div className="advantages__icon">
                    <img src={img_advantage3} alt="icon" />
                  </div>
                  <div className="advantages__value">98%</div>
                  <div className="advantages__text">Environmental </div>
                </div>
              </div>
              <div className="advantages__column">
                <div className="advantages__item">
                  <div className="advantages__icon">
                    <img src={img_advantage4} alt="icon" />
                  </div>
                  <div className="advantages__value">746 +</div>
                  <div className="advantages__text">Business & Finance </div>
                </div>
              </div>
            </div>
          </div>
        </section>
        <section className="page__practice practice">
          <div className="practice__container _container">
            <div className="practice__header header-block">
              <h2 className="header-block__title">Practice Advice</h2>
              <div className="header-block__sub-title">
                Problems trying to resolve the conflict between the two major
                realms of Classical physics: Newtonian mechanics{" "}
              </div>
            </div>
            <div className="practice__body">
              <div className="practice__column">
                <article className="practice__item item-practice">
                  <div className="item-practice__contant">
                    <a href="" className="item-practice__link">
                      <h4 className="item-practice__title">
                        A single source of truth
                      </h4>
                    </a>
                    <div className="item-practice__text">
                      Newton thought that light was made up of particles, but then it was discovered
                    </div>
                  </div>
                  <a href="" className="item-practice__image _ibg">
                    <img src={img_practice01} alt="A single source of truth" />
                  </a>
                </article>
              </div>
              <div className="practice__column">
                <article className="practice__item item-practice">
                  <div className="item-practice__contant">
                    <a href="" className="item-practice__link">
                      <h4 className="item-practice__title">
                      Fastest way to organize
                      </h4>
                    </a>
                    <div className="item-practice__text">
                    “Quantum mechanics” is the description of the behaviour of matter
                    </div>
                  </div>
                  <a href="" className="item-practice__image _ibg">
                    <img src={img_practice02} alt="A single source of truth" />
                  </a>
                </article>
              </div>
              <div className="practice__column">
                <article className="practice__item item-practice">
                  <div className="item-practice__contant">
                    <a href="" className="item-practice__link">
                      <h4 className="item-practice__title">
                      Fastest way to take action
                      </h4>
                    </a>
                    <div className="item-practice__text">
                    They describe a universe consisting of bodies moving
                    </div>
                  </div>
                  <a href="" className="item-practice__image _ibg">
                    <img src={img_practice03} alt="A single source of truth" />
                  </a>
                </article>
              </div>
              <div className="practice__column">
                <article className="practice__item item-practice">
                  <div className="item-practice__contant">
                    <a href="" className="item-practice__link">
                      <h4 className="item-practice__title">
                      Work better together
                      </h4>
                    </a>
                    <div className="item-practice__text">
                    They finally obtained a consistent description of the behaviour 
                    </div>
                  </div>
                  <a href="" className="item-practice__image _ibg">
                    <img src={img_practice04} alt="A single source of truth" />
                  </a>
                </article>
              </div>
            </div>
          </div>
        </section>
        <section className="page__whoweare whoweare">
          <div className="whoweare__container _container">
          <div className="whoweare__header header-block">
            <h2 className="header-block__title">Who We Are</h2>
            <div className="header-block__sub-title">Problems trying to resolve the conflict between the two major realms <br/> of Classical physics: Newtonian mechanics </div>
          </div>
          <div className="whoweare__body">
            <div className="whoweare__video">
            <iframe width="560" height="315" src="https://www.youtube.com/embed/6MUuoNX6IdQ" title="YouTube video player" frameBorder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" allowFullScreen></iframe>
            </div>
            <div className="whoweare__content">
              <div className="whoweare__top">
              <h2 className="whoweare__title">Most trusted in our field</h2>
              <div className="whoweare__text">Most calendars are designed for teams. Slate is designed for freelancers who want a simple way to plan their schedule.</div>
              </div>
              
              <div className="whoweare__items">
                <div className="whoweare__item item-whoweare">
                  <div className="item-whoweare__icon">
                    <img src={svg_whoweare01} alt="icon-img"/>
                  </div>
                  <div className="item-whoweare__body">
                    <div className="item-whoweare__title">the quick fox jumps over the lazy dog</div>
                    <div className="item-whoweare__text">Things on a very small scale Things on a very small scale Things on a very small scale</div>
                  </div>
                </div>
                <div className="whoweare__item item-whoweare">
                  <div className="item-whoweare__icon">
                    <img src={svg_whoweare02} alt="icon"/>
                  </div>
                  <div className="item-whoweare__body">
                    <div className="item-whoweare__title">the quick fox jumps over the lazy dog</div>
                    <div className="item-whoweare__text">Things on a very small scale Things on a very small scale Things on a very small scale</div>
                  </div>
                </div>
              </div>
            </div>
          </div>
          </div>
         
        </section>
        <div className="page__clients clients">
          <div className="clients__container _container">
            <div className="clients__items">
              <div className="clients__item">
                <img src={svg_client01} alt="client"/>
              </div>
              <div className="clients__item">
                <img src={svg_client02} alt="client"/>
              </div>
              <div className="clients__item">
                <img src={svg_client03} alt="client"/>
              </div>
              <div className="clients__item">
                <img src={svg_client04} alt="client"/>
              </div>
              <div className="clients__item">
                <img src={svg_client05} alt="client"/>
              </div>
              <div className="clients__item">
                <img src={svg_client06} alt="client"/>
              </div>
            </div>
          </div>
        </div>
        <section className="page__subscribe subscribe">
          <div className="subscribe__container _container">
            <div className="subscribe__body">
              <h4 className="subscribe__title">Subscribe For Latest Newsletter</h4>
              <form action="#" className="subscribe__form">
                <input autoComplete="off" type="email" required name="form[]" placeholder="Your Email" className="subscribe__input"></input>
                <button type="submit" className="subscribe__button">Subscribe</button>
              </form>
            </div>
          </div>
        </section>
        <section className="page__getintouch getintouch">
          <div className="getintouch__container _container">
          <div className="getintouch__header header-block">
            <h2 className="header-block__title">Get In Touch</h2>
            <div className="header-block__sub-title">Problems trying to resolve the conflict between <br/> the two major realms of Classical physics: Newtonian mechanics  </div>
          </div>
          <div className="getintouch__items">
            <div className="getintouch__item item-getintouch">
              <div className="item-getintouch__icon">
                <img src={svg_getintouch_01} alt="getInTouch"/>
              </div>
              <div className="item-getintouch__emails">
                <a href="mailto:georgia.young@example.com" className="item-getintouch__email">georgia.young@example.com</a>
                <a href="mailto:georgia.young@ple.com" className="item-getintouch__email">georgia.young@ple.com</a>
              </div>
              <div className="item-getintouch__label">Get Support</div>
              <a href="" className="item-getintouch__button">Submit Request</a>
            </div>
            <div className="getintouch__item item-getintouch item-getintouch_active">
              <div className="item-getintouch__icon">
                <img src={svg_getintouch_02} alt="getInTouch"/>
              </div>
              <div className="item-getintouch__emails">
                <a href="mailto:georgia.young@example.com" className="item-getintouch__email">georgia.young@example.com</a>
                <a href="mailto:georgia.young@ple.com" className="item-getintouch__email">georgia.young@ple.com</a>
              </div>
              <div className="item-getintouch__label">Get Support</div>
              <a href="" className="item-getintouch__button">Submit Request</a>
            </div>
            <div className="getintouch__item item-getintouch">
              <div className="item-getintouch__icon">
                <img src={svg_getintouch_03} alt="getInTouch"/>
              </div>
              <div className="item-getintouch__emails">
                <a href="mailto:georgia.young@example.com" className="item-getintouch__email">georgia.young@example.com</a>
                <a href="mailto:georgia.young@ple.com" className="item-getintouch__email">georgia.young@ple.com</a>
              </div>
              <div className="item-getintouch__label">Get Support</div>
              <a href="" className="item-getintouch__button">Submit Request</a>
            </div>
          </div>
          </div>
        </section>
        <section className="page__contact cntact">
          <div className="contact__container _container">
            <div className="contact__body">
              <div className="contact__content">
                <h4 className="conatct__title">Consulting Agency For Your Business</h4>
                <div className="conatct__text">the quick fox jumps over the lazy dog</div>
              </div>
              <a href="" className="contact__button">Contact Us</a>
            </div>
          </div>
        </section>
        <footer className="footer">
          <div className="footer__top">
            <div className="footer__top-container _container">
              <div className="footer__row">
              <div className="footer__column">
                <div className="footer__label">Company Info</div>
                <nav className="footer__menu menu-footer">
                  <ul className="menu-footer__list">
                    <li className="menu-footer__item"><a href="" className="menu-footer__link">About Us</a></li>
                    <li className="menu-footer__item"><a href="" className="menu-footer__link">Carrier</a></li>
                    <li className="menu-footer__item"><a href="" className="menu-footer__link">We are hiring</a></li>
                    <li className="menu-footer__item"><a href="" className="menu-footer__link">Blog</a></li>
                  </ul>
                </nav>
              </div>
              <div className="footer__column">
                <div className="footer__label">Legal</div>
                <nav className="footer__menu menu-footer">
                  <ul className="menu-footer__list">
                    <li className="menu-footer__item"><a href="" className="menu-footer__link">About Us</a></li>
                    <li className="menu-footer__item"><a href="" className="menu-footer__link">Carrier</a></li>
                    <li className="menu-footer__item"><a href="" className="menu-footer__link">We are hiring</a></li>
                    <li className="menu-footer__item"><a href="" className="menu-footer__link">Blog</a></li>
                  </ul>
                </nav>
              </div>
              <div className="footer__column">
                <div className="footer__label">Features</div>
                <nav className="footer__menu menu-footer">
                  <ul className="menu-footer__list">
                    <li className="menu-footer__item"><a href="" className="menu-footer__link">Business Marketing</a></li>
                    <li className="menu-footer__item"><a href="" className="menu-footer__link">User Analytic</a></li>
                    <li className="menu-footer__item"><a href="" className="menu-footer__link">Live Chat</a></li>
                    <li className="menu-footer__item"><a href="" className="menu-footer__link">Unlimited Support</a></li>
                  </ul>
                </nav>
              </div>
              <div className="footer__column">
                <div className="footer__label">Resources</div>
                <nav className="footer__menu menu-footer">
                  <ul className="menu-footer__list">
                    <li className="menu-footer__item"><a href="" className="menu-footer__link">IOS & Android</a></li>
                    <li className="menu-footer__item"><a href="" className="menu-footer__link">Watch a Demo</a></li>
                    <li className="menu-footer__item"><a href="" className="menu-footer__link">Customers</a></li>
                    <li className="menu-footer__item"><a href="" className="menu-footer__link">API</a></li>
                  </ul>
                </nav>
              </div>
              <div className="footer__column">
                <div className="footer__label">Get In Touch</div>
                <nav className="footer__contacts contacts-footer">
                  <a href="tel:4805550103" className="contacts-footer__item contacts-footer__item_phone">(480) 555-0103</a>
                  <a href="" className="contacts-footer__item contacts-footer__item_map">4517 Washington Ave. Manchester, Kentucky 39495</a>
                  <a href="mailto:debra.holt@example.com" className="contacts-footer__item contacts-footer__item_mail">debra.holt@example.com</a>
                </nav>
              </div>
              </div>
              
            </div>
          </div>
          <div className="footer__bottom">
            <div className="footer__bottom-container _container">
              <div className="footer__copy">Made With Love By Figmaland All Right Reserved </div>
              <div className="footer__social social">
                <a href="" className="social__item">
                  <img src={svg_footer_logo_01} alt="social-logo"></img>
                  </a>
                  <a href="" className="social__item">
                  <img src={svg_footer_logo_02} alt="social-logo"></img>
                  </a>
                  <a href="" className="social__item">
                  <img src={svg_footer_logo_03} alt="social-logo"></img>
                  </a>
                  <a href="" className="social__item">
                  <img src={svg_footer_logo_04} alt="social-logo"></img>

                  </a>
                
              </div>

            </div>
          </div>
        </footer>
       
       
      </main>
     
    </div>
  );
}

export default App;
