1. What are some differences between interfaces and types in TypeScript?
Answer: Interfaces and types are both used to declare types in TypeScript. But the syntax and the use cases are different. Interfaces can only define types for objects,function types and class contracts but on the other hand, types can define objects, arrays, and primitive types also the function types and class contracts. Below is an example.

interface User {
id: string;
name: string;
}

Here, via interface, a User type is defined. The same type can be defined with type, but the syntax will be slightly different. Instead of the interface keyword, the type keyword will be used, and after the name of the type, an equal sign is needed. The example is given below:

type User = {
id: string;
name: string;
};

Also, with type, we can define primitive values, but with interface, we cannot define primitive values. Below is an example:

type isAdmin = true;

2. Provide an example of using union and intersection types in TypeScript. 
Answer: Below is an example of union and intersection types in TypeScript:

Union:

type Status = "success" | "error" | "loading";

Here, the Status type can be either "success", "error", or "loading". It cannot be anything else, and only one of these values will be assigned to a variable of this type.

Intersection:

type Name = {
    name: string;
};

type Age = {
    age: number;
};

type Person = Name & Age;

const user: Person = {
name: "Alice",
age: 30
};

Here, using intersection means the Person type must have both name and age properties it cannot be just one of them.
