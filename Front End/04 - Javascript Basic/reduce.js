// reduce => melakukan proses sebanyak elemen milik suatu array dan mengembalikan nilai single value

const GPAs = [90, 80, 65, 15, 100, 75];

const sum = GPAs.reduce((currentSum, GPA) => {
    return currentSum + GPA;
});

console.log("Nilai rata-rata = " + sum/GPAs.length);