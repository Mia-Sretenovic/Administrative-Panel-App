import React from "react";
import Candidate from "./Candidate";
import DTOReport from "../../DTO/DTOReport";
import { communicationService } from "../../services/communicationService";


export default class ReportList extends React.Component {

    constructor(props) {
        super(props);
        this.state = {
            reportsList: [],
            filteredCandidates: []
        }
    }

    getReportsList = () => {
        communicationService.get("reports", (response) => {

            let reportsList = response.data;

            let reports = reportsList.map((oneReport) => {
                let report = new DTOReport(oneReport);
                return report;
            });

            this.setState({
                reportsList: reports,
                filteredCandidates: reports
            });

        }, (error) => console.log(error));
    }

    componentDidMount() {
        this.getReportsList();
    }


    listFilter = (event) => {
        
        var updatedList = this.state.reportsList;
        if(event.target.value===""){
            this.getReportsList();
        }

        updatedList = updatedList.filter(report => {
            let searchReport = report.candidateName.toLowerCase().includes(
                event.target.value.toLowerCase()) || report.companyName.toLowerCase().includes(
                    event.target.value.toLowerCase());
            return searchReport;
        });

        this.setState({ reportsList: updatedList });
    
    }


    render() {

        return (
            <div className="mainpage">
                <div className="container landingPage">
                    <form>
                        <fieldset className="form-group">
                            <input type="text" className="form-control form-control-lg" placeholder="Search" onChange={this.listFilter} />
                        </fieldset>
                    </form>
                    {this.state.reportsList.map((reportItem) => <Candidate reportItem={reportItem} key={reportItem.id} refreshPage={this.getReportsList} />)}
                </div>
            </div>
        );
    }
}

