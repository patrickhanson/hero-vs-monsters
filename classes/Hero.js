"use strict";

function Hero (name, secretIdentity, health, ability, isAlive = true) {
    LivingThing.call(this, name, health, ability, isAlive)

    this.secretIdentity = secretIdentity
}

Hero.prototype = Object.create(LivingThing.prototype)
Hero.prototype.constructor = Hero

Hero.prototype = {
    attack: function (monster) {
        const heroDmg = getRandomInt(0, 10)
        const monsterDmg = getRandomInt(1, 13)
        this.health -= heroDmg
        monster.health -= monsterDmg
        console.log(this.name + " used " + this.ability + "! " +
        monster.name + " used " + monster.ability + "!")
        console.log(
            this.name + "'s health (" + this.health + ") is reduced by " + heroDmg + "!"
        )
        console.log(
            monster.name + "'s health (" + monster.health + ") is reduced by " + monsterDmg + "!"
        )
    },
    fight: function (monsters) {
        for(let i = 0; i < monsters.length; i++) {
            const monStar = monsters[i]
            if(monStar.health > 0 && this.health > 0) {
                this.attack(monStar)
                i--
            } else if(monStar.health <= 0 && this.health > 0) {
                monStar.isAlive = false
                console.log(monStar.name + " is dead.")
            } else if(monStar.health > 0 && this.health <= 0) {
                this.isAlive = false
                console.log(this.name + " is dead. :(")
            }
        }
    }
}