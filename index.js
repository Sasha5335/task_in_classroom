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



function metodConcat() {
	const arr1 = [1, 2, 3];
	const arr2 = [4, 5, 6];
	return arr1.concat(arr2);

}
console.log(metodConcat());



function metodReverse() {
	const arr = [1, 2, 3];
	return arr.reverse();

}
console.log(metodReverse());


function metodPush() {
	const arr = [1, 2, 3];
	arr.push(4, 5, 6);
	return arr;

}
console.log(metodPush());


function metodUnshift() {
	const arr = [1, 2, 3];
	arr.unshift(4, 5, 6);
	return arr;
}
console.log(metodUnshift());


function metodShift() {
	const arr = ['js', 'css', 'jq'];
	return arr.shift();
}
console.log(metodShift());


function metodPop() {
	const arr = ['js', 'css', 'jq'];
	return arr.pop();
}
console.log(metodPop());


function metodSlice() {
	const arr = [1, 2, 3, 4, 5];
	return arr.slice(0, 3);
}
console.log(metodSlice());


function metodSplice() {
	const arr = [1, 2, 3, 4, 5];
	arr.splice(1, 2);
	return arr;
}
console.log(metodSplice());


function metodSplice1() {
	const arr = [1, 2, 3, 4, 5];
	const newArr = arr.splice(1, 3);
	return newArr;
}
console.log(metodSplice1());


function metodSplice2() {
	const arr = [1, 2, 3, 4, 5];
	arr.splice(2, 0, 'a', 'b', 'c');
	return arr;
}
console.log(metodSplice2());


function metodSplice3() {
	const arr = [1, 2, 3, 4, 5];
	arr.splice(1, 0, 'a', 'b');
	arr.splice(6, 0, 'c');
	arr.splice(8, 0, 'e');
	return arr;
}
console.log(metodSplice3());


function metodSort() {
	const arr = [3, 4, 1, 2, 7];
	return arr.sort();
}
console.log(metodSort());


function metodObjectKeys() {
	const arr = { js: 'test', jq: 'hello', css: 'world' };
	return Object.keys(arr);
}
console.log(metodObjectKeys());



// Необходимо создать функцию hasElem, которая параметрами будет принимать массив и строку, и возвращать true, если строка есть в массиве, и false - если нет

function hasElem(arr, str) {
	for (let key of arr) {
		if (key === str) {
			return true;
		}
	}
	return false;
}

console.log(hasElem([1, 2, 3, 4, 5], 'hello'));
console.log(hasElem([1, 2, 3, 'hello', 4, 5], 'hello'));



// Дан массив с числами. Проверьте, что в этом массиве есть указанное число. Если есть - вернуть true, а если нет - вернуть false.


console.log(hasElem([1, 2, 3, 4, 5], 8));
console.log(hasElem([1, 2, 3, 5], 1));



// Дан массив с числами. Проверьте, есть ли в нем два одинаковых числа подряд. Если есть -  вернуть true, а если нет - вернуть false.

function hasElem1(arr) {
	for (let i = 0; i < arr.length; i++) {
		if (arr[i] === arr[i + 1]) {
			return true;
		}
	};
	return false;
}

console.log(hasElem1([5, 8, 3, 4, 5]));
console.log(hasElem1([1, 2, 3, 4, 4, 5]));
