export declare type Cat = {
    name: string;
};

/**
 *
 * @param age1 - person
 * @returns
 */
export declare function foo(age1: Person): Person;

/**
 *
 * 判断是否为16进制颜色，rgb 或 rgba
 * @param s - color
 * @return {boolean}
 */
declare const isColor: (s: string) => boolean;

/**
 * 验证邮箱
 * @param s - email
 * @returns {boolean}
 */
declare const isEmail: (s: string) => boolean;

/**
 *
 * 判断是否为身份证号
 * @param s - card
 * @return
 */
declare const isIdCard: (s: string) => boolean;

/**
 * 验证手机号码
 * @param s - moblie
 * @returns {boolean}
 */
declare const isMobile: (s: string) => boolean;

/**
 * 电话号码
 * @param s - phone
 * @returns {boolean}
 */
declare const isPhone: (s: string) => boolean;

/**
 * 是否url地址
 * @param s - url
 * @returns {boolean}
 */
declare const isUrl: (s: string) => boolean;

/**
 * type of person
 * @public
 */
export declare type Person = {
    name: string;
    age: number;
};

/**
 * 生成默认6位随即数
 * @param s - number
 * @returns
 */
declare const random: (s?: number) => string;

declare namespace verify {
    export { isEmail, isMobile, isPhone, isUrl, random, isColor, isIdCard };
}
export { verify };

export declare const version: string;

export {};
