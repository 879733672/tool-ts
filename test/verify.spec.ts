import { verify } from '../src/index';

describe('测试正则校验', () => {
    test('邮箱校验是否正确', () => {
        let email = '8787';
        expect(verify.isEmail(email)).toBeFalsy();
        email = 'cc@qq.com';
        expect(verify.isEmail(email)).toBeTruthy();
    });

    test('手机号码校验', () => {
        let phone = '12344';
        expect(verify.isMobile(phone)).toBeFalsy();
        phone = '13456819321';
        expect(verify.isMobile(phone)).toBeTruthy();
    });

    test('电话号码校验', () => {
        let phone = '13456819321';
        expect(verify.isPhone(phone)).toBeFalsy();
        phone = '5250129';
        expect(verify.isPhone(phone)).toBeTruthy();
    });

    test('url地址校验', () => {
        let url = 'baoidu.com';
        expect(verify.isUrl(url)).toBeFalsy();
        url = 'http://baidu.com';
        expect(verify.isUrl(url)).toBeTruthy();
        url = 'https://360.com';
        expect(verify.isUrl(url)).toBeTruthy();
    });

    test('isColor 判断是否为16进制颜色，rgb 或 rgba', () => {
        let color = '#acf';
        expect(verify.isColor(color)).toBeTruthy();
        color = 'acf';
        expect(verify.isColor(color)).toBeFalsy();
        color = '233';
        expect(verify.isColor(color)).toBeFalsy();
        color = 'rgb(0,0,0)';
        expect(verify.isColor(color)).toBeTruthy();
    });

    test('isIdCard 判断是否为身份证号', () => {
        let card = '420381199009021123';
        expect(verify.isIdCard(card)).toBeTruthy();
        card = '4203811990090212';
        expect(verify.isIdCard(card)).toBeFalsy();
        card = '610104620927690';
        expect(verify.isIdCard(card)).toBeTruthy();
        card = '34052419800101001X';
        expect(verify.isIdCard(card)).toBeTruthy();
    });

    test('isUndefind test', () => {
        let p;
        expect(verify.isUndefind(p)).toBeTruthy();
        p = '11';
        expect(verify.isUndefind(p)).toBeFalsy();
    });

    test('判断对象是否为空', () => {
        expect(verify.isEmptyObject({})).toBeTruthy();
        expect(verify.isEmptyObject({ a: '11' })).toBeFalsy();
    });
});
