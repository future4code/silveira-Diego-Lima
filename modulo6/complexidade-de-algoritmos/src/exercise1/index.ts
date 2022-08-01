const findFirstRecurringCharacter = (input:any) => {
    const charHashMap:any = {};
    for (const char of input) {
      if (charHashMap[char] === true) {
        return char;
      }
      charHashMap[char] = true;
    }
    return null;
  }; 

  //Sendo n o tamanho da string input, complexidade é 0(n)