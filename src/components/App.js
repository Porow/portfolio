import React, { Component } from 'react';
import Scrollchor from 'react-scrollchor';
import { getActiveLanguage, getTranslate, Translate } from "react-localize-redux";
import {langActions} from '../actions/langActions';
import {connect} from 'react-redux';
import Lightbox from 'react-image-lightbox';
import 'react-image-lightbox/style.css';
import {CopyToClipboard} from 'react-copy-to-clipboard';
import '../style/css/style.css';

const matcha = [
    require('../style/images/folio/matcha/001.png'),
    require('../style/images/folio/matcha/002.png'),
    require('../style/images/folio/matcha/003.png')
];

const hypertube = [
    require('../style/images/folio/hypertube/001.PNG'),
    require('../style/images/folio/hypertube/002.PNG'),
    require('../style/images/folio/hypertube/003.PNG')
];

class App extends Component {
    constructor(props) {
        super(props);

        this.state = {
            photoIndex: 0,
            matchaisOpen: false,
            hypertubeisOpen: false,
        };
    }
    state = {
        value: '',
        copiedmail: false,
        copiedtel: false,
    };
    switchLanguage = () => {
        const { dispatch } = this.props;

        if (dispatch)
            dispatch(langActions.switchLanguage());
    };
  render() {
      const { currentLanguage } = this.props;
      const { photoIndex, matchaisOpen, hypertubeisOpen } = this.state;

      return (
      <div className="onepage">
          <header className="top-menu">
            <ul>
                <li><Scrollchor to="#about-me" className="nav-item" animate={{offset: 0, duration: 600}}><Translate id="aboutMe" /></Scrollchor></li>
                <li><Scrollchor to="#portfolio" className="nav-item" animate={{offset: 0, duration: 700}}><Translate id="portfolio" /></Scrollchor></li>
                <li><Scrollchor to="#contact" className="nav-item" animate={{offset: 0, duration: 900}}><Translate id="contact" /></Scrollchor></li>
                <li><Scrollchor to="#curriculum-vitae" className="nav-item" animate={{offset: 0, duration: 1000}}><Translate id="resume" /></Scrollchor></li>
                <li className="nav-item" onClick={this.switchLanguage}><Translate id="language" /></li>
            </ul>
          </header>
          <div className='language' onClick={this.switchLanguage}>
              <img src={require(`../style/images/languages/${currentLanguage && currentLanguage}.png`)} alt={currentLanguage && currentLanguage} height={20}/>
          </div>
          <div className="title">
              <div className="box-shadow">
                  <h1>Charles-Antoine Alba</h1>
                  <h2><Translate id="developer" /></h2>
              </div>
          </div>
          <div id="about-me" className="about-me">
              <p className="about">
                  <Translate id="aboutme"/>
              </p>
          </div>
          <div>
              {matchaisOpen && (
                  <Lightbox
                      mainSrc={matcha[photoIndex]}
                      nextSrc={matcha[(photoIndex + 1) % matcha.length]}
                      prevSrc={matcha[(photoIndex + matcha.length - 1) % matcha.length]}
                      imageLoadErrorMessage={"Error"}
                      discourageDownloads={false}
                      imagePadding={30}
                      enableZoom={false}
                      animationOnKeyInput={true}
                      onCloseRequest={() => this.setState({ matchaisOpen: false })}
                      onMovePrevRequest={() =>
                          this.setState({
                              photoIndex: (photoIndex + matcha.length - 1) % matcha.length,
                          })
                      }
                      onMoveNextRequest={() =>
                          this.setState({
                              photoIndex: (photoIndex + 1) % matcha.length,
                          })
                      }
                  />)}
              {hypertubeisOpen && (
                  <Lightbox
                  mainSrc={hypertube[photoIndex]}
                  nextSrc={hypertube[(photoIndex + 1) % hypertube.length]}
                  prevSrc={hypertube[(photoIndex + hypertube.length - 1) % hypertube.length]}
                  imageLoadErrorMessage={"Error"}
                  discourageDownloads={false}
                  imagePadding={30}
                  enableZoom={false}
                  animationOnKeyInput={true}
                  onCloseRequest={() => this.setState({ hypertubeisOpen: false })}
                  onMovePrevRequest={() =>
                  this.setState({
                      photoIndex: (photoIndex + hypertube.length - 1) % hypertube.length,
                  })
              }
                  onMoveNextRequest={() =>
                  this.setState({
                      photoIndex: (photoIndex + 1) % hypertube.length,
                  })
              }
                  />
              )}
          </div>
          <div id="portfolio" className="portfolio">
              <span className="matcha">
                  <img id="matcha" onClick={() => this.setState({ matchaisOpen: true })} src={require('../style/images/folio/thumbnails/matcha.png')} width="250px" height="250px" className="hvr-grow-shadow"/>
              </span>
              <span className="hypertube">
                <img id="hypertube" onClick={() => this.setState({ hypertubeisOpen: true })} src={require('../style/images/folio/thumbnails/hypertube.jpg')} width="250px" height="250px" className="hvr-grow-shadow"/>
                <br/>
              </span>
              <p className="matcha description"><Translate id="matcha" /></p>
              <p className="hypertube description"><Translate id="hypertube" /></p>
          </div>
          <div id="contact" className="contact">
                  <span><Translate id="contactme" /></span>
                  <CopyToClipboard className="contact" text="charles.antoine.alba@gmail.com"
                                   onCopy={() => this.setState({copiedmail: true, copiedtel: false})}>
                      <a title="Copy mail"><Translate id="mail" /></a>
                  </CopyToClipboard>
                  {this.state.copiedmail ? <span className="copied" style={{color: '#97e6c5'}}><Translate id="copied" /></span> : null}
              <br/><br/>
              <span><Translate id="or" /></span>
              <CopyToClipboard text="+33 6 29 19 33 43"
                               onCopy={() => this.setState({copiedtel: true, copiedmail: false})}>
                  <a title="Copy number"> <Translate id="phone" /></a>
              </CopyToClipboard>
              {this.state.copiedtel ? <span className="copied" style={{color: '#97e6c5'}}><Translate id="copied" /></span> : null}
          </div>
          <div id="curriculum-vitae" className="curriculum-vitae">
              <a href='/alba_resume.pdf' target='_blank'>
                  <a className="curriculum-vitae-a"><Translate id="seeresume" /></a>
              </a>
              <p className="quote">
                  <Translate id="quote" />
                  <br/> - Jules Verne -
              </p>
          </div>
          <div className="scroll-top">
              <li><Scrollchor to="" className="scroll-top-btn" animate={{offset: 0, duration: 1500}}><Translate id="top" /></Scrollchor></li>

          </div>
      </div>
    );
  }
}

const mapStateToProps = state => {
    return {
        translate: getTranslate(state.locale),
        currentLanguage: getActiveLanguage(state.locale).code
    };
};

export default connect(mapStateToProps)(App)
