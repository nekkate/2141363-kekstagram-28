const haveLength = (string, count) => string.length < count;

const isPalindrome = (string) => {
  string = string.toLowerCase().replaceAll(' ', '');
  for (let i = 0; i <= string.length / 2; i++) {
    if (string[i] !== string[string.length - i - 1]) {
      return false;
    }
  }
  return true;
};

const findNumber = (string) => Number(String(string).match(/\d/g)?.join(''));

function padStart (string, minLength, spacer) {
  while (string.length < minLength) {
    const needToAdd = minLength - string.length; //она мне нужна для понимания кода, не трогай
    string = (needToAdd < spacer.length ? spacer.slice(0, needToAdd) : spacer) + string;
  }
  return string;
}
