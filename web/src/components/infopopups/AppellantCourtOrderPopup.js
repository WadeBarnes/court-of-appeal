import React, { Component } from 'react';
import InfoPopup from "./common/InfoPopup";

class AppellantCourtOrderPopup extends Component {

    constructor(props) {
        super(props);

        let paragraphContentMap = [
            {
                URLName: "How will I find out about my judgement?",
                URL: "https://www.courtofappealbc.ca/appellant-guidebook/4.1-getting-judgement?ct=t(sidebar-link)",
            },
            {
                URLName: "Who is responsible for preparing the Court Order?",
                URL: "https://www.courtofappealbc.ca/appellant-guidebook/4.3-court-orders?ct=t(sidebar-link)"
            },
            {
                URLName: "Who is responsible for paying for the hearing?",
                URL: "https://www.courtofappealbc.ca/appellant-guidebook/4.2-costs?ct=t(sidebar-link)"
            },
        ];

        this.sections = [{
            expandable: false,
            expanded: true,
            sectionHeading: "For more information about the court order process, click the topics below: ",
            iconType: "info",
            iconClass: "info-modal-icon",
            paragraphContentMap: paragraphContentMap
        }]
    }

    render () {
        return  (
            <InfoPopup
                title="Court Order"
                helpType="appellant"
                close={this.props.close}
            >
                {this.props.getSections(this.sections)}
            </InfoPopup>
        );
    }

} export default AppellantCourtOrderPopup;