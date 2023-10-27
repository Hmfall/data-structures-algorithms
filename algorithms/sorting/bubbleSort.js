const array = [7, 9, 8, 1, 6, 0];

const bubbleSort = (array) => {
   for (let i = 0; i < array.length; i++) {
      for (let j = 0; j < array.length; j++) {
         if (array[j] > array[j + 1]) {
            let temp = array[j];
            array[j] = array[j + 1];
            array[j + 1] = temp;
         }
      }
   }
   return array;
};

console.log(bubbleSort(array));