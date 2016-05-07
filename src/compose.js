export function compose(...funcs) {
  return arg => funcs.reduceRight((result, fn) => fn(result), arg);
}


function toUpper(text) {
  return text.toUpperCase();
}

function double(text) {
  return `${text}.${text}`;
}

function embellish(text) {
  return `--==<< ${text} >>==--`;
}

let process = compose(embellish, double, toUpper);

console.log(process('pizza'));