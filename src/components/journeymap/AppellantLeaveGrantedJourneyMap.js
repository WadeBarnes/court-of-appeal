import React from 'react';
import FormIcon from './journeyicons/FormIcon';
import GavelIcon from './journeyicons/GavelIcon';
import CalendarIcon from './journeyicons/CalendarIcon';
import EndCircle from './journeyicons/EndCircle';
import Trail from './Trail';
let cn = require('classnames');
let JOURNEY_TYPE = require('../../helpers/constants');

class AppellantLeaveGrantedJourneyMap extends React.Component {
    
    constructor(props) {
        super(props);
        this.state = {
            id: props.journey ? props.journey.id : null,
            userid: props.journey ? props.journey.userid : null,
            steps: props.journey ? JSON.parse(props.journey.steps) : [
                {status: 'new', type: 'appealrecord'},
                {status: 'new', type: 'factum'},
                {status: 'new', type: 'bookappeal'},
                {status: 'new', type: 'noticeofhearing'},
                {status: 'new', type: 'appellanthearing'},
                {status: 'new', type: 'appellantcourtorder'}],
            case: props.case
        }
    }
    
    render() {
        return (
            <div className={"journey-map-container"}>
                <div className={cn("journey-start-circle", {"completed-step": this.state.steps[0].status !== 'new'})} />
                <Trail 
                    className={"journey-trail-l1-l2"}
                    completed={this.state.steps[0].status !== 'new'}
                    lineCompleted={this.state.steps[2].status === 'completed'}
                    width={'15%'}
                    level={1}
                />
                <FormIcon 
                    style={{left:'20%'}}
                    twoPages={true}
                    stepTitle={"Appeal Record and Transcript"}
                    action={this.iconClicked.bind(this, 'appealrecord')}
                    active={true}
                    stepTitleClass={"step-title-wide"}
                    order={1}
                    status={this.stepStatus(1)}
                    completed={this.stepCompleted.bind(this)}
                    ready={this.props.isStepReady(1, this.state.steps)}
                />
                <Trail
                    className={"journey-trail-l1-l2"}
                    completed={this.state.steps[0].status === 'completed'}
                    lineCompleted={this.state.steps[2].status === 'completed'}
                    width={'22%'}
                    level={1}
                />
                <FormIcon 
                    style={{left:'41%'}}
                    twoPages={true}
                    stepTitle={"Factum, Appeal Book and Certificate of Readiness"}
                    stepTitleClass={"step-title-wide"}
                    action={this.iconClicked.bind(this, 'factum')}
                    active={true}
                    order={2}
                    status={this.stepStatus(2)}
                    completed={this.stepCompleted.bind(this)}
                    ready={this.props.isStepReady(2,this.state.steps)}
                />
                <Trail
                    className={"journey-trail-l1-l2"}
                    completed={this.state.steps[1].status === 'completed'}
                    lineCompleted={this.state.steps[2].status === 'completed'}
                    width={'23%'}
                    level={1}
                />
                <CalendarIcon 
                    style={{left:'62%', marginTop: '5px'}}
                    stepTitle={"Book Appeal Date with Registry"}
                    action={this.iconClicked.bind(this, 'bookappeal')}
                    stepTitleClass={"step-title-wide"}
                    active={true}
                    order={3}
                    status={this.stepStatus(3)}
                    completed={this.stepCompleted.bind(this)}
                    ready={this.props.isStepReady(3, this.state.steps)}
                />
                <Trail
                    className={"journey-trail-l1-l2"}
                    completed={this.state.steps[2].status === 'completed'}
                    lineCompleted={this.state.steps[2].status === 'completed'}
                    width={'5%'}
                    level={1}
                />
                <div className={cn("journey-right-curve",{'completed-curve': this.state.steps[2].status === 'completed'})} />
                <div className={cn("journey-left-curve",{'completed-left-curve': this.state.steps[2].status === 'completed'})} />
                <Trail
                    className={"journey-trail-l2-l3 last-row"}
                    completed={this.state.steps[2].status === 'completed'}
                    width={'10%'}
                    level={2}
                />
                <FormIcon 
                    style={{top:'55%', left: '18%'}}
                    twoPages={false}
                    stepTitle={"Notice of Hearing"}
                    action={this.iconClicked.bind(this, 'noticeofhearing')}
                    active={true}
                    order={4}
                    status={this.stepStatus(4)}
                    completed={this.stepCompleted.bind(this)}
                    ready={this.props.isStepReady(4, this.state.steps)}
                />
                 <Trail
                     className={"journey-trail-l2-l3 last-row"}
                     completed={this.state.steps[3].status === 'completed'}
                     width={'23%'}
                     level={2}
                 />
                <GavelIcon 
                    style={{top:'55%', left: '41%'}}
                    stepTitle={"The Hearing"}
                    action={this.iconClicked.bind(this, 'appellanthearing')}
                    active={true}
                    order={5}
                    status={this.stepStatus(5)}
                    completed={this.stepCompleted.bind(this)}
                    ready={this.props.isStepReady(5, this.state.steps)}
                />
                 <Trail
                     className={"journey-trail-l2-l3 last-row"}
                     completed={this.state.steps[4].status === 'completed'}
                     width={'23%'}
                     level={2}
                 />
                <FormIcon 
                    style={{top:'55%', left: '64%'}}
                    twoPages={false}
                    stepTitle={"Court Order"}
                    stepTitleOptional={"(if applicable)"}
                    stepTitleClass={"step-title-wide"}
                    action={this.iconClicked.bind(this, 'appellantcourtorder')}
                    active={true}
                    order={6}
                    status={this.stepStatus(6)}
                    completed={this.stepCompleted.bind(this)}
                    ready={this.props.isStepReady(6, this.state.steps)}
                />
                 <Trail
                     className={"journey-trail-l2-l3 last-row"}
                     completed={this.state.steps[5].status === 'completed'}
                     width={'18%'}
                     level={2}
                 />
                <EndCircle
                    stepTitle={"Appeal Process Complete"}
                    action={this.iconClicked.bind(this,'appellantcomplete')}
                    active={true}
                    completed={this.state.steps[5].status === 'completed'}
                    style={{top: '55%', left: '83%'}}
                />
            </div>
        );
    }
    
    iconClicked(action) {
        this.props.iconClicked(action)
    }
    
    stepStatus(stepNumber) {
        return this.state.steps[stepNumber - 1].status;
    }

    stepCompleted(stepNumber, isComplete) {
        let steps = this.state.steps;
        steps[stepNumber - 1].status = isComplete ? 'completed' : 'new';
        this.setState({steps: steps}, this.props.createOrUpdateJourney(this.state.steps,JOURNEY_TYPE.JOURNEY_TYPE_APPELLANT_LEAVE_REQUIRED, this.setId.bind(this)));
    }

    setId(id) {
        this.setState({id:id})
    }
}
export default AppellantLeaveGrantedJourneyMap;
