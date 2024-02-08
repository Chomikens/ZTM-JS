//Evaluate these:
//#1
// [2] === [2]; // false
// {} === {} ; // false 

//#2 what is the value of property a for each object.
const object1 = { a: 5 }; // 4
const object2 = object1; // 4
const object3 = object2;  // 4
const object4 = { a: 5}; //5 
object1.a = 4; 


//#3 create two classes: an Animal class and a Mamal class. 
// create a cow that accepts a name, type and color and has a sound method that moo's her name, type and color. 


class Animal { 
    constructor (animalName, animaType) {
        this.animalName = animalName; 
        this.animaType = animaType; 
    }
    baseInfo() {
        console.log(`I'm ${this.animalName} and ${this.animaType}`)
    }
}

class Mamal extends Animal {
    constructor (animalName, animaType, animalColor) {
        super (nimalName, animaType)
        this.animalColor = animalColor;
    }
    super(baseInfo) {
        console.log(`I'm ${this.animalName} and ${this.animaType} also I'm this color: ${this.animalColor}`)
    }
}

const cow = new Mamal("Kotorozec", "Cow", "black")

console.log(cow, cow.baseInfo())