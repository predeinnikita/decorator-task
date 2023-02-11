export function methodLogger(logCallback: (...data: any[]) => void): MethodDecorator {
    return function(target: Object, propertyKey: string, descriptor: PropertyDescriptor): PropertyDescriptor {
        const sourceMethod = descriptor.value;
        descriptor.value = function(...args: any[]): any {
            logCallback(`Method '${propertyKey}' was called`);
            sourceMethod.apply(this, ...args);
        }

        return descriptor
    }
}

export class Animal {
    @methodLogger(console.log)
    public eat(): void {
        console.log('Eating...')
    }
}


