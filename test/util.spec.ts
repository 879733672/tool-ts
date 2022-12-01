import { util } from '../src/index';
describe('测试常用方法', () => {
    test('formatMobile 手机号码', () => {
        expect(util.formatMobile('13456819436')).toBe('134****9436');
    });

    test('检测对象类型', () => {
        expect(util.getObjectType('我是一个字符串')).toBe('String');
        expect(util.getObjectType(1314)).toBe('Number');
        expect(util.getObjectType(true)).toBe('Boolean');
        expect(util.getObjectType({ name: '张三', age: 18 })).toBe('Object');
        expect(util.getObjectType([13, 324, 56])).toBe('Array');
        expect(util.getObjectType(null)).toBe('Null');
        expect(util.getObjectType(undefined)).toBe('Undefined');
    });

    test('json must be a string, def is not required', () => {
        expect(
            util.getJson('{"password":"123456","username":"张三"}', {}),
        ).toEqual({
            password: '123456',
            username: '张三',
        });
        expect(util.getJson('{"password":"123456","username":"张三"}')).toEqual(
            {
                password: '123456',
                username: '张三',
            },
        );
        expect(util.getJson('{"neme":4}')).toEqual({ neme: 4 });
        expect(util.getJson('aa', 11)).toBe(11);
        expect(util.getJson('aa')).not.toBeFalsy();
    });

    test('debounce test 延迟执行', (done) => {
        let num = 0;
        const test = () => {
            num += 1;
        };
        const debounce = util.debounce(test, 1000);
        debounce();
        debounce();
        debounce();
        debounce();
        expect(num).toBe(0);
        setTimeout(() => {
            expect(num).toBe(1);
            done();
        }, 1100);
    });

    test('debounce test 立即执行', (done) => {
        let num = 0;
        const test = () => {
            num += 1;
        };
        const debounce = util.debounce(test, 1000, true);
        debounce();
        debounce();
        debounce();
        debounce();
        expect(num).toBe(1);
        setTimeout(() => {
            expect(num).toBe(1);
            done();
        }, 1100);
    });

    test('throttle test', (done) => {
        const mockFn = jest.fn();
        // 封装为节流方法
        const fn = util.throttle(mockFn, 10);
        fn(1);
        fn(2);

        // 延时执行
        setTimeout(() => {
            const calls = mockFn.mock.calls;
            expect(calls.length).toBe(1);
            expect(calls[0][0]).toBe(1);
            done();
        }, 50);
    });
});
