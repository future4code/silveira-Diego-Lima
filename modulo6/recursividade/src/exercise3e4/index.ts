// Exercicio 3


export const calculateSumTo = (n: number): number => {
    var sum = 0
    for (var i = 0; i <= n; i++) {
        sum += i;
    }
    return sum;
};

// Exemplos de uso:
console.log(calculateSumTo(3));
console.log(calculateSumTo(10));
console.log(calculateSumTo(100));

// Exercicio 4

export const printArray = (arr: number[], i: number = arr.length - 1) => {
    if (i >= 0) {
      printArray(arr, i - 1);
      console.log(`Elemento ${i}: `, arr[i]);
    }
  };
  
  // Exemplo de uso:
  const array = [1, 2, 3, 4];
  printArray(array);