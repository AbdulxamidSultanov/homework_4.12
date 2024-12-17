// ============
// 1-masala:
//Massivda 3 ta obyekt bor. Har bir obyekt name va age maydoniga ega. Massivdagi birinchi obyektning name qiymatini ekranga chiqaring.

let people = [
  { name: "Ali", age: 25 },
  { name: "Vali", age: 30 },
  { name: "Sami", age: 20 },
];
console.log(people[0].name);

// Natija: "Ali"

// ============
// 2-masala:
//Massivda 5 ta obyekt bor. Har bir obyekt id maydoniga ega. Oxirgi obyektning id qiymatini ekranga chiqaring.

let items = [{ id: 101 }, { id: 102 }, { id: 103 }, { id: 104 }, { id: 105 }];

// Natija: 105

console.log(items[4].id);

// ============
// 3-masala:
//4 ta obyektli massivdagi barcha obyektlarning age qiymatini ekranga chiqaring.

let people1 = [
  { name: "Ali", age: 25 },
  { name: "Vali", age: 30 },
  { name: "Sami", age: 20 },
  { name: "Karim", age: 35 },
];

const result = people1.map((value) => {
  return value.age;
});

console.log(result);

// Natija: 25, 30, 20, 35

// ============
// 4-masala:
//3 ta obyektli massivning 2-obyektidagi city maydonini konsolga chiqaring.

let users = [
  { name: "Ali", city: "Toshkent" },
  { name: "Vali", city: "Samarqand" },
  { name: "Sami", city: "Buxoro" },
];

console.log(users[1].city);

// Natija: "Samarqand"

// ============
// 5-masala:
// Bir massivda obyektlarning job maydonlari bor. Massivdagi barcha obyektlarning job qiymatlarini chiqaring.

let workers = [
  { name: "Ali", job: "Dasturchi" },
  { name: "Vali", job: "O'qituvchi" },
  { name: "Sami", job: "Haydovchi" },
];

const result1 = workers.map(worker => {
    return worker.job
})

console.log(result1)

// Natija: "Dasturchi", "O'qituvchi", "Haydovchi"

// ============
// 6-masala:
//5 ta obyektli massivning 3-obyektidagi salary qiymatini ekranga chiqaring.

let employees = [
  { name: "Ali", salary: 1000 },
  { name: "Vali", salary: 1200 },
  { name: "Sami", salary: 900 },
  { name: "Karim", salary: 1500 },
  { name: "Asad", salary: 1100 },
];

console.log(employees[2].salary)

// Natija: 900

// ============
// 7-masala:
//4 ta obyektli massivning birinchi obyektidagi country qiymatini chiqaring.

let countries = [
  { country: "Uzbekistan" },
  { country: "Russia" },
  { country: "USA" },
  { country: "China" },
];

console.log(countries[0].country)

// Natija: "Uzbekistan"

// ============
// 8-masala:
//6 ta obyektli massivdagi 5-obyektning status qiymatini ekranga chiqaring.

let orders = [
  { id: 1, status: "New" },
  { id: 2, status: "Pending" },
  { id: 3, status: "Shipped" },
  { id: 4, status: "Delivered" },
  { id: 5, status: "Cancelled" },
  { id: 6, status: "Returned" },
];

console.log(orders[4].status)

// Natija: "Cancelled"

// ============
// 9-masala:
//3 ta obyektli massivning oxirgi obyektidagi phone qiymatini konsolga chiqaring.

let contacts = [
  { name: "Ali", phone: "998901234567" },
  { name: "Vali", phone: "998902345678" },
  { name: "Sami", phone: "998903456789" },
];

console.log(contacts[2].phone)

// Natija: "998903456789"

// ============
// 10-masala:
//4 ta obyektli massivdagi barcha obyektlarning email qiymatlarini ekranga chiqaring.

let users1 = [
  { name: "Ali", email: "ali@gmail.com" },
  { name: "Vali", email: "vali@yahoo.com" },
  { name: "Sami", email: "sami@hotmail.com" },
  { name: "Karim", email: "karim@outlook.com" },
];

users1.forEach(user => {
    console.log(user.email)
})

// Natija: "ali@gmail.com", "vali@yahoo.com", "sami@hotmail.com", "karim@outlook.com"

// ============
// 11-masala:
//Massivning birinchi obyektidagi name qiymatini "Alisher" qilib o'zgartiring.

 let users2 = [
  { name: "Ali", age: 25 },
  { name: "Vali", age: 30 },
  { name: "Sami", age: 20 }
];
// O'zgartirilgandan keyin: users[0].name = "Alisher"


// ============
// 12-masala:
//Oxirgi obyektning status qiymatini "Updated" qilib o'zgartiring.

 let tasks = [
  { id: 1, status: "New" },
  { id: 2, status: "In Progress" },
  { id: 3, status: "Pending" }
];
// O'zgartirilgandan keyin: tasks[2].status = "Updated"


// ============
// 13-masala:
//3-obyektning salary qiymatini 2000 ga tenglashtiring.

 let employees1 = [
  { name: "Ali", salary: 1000 },
  { name: "Vali", salary: 1200 },
  { name: "Sami", salary: 1500 }
];
// O'zgartirilgandan keyin: employees[2].salary = 2000


// ============
// 14-masala:
//Massivning ikkinchi obyektidagi city qiymatini "Farg'ona" qilib o'zgartiring.

 let cities = [
  { id: 1, city: "Toshkent" },
  { id: 2, city: "Namangan" },
  { id: 3, city: "Samarqand" }
];
// O'zgartirilgandan keyin: cities[1].city = "Farg'ona"


// ============
// 15-masala:
//4-obyektning email qiymatini yangi qiymat bilan almashtiring.

 let clients = [
  { name: "Ali", email: "ali@mail.com" },
  { name: "Vali", email: "vali@mail.com" },
  { name: "Sami", email: "sami@mail.com" },
  { name: "Karim", email: "karim@mail.com" }
];
// O'zgartirilgandan keyin: clients[3].email = "karim_new@mail.com"


// ============
// 16-masala:
//Massivning birinchi obyektiga yangi status maydonini qo'shing va qiymatini "active" deb belgilang.

 let users3 = [
  { name: "Ali", age: 25 },
  { name: "Vali", age: 30 },
  { name: "Sami", age: 20 }
];
// users[0].status = "active"


// ============
// 17-masala:
//Oxirgi obyektga yangi role maydonini qo'shing va qiymatini "admin" qilib belgilang.

 let people2 = [
  { name: "Ali" },
  { name: "Vali" },
  { name: "Sami" }
];
// people[2].role = "admin"


// ============
// 18-masala:
//Massivdagi barcha obyektlarga yangi isVerified maydonini qo'shing va qiymatini false qilib belgilang.

 let users4 = [
  { name: "Ali" },
  { name: "Vali" },
  { name: "Sami" }
];
// Har bir obyekt uchun: users[i].isVerified = false


// ============
// 19-masala:
// 2-obyektning salary qiymatini 500 ga oshiring.

 let workers1 = [
  { name: "Ali", salary: 1000 },
  { name: "Vali", salary: 1200 },
  { name: "Sami", salary: 900 }
];
// workers[1].salary += 500


// ============
// 20-masala:
//4-obyektning phone qiymatining oxiriga " (updated)" qatorini qo'shing.

 let contacts1 = [
  { name: "Ali", phone: "998901234567" },
  { name: "Vali", phone: "998902345678" },
  { name: "Sami", phone: "998903456789" },
  { name: "Karim", phone: "998904567890" }
];
// contacts[3].phone += " (updated)"


// ============
// 21-masala:
//

// ============
// 22-masala:
//

// ============
// 23-masala:
//

// ============
// 24-masala:
//

// ============
// 25-masala:
//

// ============
// 26-masala:
//

// ============
// 27-masala:
//

// ============
// 28-masala:
//

// ============
// 29-masala:
//

// ============
// 30-masala:
//

// ============
// 31-masala:
//

// ============
// 32-masala:
//

// ============
// 33-masala:
//

// ============
// 34-masala:
//

// ============
// 35-masala:
//

// ============
// 36-masala:
//

// ============
// 37-masala:
//

// ============
// 38-masala:
//

// ============
// 39-masala:
//

// ============
// 40-masala:
//

// ============
// 41-masala:
//

// ============
// 42-masala:
//

// ============
// 43-masala:
//

// ============
// 44-masala:
//

// ============
// 45-masala:
//

// ============
// 46-masala:
//

// ============
// 47-masala:
//

// ============
// 48-masala:
//

// ============
// 49-masala:
//

// ============
// 50-masala:
//

// ============
// 51-masala:
//

// ============
// 52-masala:
//

// ============
// 53-masala:
//

// ============
// 54-masala:
//

// ============
// 55-masala:
//

// ============
// 56-masala:
//

// ============
// 57-masala:
//

// ============
// 58-masala:
//

// ============
// 59-masala:
//

// ============
// 60-masala:
//
