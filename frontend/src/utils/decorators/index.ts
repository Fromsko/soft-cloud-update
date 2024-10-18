// src/utils/decorators/logger.ts
import { log } from "../log/web_log";


export function LogHandler(target: any, propertyKey: string, descriptor: PropertyDescriptor) {
    if (import.meta.env.MODE !== 'development') {
        return descriptor;
    }

    const originalMethod = descriptor.value;

    descriptor.value = async function (...args: any[]) {
        try {
            return await originalMethod.apply(this, args);
        } catch (error: any) {
            log.error(`Error occurred in ${propertyKey}: ${error}`);
            throw new Error(`Custom error: ${error.message}`);
        }
    };

    return descriptor;
}