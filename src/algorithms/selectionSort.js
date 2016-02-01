let log = console.log;

log('Given an unsorted array of numbers, produce a sorted array.')
log();
let unsorted = generateRandomIntegers(20);
let sorted = JSON.parse(JSON.stringify(unsorted));

log('unsorted');
log(unsorted.toString());
log();
log('sorted');
log(selectionSort(sorted).toString());


function selectionSort(a) {
  let i, j, k, t;
  i = j = k = t = 0;
  while(k < a.length) {
    for(j = i = k; i < a.length; i++) {
      if(a[i] < a[j]) {
        j = i;
      }
    }
    t = a[k];
    a[k] = a[j];
    a[j] = t;
    k++;
  }
  return a;
}

function generateRandomIntegers(count = 100, max = 1000) {
  let i, a;
  a = [];
  for(i = 0; i < count; i++) {
    a.push(Math.round(Math.random() * max));
  }
  return a;
}


// function selectionSortFirstPass(a) {
//   let begin = 0;
//   let end = a.length;
//   let maxIndex, i, temp;
//
//   while(begin < end) {
//     maxIndex = begin;
//     for(maxIndex = i = begin; i < end; i++) {
//       if(a[i] < a[maxIndex]) {
//         maxIndex = i;
//       }
//     }
//     temp = a[begin];
//     a[begin] = a[maxIndex];
//     a[maxIndex] = temp;
//     begin++;
//   }
//   return a;
// }
