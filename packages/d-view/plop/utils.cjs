/**
 * 验证是否为空
 * @param errMsg {string}
 * @return {Function} 配置后的验证函数
 */
const emptyValidate = (errMsg='禁止为空 !') => {
    return function (value) {
        let isNull = false;
        if( typeof(value) === 'undefined' || value === null || value === '') {
            isNull = true;
        }else if( Number.isInteger(value) ) {
            isNull = Number.isNaN(value);
        }
        return isNull ? errMsg : true;
    }
}

/**
 * 验证是否为 kebab-case 命名
 * @param value {string}
 * @return {boolean|string}
 */
const kebabCaseValidate = (value) => {
    return /^[a-z](([a-z]+-?)*)[^-A-Z\d]$/g.test(value) ? true : '请使用 kebab-case 命名 !';
}

/**
 * 验证器
 * @param useValidate 使用的验证函数
 * @return {Function} 实际 Validate 函数
 */
const validate = (...useValidate) => {
    return function (value) {
        for (const validateFunc of useValidate) {
            const result = validateFunc(value);
            if (result !== true) {
                return result;
            }
        }
        return true;
    };
};

/**
 * 跳过输出文件
 * @param match 匹配列表, key 为 plop.js 中的变量名, value 为预期跳过的值
 * @param skipMsg 跳过文件输出的提示信息
 * @return {(function(...[*]): (string|undefined))|*}
 */
const skip = (match, skipMsg='', ) => {
    return function (options) {
        for (const matchKey in match) {
            if (match[matchKey] === options[matchKey]) {
                return `${skipMsg} ${matchKey}: ${options[matchKey]}`;
            }
        }
    };
};

module.exports = {
    validate: {
        validate,
        emptyValidate,
        kebabCaseValidate,
    },
    actions: {
        skip,
    },
};
