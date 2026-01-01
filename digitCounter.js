function digitcounter(num) {
    if (num == 0) {
        return 1;
    }
    else {
        let count = 0;
        num = Math.abs(num);
        while (num > 0) {
            num = Math.floor(num / 10);
            count++;
        }
        return count;
    }
}

result = digitcounter(-100);
console.log(result)