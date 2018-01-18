export default class DTOCandidate {
    constructor({ id, name, birthday, email, education, avatar }) {
        this._id = id;
        this._name = name;
        this._birthday = birthday;
        this._email = email;
        this._education = education;
        this._avatar = avatar;
    }

    get id() {
        return this._id;
    }
    set id(newValue) {
        this._id = newValue;
    }

    get name() {
        return this._name;
    }
    set name(newValue) {
        this._name = newValue;
    }

    get birthday() {
        return this._birthday;
    }
    set birthday(newValue) {
        this._birthday = newValue;
    }

    get email() {
        return this._email;
    }
    set email(newValue) {
        this._email = newValue;
    }

    get education() {
        return this._education;
    }
    set education(newValue) {
        this._education = newValue;
    }
    
    get avatar() {
        return this._avatar;
    }
    set avatar(newValue) {
        this._avatar = newValue;
    }

}

