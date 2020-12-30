'use strict'

function Student(firstName, lastName, age, isMale) {
	this.firstName = firstName;
	this.lastName = lastName;
	this.age = age;
	this.isMale = isMale;
}

function StudentPrototype() {
	this.toString = function toString() {
		return `${this.firstName} ${this.lastName}`;
	};
	this.sayHello = function sayHello() {
		return `${this.firstName} ${this.lastName} say "Hello!"`;
	};
	this.say = function say(string) {
		return `${this.firstName} ${this.lastName} говорит:
		${string}`;
	}

}

Student.prototype = new StudentPrototype();

const stud1 = new Student('Vlad', 'Testovich', 3, true);
const stud2 = new Student('Vladimir', 'Testovich', 45, false);





function Ladder() {
	this.value = 0;

	this.up = function up() {
		this.value++;
		return this;
	};
	this.down = function down() {
		this.value--;
		return this;

	}
	this.showStep = function showStep() {
		return this.value;

	}
}

const ladder = new Ladder();



function arrMinMax(arr) {
	let minArr = arr[0];
	let maxArr = arr[0];

	for (let i = 0; i < arr.length; i++) {
		if (minArr > arr[i]) {
			minArr = arr[i];
		}
		if (maxArr < arr[i]) {
			maxArr = arr[i];
		}

	}
	return [minArr, maxArr]
}


console.log(arrMinMax([4, -2, 5, 2, 19, -130, 0, 10]));



function average(arr) {
	let num = 0;
	for (let i = 0; i < arr.length; i++) {
		num += arr[i];
	}
	return num / arr.length;
}

console.log(average([4, 1, 5]));



function matchRandom(min, max) {
	return Math.round(min + Math.random() * (max - min));
}

console.log(matchRandom(1, 10));


function matchRandomArr(min, max) {
	let arr = [];
	for (let i = 0; i < 10; i++) {
		const randomNumber = Math.round(min + Math.random() * (max - min));
		arr.push(randomNumber);
	}
	return arr
}

console.log(matchRandomArr(1, 10));
