import 'reflect-metadata';

const logMetadataKey = Symbol("required");
export function loggableParameter(target: any, propertyKey: string, parameterIndex: number): void {
    const existingLoggableParameters = Reflect.getOwnMetadata(logMetadataKey, target, propertyKey) || [];
    existingLoggableParameters.push({
        propertyKey,
        parameterIndex
    });
    Reflect.defineMetadata(logMetadataKey, existingLoggableParameters, target, propertyKey);
}

export function loggable(target: any, propertyName: string, descriptor: TypedPropertyDescriptor<Function>) {
    const sourceMethod = descriptor.value;
    descriptor.value = function(...args: any[]) {
        const loggableParameters = Reflect.getOwnMetadata(logMetadataKey, target, propertyName) || [];
        if (loggableParameters) {
            for (let parameter of loggableParameters) {
                const argumentValue = args[parameter.parameterIndex];
                console.log(`Метод ${propertyName} вызван с аргументом = ${argumentValue}`);
            }
        }

        return sourceMethod.apply(this, args);
    }
}

export class Student {
    constructor(
        public readonly name: string,
    ) {
    }

    @loggable
    public study(@loggableParameter subject: string): void {
        console.log(`${this.name} is studying ${subject}...`)
    }
}
