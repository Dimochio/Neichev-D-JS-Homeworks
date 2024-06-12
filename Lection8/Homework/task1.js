// Створити ladder (сходи) – об'єкт, який дозволяє підніматися вгору та спускатися:
// Тепер, якщо нам потрібно зробити кілька послідовних викликів, ми можемо виконати це так:

// ladder.up();

// ladder.up();

// ladder.down();

// ladder.showStep(); // 1

// Змініть код методів up, down і showStep таким Таким чином, щоб їх виклик можна було зробити по ланцюжку, наприклад:

// ladder.up().up().down().showStep(); // 1

// Такий підхід широко використовується в бібліотеках JavaScript.

function showTask1() {
  console.log('**Regular call**') 
  ladder.up();
  ladder.up(); 
  ladder.down(); 
  ladder.showStep(); // 1

  console.log('**Chain call**') 
  // Поточный степ не скидається, тому у Chain виклику починається з 1
  
  ladder.up().down().up().up().showStep(); // 3

}

let ladder = {
  steps: 0,
  up: function () {
    this.steps++;
    console.log('step up');
    return this;
  },
  down: function () {
    this.steps--;
    console.log('step down');
    return this;
  },
  showStep: function () {
    console.log( 'Current step ==>',this.steps);
    return this;
  },
};
