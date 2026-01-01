for (i = 0; i < 5; i++) {
    let row = " "
    for (let j = 0; j < 5 - i; j++) {
        row = row + (j + 1)
    }
    console.log(row)
}