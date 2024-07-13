// Вам потрібно зробити конструктор сутності "Студент". Студент має ім'я, прізвище, рік народження — це властивості. Є масив з оцінками, це також властивість.
//  І є можливість отримати вік студента та його середній бал – це методи.

// Ще у всіх Студентів є по масиву однакової довжини, у ньому 25 елементів, спочатку він не заповнений, але на 25 елементів. Це масив,
//  в якому відзначається відвідуваність, щоразу коли ми викликаємо метод .present() на чергове порожнє місце, в масив записується true,
//   коли викликаємо .absent() - записується false. Передбачте будь-який захист від того, щоб у масиві відвідуваності не могло бути більше 25 записів.
//    Масив – це властивість, present та absent – методи.

// Останній метод: .summary(), перевіряє середню оцінку і середнє відвідування(кількістьВідвідин/кількістьЗанять), і якщо середня оцінка більше 90,
//  а середнє відвідування більше 0.9, то метод summary повертає рядок "Молодець!", якщо одне з цих значень менше , то - "Добре, але можна краще ", якщо обидва нижче - "Редиска!".

// Не забудьте після того, як напишите цей конструктор, створити 2-3 екземпляри (конкретних студентів) і показати використання цих методів.

function Student(firstName, lastName, age) {
  this.firstName = firstName;
  this.lastName = lastName;
  this.displayName = `${firstName} ${lastName}`;
  this.age = age;
  this.score = new Array();
  this.activity = new Array(25);
}

Student.prototype.getAge = function () {
  return this.age;
};

Student.prototype.getAvrScore = function () {
  return this.score.reduce((acc, cur) => acc + cur, 0) / this.score.length;
};

Student.prototype.present = function () {
  const emptyIndex = this.activity.findIndex((_) => _ === undefined);
  if (emptyIndex !== -1) {
    this.activity[emptyIndex] = true;
  }
  return;
};

Student.prototype.absent = function () {
  const emptyIndex = this.activity.findIndex((_) => _ === undefined);
  if (emptyIndex !== -1) {
    this.activity[emptyIndex] = false;
  }
  return;
};

Student.prototype.summary = function () {
  const exelentMsg = "Молодець!";
  const goodMsg = "Добре, але можна краще";
  const badMsg = "Редиска!";
  const avrScore =
    this.score.reduce((acc, cur) => acc + cur, 0) / this.score.length;
  const avrActivity =
    this.activity.filter((_) => _ == true).length / this.activity.length;

  if (avrScore > 90 && avrActivity > 0.9) {
    return exelentMsg;
  }

  if (avrScore > 90 || avrActivity > 0.9) {
    return goodMsg;
  }

  return badMsg;
};

const student1 = new Student("Vasya", "Bubin", 20);
const student2 = new Student("Lesya", "Lubina", 23);
const student3 = new Student("Eternity", "Emperor", 999);

// 40 ітерацій зробив спеціально, оцінок буде більше, кількість відвідувань залишається 25
for (let i = 0; i < 40; i++) {
  const randomActivity = Math.floor(Math.random() * 2);
  if (randomActivity === 1) {
    student1.present();
  } else {
    student1.absent();
  }

  student1.score.push(getRandomNum(50, 70));

  student2.present();
  student2.score.push(getRandomNum(80, 90));

  student3.present();
  student3.score.push(getRandomNum(90, 100));
}

function getRandomNum(min, max) {
  return Math.floor(Math.random() * (max - min + 1)) + min;
}


console.log(student1.displayName);
console.log(`Age: ${student1.getAge()}`);
console.log(`Average score: ${student1.getAvrScore()}`);
console.log(student1.summary());

console.log('------------------')

console.log(student2.displayName);
console.log(`Age: ${student2.getAge()}`);
console.log(`Average score: ${student2.getAvrScore()}`);
console.log(student2.summary());

console.log('------------------')

console.log(student3.displayName);
console.log(`Age: ${student3.getAge()}`);
console.log(`Average score: ${student3.getAvrScore()}`);
console.log(student3.summary());


