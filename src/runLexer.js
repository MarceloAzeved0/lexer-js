const letterValue = {
  '(': { token : 'LPAREN', id: 3 },
  ')': { token: 'RPAREN', id: 4 },
  '+': { token: 'ADD_OP', id: 5 },
  '-': { token: 'SUB_OP', id: 6 },
  '*': { token: 'MUL_OP', id: 7 },
  '/': { token: 'DIV_OP', id: 8 },
  '>': { token: 'GT_OP', id: 9 },
  '<': { token: 'LT_OP', id: 10 },
  '==': { token: 'EQ_OP', id: 11 },
  ':=': { token: 'ASSIGN_OP', id: 12 },
}


module.exports = function start(content){
  const response = [];
  for(let i = 0; i < content.length; i++){
    if(letterValue[content[i]]){
      response.push(
        `(${content[i]},${letterValue[content[i]].token},${letterValue[content[i]].id})`
      );
    }else if(letterValue[content[i] + content[i + 1]]){
      response.push(
        `(${content[i] + content[i + 1]},${letterValue[content[i] + content[i + 1]].token},${letterValue[content[i] + content[i + 1]].id})`
      );
      i++;
    }else if(content[i] != ' ' && !isNaN(content[i])){
      let number = content[i];
      for(let j = i + 1; j < content.length; j++){
        if(content[j] != ' ' && !isNaN(content[j])){
          number = number + content[j];
          i++;
        }else{
          break;
        }
      }
      response.push(
        `(${number},INT_LIT,2)`
      );
    }else if(content[i] != ' ' && isNaN(content[i])){
      let letter = content[i];
      for(let j = i + 1; j < content.length; j++){
        if(content[j] != ' ' && isNaN(content[j])){
          letter = letter + content[j];
          i++;
        }else{
          break;
        }
      }
      response.push(
        `(${letter},IDENT,1)`
      );
    }
  }
  return response;
}