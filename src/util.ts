/**
 * 手机号格式隐藏脱敏
 * @param mobile - 手机号码
 * @returns
 */
const formatMobile = (mobile: string): string => {
    return mobile.replace(/(\d{3})\d{4}(\d{0,4})/, '$1****$2');
};

/**
 * 获取对象的类型
 * @param obj - 对象
 * @returns
 */
const getObjectType = (obj: unknown): string => {
    return Object.prototype.toString.call(obj).slice(8, -1);
};

/**
 * json字符串转对象
 * @param str - json
 * @returns
 */
const getJson = (str: string): unknown => {
    try {
        return JSON.parse(str);
    } catch (e) {
        return str || [];
    }
};

/**
 * 获取操作系统类型
 * @returns
 */
const getOS = () => {
    const userAgent =
        ('navigator' in window &&
            'userAgent' in navigator &&
            navigator.userAgent.toLowerCase()) ||
        '';
    const appVersion =
        ('navigator' in window &&
            'appVersion' in navigator &&
            navigator.appVersion.toLowerCase()) ||
        '';

    if (
        /iphone/i.test(userAgent) ||
        /ipad/i.test(userAgent) ||
        /ipod/i.test(userAgent)
    ) {
        return 'ios';
    }
    if (/android/i.test(userAgent)) {
        return 'android';
    }
    if (/win/i.test(appVersion) && /phone/i.test(userAgent)) {
        return 'windowsPhone';
    }
    if (/mac/i.test(appVersion)) {
        return 'MacOSX';
    }
    if (/win/i.test(appVersion)) {
        return 'windows';
    }
    if (/linux/i.test(appVersion)) {
        return 'linux';
    }
};

export type Debounce = (
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
const debounce: Debounce = (fun, wait, immediate) => {
    let timer: number | null = null;
    return function (...args) {
        if (immediate) {
            const docs = !timer;
            timer = setTimeout(() => {
                timer = null;
            }, wait);
            if (docs) {
                fun.apply(this, args);
            }
        } else {
            timer && clearTimeout(timer);
            timer = setTimeout(() => {
                fun.apply(this, args);
            }, wait);
        }
    };
};

export type Throttle = (
    fun: (...args: unknown[]) => void,
    wait: number,
) => (...args: unknown[]) => void;

/**
 * 创建并返回一个像节流阀一样的函数，当重复调用函数的时候，最多每隔 wait毫秒调用一次该函数。
 * @param fun - 传入回调函数
 * @param wait - 延时时间戳
 * @returns
 */
const throttle: Throttle = (fun, wait) => {
    let timer: number | null = null;
    return function (...args) {
        if (!timer) {
            timer = setTimeout(() => {
                fun.apply(this, args);
                timer = null;
            }, wait);
        }
    };
};

/**
 *  获取滚动条距顶部的距离
 * @returns
 */
const getScrollTop = () => {
    return (
        (document.documentElement && document.documentElement.scrollTop) ||
        document.body.scrollTop
    );
};

export {
    formatMobile,
    getObjectType,
    getJson,
    getOS,
    debounce,
    throttle,
    getScrollTop,
};
