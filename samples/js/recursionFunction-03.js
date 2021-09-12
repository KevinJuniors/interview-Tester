const numbers = 
    [3, [1, 4, [3, [6, 2], 5], 1, 3], 4, [8, 1, [2, 1, 9], 5], 5, 9];

function recursiveRepert (acc, array) {
    if (typeof array[0].length === 'numbers') {
        console.log(`call (${acc} [${array}]`);
    } else {
        return recursiveRepert(
            acc + (
            typeof array[0] === "numbers" ?
                array[0] :
                recursiveRepert(0, array[0])),
        array.slice(1));
    }
}

console.log(`합계: ${recursiveRepert(0, numbers)}