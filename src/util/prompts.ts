export const prompts = {
    typescript: [
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
        "let someValue: any = \"this is a string\";\n\tlet strLength: number = (someValue as string).length;",
        "function getProperty<T, K extends keyof T>(obj: T, key: K) {\n\treturn obj[key];\n}",
        "type PartialPoint = Partial<Point>;",
        "type RequiredPoint = Required<PartialPoint>;",
        "type Point2D = Pick<Point, 'x' | 'y'>;"
    ],
    javascript: [
        "console.log(\"Hello, World!\");",
        "let num = 5;",
        "function add(a, b) {\n\treturn a + b;\n}",
        "let arr = [1, 2, 3, 4, 5];",
        "let obj = { name: \"John\", age: 30 };",
        "let val;\nval = \"hello\";\nval = 123;",
        "let a = 5;\nlet b = 10;\nlet sum = a + b;",
        "let someValue = \"this is a string\";\nlet strLength = someValue.length;",
        "let x = 5;\nlet y = 10;\nlet z = x * y;",
        "if (true) {\n\t// do something\n} else {\n\t// do something else\n}",
        "let person = {\n\tname: 'John',\n\tage: 30\n};",
        "let fruits = ['apple', 'banana', 'cherry'];",
        "let result = Math.pow(2, 3);",
        "let today = new Date();",
        "let a = 5;\nlet b = 3;\nlet max = a > b ? a : b;",
        "let str = 'Hello, World!';\nlet upperCaseStr = str.toUpperCase();",
        "let arr = [1, 2, 3, 4, 5];\nlet doubledArr = arr.map((num) => num * 2);",
        "let message = 'Welcome';\nfor (let i = 0; i < 5; i++) {\n\tconsole.log(message);\n}",
        "let num = 5;\nwhile (num > 0) {\n\tconsole.log(num);\n\tnum--;\n}",
        "let names = ['John', 'Jane', 'Joe'];\nfor (let name of names) {\n\tconsole.log(name);\n}",
        "let isTrue = true;",
        "let isFalse = false;",
        "let a = 5;\nlet b = 3;\nlet sum = a + b;",
        "let x = 5;\nlet y = 10;\nlet product = x * y;",
        "let colors = ['red', 'green', 'blue'];\nlet joinedColors = colors.join(',');",
        "let sentence = 'Hello, this is a sentence.';\nlet words = sentence.split(' ');",
        "let str1 = 'Hello';\nlet str2 = 'World';\nlet combinedStr = str1 + ' ' + str2;",
        "let age = 25;\nlet isAdult = age >= 18 ? 'Adult' : 'Minor';",
        "let numbers = [1, 2, 3, 4, 5];\nlet sum = numbers.reduce((total, num) => total + num, 0);",
        "let text = 'Hello, World!';\nlet length = text.length;"
    ],
    html: [
        "<!DOCTYPE html>\n<html>\n\t<head>\n\t\t<title>My Page</title>\n\t</head>\n\t<body>\n\t\t<h1>Hello, World!</h1>\n\t</body>\n</html>",
        "<div>\n\t<p>This is a paragraph.</p>\n</div>",
        "<h2>This is a heading</h2>",
        "<p>This is a paragraph.</p>",
        "<a href=\"https://www.example.com\">Link</a>",
        "<img src=\"image.jpg\" alt=\"Image\">",
        "<ul>\n\t<li>Item 1</li>\n\t<li>Item 2</li>\n\t<li>Item 3</li>\n</ul>",
        "<ol>\n\t<li>Item 1</li>\n\t<li>Item 2</li>\n\t<li>Item 3</li>\n</ol>",
        "<table>\n\t<tr>\n\t\t<th>Header 1</th>\n\t\t<th>Header 2</th>\n\t</tr>\n\t<tr>\n\t\t<td>Data 1</td>\n\t\t<td>Data 2</td>\n\t</tr>\n</table>",
        "<form>\n\t<label for=\"fname\">First name:</label><br>\n\t<input type=\"text\" id=\"fname\" name=\"fname\"><br>\n\t<label for=\"lname\">Last name:</label><br>\n\t<input type=\"text\" id=\"lname\" name=\"lname\"><br><br>\n\t<input type=\"submit\" value=\"Submit\">\n</form>",
        "<header>\n\t<h1>Header</h1>\n</header>",
        "<footer>\n\t<p>Footer</p>\n</footer>",
        "<nav>\n\t<ul>\n\t\t<li><a href=\"#\">Home</a></li>\n\t\t<li><a href=\"#\">About</a></li>\n\t\t<li><a href=\"#\">Contact</a></li>\n\t</ul>\n</nav>",
        "<section>\n\t<h2>Section Title</h2>\n\t<p>This is a section.</p>\n</section>",
        "<aside>\n\t<h2>Aside Title</h2>\n\t<p>This is an aside.</p>\n</aside>",
        "<article>\n\t<h2>Article Title</h2>\n\t<p>This is an article.</p>\n</article>",
        "<h3>This is a subheading</h3>",
        "<p>This is another paragraph.</p>",
        "<a href=\"https://www.example.com\">Another Link</a>",
        "<img src=\"another_image.jpg\" alt=\"Another Image\">",
        "<ul>\n\t<li>Another Item 1</li>\n\t<li>Another Item 2</li>\n\t<li>Another Item 3</li>\n</ul>",
        "<ol>\n\t<li>Another Item 1</li>\n\t<li>Another Item 2</li>\n\t<li>Another Item 3</li>\n</ol>",
        "<table>\n\t<tr>\n\t\t<th>Another Header 1</th>\n\t\t<th>Another Header 2</th>\n\t</tr>\n\t<tr>\n\t\t<td>Another Data 1</td>\n\t\t<td>Another Data 2</td>\n\t</tr>\n</table>",
        "<form>\n\t<label for=\"email\">Email:</label><br>\n\t<input type=\"email\" id=\"email\" name=\"email\"><br><br>\n\t<input type=\"submit\" value=\"Submit\">\n</form>",
        "<header>\n\t<h2>Another Header</h2>\n</header>",
        "<footer>\n\t<p>Another Footer</p>\n</footer>",
        "<nav>\n\t<ul>\n\t\t<li><a href=\"#\">Page 1</a></li>\n\t\t<li><a href=\"#\">Page 2</a></li>\n\t\t<li><a href=\"#\">Page 3</a></li>\n\t</ul>\n</nav>",
        "<section>\n\t<h3>Another Section Title</h3>\n\t<p>This is another section.</p>\n</section>",
        "<aside>\n\t<h3>Another Aside Title</h3>\n\t<p>This is another aside.</p>\n</aside>",
        "<article>\n\t<h3>Another Article Title</h3>\n\t<p>This is another article.</p>\n</article>"
    ],
    css: [
        "body {\n\tfont-family: Arial, sans-serif;\n\tbackground-color: #f2f2f2;\n}",
        "h1 {\n\tcolor: blue;\n}",
        "p {\n\tfont-size: 16px;\n\tline-height: 1.6;\n}",
        "a {\n\ttext-decoration: none;\n\tcolor: #0066cc;\n}",
        "ul {\n\tlist-style-type: none;\n\tmargin: 0;\n\tpadding: 0;\n}",
        "li {\n\tpadding: 8px;\n\tmargin-bottom: 8px;\n\tbackground-color: #f9f9f9;\n}",
        ".container {\n\twidth: 80%;\n\tmargin: 0 auto;\n\toverflow: hidden;\n}",
        "header {\n\tbackground-color: #f2f2f2;\n\tpadding: 20px;\n\ttext-align: center;\n}",
        "footer {\n\tbackground-color: #f2f2f2;\n\tpadding: 10px;\n\ttext-align: center;\n}",
        "nav {\n\tbackground-color: #333;\n\tcolor: #fff;\n\tpadding: 10px;\n}",
        "section {\n\tbackground-color: #fff;\n\tpadding: 20px;\n\tmargin-bottom: 20px;\n}",
        "article {\n\tbackground-color: #f9f9f9;\n\tpadding: 20px;\n\tmargin-bottom: 20px;\n}",
        "aside {\n\tbackground-color: #f2f2f2;\n\tpadding: 20px;\n\tmargin-bottom: 20px;\n}",
        "form {\n\tdisplay: flex;\n\tflex-direction: column;\n\twidth: 50%;\n\tmargin: 0 auto;\n}",
        "input[type=text], input[type=email] {\n\twidth: 100%;\n\tpadding: 12px 20px;\n\tmargin: 8px 0;\n\tbox-sizing: border-box;\n}",
        "button {\n\tbackground-color: #4CAF50;\n\tcolor: white;\n\tpadding: 14px 20px;\n\tmargin: 8px 0;\n\tborder: none;\n\tcursor: pointer;\n\twidth: 100%;\n}",
        "img {\n\tmax-width: 100%;\n\theight: auto;\n}",
        ".box {\n\twidth: 200px;\n\theight: 200px;\n\tbackground-color: #f2f2f2;\n\tmargin: 20px;\n\tpadding: 20px;\n}",
        ".btn {\n\tdisplay: inline-block;\n\tbackground-color: #4CAF50;\n\tcolor: white;\n\tpadding: 10px 20px;\n\ttext-decoration: none;\n\tborder: none;\n\tborder-radius: 5px;\n}",
        ".header {\n\tfont-size: 24px;\n\tfont-weight: bold;\n}",
        ".footer {\n\ttext-align: center;\n\tcolor: #666;\n}",
        ".main {\n\twidth: 80%;\n\tmargin: 0 auto;\n}",
        ".sidebar {\n\twidth: 20%;\n\tfloat: left;\n\tpadding: 20px;\n}",
        ".content {\n\twidth: 80%;\n\tfloat: left;\n\tpadding: 20px;\n}",
        ".clearfix::after {\n\tcontent: \"\";\n\tdisplay: table;\n\tclear: both;\n}",
        ".center {\n\tdisplay: flex;\n\tjustify-content: center;\n\talign-items: center;\n\tmin-height: 200px;\n}",
        ".bold {\n\tfont-weight: bold;\n}",
        ".italic {\n\tfont-style: italic;\n}",
        ".underline {\n\ttext-decoration: underline;\n}",
        ".text-red {\n\tcolor: red;\n}"
    ],
    sql: [
        "SELECT *\nFROM table_name;",
        "SELECT column1, column2\nFROM table_name;",
        "SELECT *\nFROM table_name\nWHERE condition;",
        "SELECT column1, column2\nFROM table_name\nWHERE condition;",
        "INSERT INTO table_name (column1, column2)\nVALUES (value1, value2);",
        "UPDATE table_name\nSET column1 = value1, column2 = value2\nWHERE condition;",
        "DELETE\nFROM table_name\nWHERE condition;",
        "CREATE DATABASE database_name;",
        "CREATE TABLE table_name (\n\tcolumn1 datatype,\n\tcolumn2 datatype,\n\t...\n);",
        "ALTER TABLE table_name\nADD column datatype;",
        "DROP DATABASE database_name;",
        "DROP TABLE table_name;",
        "SELECT column1, column2\nFROM table_name\nORDER BY column1;",
        "SELECT column1, column2\nFROM table_name\nORDER BY column1 DESC;",
        "SELECT *\nFROM table_name\nLIMIT 5;",
        "SELECT *\nFROM table_name\nLIMIT 5 OFFSET 10;",
        "SELECT COUNT(column_name)\nFROM table_name;",
        "SELECT AVG(column_name)\nFROM table_name;",
        "SELECT SUM(column_name)\nFROM table_name;",
        "SELECT MIN(column_name)\nFROM table_name;",
        "SELECT MAX(column_name)\nFROM table_name;",
        "SELECT column1, COUNT(column2)\nFROM table_name\nGROUP BY column1;",
        "SELECT column1, column2\nFROM table_name\nWHERE column1 LIKE 'a%';",
        "SELECT column1, column2\nFROM table_name\nWHERE column1 IN (value1, value2);",
        "SELECT column1, column2\nFROM table_name\nWHERE column1 BETWEEN value1 AND value2;",
        "SELECT column1, column2\nFROM table_name\nWHERE condition1 AND condition2;",
        "SELECT column1, column2\nFROM table_name\nWHERE condition1 OR condition2;",
        "SELECT column1, column2\nFROM table_name\nINNER JOIN another_table ON table_name.column_name = another_table.column_name;",
        "SELECT column1, column2\nFROM table_name\nLEFT JOIN another_table ON table_name.column_name = another_table.column_name;",
        "SELECT column1, column2\nFROM table_name\nRIGHT JOIN another_table ON table_name.column_name = another_table.column_name;",
        "CREATE INDEX index_name\nON table_name (column_name);"
    ]
};
