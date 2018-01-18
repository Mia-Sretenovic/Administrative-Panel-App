import React, { Component } from "react";
import { communicationService } from "../../services/communicationService";
import DTOCompany from "../../DTO/DTOCompany";
import { redirectService } from "../../services/redirectService";
import "./CompanySelector.css"


export default class CompanySelector extends Component {
    constructor(props) {
        super(props);

        this.state = {
            companiesList: [],
            selected: null
        }
    }

    getCompaniesList = () => {
        communicationService.get("companies", (response) => {
            const listOfAllCompanies = response.data;
            const allCompanies = listOfAllCompanies.map(element => {
                const company = new DTOCompany(element);
                return company;
            });

            this.setState({ companiesList: allCompanies });

        }, (error) => { console.log(error) });
    }

    componentDidMount() {
        this.getCompaniesList();
    }


    changeHandler = (companyId) => {
        this.setState({ selected: companyId });

        let companyRows = document.getElementsByClassName('company-row');

        for (var i = 0; i < companyRows.length; i++) {
            companyRows[i].style = '#fff';
        }

        document.getElementById(companyId).style.backgroundColor = '#ccc';
    }


    submitFormHandler = () => {
        // submitFormEvent.preventDefault();

        let selectedCompany = this.state.companiesList.filter(element => {
            if (element.id === this.state.selected) {
                return element;
            }
        });

        this.props.handleCompanyData(selectedCompany[0]);
        redirectService.redirect("create/details");
    }

    backButtonHandler = () => {
        console.log('test');
        redirectService.redirect("create");

    }


    filterList = (event) => {
        var updatedList = this.state.companiesList;
        if (event.target.value === "") {
            this.getCompaniesList();
        }
        updatedList = updatedList.filter(company => {
            return company.name.toLowerCase().includes(
                event.target.value.toLowerCase())
        });
        this.setState({ companiesList: updatedList });
    }



    render() {
        return (

            <div>
                <form >
                    <div className="row company-section">
                        <h2 className="col-12 text-muted">Companies ({this.state.companiesList.length})</h2>
                        <div className="filter-list col-12">
                            <fieldset className="form-group">
                                <input type="text" className="form-control form-control-lg" placeholder="Search" onChange={this.filterList} />
                            </fieldset>
                        </div>
                        {this.state.companiesList.map(company =>

                            <div id={company.id} className="col-lg-12 company-row company-section " key={company.id}>

                                <div className="row selectCandidate pointer" onClick={() => this.changeHandler(company.id)}>

                                    <div className="col-lg-6">
                                        <h3 className="text-muted">{company.name}</h3>
                                        <p className="text-muted">{company.email}</p>
                                    </div>
                                </div>
                            </div>
                        )}
                    </div>
                    <div className="row">
                        <div className='col-6 col-lg-6 col-md-6 float-left col-sm-6 '>
                            <button className="custom-btn pointer float-left" onClick={() => this.backButtonHandler()} >BACK</button>
                        </div>
                        <div className='col-6 col-lg-6 col-md-6 col-sm-6 text-right '>
                            <button className="custom-btn pointer" disabled={!this.state.selected} onClick={() => this.submitFormHandler()}>NEXT</button>
                        </div>

                    </div>
                </form >

            </div>
        );
    }
}