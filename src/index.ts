import './index.css';
import { User } from './decorators/field.decorator'
import { Car } from './decorators/class.decorator';
import { Animal } from './decorators/method.decorator'
import { Student } from "./decorators/parameter.decorator";

const user = new User('email@email.com', '8 (989) 234-23-23');
user.phone = '8 (999) 123-12-31';
// user.phone = '8 989 234-23-23'; - ERROR
// user.phone = ''; - ERROR
// user.phone = '89892342323'; - ERROR

const user2 = new User('email@email.coms', '8 (980) 234-23-23');
user2.email = 'mail@mail.com';
// user.email = '8 989 234-23-23' - ERROR;
// user.email = '' - ERROR;
// user.email = '@com.ru' - ERROR

console.log(user)
console.log(user2)

// Created instance with args: ['Toyota', '2010']
const car = new Car('Toyota', '2010');

// Created instance with args: ['Lada', '2007']
const car2 = new Car('Lada', '2007');

const animal = new Animal();
animal.eat(); // Method 'eat' was called

const student = new Student('John');
student.study('math');
