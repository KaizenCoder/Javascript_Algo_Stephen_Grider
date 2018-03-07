function longestWord(str) {
    
       str = str.split(" ");
     
     str;
   var word = "";
       var maxchar = 0;
       for (let w of str ) {
               if(w.length > maxchar){
                   maxchar = w.length;
                   word = w;
   
               }
   
       }
   
   return word;
   ;
   }
   
   longestWord('this is the longest word');