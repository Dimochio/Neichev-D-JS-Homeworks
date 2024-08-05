// Один долар коштує 40,50 гривень. Вивести дані з розрахунком вартості 10, 20, 30... 100 доларів

function showTask2() {
  const dollar = 40.5;

  for (let i = 10; i <= 100; i += 10) {
    console.log(`${i} dollars = ${dollar * i}hrn`);
  }
}
