function spinWords(string){
    const array = string.split(" "); // transform String to Array
    let text = "";
    
    for(i = 0; i < array.length; i++){
      const word = array[i];
      if(word.length >= 5){
        text += word.split("").reverse().join("").toString() + " "; // Reverse letters if word contains 5 or more letters
      } else {
        text += array[i] + " ";
      }
    }
    return text.slice(0, text.length-1);
}
  
