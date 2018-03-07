function palindrome (str) {

   // solution 1
    return str === str.split("").reverse().join("");

}

palindrome('hello');
palindrome('laval');