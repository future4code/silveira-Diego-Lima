// Exercício 1

const printNumbersAsc = (n: number) => {
    if (n >= 0) {
        printNumbersAsc(n - 1);
        console.log(n);
    }
};


const printNumbersDsc = (n: number) => {
    if (n >= 0) {
        console.log(n);
        printNumbersDsc(n - 1);
    }
};

// Exercício 2

export const calculateSumTo = (n: number, acc: number = 0): number => {
    if (n === 0) {
        return acc;
    }
    return calculateSumTo(n - 1, acc + n);
};


// Exemplos de uso:
console.log(calculateSumTo(3));
console.log(calculateSumTo(10));
console.log(calculateSumTo(100));



