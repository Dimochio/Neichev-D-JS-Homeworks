

function showTask1() {
  const totalSalary = sumSalaries(deathNoteInc);
  console.log(totalSalary, 'Sum of salary')
}

let deathNoteInc = {
  internals: [
    { name: "Takeshi Obata", salary: 1000 },
    { name: "Tsugumi Ohba", salary: 1200 },
  ],
  externals: {
    detectives: [
      { name: "Soichiro Yagami", salary: 2000 },
      { name: "L (L Lawliet)", salary: 3500 },
    ],
    criminals: [
      { name: "Kira (Light Yagami)", salary: 1500 },
      { name: "Ryuk", salary: 6666 },
      { name: "Misa Amane", salary: 100 },
      { name: "Shuichi Aizawa", salary: 125 },
    ],
  },
  outsiders: [
    { name: "Kanzo Mogi", salary: 1000 },
    { name: "Hideki Ide", salary: 1200 },
    { name: "Hirokazu Ukita", salary: 1200 },
  ],
};

function sumSalaries(company) {
  if (Array.isArray(company)) {
    return company.reduce((acc, cur) => acc + cur.salary, 0);
  } else {
    let sum = 0;
    for (let subDep of Object.values(company)) {
      sum += sumSalaries(subDep);
    }
    return sum;
  }
}
