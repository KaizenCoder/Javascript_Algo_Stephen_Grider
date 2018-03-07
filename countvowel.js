function countvowel (str) {
 
str.split("");

var num= 0;
for (let char of str) {

    if( char === "a" ||char ===  "e" ||char ===  "i" ||char ===  "o" ||char ===  "u" ||char ===  "y"){
            num++;

    }
}


return num++;
}