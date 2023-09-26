/**
 * @param {string} s
 * @return {boolean}
 */
var isValid = function(s) {
    const stack = [];
    for (const bracket of s) {
        if (['{', '[', '('].includes(bracket)) {
            stack.push(bracket);
        } else if ([']', '}', ')'].includes(bracket)) {
            const startBracket = stack.pop();
            if (bracket === ']' && startBracket !== '[') return false;
            else if (bracket === '}' && startBracket !== '{') return false;
            else if (bracket === ')' && startBracket !== '(') return false;
        };
    };

    return stack.length === 0;
};