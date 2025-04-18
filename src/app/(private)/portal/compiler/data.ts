// export const LANGUAGE_VERSIONS = {
//   javascript: "18.15.0",
//   typescript: "5.0.3",
//   python: "3.10.0",
//   java: "15.0.2",
//   csharp: "6.12.0",
//   php: "8.2.3",
// };

export const LANGUAGES = [
    { value: "javascript", label: "JavaScript", version: "18.15.0" },
    { value: "typescript", label: "TypeScript", version: "5.0.3" },
    { value: "python", label: "Python", version: "3.10.0" },
    { value: "java", label: "Java", version: "15.0.2" },
    { value: "csharp", label: "C#", version: "6.12.0" },
    { value: "php", label: "PHP", version: "8.2.3" },
  ] as const;
  
  export type TLanguageValue = (typeof LANGUAGES)[number]["value"];
  
  
  export const CODE_SNIPPETS = {
    javascript: `function greet(name) {\n\tconsole.log("Hello, " + name + "!");\n}\n\ngreet("Alex");`,
    typescript: `type Params = {\n\tname: string;\n}\n\nfunction greet(data: Params) {\n\tconsole.log("Hello, " + data.name + "!");\n}\n\ngreet({ name: "Alex" });`,
    python: `def greet(name):\n\tprint("Hello, " + name + "!")\n\ngreet("Alex")`,
    java: `public class HelloWorld {\n\tpublic static void main(String[] args) {\n\t\tSystem.out.println("Hello World");\n\t}\n}`,
    csharp:
      'using System;\n\nnamespace HelloWorld\n{\n\tclass Hello { \n\t\tstatic void Main(string[] args) {\n\t\t\tConsole.WriteLine("Hello World in C#");\n\t\t}\n\t}\n}',
    php: "<?php\n\n$name = 'Alex';\necho $name;",
  }