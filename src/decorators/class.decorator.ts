type classConstructor = { new(...args: any[]): any };

export function classLogger(logCallback: (...data: any[]) => void) {
    return function (constructor: classConstructor): classConstructor{
        return class extends constructor {
            constructor(...args: any[]) {
                logCallback('Created instance with args: ', args);
                super(...args);
            }
        }
    }
}


@classLogger(console.log)
export class Car {
    constructor(
        private _name: string,
        private _year: string
    ) {
    }
}
