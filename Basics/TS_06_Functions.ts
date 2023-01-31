function add( a:number, b:number ): number /**<---return type */ {
    return a + b;
}

function log( message: string ): void {
    console.log(`LOG: ${message}`);
}

function sum(...values: number[]) {
    return values.reduce((previous, current) => {
        return previous + current;
    });
}

sum(1, 2); //3
sum(1, 2, 3); //6

/**---------------------------------------------- */

type Add = (a:number, b:number) => number;

let add: Add;

add = function (a:number, b: number): number {
    return a + b;
}

add = (a, b) => a + b;