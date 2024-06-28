"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.Player = void 0;
class Player {
    constructor(name, role, camp) {
        this.isAlive = true;
        this.isInLove = false;
        this.name = name;
        this.role = role;
        this.camp = camp;
    }
    //test nico par pitie n'enlevez pas 
    vote(players) {
        const randomIndex = Math.floor(Math.random() * players.length);
        return players[randomIndex];
    }
}
exports.Player = Player;
//# sourceMappingURL=Player.js.map