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

const result1 = workers.map((worker) => {
  return worker.job;
});

console.log(result1);

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

console.log(employees[2].salary);

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

console.log(countries[0].country);

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

console.log(orders[4].status);

// Natija: "Cancelled"

// ============
// 9-masala:
//3 ta obyektli massivning oxirgi obyektidagi phone qiymatini konsolga chiqaring.

let contacts = [
  { name: "Ali", phone: "998901234567" },
  { name: "Vali", phone: "998902345678" },
  { name: "Sami", phone: "998903456789" },
];

console.log(contacts[2].phone);

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

users1.forEach((user) => {
  console.log(user.email);
});

// Natija: "ali@gmail.com", "vali@yahoo.com", "sami@hotmail.com", "karim@outlook.com"

// ============
// 11-masala:
//Massivning birinchi obyektidagi name qiymatini "Alisher" qilib o'zgartiring.

let users2 = [
  { name: "Ali", age: 25 },
  { name: "Vali", age: 30 },
  { name: "Sami", age: 20 },
];

users2[0].name = "Alisher";

// O'zgartirilgandan keyin: users[0].name = "Alisher"

// ============
// 12-masala:
//Oxirgi obyektning status qiymatini "Updated" qilib o'zgartiring.

let tasks = [
  { id: 1, status: "New" },
  { id: 2, status: "In Progress" },
  { id: 3, status: "Pending" },
];

tasks[tasks.length - 1].status = "Updated";

// O'zgartirilgandan keyin: tasks[2].status = "Updated"

// ============
// 13-masala:
//3-obyektning salary qiymatini 2000 ga tenglashtiring.

let employees1 = [
  { name: "Ali", salary: 1000 },
  { name: "Vali", salary: 1200 },
  { name: "Sami", salary: 1500 },
];

employees1[2].salary = 2000;

// O'zgartirilgandan keyin: employees[2].salary = 2000

// ============
// 14-masala:
//Massivning ikkinchi obyektidagi city qiymatini "Farg'ona" qilib o'zgartiring.

let cities = [
  { id: 1, city: "Toshkent" },
  { id: 2, city: "Namangan" },
  { id: 3, city: "Samarqand" },
];

cities[1].city = "Farg'ona";

// O'zgartirilgandan keyin: cities[1].city = "Farg'ona"

// ============
// 15-masala:
//4-obyektning email qiymatini yangi qiymat bilan almashtiring.

let clients = [
  { name: "Ali", email: "ali@mail.com" },
  { name: "Vali", email: "vali@mail.com" },
  { name: "Sami", email: "sami@mail.com" },
  { name: "Karim", email: "karim@mail.com" },
];

clients[3].email = "sultanovabdulxamid@gmail.com";

// O'zgartirilgandan keyin: clients[3].email = "karim_new@mail.com"

// ============
// 16-masala:
//Massivning birinchi obyektiga yangi status maydonini qo'shing va qiymatini "active" deb belgilang.

let users3 = [
  { name: "Ali", age: 25 },
  { name: "Vali", age: 30 },
  { name: "Sami", age: 20 },
];

users3[0].status = "active";
console.log(users3);

// users[0].status = "active"

// ============
// 17-masala:
//Oxirgi obyektga yangi role maydonini qo'shing va qiymatini "admin" qilib belgilang.

let people2 = [{ name: "Ali" }, { name: "Vali" }, { name: "Sami" }];

people2[people2.length - 1].role = "admin";

// people[2].role = "admin"

// ============
// 18-masala:
//Massivdagi barcha obyektlarga yangi isVerified maydonini qo'shing va qiymatini false qilib belgilang.

let users4 = [{ name: "Ali" }, { name: "Vali" }, { name: "Sami" }];

users4.forEach((user) => {
  user.isVerified = false;
});

// Har bir obyekt uchun: users[i].isVerified = false

// ============
// 19-masala:
// 2-obyektning salary qiymatini 500 ga oshiring.

let workers1 = [
  { name: "Ali", salary: 1000 },
  { name: "Vali", salary: 1200 },
  { name: "Sami", salary: 900 },
];

workers1[1].salary += 500;

// workers[1].salary += 500

// ============
// 20-masala:
//4-obyektning phone qiymatining oxiriga " (updated)" qatorini qo'shing.

let contacts1 = [
  { name: "Ali", phone: "998901234567" },
  { name: "Vali", phone: "998902345678" },
  { name: "Sami", phone: "998903456789" },
  { name: "Karim", phone: "998904567890" },
];

contacts[3].phone += "(updated)"

// contacts[3].phone += " (updated)"

// ============
// 21-masala:
//Massivning ikkinchi obyektidagi age qiymatini ikki barobar oshiring.

 let people3 = [
  { name: "Ali", age: 20 },
  { name: "Vali", age: 25 },
  { name: "Sami", age: 30 }
];
// people[1].age *= 2


// ============
// 22-masala:
//Oxirgi obyektga yangi joinedAt maydonini qo'shing va qiymatini "2024-07-01" qilib belgilang.

 let employees2 = [
  { name: "Ali" },
  { name: "Vali" },
  { name: "Sami" }
];
// employees[2].joinedAt = "2024-07-01"


// ============
// 23-masala:
//Massivdagi 1-obyektning name qiymatiga " (CEO)" qo'shimchasini qo'shing.

 let team = [
  { name: "Ali" },
  { name: "Vali" },
  { name: "Sami" }
];
// team[0].name += " (CEO)"


// ============
// 24-masala:
//3-obyektning price qiymatini 10% kamaytiring.

 let products = [
  { name: "Laptop", price: 1000 },
  { name: "Phone", price: 500 },
  { name: "Tablet", price: 300 }
];
// products[2].price *= 0.9


// ============
// 25-masala:
//Barcha obyektlarning isActive qiymatini true qilib o'zgartiring.

 let users5 = [
  { name: "Ali", isActive: false },
  { name: "Vali", isActive: false },
  { name: "Sami", isActive: false }
];
// users[i].isActive = true (barcha obyektlarda)


// ============
// 26-masala:
//Agar 2-obyektning status qiymati "Pending" bo'lsa, uni "Completed" qilib belgilang.
let data = [
  { id: 1, name: "Ali", status: "Completed" },
  { id: 2, name: "Vali", status: "Pending" },
  { id: 3, name: "Sami", status: "Completed" }
];


// ============
// 27-masala:
//1-obyektning age qiymati 30 dan katta bo'lsa, "Senior" degan yangi maydon qo'shing va qiymatini true qiling.
let data1 = [
  { id: 1, name: "Ali", age: 35 },
  { id: 2, name: "Vali", age: 25 },
  { id: 3, name: "Sami", age: 28 }
];


// ============
// 28-masala:
//Oxirgi obyektning price qiymati 100 dan kichik bo'lsa, uni 100 ga tenglashtiring.
let data2 = [
  { id: 1, name: "Product1", price: 150 },
  { id: 2, name: "Product2", price: 80 },
  { id: 3, name: "Product3", price: 60 }
];


// ============
// 29-masala:
//Barcha obyektlarning role qiymatini "user" qilib yangilang, lekin oxirgi obyektning role qiymatini "admin" qilib qo'ying.
let data3 = [
  { id: 1, name: "Ali", role: "manager" },
  { id: 2, name: "Vali", role: "guest" },
  { id: 3, name: "Sami", role: "supervisor" }
];


// ============
// 30-masala:
// 3-obyektning city qiymati "Toshkent" bo'lsa, uni "Samarqand" qilib o'zgartiring.
let data4 = [
  { id: 1, name: "Ali", city: "Buxoro" },
  { id: 2, name: "Vali", city: "Namangan" },
  { id: 3, name: "Sami", city: "Toshkent" }
];


// ============
// 31-masala:
//Massivdagi obyektlarning salary qiymati 1000 dan kichik bo'lgan obyektlarga "low" degan yangi maydon qo'shing.
let data5 = [
  { id: 1, name: "Ali", salary: 900 },
  { id: 2, name: "Vali", salary: 1200 },
  { id: 3, name: "Sami", salary: 800 }
];


// ============
// 32-masala:
//2-obyektning email qiymati "@gmail.com" bilan tugasa, " (verified)" qo'shimchasini kiriting.
let data6 = [
  { id: 1, name: "Ali", email: "ali@yahoo.com" },
  { id: 2, name: "Vali", email: "vali@gmail.com" },
  { id: 3, name: "Sami", email: "sami@mail.com" }
];


// ============
// 33-masala:
//Oxirgi obyektga yangi lastLogin maydonini qo'shing va qiymatini hozirgi sanaga tenglashtiring.
let data7 = [
  { id: 1, name: "Ali" },
  { id: 2, name: "Vali" },
  { id: 3, name: "Sami" }
];


// ============
// 34-masala:
//Agar 1-obyektning stock qiymati 0 bo'lsa, "isAvailable" maydonini false qilib belgilang.
let data8 = [
  { id: 1, name: "Product1", stock: 0 },
  { id: 2, name: "Product2", stock: 5 },
  { id: 3, name: "Product3", stock: 10 }
];


// ============
// 35-masala:
//Massivdagi har bir obyektning status qiymatini "Inactive" qilib yangilang, lekin birinchi obyektni "Active" qoldiring.
let data9 = [
    { id: 1, name: "Ali", status: "Pending" },
    { id: 2, name: "Vali", status: "Active" },
    { id: 3, name: "Sami", status: "Completed" }
  ];
  
// ============
// 36-masala:
//Massivdagi obyektlarning price qiymati 500 dan katta bo'lgan obyektlarning isExpensive qiymatini true qilib belgilang.
let data10 = [
  { id: 1, name: "Product1", price: 600 },
  { id: 2, name: "Product2", price: 400 },
  { id: 3, name: "Product3", price: 800 }
];


// ============
// 37-masala:
//2-obyektning salary qiymati >= 1000 bo'lsa, "High salary" degan yangi maydon qo'shing va qiymatini true qilib belgilang.
let data11 = [
  { id: 1, name: "Ali", salary: 900 },
  { id: 2, name: "Vali", salary: 1000 },
  { id: 3, name: "Sami", salary: 800 }
];


// ============
// 38-masala:
//Agar 3-obyektning name qiymati "Ali" bo'lsa, "isManager" degan maydon qo'shib, true deb belgilang.
let data12 = [
  { id: 1, name: "Vali", role: "user" },
  { id: 2, name: "Sami", role: "user" },
  { id: 3, name: "Ali", role: "guest" }
];


// ============
// 39-masala:
// Massivda age maydoni 18 dan kichik bo'lgan obyektlar uchun "isUnderage" qiymatini true qilib qo'shing.
let data13 = [
  { id: 1, name: "Ali", age: 17 },
  { id: 2, name: "Vali", age: 20 },
  { id: 3, name: "Sami", age: 16 }
];


// ============
// 40-masala:
//Massivdagi obyektlar ichidan stock qiymati < 10 bo'lgan obyektlarni aniqlab, "lowStock" qiymatini true qilib qo'shing.
let data14 = [
  { id: 1, name: "Product1", stock: 5 },
  { id: 2, name: "Product2", stock: 15 },
  { id: 3, name: "Product3", stock: 8 }
];


// ============
// 41-masala:
//1-obyekt va oxirgi obyektning role qiymatini "guest" qilib o'zgartiring.
let data15 = [
  { id: 1, name: "Ali", role: "admin" },
  { id: 2, name: "Vali", role: "user" },
  { id: 3, name: "Sami", role: "supervisor" }
];


// ============
// 42-masala:
//Agar biror obyektning status qiymati "Pending" bo'lsa, "isPending" degan maydon qo'shib, true qilib belgilang.
let data16 = [
  { id: 1, name: "Ali", status: "Pending" },
  { id: 2, name: "Vali", status: "Completed" },
  { id: 3, name: "Sami", status: "Pending" }
];


// ============
// 43-masala:
//Massivdagi 3-obyektning city qiymati "Toshkent" bo'lsa, uni "Buxoro" qilib almashtiring.
let data17 = [
  { id: 1, name: "Ali", city: "Samarqand" },
  { id: 2, name: "Vali", city: "Namangan" },
  { id: 3, name: "Sami", city: "Toshkent" }
];


// ============
// 44-masala:
//Oxirgi obyektning score qiymati < 50 bo'lsa, "failed" maydonini qo'shib, qiymatini true qilib belgilang.
let data18 = [
  { id: 1, name: "Ali", score: 70 },
  { id: 2, name: "Vali", score: 90 },
  { id: 3, name: "Sami", score: 40 }
];


// ============
// 45-masala:
//Barcha obyektlarning discount qiymatini 0 qilib belgilang, lekin price qiymati > 1000 bo'lgan obyektlarda "discount" qiymatini 20 qilib belgilang.
let data19 = [
  { id: 1, name: "Product1", price: 1200 },
  { id: 2, name: "Product2", price: 800 },
  { id: 3, name: "Product3", price: 1500 }
];


// ============
// 46-masala:
// Massivdagi obyektlarning salary qiymatini 10% ga oshiring.
let data20 = [
  { id: 1, name: "Ali", salary: 1000 },
  { id: 2, name: "Vali", salary: 1500 },
  { id: 3, name: "Sami", salary: 2000 }
];


// ============
// 47-masala:
//2-obyektning name qiymatiga " - employee" qo'shimchasini qo'shing.
let data21 = [
  { id: 1, name: "Ali" },
  { id: 2, name: "Vali" },
  { id: 3, name: "Sami" }
];


// ============
// 48-masala:
//Massivdagi obyektlarning isAvailable maydonini o'zgartirib, stock qiymati > 0 bo'lganlarga true, qolganlarga false qilib belgilang.
let data22 = [
  { id: 1, name: "Product1", stock: 5 },
  { id: 2, name: "Product2", stock: 0 },
  { id: 3, name: "Product3", stock: 10 }
];


// ============
// 49-masala:
//Agar birinchi obyektning price qiymati 1000 dan katta bo'lsa, uni 900 ga tushiring.
let data23 = [
  { id: 1, name: "Product1", price: 1200 },
  { id: 2, name: "Product2", price: 800 },
  { id: 3, name: "Product3", price: 1000 }
];


// ============
// 50-masala:
//Oxirgi obyektga yangi updatedAt maydonini qo'shing va qiymatini "2024-07-10" qilib belgilang.
let data24 = [
  { id: 1, name: "Ali" },
  { id: 2, name: "Vali" },
  { id: 3, name: "Sami" }
];


// ============
// 51-masala:
//3-obyektning level qiymatini "Intermediate" deb o'zgartiring, agar mavjud bo'lmasa, qo'shing.
let data25 = [
  { id: 1, name: "Ali", level: "Beginner" },
  { id: 2, name: "Vali" },
  { id: 3, name: "Sami" }
];


// ============
// 52-masala:
//Agar biror obyektning score qiymati 80 dan katta bo'lsa, "isTop" qiymatini true qilib belgilang.
let data26 = [
  { id: 1, name: "Ali", score: 75 },
  { id: 2, name: "Vali", score: 85 },
  { id: 3, name: "Sami", score: 90 }
];


// ============
// 53-masala:
//Massivdagi obyektlardan role qiymati "admin" bo'lgan obyektlarni topib, ularning privileges qiymatini "full" qilib belgilang.
let data27 = [
  { id: 1, name: "Ali", role: "admin" },
  { id: 2, name: "Vali", role: "user" },
  { id: 3, name: "Sami", role: "admin" }
];


// ============
// 54-masala:
//Oxirgi obyektning name qiymatiga " (completed)" qo'shimchasini qo'shing.
let data28 = [
  { id: 1, name: "Ali" },
  { id: 2, name: "Vali" },
  { id: 3, name: "Sami" }
];


// ============
// 55-masala:
//Agar birinchi obyektning isVerified qiymati false bo'lsa, uni true qilib belgilang.
let data29 = [
  { id: 1, name: "Ali", isVerified: false },
  { id: 2, name: "Vali", isVerified: true },
  { id: 3, name: "Sami", isVerified: false }
];
