class Turtle {
    constructor(name, color, speed) {
        this.name = name;
        this.color = color;
        this.speed = speed;
    }

    swim() {
        console.log(`${this.color} ${this.name} is swimming gracefully.`);
    }

    dive(depth) {
        console.log(`${this.color} ${this.name} is diving to a depth of ${depth} meters.`);
    }
}

const myTurtle = new Turtle('Terry', 'Green', 'slow');
myTurtle.swim();
myTurtle.dive(10);
