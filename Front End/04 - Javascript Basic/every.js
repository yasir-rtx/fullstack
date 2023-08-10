// every => mengembalikan nilai boolean true pada saat seluruh nilai pada array memiliki kriteria yang sama

const GPAs = [90, 80, 65, 15, 100, 75];

const isGraduate1 = GPAs.every(GPA => GPA >=75);

// some => mengembalikan nilai true jika salah satu nilai pada array memenuhi kriteria
const isGraduate2 = GPAs.some(GPA => GPA === 15);