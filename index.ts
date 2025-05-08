function formatString(input: string, toUppercase?: boolean): string {
  if (toUppercase) {
    return input.toUpperCase();
  } else {
    return input.toLowerCase();
  }
}

function filterByRating(
  items: { title: string; rating: number }[]
): { title: string; rating: number }[] {
  return items.filter((item) => item.rating >= 4);
}

function concatenateArrays<T>(...arrays: T[][]): T[] {
  return arrays.reduce((acc, curr) => acc.concat(curr));
}

class Vehicle {
  constructor(private year: number, private make: string) {}
  getInfo(): string {
    return `Make: ${this.make}, Year: ${this.year}`;
  }
}

class Car extends Vehicle {
  constructor(make: string, year: number, private model: string) {
    super(year, make);
  }
  getModel(): string {
    return `Model: ${this.model}`;
  }
}

function processValue(value: string | number): string | number {
  if (typeof value === "string") {
    return value.length;
  } else {
    return value * 2;
  }
}

interface Product {
  name: string;
  price: number;
}

function getMostExpensiveProduct(products: Product[]): Product | null {
  return products.length > 0
    ? products.reduce((max, curr) => (curr.price > max.price ? curr : max))
    : null;
}

enum Day {
  Monday,
  Tuesday,
  Wednesday,
  Thursday,
  Friday,
  Saturday,
  Sunday,
}

function getDayType(day: Day): string {
  if (day === Day.Sunday) {
    return "Weekend";
  } else {
    return "Weekday";
  }
}

async function squareAsync(n: number): Promise<number> {
  return new Promise((resolve, reject) => {
    if (n < 0) {
      throw new Error("Negative number not allowed");
    } else {
      setTimeout(() => {
        return resolve(n * n);
      }, 1000);
    }
  });
}
