/**
 * kebabCase 转大驼峰
 * @param text {string} 符合全小写无数字的 kebab-case 的文本
 * @return {string}
 */
const kebabToPascal = (text) => {
    return text.replace(/(^.|-[a-z])/g, (match)=>{
        if (match[0] === '-') {
            return match.slice(1).toUpperCase();
        }
        return match.toUpperCase();
    });
};

/**
 * kebabCase 转小驼峰
 * @param text {string} 符合全小写无数字的 kebab-case 的文本
 * @return {string}
 */
const kebabToLowerCase = (text) => {
    return text.replace(/(-[a-z])/g, (match)=>{
        return match.slice(1).toUpperCase();
    });
};

const initHelper = (plop) => {
    plop.setHelper('kebabToPascal', kebabToPascal);
    plop.setHelper('kebabToLowerCase', kebabToLowerCase);
};

module.exports = {
    execHooks(plop) {
        initHelper(plop);
    }
};
