"use strict";

//Task1

function addThemAll (a, b, ...args) {
    let sum = a + b;
    for (let arg of args) {
        sum += arg;
    }
    return sum;
}


console.log(addThemAll(2,4)); //6
console.log(addThemAll(1,2,3,4)); //10
console.log(addThemAll(5,5,10)); //20


//Task2

function multiply(a) {
    return function(b) {
      return a * b;
    }
}
    
console.log(multiply(5)(5)) //25
console.log(multiply(2)(-2)) //-4
console.log(multiply(4)(3))	//12


//Task3

const movies = [
    {
      movieName: 'The Thing',
      releaseYear: 1982,
      directedBy: 'Carpenter',
      runningTimeInMinutes: 109,
    },
    {
      movieName: 'Aliens',
      releaseYear: 1986,
      directedBy: 'Cameron',
      runningTimeInMinutes: 137,
    },
    {
      movieName: 'Men in Black',
      releaseYear: 1997,
      directedBy: 'Sonnenfeld',
      runningTimeInMinutes: 98,
    },
    {
      movieName: 'Predator',
      releaseYear: 1987,
      directedBy: 'McTiernan',
      runningTimeInMinutes: 107,
    },
  ];
  
  function byProperty(property, direction) {
    return function (a, b) {
      if (direction === '>') {
        if (a[property] < b[property]) return -1;
        if (a[property] > b[property]) return 1;
        return 0;
      } else {
        if (a[property] > b[property]) return -1;
        if (a[property] < b[property]) return 1;
        return 0;
      }
    };
  }
  
  console.log([...movies].sort(byProperty('releaseYear', '>')));
  console.log([...movies].sort(byProperty('runningTimeInMinutes', '<')));
  console.log([...movies].sort(byProperty('movieName', '>')));


  //Task4

  function detonatorTimer(delay) {
    const interval = setInterval(() => {
      if (delay === 0) {
        console.log('BOOM!');
        clearInterval(interval);
      } else {
        console.log(delay);
        delay--;
      }
    }, 1000);
 }

 function detonatorTimer(delay) {
    function explode() {
      if (delay === 0) {
        console.log('BOOM!');
      } else {
        console.log(delay);
        delay--;
        setTimeout(explode, 1000);
      }
    }
  
    setTimeout(explode, 1000);
}

detonatorTimer(3);


//Task5

let me = {
    name: 'Kostiantyn',
    residency: 'Poland',
    gender: 'male',
    age: 33,
    hobby: 'music',
    defaultMood: 'focused',
    currentMood: 'tired',
    learning: 'JavaScript', 
    ocupation: 'welder',
    expectation: 'software engineer',
    introduce() {
        console.log(`My name is ${this.name} and I live in ${this.residency}.`);
    },
    prognose() {
        console.log(`The chanses are I'm gonna be ${this.age+1} next year 😅`);
    },
    describeMyMood(){
        console.log(`Mostly I'm ${this.defaultMood}, but now I'm ${this.currentMood}.`);
    },
    situation(){
        console.log(`I enjoy playing ${this.hobby}, but now I mostly spend my time learning ${this.learning}.`);
    },
    future(){
        console.log(`Currently I'm working as a ${this.ocupation} and hoping to become a ${this.expectation}.`);
    }
}
    
 me.introduce();
 me.prognose();
 me.describeMyMood();
 me.situation();
 me.future();


//Task6

let securedSelfIntroduce = me.introduce.bind(me);
let securedSelfPrognose = me.prognose.bind(me);
let securedSelfDescribeMyMood = me.describeMyMood.bind(me);
let securedSelfSituation = me.situation.bind(me);
let secudedSelfFuture = me.future.bind(me);

setTimeout(securedSelfIntroduce, 1000);
setTimeout(securedSelfPrognose, 2000);
setTimeout(securedSelfDescribeMyMood, 3000);
setTimeout(securedSelfSituation, 4000);
setTimeout(secudedSelfFuture, 5000);


//Task7

function someFunction(num1, num2) {
    console.log(`The result is ${num1 * num2}`);
}
  
function slower(func, seconds) {
    return function (...args) {
      setTimeout(() => {
        func.apply(this, args);
      }, seconds * 1000);
    };
}
  
let slowedSomeFunction = slower(someFunction, 5);
  
slowedSomeFunction(3, 4);