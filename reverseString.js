function reversator (str) {

let reversed = ''
for (let char of str)  {
    reversed = char + reversed;

}
return reversed;

}

reversator('hello');