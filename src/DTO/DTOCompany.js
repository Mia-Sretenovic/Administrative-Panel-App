export default class DTOCompany {
    constructor({ id, name, email}) {
        this._id = id;
        this._name = name;
        this._email = email;
        
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
    
    get email() {
        return this._email;
    }
    set email(newValue) {
        this._email = newValue;
    }
   
}

