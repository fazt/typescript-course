## TypeScript Course

## Requirements
- Optional: HTML, CSS, JS
- Node.js and Npm
- Console / Terminal Usage

# Typescript Installation
- to install: `sudo npm install -g typescript`
- to verify installation: `tsc -v`
- to install Typescript upgrade Node (TSUN): `npm install -g tsun`

# Useful Commands
- to transpile: `tsc myfile.ts`
    - all files: `tsc *.ts`
    - target Option: `--target ES5`
- to execute your transpiled file: `node myfile.js`, because is js you can use it on whatever js enviroment

## Considerations
- Ts will generate an output JS, even with errors

## More Info
- (Typescript Github)[]
    - typescript components
- compile or transpile?

## Tools: 
- [TS PlayGround](https://www.typescriptlang.org/play/index.html)
- Intellisense
- typescript(npm or yarn)
- Visual Studio
- vsCode

## You can Learn from this Code
    - transpile a .ts file to .js file
    - basics
        - hello world
        - strong typing
        - syntatic sugar
        - types or optional static type annotation
        - scope variables
        - avoid type juggling
        - type coercion
    - types
    - ts added optional static type annotation to js
    - transform it in a strongly typed programming language
- functions
- objects
- ambient declarations

- interfaces
- clases: Person.ts
- enums
- modules
- generic types

- file extension .d.ts, third libs compatibility

- type coercion
- tsconfig.json

## Appendix
- how to debuggin ts file with vs Code
- configure tsconfig.json
- how to configure ts compiler with visual studio Code
    - go to "Open User Settings"
    - go to settings.json at "typescript.sdk", by default the property has the value null
    - obtain where is installed npm modules: `npm root -g`
    - append the path with /typescript/lib as SDK path
- to configure a build task
    - to configure Tasks: `Ctrl + shift + P` > Tasks > Typescript
    - to execute: `Ctrl/cmd + Shift + B`
- how to ignore js outputs from ts
