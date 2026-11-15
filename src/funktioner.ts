// Day 2, part 2: Functions. Make ALL tests pass on tests.html.
// Rules: write the functions yourself, in this file. Do not change tests.ts.
// Red underlines are normal until you write return: TypeScript knows the function must return a value.

// 1. Return the price as text with " kr".
//    Integers without decimal places: formateraPris(35) returns "35 kr".
//    Decimal numbers with two decimal places and a comma: formateraPris(91.8) returns "91,80 kr".
export function formateraPris(pris: number): string {
  // TODO
  if (Number.isInteger(pris)) {
    return `${pris} kr`;
  } else {
    return `${pris.toFixed(2).replace('.', ',')} kr`;
  }
}

// 2. The VAT portion of a price including 12% VAT (a fictional rate), rounded to two decimal places.
//    momsDel(112) returns 12.
export function momsDel(pris: number): number {
  // TODO
  const momsSats = 0.12;
  const moms = pris - pris / (1 + momsSats);
  return Math.round(moms * 100) / 100;
}

// 3. The price after a percentage discount. medRabatt(100, 10) returns 90.
export function medRabatt(pris: number, procent: number): number {
  // TODO
const rabatt = pris * (procent / 100);
return pris - rabatt;
}

// 4. Is the café open? Weekdays 7–18, weekends (Saturday, Sunday) 9–16.
//    Opens at the start hour, closes at the end hour (18 means closed).
export function ärÖppet(veckodag: string, klockslag: number): boolean {
  // TODO
  if (veckodag === "Saturday" || veckodag === "Sunday") {
    return klockslag >= 9 && klockslag < 16;
  } else {
    return klockslag >= 7 && klockslag < 18;
  }
}


// 5. The sum of all numbers in the list, using a loop. summa([1, 2, 3]) returns 6.
export function summa(tal: number[]): number {
  // TODO
  let sum = 0;
  for (const n of tal) {
    sum += n;
  }
  return sum;
}

// 6. The average. snitt([2, 4, 6]) returns 4. An empty list returns 0.
export function snitt(tal: number[]): number {
  // TODO
  if (tal.length === 0) {
    return 0;
  }
  let sum = 0;
  for (const n of tal) {
    sum += n;
  }
  return sum / tal.length;
}

// 7. The largest number, using a loop. största([3, 9, 4]) returns 9. An empty list returns undefined.
export function största(tal: number[]): number | undefined {
  // TODO
  if (tal.length === 0) {
    return undefined;
  }
  let max = tal[0];
  for (const n of tal) {
    if (n > max) {
      max = n;
    }
  }
  return max;
}

// 8. Repeat a string. upprepa("ab", 3) returns "ababab". Use a loop.
export function upprepa(text: string, antal: number): string {
  // TODO
  let result = "";
  for (let i = 0; i < antal; i++) {
    result += text;
  }
  return result;
}

// 9. A receipt line. kvittorad("Kaffe", 2, 32) returns "2 x Kaffe: 64 kr".
//    Use formateraPris from task 1.
export function kvittorad(namn: string, antal: number, pris: number): string {
  // TODO
  return `${antal} x ${namn}: ${formateraPris(antal * pris)}`;
}

// 10. Arrow functions. Write them yourself using const and =>.
//     dubbla(4) returns 8. ärJämnt(4) returns true.
export const dubbla = (n: number): number => {
  // TODO
  return n * 2;
};
export const ärJämnt = (n: number): boolean => {
  // TODO
  return n % 2 === 0;
};
