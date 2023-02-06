import './index.css';
import { User } from './1'

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
