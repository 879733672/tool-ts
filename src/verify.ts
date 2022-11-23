/**
 * 验证邮箱
 * @param s
 * @returns {boolean}
 */
const isEmail = (s: string) => {
    return /^[A-Za-z0-9\u4e00-\u9fa5]+@[a-zA-Z0-9_-]+(\.[a-zA-Z0-9_-]+)+$/.test(
        s,
    );
};

/**
 * 验证手机号码
 * @param s
 * @returns {boolean}
 */
const isMobile = (s: string) => {
    return /^1[0-9]{10}$/.test(s);
};

/**
 * 电话号码
 * @param s
 * @returns {boolean}
 */
const isPhone = (s: string) => {
    return /^([0-9]{3,4}-)?[0-9]{7,8}$/.test(s);
};

/**
 * 是否url地址
 * @param s
 * @returns {boolean}
 */
const isUrl = (s: string) => {
    return /^http[s]?:\/\/.*/.test(s);
};

/**
 * 生成默认6位随即数
 * @param s
 * @returns
 */
const random = (s: number = 6) => {
    return Math.random().toString(32).slice(-s);
};

/**
 *
 * @desc 判断是否为16进制颜色，rgb 或 rgba
 * @param s
 * @return {boolean}
 */
const isColor = (s: string) => {
    return /^(#([0-9a-fA-F]{3}){1,2}|[rR][gG][Bb](\((\s*(2[0-4]\d|25[0-5]|[01]?\d{1,2})\s*,){2}\s*(2[0-4]\d|25[0-5]|[01]?\d{1,2})\s*\)|[Aa]\((\s*(2[0-4]\d|25[0-5]|[01]?\d{1,2})\s*,){3}\s*([01]|0\.\d+)\s*\)))$/.test(
        s,
    );
};

/**
 *
 * @desc  判断是否为身份证号
 * @param s
 * @return
 */
const isIdCard = (s: string) => {
    return /^(^[1-9]\d{7}((0\d)|(1[0-2]))(([0|1|2]\d)|3[0-1])\d{3}$)|(^[1-9]\d{5}[1-9]\d{3}((0\d)|(1[0-2]))(([0|1|2]\d)|3[0-1])((\d{4})|\d{3}[Xx])$)$/.test(
        s,
    );
};

export { isEmail, isMobile, isPhone, isUrl, random, isColor, isIdCard };
