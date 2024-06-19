function translatePigLatin(str) {
    let newStr;
    if(str.startsWith('a')){
        newStr = str.concat('way')
        return newStr;
    }
    else if(str.startsWith('e')){
        newStr = str.concat('way')
        return newStr;
    }
    else if(str.startsWith('i')){
        newStr = str.concat('way')
        return newStr;
    }
    else if(str.startsWith('o')){
        newStr = str.concat('way')
        return newStr;
    }
    else if(str.startsWith('u')){
        newStr = str.concat('way')
        return newStr;
    }
    else{
        let string = str.split('')
        let lastEle = string[0]
        string.splice(0,1)
        console.log(string.join('').concat(lastEle).concat("ay"));
    }
    return newStr;
  }
  
  console.log(translatePigLatin("paragraphs"));