import React, { Component } from "react";
import { redirectService } from "../../services/redirectService";
import "./ReportDetails.css"

export default class ReportDetails extends Component {

    constructor() {
        super();

        this.state = {
            currentDate: new Date().getFullYear() + "-" + new Date().getMonth() + 1 + "-" + new Date().getDate(),
            interviewDate: "",
            phase: "",
            status: "",
            note: "",
            dateInput: "",
            noteInput: "",
            selectPhase: "",
            selectStatus: ""
        }
    }

    dateHandler = ({ target }) => {
        this.setState({
            interviewDate: target.value
        });
    }

    changeHandler = ({ target }) => {
        this.setState({
            [target.name]: target.value,
        });

    }

    backButtonHandler = () => {
        redirectService.redirect("/create/company");

    }


    submitFormHandler = (formSubmitEvent) => {
        formSubmitEvent.preventDefault();

        let reportDetails = {
            interviewDate: this.state.interviewDate,
            phase: this.state.phase,
            status: this.state.status,
            note: this.state.note
        }

        if (!this.state.interviewDate) {
            this.setState({ dateInput: "Please enter a date." });
            return;

        }
        if (reportDetails.status === "") {
            this.setState({ selectStatus: "Please enter candidate status." });
            return;
        }
        if (reportDetails.phase === "") {
            this.setState({ selectPhase: "Please enter candidate phase." });
            return;
        }

        if (!this.state.note) {
            this.setState({ noteInput: "Please write something about the candidate." });
            return;
        }

        this.props.handleReportDetailsData(reportDetails);
    }


    render() {

        return (

            <form onSubmit={this.submitFormHandler}>

                <div className="row report-details">
                    <div className="col-sm-12 col-md-3 col-lg-3 mx-auto">
                        <h6>Interview Date</h6>
                        <input type="date" max={this.state.currentDate} value={this.state.interviewDate} onChange={this.dateHandler} />
                        <p><span>{this.state.dateInput}</span></p>
                    </div>
                    <div className=" col-sm-12 col-md-3 col-lg-3 mx-auto">
                        <h6>Status</h6>
                        <select name="status" value={this.state.status} onChange={this.changeHandler}>
                            <option value="">-</option>
                            <option value="passed">passed</option>
                            <option value="declined">declined</option>
                        </select>
                        <p><span>{this.state.selectStatus}</span></p>
                    </div>
                    <div className="col-sm-12 col-md-3 col-lg-3 mx-auto">
                        <h6>Phase</h6>
                        <select name="phase" value={this.state.phase} onChange={this.changeHandler}>
                            <option value="">-</option>
                            <option value="cv">cv</option>
                            <option value="hr">hr</option>
                            <option value="tech">tech</option>
                            <option value="final">final</option>
                        </select>
                        <p><span>{this.state.selectPhase}</span></p>
                    </div>
                </div>

                <div className="row">
                    <div className="col-sm-12 col-md-12 col-lg-12 text-area">
                        <h6>Notes</h6>
                        <textarea placeholder="notes..." value={this.state.note} onChange={this.changeHandler} name="note"></textarea>
                        <p><span>{this.state.noteInput}</span></p>
                    </div>
                </div>
                <div className="row">
                    <div className='col-6 col-lg-6 col-md-6 col-sm-6 '>
                        <button className="custom-btn float-left pointer" onClick={() => this.backButtonHandler()} >BACK</button>
                    </div>
                    <div className="col-6 col-sm-6 col-md-6 col-lg-6">
                        <button className="custom-btn pointer" type="submit">SUBMIT</button>
                    </div>
                </div>


            </form>
        );
    }
}