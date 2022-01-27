class Animal {
    constructor(name, weight) {
        this.name = name;
        this.weight = weight;
    }

    setName(name) {
        return this.name = name;
    }

    getName() {
        return this.name;
    }

    setWeight(weight) {
        return this.weight = weight;
    }

    getWeight() {
        return this.weight;
    }

    toString() {
        return 'Tên ' + this.name + ' và nặng ' + this.weight;
    }
}

let objAnimal1 = [
    new Animal('Elephant', 45.6)
]
let result = objAnimal1.toString();
document.write(result);
let objAnimal2 = new Animal();
let changeName = objAnimal2.setName('Mouse');
document.write('<br>' + changeName);