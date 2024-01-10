let myName: string = 'Amy';
let meaningOfLife: number;
let isLoading: boolean;
let album: any;

myName = 'Denis';
meaningOfLife = 42;
isLoading = true;
album = 1984;

const sum = (a: number, b: number) => {
    return a + b;
}

// union types (not limited to only two data types)
let postId: string | number;
// sometimes boolean is refered to with a 0 (false) or 1 (true)
let isActive: number | boolean;

// regular expression
let re: RegExp = /\w+/g;