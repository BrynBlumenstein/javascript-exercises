const palindromes = function (string) {
    // remove non-alphanumeric characters from string and convert all letters to lower case
    string = (string.replace(/[^a-zA-Z0-9]/g, '')).toLowerCase();

    // reverse the string
    const characters = string.split('');
    const reversedArray = characters.reverse();
    const reversedString = reversedArray.join('');

    // determine if string is a palindrome
    if (string === reversedString) {
        return true;
    } else {
        return false;
    }
};

// Do not edit below this line
module.exports = palindromes;
