import { App } from "./app";
import { Bike } from "./bike";
import { Rent } from "./rent";
import { User } from "./user";

const app = new App();

const bike = new Bike('mountain bike', 'mountain', 123, 500, 100.5, 'desc', 5, [], 'bike1');
const user = new User('Maria', 'maria@mail.com', '1234');

app.registerUser(user);


const today = new Date();
const twoDaysFromToday = new Date();
twoDaysFromToday.setDate(twoDaysFromToday.getDate() + 2);

const rent1 = Rent.create([], bike, user, today, twoDaysFromToday);

const user2 = new User('Joao', 'joao@mail.com', '3123');
app.registerUser(user2);

const tomorrow = new Date();
tomorrow.setDate(tomorrow.getDate() + 1);
const sevenDaysFromToday = new Date();
sevenDaysFromToday.setDate(sevenDaysFromToday.getDate() + 7);

const bike2 = new Bike('city bike', 'urban', 110, 300, 50.0, 'desc2', 4, [], 'bike2');
app.registerBike(bike2);

const rent2 = Rent.create([], bike2, user2, tomorrow, sevenDaysFromToday);

const returnedDate1 = new Date();
returnedDate1.setDate(returnedDate1.getDate() + 1);
const returnedDate2 = new Date();
returnedDate2.setDate(returnedDate2.getDate() + 3);

app.returnBike(rent1, returnedDate1);
app.returnBike(rent2, returnedDate2);

console.log(rent1);
console.log(rent2);
