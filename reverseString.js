function spinWords(string){
    const array = string.split(" ");
    let text = "";
    
    for(i = 0; i < array.length; i++){
      const word = array[i];
      if(word.length >= 5){
        text += word.split("").reverse().join("").toString() + " ";
      } else {
        text += array[i] + " ";
      }
    }
    return text.slice(0, text.length-1);
}
  
