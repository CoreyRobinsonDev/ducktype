export const prompts = {
    typescript: [
        `function getTime(): number {\n\treturn new Date().getTime();\n}`,
        `function printHello(): void {\n\tconsole.log("Hello!");\n}`,
        `const user = {\n\tname: "Hayes",\n\tid: 0,\n};`,
        `let helloWorld = "Hello World";`,
        `interface User {\n\tname: string;\n\tid: number;\n}`,
        `interface User {\n\tname: string;\n\tid: number;\n}\n\nclass UserAccount {\n\tname: string;\n\tid: number;\n\n\tconstructor(name: string, id: number) {\n\t\tthis.name = name;\n\t\tthis.id = id;\n\t}\n}\n\nconst user: User = new UserAccount("Murphy", 1);`
    ]
};
