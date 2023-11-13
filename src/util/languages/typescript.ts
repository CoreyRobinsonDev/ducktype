const typescript = [
    "console.log(\"Hello, World!\");",
    "let num: number = 5;",
    "function add(a: number, b: number): number {\n\treturn a + b;\n}",
    "let arr: number[] = [1, 2, 3, 4, 5];",
    "let obj: { name: string; age: number } = {\n\tname: \"John\",\n\tage: 30\n};",
    "let val: string | number;\nval = \"hello\";\nval = 123;",
    "type A = { a: number }\ntype B = { b: number }\ntype C = A & B\nlet val: C = { a: 1, b: 2 };",
    "let someValue: any = \"this is a string\";\nlet strLength: number = (someValue as string).length;",
    "type Point = {\n\tx: number;\n\ty: number\n}\nlet point: Point = {\n\tx: 5,\n\t y: 10\n};",
    "function isString(value: any): value is string {\n\treturn typeof value === \"string\";\n}\nif (isString(value)) {\n\t// value is now of type 'string'\n}",
    "class Person {\n\tconstructor(public name: string, public age: number) {}\n}",
    "class Student extends Person {\n\tconstructor(name: string, age: number, public grade: string) {\n\t\tsuper(name, age);\n\t}\n}",
    "interface Shape {\n\tcolor: string;\n\tarea(): number;\n}",
    "class Circle implements Shape {\n\tconstructor(public color: string, public radius: number) {}\n\tarea() {\n\t\treturn Math.PI * this.radius * this.radius;\n\t}\n}",
    "interface SquareConfig {\n\tcolor?: string;\n\twidth?: number;\n}",
    "export const PI = 3.14;",
    "export function double(num: number): number {\n\treturn num * 2;\n}",
    "export class MyClass {\n\t// Class implementation here\n}",
    "import { PI, double } from \"./math\";",
    "function identity<T>(arg: T): T {\n\treturn arg;\n}",
    "interface GenericIdentityFn<T> {\n\t(arg: T): T;\n}",
    "try {\n\t// Code that may throw an error\n} catch (error) {\n\t// Handle the error\n}",
    "let promise = new Promise<string>((resolve, reject) => {\n\t// Resolve or reject the promise based on some condition\n});",
    "async function getData(): Promise<string> {\n\tlet result = await fetch(\"https://api.example.com/data\");\n\treturn result;\n}",
    "function classDecorator<T extends { new (...args: any[]): {} }>(constructor: T) {\n\treturn class extends constructor {\n\t\tnewProperty = \"new property\";\n\t\thello = \"override\";\n\t};\n}",
    "let someValue: any = \"this is a string\";\nlet strLength: number = (someValue as string).length;",
    "function getProperty<T, K extends keyof T>(obj: T, key: K) {\n\treturn obj[key];\n}",
    "type PartialPoint = Partial<Point>;",
    "type RequiredPoint = Required<PartialPoint>;",
    "type Point2D = Pick<Point, 'x' | 'y'>;"
]

export default typescript;
