/**
 * 生成默认6位随即数
 * @param s - number
 * @returns
 */
const random = (s: number = 6) => {
    return Math.random().toString(32).slice(-s);
};

/**
 * 随机生成16进制颜色
 * @returns
 */
const randomColor = (s?: string): string => {
    if (s) {
        return `#${s.charCodeAt(0).toString(16).padStart(6, '0')}`;
    }
    return `#${Math.random().toString(16).slice(-6)}`;
};

/**
 * 生成指定范围[min, max]的随机数
 * @param min - number
 * @param max - number
 * @returns
 */
const randomNumber = (max: number, min: number = 0) => {
    return Math.floor(Math.random() * (max - min + 1)) + min;
};

/**
 * 根据时间生成唯一时间名称(YYYYMMDDhhmmss)
 * @param str - string
 * @returns
 */
const getTimeName = (str: string = '') => {
    const date = new Date();
    const year = date.getFullYear();
    const month = date.getMonth();
    const day = date.getDate();
    const hour = date.getHours();
    const minute = date.getMinutes();
    const second = date.getSeconds();
    return `${year}${str}${month}${str}${day}${str}${hour}${str}${minute}${str}${second}`;
};

/**
 * 随即生成手机号码
 * @param s - boolean
 * @returns
 */
const createMobile = (s: boolean = false): string => {
    let moblie = '1';
    const ext: number[] = [3, 5, 6, 7, 8, 9];
    const len = s
        ? '****'
        : '' +
          randomNumber(9) +
          randomNumber(9) +
          randomNumber(9) +
          randomNumber(9);
    moblie +=
        ext[randomNumber(ext.length)] +
        randomNumber(9) +
        len +
        randomNumber(9) +
        randomNumber(9) +
        randomNumber(9) +
        randomNumber(9);
    return moblie;
};

export { random, randomColor, randomNumber, getTimeName, createMobile };
