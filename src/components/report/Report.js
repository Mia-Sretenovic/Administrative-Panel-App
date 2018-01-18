import React, { Component } from "react";
import { Switch, Route } from "react-router-dom";

import CompanySelector from "./CompanySelector";
import CandidateSelector from "./CandidateSelector";
import ReportDetails from "./ReportDetails";
import { redirectService } from "../../services/redirectService";
import { communicationService } from "../../services/communicationService";
import "./Report.css";

export default class Report extends Component {
    constructor() {
        super();
        this.state = {
            percent: 33,
            user: {},
            company: {},
            selectedCandidate: true,
            selectedCompany: false,
            selectedDetails: false
        }
    }

    showSelectedUserOnPage = (selectedUser) => {
        this.setState({
            user: selectedUser,
            percent: 66,
            selectedCompany: true
        });
    }

    showSelectedCompanyOnPage = (selectedCompany) => {
        this.setState({
            company: selectedCompany,
            percent: 100,
            selectedDetails: true
        });
    }

    showReportOnLandingPage = (detailsOfReport) => {

        let createdReport = {
            candidateId: this.state.user.id,
            candidateName: this.state.user.name,
            companyId: this.state.company.id,
            companyName: this.state.company.name,
            id: Math.floor(Math.random() * 10),
            interviewDate: detailsOfReport.interviewDate,
            note: detailsOfReport.note,
            phase: detailsOfReport.phase,
            status: detailsOfReport.status
        }

        communicationService.post("reports", createdReport, response => {
            redirectService.redirect("/");
        }, error => { console.log(error) });

    }

    render() {
        return (
            <div className="container create-reports">

                <div className="row row-container">

                    <div className="col-sm-12 col-md-12 col-lg-12 text-center selection-box">
                        <button className="candidate-button col-3" disabled={!this.state.selectedCandidate}>Select candidate</button>
                        <button className="candidate-button col-3" disabled={!this.state.selectedCompany}>Select company</button>
                        <button className="candidate-button col-3" disabled={!this.state.selectedDetails} >Report details</button>
                    </div>
                </div>

                <div className="row">
                    <div className="col-sm-12 col-md-12 col-lg-12">
                        <Switch>
                            <Route exact path="/create" component={() => <CandidateSelector handleUserData={this.showSelectedUserOnPage} />} />
                            <Route path="/create/company" component={() => <CompanySelector handleCompanyData={this.showSelectedCompanyOnPage} />} />
                            <Route path="/create/details" component={() => <ReportDetails handleReportDetailsData={this.showReportOnLandingPage} />} />
                        </Switch>

                    </div>
                </div>

            </div>
        );
    }
}