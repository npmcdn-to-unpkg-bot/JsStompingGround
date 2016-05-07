let fn = function fn(...meArgs) {
  console.log('count:', arguments.length);
  console.log('meArgs', meArgs);
  console.log('...meArgs', ...meArgs);
}

fn('one', 'two', 'three');

let test = ['four', 'five', 'six'];
fn(...test);



