let arr: number[] = [0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15];
let iterationCount: number = 0;

function binarySearch(arr: number[], item: number) {
    let start: number = 0;
    let end: number = arr.length;
    let middle: number;
    let found: boolean = false;
    let position: number = -1;
    
    while (found == false && start <= end) {
        middle = Math.floor((start + end) / 2);
        if (arr[middle] === item) {
            found = true;
            found = true;
            position = middle;
            return position;
        }
        if (item < arr[middle]) {
            end = middle - 1;
        }
        else {
            start = middle + 1;
        }
    }
    return position;
}