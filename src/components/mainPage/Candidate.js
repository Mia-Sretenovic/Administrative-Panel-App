import React, { Component } from "react";
import Modal from "react-modal";
import {communicationService} from "../../services/communicationService";
import "./Candidate.css";

class Candidate extends Component {
    constructor(props) {
        super(props);
        this.state = {
            showModal: false
        }
    }

    deleteButton = ()=> {
        communicationService.delete(`reports/${this.props.reportItem.id}`, () => {
            this.props.refreshPage();
        }, error => {
            console.log(error);
        });
    }


    render() {
        return (<div className="row candidate">
            <div className="col-sm-6 col-lg-4">
                <h2>{this.props.reportItem.companyName}</h2>
                <h6>Company</h6>
            </div>
            <div className="col-sm-6 col-lg-3">
                <h2>{this.props.reportItem.candidateName}</h2>
                <h6>Candidate</h6>
            </div>
            <div className="col-sm-12 col-lg-5">
                <div className="row">
                    <div className="col-3">
                        {new Date(this.props.reportItem.interviewDate).toLocaleDateString()}
                        <h6>interview date</h6>
                    </div>

                    <div className="col-3">
                        {this.props.reportItem.status}
                        <h6>status</h6>
                    </div>
                    <div className="col-3"><button onClick={() => { this.setState({ showModal: true }) }}><i className="fa fa-eye pointer" aria-hidden="true"></i></button></div>
                    <div className="col-3 pointer delete-button"><button onClick={this.deleteButton}>x</button></div>
                </div>
            </div>

            <Modal
                className="Modal__Bootstrap modal-dialog"
                isOpen={this.state.showModal}
                ariaHideApp={false}
            >
                <div className="modal-content">
                    <div className="modal-header">
                        <button type="button" className="close pointer" onClick={() => { this.setState({ showModal: false }) }}>
                            <span aria-hidden="true">&times;</span>
                            <span className="sr-only">Close</span>
                        </button>
                        <h4 className="modal-title">{this.props.reportItem.candidateName}</h4>
                    </div>
                    <div className="modal-body modalBox">
                        <div className="row">
                            <div className="col-4">
                                <div className="breaker">
                                    <h6>Company</h6>
                                    <h4>{this.props.reportItem.companyName}</h4>
                                </div>
                                <div className="breaker">
                                    <h6>interview date</h6>
                                    <h4>{new Date(this.props.reportItem.interviewDate).toLocaleDateString()}</h4>
                                </div>
                                <div className="breaker">
                                    <h6>status</h6>
                                    <h4>{this.props.reportItem.status}</h4>
                                </div>
                                <div className="breaker">
                                    <h6>phase</h6>
                                    <h4>{this.props.reportItem.phase}</h4>
                                </div>
                            </div>
                            <div className="col-8 notes-container">
                                <h6>notes</h6>
                                {this.props.reportItem.note}
                            </div>
                        </div>
                    </div>
                </div>
            </Modal>
        </div>
        );
    }

}

export default Candidate;