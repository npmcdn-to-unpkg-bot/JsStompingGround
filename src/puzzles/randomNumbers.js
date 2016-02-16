import {log} from '../utils';


function rand5(){
   return 1 + Math.random() * 4;
}

function rand7(){
  return rand5() + (rand5() / 5 * 2);
}


let min = Infinity, max = 0;
for(let i = 0; i <= 100000; i++) {
  let num = Math.round(rand7());
  if(num < min) { min = num; }
  if(num > max) { max = num; }
}
log(`min: ${min}, max: ${max}`);
