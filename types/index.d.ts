export declare type Cat = {
    name: string;
};

/**
 *
 * @param age1
 * @returns
 */
export declare function foo(age1: Person): Person;

/**
 *
 * @desc 判断是否为16进制颜色，rgb 或 rgba
 * @param s
 * @return {boolean}
 */
declare const isColor: (s: string) => boolean;

/**
 * 验证邮箱
 * @param s
 * @returns {boolean}
 */
declare const isEmail: (s: string) => boolean;

/**
 *
 * @desc  判断是否为身份证号
 * @param s
 * @return
 */
declare const isIdCard: (s: string) => boolean;

/**
 * 验证手机号码
 * @param s
 * @returns {boolean}
 */
declare const isMobile: (s: string) => boolean;

/**
 * 电话号码
 * @param s
 * @returns {boolean}
 */
declare const isPhone: (s: string) => boolean;

/**
 * 是否url地址
 * @param s
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
 * @param s
 * @returns
 */
declare const random: (s?: number) => string;

declare namespace verify {
    export { isEmail, isMobile, isPhone, isUrl, random, isColor, isIdCard };
}
export { verify };

export declare const version: string;

export {};