// Day 2, part 1: Loops. The output appears in the Console (F12).

// TASK 1: print the numbers 1 to 10, one per line, using a for loop.
for (let i = 1; i <= 10; i++) {
    console.log(i);
}


// TASK 2: print the numbers 10 to 1 (counting down) using a while loop.
//         Print "Kaffe!" after 1.
let i = 10;
while (i > 0) {
    console.log(i);
    i--;
}
console.log("Kaffe!");


// TASK 3: do the same as task 1, but only print even numbers.
//         Hint: n % 2 === 0
for (let n = 1; n <= 10; n++) {
    if (n  % 2 === 0) {
        console.log(n);
    }
}


// TASK 4: here is the café's price list. Print a receipt using a for...of loop:
//         "Kardemummabulle: 35 kr", etc., followed by "Summa: ... kr" at the end.
const prislista: number[] = [35, 32, 59, 45];
const namnlista: string[] = ["Kardemummabulle", "Bryggkaffe", "Ostmacka", "Latte"];
// TODO
let total = 0;
let n = 0;

for (const pris of prislista) {
  console.log(`${namnlista[n]}: ${pris} kr`);
  total += pris;
  n++;
}

console.log(`Summa: ${total} kr`);

// TASK 5 (challenge): print the multiplication table for 3,
//         from "3 x 1 = 3" to "3 x 10 = 30".
for (let i = 1; i <= 10; i++) {
    console.log(`3 x ${i} = ${3 * i}`);
}