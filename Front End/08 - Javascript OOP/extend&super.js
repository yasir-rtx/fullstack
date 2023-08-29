// Parent Class
class Pet {
    constructor(name, age) {
        this.name = name;
        this.age = age;
    }

    eat() {
        return `${this.name} is eating!`;
    }
}

// Child class
class Cat extends Pet {
    constructor(name, age, lives) {
        // super mengacu pada parent constructor
        super(name, age); // mengambil nilai variabel dari parent
        this.lives = lives;
    }
    meong() {
        return "Meoooong!!!";
    }
}

// Child class
class Dog extends Pet {
    bark() {
        return "Guk Guk!!!";
    }
}

const neko = new Cat("Nana", 5, 9);
const inu = new Dog("Hachiko", 4);
