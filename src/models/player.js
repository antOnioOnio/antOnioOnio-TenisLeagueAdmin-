class Player {
    constructor(id, name, email, tlf, level){
        this.id = id;
        this.name = name;
        this.email = email;
        this.tlf = tlf;
        this.level = level;
    }


    // getters

    get id(){return this.id;}

    get name(){return this.name;}

    get email(){return this.email;}

    get tlf(){return this.tlf;}

    get level(){return this.level;}

    // setters

    set id(id){this.id = id;}

    set name(name){this.name = name;}

    set email(email){this.email = email;}

    set tlf(tlf){this.tlf = tlf;}

    set level(level){this.level = level;}

    
}