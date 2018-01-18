export default class DTOReport {
    constructor({ candidateId, candidateName, companyId, companyName, id, interviewDate, note, phase, status }) {
        this._candidateId= candidateId;
        this._candidateName = candidateName;
        this._companyId = companyId;
        this._companyName = companyName;
        this._id = id;
        this._interviewDate = interviewDate;
        this._note = note;
        this._phase = phase;
        this._status = status;
    }

    get candidateId() {
        return this._candidateId;
    }
    set candidateId(newValue) {
        this._candidateId = newValue;
    }

    get candidateName() {
        return this._candidateName;
    }
    set candidateName(newValue) {
        this._candidateName = newValue;
    }

    get companyId() {
        return this._companyId;
    }
    set companyId(newValue) {
        this._companyId = newValue;
    }

    get companyName() {
        return this._companyName;
    }
    set companyName(newValue) {
        this._companyName = newValue;
    }

    get id() {
        return this._id;
    }
    set id(newValue) {
        this._id = newValue;
    }

    get interviewDate() {
        return this._interviewDate;
    }
    set interviewDate(newValue) {
        this._interviewDate = newValue;
    }

    get note() {
        return this._note;
    }
    set note(newValue) {
        this._note = newValue;
    }

    get phase() {
        return this._phase;
    }
    set phase(newValue) {
        this._phase = newValue;
    }
    
    get status() {
        return this._status;
    }
    set status(newValue) {
        this._status = newValue;
    }
}

