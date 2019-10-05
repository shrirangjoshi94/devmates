//https://devmates.co/solutions/reverse_words_in_string

function reverseWordsInString(str) {
    let result = '';
    for (let i = 0; i < str.length; i++) {
        let tmp = '';
        if (str[i] !== ' ') {
            while (str[i] !== ' ' && i < str.length) {
                tmp = str[i] + tmp;
                i++;
            }
            result += tmp + (str[i] ? str[i] : '');
        } else {
            result += str[i];
        }
    }
    return result;
}

let str = 'hello this is amadeo';
let reversedString = reverseWordsInString(str);

console.log(reversedString);