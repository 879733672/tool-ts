/**
 * 验证邮箱
 * @param s - email
 * @returns {boolean}
 */
const isEmail = (s: string): boolean => {
    return /^[A-Za-z0-9\u4e00-\u9fa5]+@[a-zA-Z0-9_-]+(\.[a-zA-Z0-9_-]+)+$/.test(
        s,
    );
};

/**
 * 验证手机号码
 * @param s - moblie
 * @returns {boolean}
 */
const isMobile = (s: string): boolean => {
    return /^1[0-9]{10}$/.test(s);
};

/**
 * 电话号码
 * @param s - phone
 * @returns {boolean}
 */
const isPhone = (s: string): boolean => {
    return /^([0-9]{3,4}-)?[0-9]{7,8}$/.test(s);
};

/**
 * 是否url地址
 * @param s - url
 * @returns {boolean}
 */
const isUrl = (s: string): boolean => {
    return /^http[s]?:\/\/.*/.test(s);
};

/**
 *
 * 判断是否为16进制颜色，rgb 或 rgba
 * @param s - color
 * @return {boolean}
 */
const isColor = (s: string): boolean => {
    return /^(#([0-9a-fA-F]{3}){1,2}|[rR][gG][Bb](\((\s*(2[0-4]\d|25[0-5]|[01]?\d{1,2})\s*,){2}\s*(2[0-4]\d|25[0-5]|[01]?\d{1,2})\s*\)|[Aa]\((\s*(2[0-4]\d|25[0-5]|[01]?\d{1,2})\s*,){3}\s*([01]|0\.\d+)\s*\)))$/.test(
        s,
    );
};

/**
 *
 * 判断是否为身份证号
 * @param s - card
 * @return
 */
const isIdCard = (s: string): boolean => {
    return /^(^[1-9]\d{7}((0\d)|(1[0-2]))(([0|1|2]\d)|3[0-1])\d{3}$)|(^[1-9]\d{5}[1-9]\d{3}((0\d)|(1[0-2]))(([0|1|2]\d)|3[0-1])((\d{4})|\d{3}[Xx])$)$/.test(
        s,
    );
};

/**
 * 判断是否undefind
 * @param s - 值
 * @returns
 */
const isUndefind = (s: unknown): s is undefined => {
    return typeof s === 'undefined';
};

/**
 * 判断对象是否为空
 * @param obj - 对象
 * @returns
 */
const isEmptyObject = (obj: unknown) => {
    if (!obj || typeof obj !== 'object' || Array.isArray(obj)) {
        return false;
    }
    return !Object.keys(obj).length;
};

export {
    isEmail,
    isMobile,
    isPhone,
    isUrl,
    isColor,
    isIdCard,
    isUndefind,
    isEmptyObject,
};
