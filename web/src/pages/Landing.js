import React, {Component} from 'react';
import {Redirect} from 'react-router-dom';
import '../styles/Dashboard.css';
import '../styles/Landing.css';
import DefaultService from "../service/api-service";
import {getBceidRegisterUrl, PUBLIC_URL} from '../config/environment';
import {checkIfUserIsLoggedIn} from '../helpers/user';

class Landing extends Component {

    constructor(props) {
        super(props);
        this.service = props.service;
        this.state = {
            displayMyCasesEmptyLabel: true,
            closeBrowserCheck: false,
            isIE11: this.isIE11(),
            loggedIn: false
        };
    }

    componentDidMount() {
        if (this.service == null) {
            let window = this.element.ownerDocument.defaultView;
            this.service = new DefaultService(window);
        }
        checkIfUserIsLoggedIn(this.service, (user) => {
            this.setState({loggedIn: user.loggedIn});
        });
    }

    isIE11() {
        const ua = window.navigator.userAgent; 
        const msie = ua.indexOf('MSIE ');
        const trident = ua.indexOf('Trident/'); 
        return (msie > 0 || trident > 0);
    }

    closeBrowserCheck = () => {
        this.setState({ closeBrowserCheck : true });
    }

    handleNavigateToBceidLogin = (e) => {
        e.preventDefault();
        window.location.replace(`${this.service.base()}/api/login?redirectUrl=${window.location}/dashboard`);
    }

    render() {
        if (this.state.loggedIn) {
            return (<div ref={ (element)=> {this.element = element }}>
                <Redirect to={PUBLIC_URL + '/dashboard'} push={true} />
            </div>);
        }

        const loginPanel = (
            <div id="landingPage" className="row-flex intro-page" ref={ (element)=> {this.element = element }}>
                <div className="landing-col shroud" ref={ (element)=> {this.element = element }}>
                    <div className="col-flex content-column">
                        <h2 className="shaded-box landing-h2">Welcome to Court of Appeal</h2>
                        <div className="flex-wrapper shaded-box">
                            <div className="container-fluid">
                                <div className="row">
                                    <div style={{paddingRight: "30px"}} className="col-md-6 landing-left-col" >
                                        <h3 className="landing-h3">New Users</h3>
                                        <a className="btn btn-primary btn-same-width button-align" href={getBceidRegisterUrl()}>Register for a BCeID</a>
                                    </div>
                                    <div className="col-md-6"/>
                                    <div className="col-md-6 landing-right-col" >
                                        <h3 className="landing-h3">Returning Users</h3>
                                        <a className="btn btn-primary btn-same-width button-align" onClick={this.handleNavigateToBceidLogin}>Login with existing BCeID</a>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className="landing-credit-div">
                        <a className="landing-credit-a" href="https://commons.wikimedia.org/wiki/File:Law_Courts_building_interior_2018.jpg" target="_blank">Background image created by Wpcpey</a>, <a className="landing-credit-a" href="https://creativecommons.org/licenses/by-sa/4.0" target="_blank">CC BY-SA 4.0</a>, via Wikimedia Commons
                    </div>
                </div>
            </div>
        );

        if (this.state.isIE11 && !this.state.closeBrowserCheck) {
            return (<div id="topicTemplate" className="row-flex intro-page template container gov-container form" ref={ (element)=> {this.element = element }}>
                    { this.state.isIE11 && !this.state.closeBrowserCheck &&
                    <div id="info-modal" className={"info-modal"} style={{display: 'block'}} >
                        <div className="info-modal-title" style={{backgroundColor: 'red'}}>
                            IE 11 detected - Modern browser required
                            <span className="close-info-modal" onClick={this.closeBrowserCheck}>&times;</span>
                        </div>
                        <div className="info-modal-content">
                            A modern browser such as Google Chrome, Mozilla Firefox or Microsoft Edge is required for this site.
                        </div>
                    </div>
                    }
                    {loginPanel}
                </div>
            );
        }

        return loginPanel;
    }
}

export default Landing;