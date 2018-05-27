import React, {Component} from 'react'
import { getActiveLanguage, getTranslate, Translate } from "react-localize-redux";
import {connect} from "react-redux";

class NotFound extends Component {

    componentDidMount()
    {
        document.title = "- 404 -";
    }

    render() {
        return (
            <div className="not-found">
                <img alt="404 not found" className="gif" src={require("../style/images/columbia.gif")}/>
                <div className="columbia">
                    <h1><Translate id="NotFound" /></h1>
                    <p><Translate id="NotFoundText" /></p>
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

export default connect(mapStateToProps)(NotFound)