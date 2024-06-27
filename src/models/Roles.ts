import { ERoles } from "../enums/ERoles";

export class Roles {
    name: ERoles;
    description: string;
    isSolo: boolean = false;

    constructor(name: ERoles, description: string) {
        this.name = name;
        this.description = description;
    }
}