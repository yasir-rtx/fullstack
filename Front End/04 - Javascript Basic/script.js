// for of ==> for array
const studentRow = [
    ['Yasir', 'Ririn', 'Rafi', 'Yuni'],
    ['Raisa', 'Cirun', 'Adek', 'Ipan'],
    ['Andin', 'Hanum', 'Ejak', 'Adil']
]

for (let row of studentRow) {
    // console.log(row);
    for (let student of row) {
        // console.log(student);
    }
}

//  for in ==> for object
const studentScore = {
    Yasir : 100,
    Ririn : 85,
    Rafi : 90,
    Yuni : 95
}

for (let student in studentScore) {
    console.log(`${student} dengan skor ${studentScore[student]}`);
}