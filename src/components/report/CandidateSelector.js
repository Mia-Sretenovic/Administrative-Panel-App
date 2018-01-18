import React, { Component } from "react";
import DTOCandidate from "../../DTO/DTOCandidate";
import { communicationService } from "../../services/communicationService";
import { redirectService } from "../../services/redirectService";
import "./CandidateSelector.css";


export default class CandidateSelector extends Component {
    constructor(props) {
        super(props);
        this.state = {
            candidatesList: [],
            selected: null,
            filteredCandidates: [],

        }
    }

    getCandidatesList = () => {
        communicationService.get("candidates", (response) => {
            const listOfAllCandidates = response.data;
            const allCandidates = listOfAllCandidates.map(element => {
                const candidate = new DTOCandidate(element);
                return candidate;
            });

            this.setState({ candidatesList: allCandidates });
        }, (error) => { console.log(error) });
    }

    componentDidMount() {
        this.getCandidatesList();
    }

    handleChange = (candidateId) => {
        this.setState({ selected: candidateId });

        let candidateRows = document.getElementsByClassName('candidate-row');
        for (var i = 0; i < candidateRows.length; i++) {
            candidateRows[i].style = "#e6dfdf";
        }

        document.getElementById(candidateId).style.backgroundColor = "#e6dfdf";
    }

    handleSubmitForm = (formSubmitEvent) => {
        formSubmitEvent.preventDefault();

        let selectedCandidate = this.state.candidatesList.filter(element => {
            if (element.id === this.state.selected) {
                return element;
            }
        });


        this.props.handleUserData(selectedCandidate[0]);
        redirectService.redirect("/create/company");
    }

    filterList = (event) => {
        var updatedList = this.state.candidatesList;
        if (event.target.value === "") {
            this.getCandidatesList();
        }

        updatedList = updatedList.filter(candidate => {
            return candidate.name.toLowerCase().includes(
                event.target.value.toLowerCase())
        });
        this.setState({ candidatesList: updatedList });
    }


    render() {
        return (
            <form onSubmit={this.handleSubmitForm}>
                <div className="row user-info">
                    <h2 className="col-lg-12 text-muted">Candidates ({this.state.candidatesList.length})</h2>

                    <div className="filter-list col-lg-12">
                        <fieldset className="form-group">
                            <input type="text" className="form-control form-control-lg" placeholder="Search" onChange={this.filterList} />
                        </fieldset>
                    </div>
                    {this.state.candidatesList.map(candidate =>
                        <div id={candidate.id} className="col-lg-12 candidate-row" key={candidate.id}>

                            <div className="row select-candidate pointer" onClick={() => this.handleChange(candidate.id)}>
                                <div className="col-lg-6 imgDiv">

                                    {!candidate.avatar ? <img src="https://images.unsplash.com/photo-1483389127117-b6a2102724ae?auto=format&fit=crop&w=1267&q=80" alt="candidate" width="130" height="130" />
                                        : <img src={candidate.avatar} alt="candidate" />}
                                </div>
                                <div className="col-lg-6">
                                    <h3 className="candidates-name text-muted">{candidate.name}</h3>
                                    <p className="candidates-name text-muted">{candidate.email}</p>
                                </div>
                            </div>
                        </div>
                    )}


                    <div className="col-lg-12">
                        <button className="custom-btn pointer" disabled={!this.state.selected} type="submit">NEXT</button>
                    </div>
                </div>
            </form>
        );
    }
}
