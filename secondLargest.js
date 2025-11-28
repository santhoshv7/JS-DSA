function secondLargest(arr) {

    if (arr.length < 2) {
        return null;
    }
    let largest = -Infinity;
    let secondLargest = -Infinity;

    for (let i = 0; i < arr.length; i++) {
        if (arr[i] > largest) {
            secondLargest = largest;
            largest = arr[i];
        }
        else if (arr[i] > secondLargest && arr[i] != largest) {
            secondLargest = arr[i];
        }
    }
    return secondLargest;

}

let arr = [17, 18, 18, 15];
let output = secondLargest(arr);
console.log(output);