/**
 * 根据name读取cookie
 * @param name - 名称
 * @returns
 */
const getCookie = (name: string) => {
    const arr = document.cookie.replace(/\s/g, '').split(';');
    for (let i = 0; i < arr.length; i++) {
        const temp = arr[i].split('=');
        if (temp[0] === name) {
            return decodeURIComponent(temp[1]);
        }
    }
    return '';
};

/**
 * 删除cookie
 * @param name - 名称
 */
const removeCookie = (name: string) => {
    setCookie(name, '0', -1);
};

/**
 * 设置cookie
 * @param name - 名称
 * @param value - 值
 * @param days - 时间
 */
const setCookie = (name: string, value: string, days?: number | undefined) => {
    let date;
    if (days) {
        date = new Date();
        date.setDate(date.getDate() + days);
    }
    document.cookie = name + '=' + value + ';expires=' + date;
};

/**
 * 根据key获取localStorage中数据
 * @param key - 名称
 * @returns
 */
const getItem = (key: string) => {
    if (!key) {
        return null;
    }
    const data = window.localStorage.getItem(key);
    try {
        if (data) {
            return JSON.parse(data);
        }
    } catch (err) {
        return data;
    }
    return '';
};

/**
 * 根据key设置localStorage中数据
 * @param key - 名称
 * @param data - 值
 * @returns
 */
const setItem = (key: string, data: unknown) => {
    if (!key || !data) {
        return;
    }
    window.localStorage.setItem(key, JSON.stringify(data));
};

/**
 * 根据key删除localStorage中数据
 * @param key - 名称
 * @returns
 */
const removeItem = (key: string) => {
    if (!key) {
        return;
    }
    window.localStorage.removeItem(key);
};

/**
 * 清除所有localStorage中数据
 */
const clearItem = () => {
    window.localStorage.clear();
};

/**
 * 存储sessionStorage
 */
const setSession = (key: string, content: string) => {
    if (!key) {
        return;
    }
    if (typeof content !== 'string') {
        content = JSON.stringify(content);
    }
    window.sessionStorage.setItem(key, content);
};

/**
 * 获取sessionStorage
 */
const getSession = (name: string) => {
    if (!name) {
        return;
    }
    const data = window.sessionStorage.getItem(name);
    let res: unknown;
    try {
        res = JSON.parse(data as string);
    } catch (error) {
        res = data;
    }
    return res;
};

/**
 * 删除sessionStorage指定项
 */
const removeSession = (name: string) => {
    if (!name) return;
    window.sessionStorage.removeItem(name);
};

/**
 * 清空session
 */
const clearSession = () => {
    window.sessionStorage.clear();
};

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
