import {Md5} from 'ts-md5';

function validate(regexp: RegExp) {
    return function (target: any, key: string) {
        const hashedKey = Md5.hashStr(key);
        Object.defineProperty(target, key, {
            set: function (value: string) {
                if (!regexp.test(value)) {
                    throw new Error(`Invalid ${key}`);
                }
                this[hashedKey] = value;
            },
            get: function () { return this[hashedKey] },
        })
    };
}

const emailRegExp = /([\d\w])+@([\d\w])+\.(\w)+/;
const phoneRegExp = /(\+7|8)\s\(\d{3}\)\s\d{3}-\d{2}-\d{2}/;

export class User {
    @validate(emailRegExp) public email: string;
    @validate(phoneRegExp) public phone: string;

    constructor(
        email: string,
        phone: string
    ) {
        this.email = email;
        this.phone = phone;
    }
}
