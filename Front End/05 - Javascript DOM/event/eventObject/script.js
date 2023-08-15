// document.querySelector('button').addEventListener('click', (e) => {
//     console.log(e);
//     console.log(`Koordinat X : ${e.x}`);
//     console.log(`Koordinat Y : ${e.y}`);
// });

// document.querySelector('input').addEventListener('keydown', (e) => {
//     console.log(e.key);
//     console.log(e.code);
// });

document.querySelector('body').addEventListener('keydown', (e) => {
    switch (e.code) {
        case 'ArrowUp':
            console.log("Player go Up");
            break;
        case 'ArrowDown':
            console.log("Player go Down");
            break;
        case 'ArrowLeft':
            console.log("Player go Left");
            break;
        case 'ArrowRight':
            console.log("Player go Right");
            break;
        default:
            console.log("Ignored");
            break;
    }
});