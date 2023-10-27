const array = [7, 9, 8, 1, 6, 0];

const partition = (array, start, end) => {
   let left = start;
   let pivot = array[end];

   for (let current = start; current <= end; current++) {
      if (array[current] <= pivot) {
         let temp = array[current];
         array[current] = array[left];
         array[left] = temp;
         left++;
      }
   }

   left--;
   return left;
};

const quickSort = (array, start, end) => {
   if (start < end) {
      let rightStart = partition(array, start, end);

      quickSort(array, start, rightStart - 1);
      quickSort(array, rightStart + 1, end);
   }
   return array;
};

console.log(quickSort(array, 0, array.length - 1));