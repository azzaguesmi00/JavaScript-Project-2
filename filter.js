function filterArray(arr) {
    let Array2 = [];


    for (let i = 0; i < arr.length; i++) {
        if ((arr[i] > 12 )) {
            Array2[Array2.length] = arr[i];
        }
    }

    return Array2;
}
