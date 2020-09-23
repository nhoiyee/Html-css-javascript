import {Person} from "./index-module.js";

export function promote(){}



export default class Teacher extends Person{ // not visible to others, need to export

    constructor(name, degree){
        super(name);
        this.degree = degree;
    }
    teach(){
        console.log("teach"); // teacher inherit person
    }
}