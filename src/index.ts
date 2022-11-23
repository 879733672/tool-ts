import * as verify from './verify';
export { verify };

export const version: string = '1.0.1';

export type Cat = {
    name: string;
};

/**
 * type of person
 * @public
 */
export type Person = {
    name: string;
    age: number;
};

/**
 *
 * @param age1 - person
 * @returns
 */
export function foo(age1: Person) {
    return age1;
}
