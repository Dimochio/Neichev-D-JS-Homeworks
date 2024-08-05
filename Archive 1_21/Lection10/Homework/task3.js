// Створіть об'єкт, який матиме одну властивість з масивом об'єктів.
// Які представляють контакти у вашій контактній книзі.
// Кожен об'єкт має містити ім'я, номер телефону та адресу електронної пошти.
// Додайте метод для пошуку контакту за ім'ям та метод для додавання нових контактів.

function showTask3() {
  console.log(userPhone, "User Phone");

  userPhone.addContact("Vasya", "0555555555", "vasya@gmail.com");
  userPhone.addContact("Busya");
  console.log(userPhone.contacts, "User contacts updated");

  const filteredContacts = userPhone.findContact(prompt("Enter contact name"));
  console.log(filteredContacts, "filtered contacts");
}

const userPhone = {
  user: "Dima",
  country: "Ukraine",
  city: "Kharkiv",
  contacts: [
    { name: "Svitlana", phone: "0111111111", email: "lana@gmail.com" },
    { name: "Ukrala", phone: "0222222222", email: "ukrala@gmail.com" },
    { name: "Balon", phone: "0333333333", email: "balon@gmail.com" },
    { name: "Propana", phone: "0444444444", email: "propana@gmail.com" },
  ],
  addContact: function (name, phone, email) {
    const newContact = new (function () {
      this.name = name || "empty";
      this.phone = phone || "empty";
      this.email = email || "empty";
    })();

    this.contacts.push(newContact);
  },
  findContact: function (query) {
    console.log(`filter by "${query}"`);
    return this.contacts.filter((contact) =>
      contact.name.toLowerCase().includes(query.toLowerCase())
    );
  },
};
