const array = [7, 9, 8, 1, 6, 0];

const selectionSort = (array) => {
   for (let i = 0; i < array.length; i++) {
      let min = i;
      for (let j = i + 1; j < array.length; j++) {
         if (array[j] < array[min]) {
            min = j;
         }
      }
      let temp = array[i];
      array[i] = array[min];
      array[min] = temp;
   }
   return array;
};

console.log(selectionSort(array));