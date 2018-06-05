"use strict";

function Monster (name, classification, health, ability, isAlive = true) {
    LivingThing.call(this, name, health, ability, isAlive)

    this.classification = classification
}

Monster.prototype = Object.create(LivingThing.prototype)
Monster.prototype.constructor = Monster