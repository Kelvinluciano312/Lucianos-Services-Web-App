import React, { Component } from "react";
import Fade from "react-reveal";
import { Parallax } from "react-parallax";
import 'C:/Users/kelvi/Downloads/react-nice-resume-master/src/App.css'; // Ensure the correct path to your CSS file


class Header extends Component {
  componentDidMount() {
    window.addEventListener('scroll', this.handleScroll);
  }

  componentWillUnmount() {
    window.removeEventListener('scroll', this.handleScroll);
  }

  handleScroll = () => {
    const parallax = document.querySelector('.background-video');
    if (parallax) {
      let scrolled = window.pageYOffset;
      parallax.style.transform = 'translateY(' + scrolled * 0.5 + 'px)';
    }
  };
  
  render() {
    if (!this.props.data) return null;

    const project = this.props.data.project;
    const github = this.props.data.github;
    const name = this.props.data.name;
    const description = this.props.data.description;

    return (
      <header id="home">
        <div className="testinho">
          <header id="home">
            <div className="testinho">
              <Parallax strength={300}>
                <div style={{ height: '100vh', position: 'relative' }}>
                  <video
                    className="background-video"
                    autoPlay
                    loop
                    muted
                    playsInline
                    src="images/8572185-uhd_2160_4096_25fps.mp4"
                  ></video>
                </div>
              </Parallax>
            </div>
          </header>
        </div>

        <nav id="nav-wrap">
          <a className="mobile-btn" href="#nav-wrap" title="Show navigation">
            Show navigation
          </a>
          <a className="mobile-btn" href="#home" title="Hide navigation">
            Hide navigation
          </a>

          <ul id="nav" className="nav">
            <li className="current">
              <a className="smoothscroll" href="#home">
                Home
              </a>
            </li>

            <li>
              <a className="smoothscroll" href="#about">
                About Us
              </a>
            </li>

            <li>
              <a className="smoothscroll" href="#resume">
                What We Do
              </a>
            </li>

            <li>
              <a className="smoothscroll" href="#portfolio">
                Works
              </a>
            </li>

            <li>
              <a className="smoothscroll" href="#contact">
                Contact
              </a>
            </li>
          </ul>
        </nav>

        <div className="row banner">
          <div className="banner-text">

            <Fade bottom>
              <div className="Main-Title">
                <h1 className="responsive-headline">{name}</h1>
              </div>
            </Fade>

            <Fade bottom duration={1200}>
              <h3>{description}.</h3>
            </Fade>
            <hr />
            <Fade bottom duration={2000}>
              <ul className="social">
                <a href={project} className="button btn project-btn">
                  <i className="fa fa-instagram"></i>Instagram
                </a>
                <a href={github} className="button btn github-btn">
                  <i className="fa fa-linkedin"></i>Linkedin
                </a>
              </ul>
            </Fade>
          </div>
        </div>

        <p className="scrolldown">
          <a className="smoothscroll" href="#about">
            <i className="icon-down-circle"></i>
          </a>
        </p>
      </header>
    );
  }
}

export default Header;
