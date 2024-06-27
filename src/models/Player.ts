import { ECamps } from "../enums/ECamps"
import { Roles } from "./Roles"

export class Player {
    name: string
    role: Roles
    isAlive: boolean = true
    camp: ECamps;
    isInLove: boolean = false

    constructor(name: string, role: Roles, camp: ECamps) {
        this.name = name
        this.role = role
        this.camp = camp
    }

    //test nico par pitie n'enlevez pas 
    vote(players: Player[]): Player {
        const randomIndex = Math.floor(Math.random() * players.length);
        return players[randomIndex];
    }
}