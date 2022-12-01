import { default as debounce_2 } from 'lodash/debounce';
import isEmpty from 'lodash/isEmpty';
import omit from 'lodash/omit';
import pick from 'lodash/pick';
import { default as throttle_2 } from 'lodash/throttle';
import uniq from 'lodash/uniq';

/**
 * 清除所有localStorage中数据
 */
declare const clearItem: () => void;

/**
 * 清空session
 */
declare const clearSession: () => void;

/**
 * 随即生成手机号码
 * @param s - boolean
 * @returns
 */
declare const createMobile: (s?: boolean) => string;

declare type Debounce = (
    fn: (...args: unknown[]) => void,
    wait: number,
    immediate?: boolean,
) => (...args: unknown[]) => void;

/**
 * 防抖函数
 * @param fun - 传入回调函数
 * @param wait - 延时时间戳
 * @param immediate - true代表立即执行
 * @returns
 */
declare const debounce: Debounce;

/**
 * 手机号格式隐藏脱敏
 * @param mobile - 手机号码
 * @returns
 */
declare const formatMobile: (mobile: string) => string;

/**
 * 根据name读取cookie
 * @param name - 名称
 * @returns
 */
declare const getCookie: (name: string) => string;

/**
 * 根据key获取localStorage中数据
 * @param key - 名称
 * @returns
 */
declare const getItem: (key: string) => any;

/**
 * json字符串转对象
 * @param str - json
 * @returns
 */
declare const getJson: (str: string) => unknown;

/**
 * 获取对象的类型
 * @param obj - 对象
 * @returns
 */
declare const getObjectType: (obj: unknown) => string;

/**
 * 获取操作系统类型
 * @returns
 */
declare const getOS: () =>
    | 'ios'
    | 'android'
    | 'windowsPhone'
    | 'MacOSX'
    | 'windows'
    | 'linux'
    | undefined;

/**
 *  获取滚动条距顶部的距离
 * @returns
 */
declare const getScrollTop: () => number;

/**
 * 获取sessionStorage
 */
declare const getSession: (name: string) => unknown;

/**
 * 根据时间生成唯一时间名称(YYYYMMDDhhmmss)
 * @param str - string
 * @returns
 */
declare const getTimeName: (str?: string) => string;

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
 * 判断对象是否为空
 * @param obj - 对象
 * @returns
 */
declare const isEmptyObject: (obj: unknown) => boolean;

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
 * 判断是否undefind
 * @param s - 值
 * @returns
 */
declare const isUndefind: (s: unknown) => s is undefined;

/**
 * 是否url地址
 * @param s - url
 * @returns {boolean}
 */
declare const isUrl: (s: string) => boolean;

declare namespace lodash {
    export {
        omit,
        uniq,
        pick,
        isEmpty,
        debounce_2 as debounce,
        throttle_2 as throttle,
    };
}
export { lodash };

declare namespace random {
    export {
        random_2 as random,
        randomColor,
        randomNumber,
        getTimeName,
        createMobile,
    };
}
export { random };

/**
 * 生成默认6位随即数
 * @param s - number
 * @returns
 */
declare const random_2: (s?: number) => string;

/**
 * 随机生成16进制颜色
 * @returns
 */
declare const randomColor: (s?: string) => string;

/**
 * 生成指定范围[min, max]的随机数
 * @param min - number
 * @param max - number
 * @returns
 */
declare const randomNumber: (max: number, min?: number) => number;

/**
 * 删除cookie
 * @param name - 名称
 */
declare const removeCookie: (name: string) => void;

/**
 * 根据key删除localStorage中数据
 * @param key - 名称
 * @returns
 */
declare const removeItem: (key: string) => void;

/**
 * 删除sessionStorage指定项
 */
declare const removeSession: (name: string) => void;

/**
 * 设置cookie
 * @param name - 名称
 * @param value - 值
 * @param days - 时间
 */
declare const setCookie: (
    name: string,
    value: string,
    days?: number | undefined,
) => void;

/**
 * 根据key设置localStorage中数据
 * @param key - 名称
 * @param data - 值
 * @returns
 */
declare const setItem: (key: string, data: unknown) => void;

/**
 * 存储sessionStorage
 */
declare const setSession: (key: string, content: string) => void;

declare namespace store {
    export {
        getCookie,
        removeCookie,
        setCookie,
        getItem,
        setItem,
        removeItem,
        clearItem,
        setSession,
        getSession,
        removeSession,
        clearSession,
    };
}
export { store };

declare type Throttle = (
    fun: (...args: unknown[]) => void,
    wait: number,
) => (...args: unknown[]) => void;

/**
 * 创建并返回一个像节流阀一样的函数，当重复调用函数的时候，最多每隔 wait毫秒调用一次该函数。
 * @param fun - 传入回调函数
 * @param wait - 延时时间戳
 * @returns
 */
declare const throttle: Throttle;

declare const Tool: {
    verify: typeof verify;
    random: typeof random;
    util: typeof util;
    store: typeof store;
    lodash: typeof lodash;
};
export default Tool;

declare namespace util {
    export {
        Debounce,
        Throttle,
        formatMobile,
        getObjectType,
        getJson,
        getOS,
        debounce,
        throttle,
        getScrollTop,
    };
}
export { util };

declare namespace verify {
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
}
export { verify };

export {};
