// Створіть клас Coach, який буде представляти тренера. Додайте властивості, такі як ім'я, спеціалізація та рейтинг.
// Також реалізуйте метод для виведення інформації про тренера та його рейтинг.

class Coach {
  constructor(fullName, specialization, rating) {
    this.fullName = fullName;
    this.specialization = specialization;
    this.rating = rating;
  }

  displayInfo() {
    return `Coach: ${this.fullName}, Specialization: ${this.specialization}, Rating: ${this.rating}`;
  }
}

function showTask2() {
  const coach1 = new Coach("John Doe", "Fitness", 4.7);
  const coach2 = new Coach("Alice Smith", "Yoga", 4.9);

  console.clear();

  console.log(coach1.displayInfo()); // "Coach: John Doe, Specialization: Fitness, Rating: 4.7"

  console.log(coach2.displayInfo()); // "Coach: Alice Smith, Specialization: Yoga, Rating: 4.9"
}
