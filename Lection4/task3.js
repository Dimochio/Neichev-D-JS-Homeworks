// Основне завдання, cтворити скрипт яки повинен виконувати наступне:
// запитати у користувача рік народження;
// запитати в нього, в якому місті він живе;
// запитати його улюблений вид спорту.

// При натисканні на ОК показуємо вікно, де має бути відображена наступна інформація:

// його вік;
// якщо користувач вкаже Київ, Вашингтон чи Лондон, то показати йому повідомлення -
// "Ти живеш у столиці..." і на місце точок підставляємо країну, столицею якої є місто. Інакше показуємо йому “ти живеш у місті…”, де місце точок – введене місто.

// Додаткове завдання *
// Вибираємо самі три види спорту та три чемпіони у цих видах. Відповідно, якщо користувач вкаже один із цих видів спорту,
// то показуємо йому повідомлення “Круто! Хочеш стати …? і підставляємо на місце точок ім'я та прізвище чемпіона.

// Все це має бути відображено в одному вікні (алерті).

// Додаткове завдання
// Якщо в якомусь випадку він не захоче вводити інформацію і натисне Скасувати, показати йому повідомлення – “Шкода, що Ви не захотіли ввести свій(ю)
//  …” і вказуємо, що він не захотів вводити – дату народження, місто чи вид спорту .

//**************

// Трохи додав різних перевірок та повідомлення якшо юзер не ввів нічого, або все скіпнув.
function showTask3() {
  let userBornYear = prompt("In what year were you born?");
  let userCity = prompt(
    "In which city do you live? (Kyiv, Washington, London ect.)"
  );
  let userSport = prompt(
    "What is your favorite sport? (Boxing, Tennis, Basketball ect.)"
  );

  const noBornYearMsg = "It's a pity that you didn't want to input your year of birth.";
  const noCityMsg = "It's a pity that you didn't want to input your city.";
  const noSportMsg = "It's a pity that you didn't want to input your favorite sport.";

  if (
    isNullOrEmpty(userBornYear) &&
    isNullOrEmpty(userCity) &&
    isNullOrEmpty(userSport)
  ) {
    alert(
      "We are disappointed that you didn`t tell us anything about yourself."
    );
  } else {
    generateUserDataAlert();
  }

  // Так також працює, хоча і виглядає незрозуміло. У яких Випадках припустимий такий скорочений запис?
  //
  //     isNullOrEmpty(userBornYear) &&
  //     isNullOrEmpty(userCity) &&
  //     isNullOrEmpty(userSport)
  //  &&
  //     alert(
  //       "We are disappointed that you didn`t tell us anything about yourself."
  //     )
  //  ||
  //     generateUserDataAlert();

  function getUserAge(bornYear) {
    return 2024 - bornYear;
  }

  function isNullOrEmpty(data) {
    return !data || !data.trim();
  }

  function toCapitalize(str) {
    return str[0].toUpperCase() + str.slice(1);
  }

  function generateUserDataAlert() {
    let userData = ["Hello User!"];

    if (!isNullOrEmpty(userBornYear)) {
      userBornYear = userBornYear.trim();

      switch (true) {
        case isNaN(+userBornYear):
        case userBornYear.length !== 4:
          userData.push(noBornYearMsg);
          break;
        default:
          userData.push(`Your age is ${getUserAge(userBornYear)}.`);
      }
    } else {
      userData.push(noBornYearMsg);
    }

    if (!isNullOrEmpty(userCity)) {
      userCity = userCity.toLowerCase().trim();

      switch (userCity) {
        case "london":
          userData.push("You live in the capital of the United Kingdom.");
          break;
        case "washington":
          userData.push("You live in the capital of the USA.");
          break;
        case "kyiv":
          userData.push(
            "You live in the capital of the Ukraine. Слава Україні!"
          );
          break;
        default:
          userData.push(`You live in the ${toCapitalize(userCity)}.`);
      }
    } else {
      userData.push(noCityMsg);
    }

    if (!isNullOrEmpty(userSport)) {
      userSport = userSport.toLowerCase().trim();

      switch (userSport) {
        case "boxing":
          userData.push(
            `${toCapitalize(
              userSport
            )}? Awesome! Would you like to become like Oleksandr Usyk?`
          );
          break;
        case "tennis":
          userData.push(
            `${toCapitalize(
              userSport
            )}? Awesome! Would you like to become like Carlos Alcaraz?`
          );
          break;
        case "basketball":
          userData.push(
            `${toCapitalize(
              userSport
            )}? Awesome! Would you like to become like Denver Nuggets?`
          );
          break;
        default:
          userData.push(`Your favorite sport is ${toCapitalize(userSport)}.`);
      }
    } else {
      userData.push(noSportMsg);
    }

    alert(userData.join("\n\n"));
  }
}
