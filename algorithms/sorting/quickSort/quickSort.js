const array = [7, 9, 8, 1, 6, 0];

const quickSort = (array) => {
   if (array.length < 2) {
      return array;
   }

   let p = Math.floor(array.length / 2);
   let left = [];
   let right = [];
   let pivot = array[p];

   for (let i = 0; i < array.length; i++) {
      if (i === p)
         continue;
      if (array[i] < pivot) {
         left.push(array[i]);
      } else {
         right.push(array[i]);
      }
   }

   return [...quickSort(left), pivot, ...quickSort(right)];
};

console.log(quickSort(array));