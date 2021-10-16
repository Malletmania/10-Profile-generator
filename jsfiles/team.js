class teamMember {
    constructor (name,id,email,office){
        this.name = name;
        this.id = id;
        this.email = email;
        this.office = office;
    }

getName () {
    return this.name;
}

getid () {
    return this.id;
}

getEmail () {
    return this.email;
}

getOffice () {
    return this.office;
}

getPosition () {
    return 'teamMember';
}

};

module.exports = teamMember;
