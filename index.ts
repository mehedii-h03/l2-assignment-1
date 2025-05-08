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
  getInfo() {
    return `Make: ${this.make}, Year: ${this.year}`;
  }
}

class Car extends Vehicle {
  constructor(make: string, year: number, private model: string) {
    super(year, make);
  }
  getModel() {
    return `Model: ${this.model}`;
  }
}




