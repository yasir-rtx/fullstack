// Define Promise
// new Promise((resolve, reject) => {
// 	resolve(() => {}); // Jika proses berhasil
// 	reject(() => {}); // Jika proses gagal
// });

// const newPromise = () => {
// 	return new Promise((resolve, reject) => {
// 		resolve(() => {
// 			console.log('request ber`hasil');
// 		});
// 		reject(() => {
// 			console.log('request gagal');
// 		})
// 	});
// };

// Studi kasus mengganti background
const delayedColorChange = (newColor, delay) => {
	return new Promise((resolve, reject) => {
		setTimeout(() => {
			document.body.style.backgroundColor = newColor;
			resolve(
				console.log(`Change background color to : ${newColor}`)
			);
		}, delay);
	});
};

delayedColorChange('red', 1000)
	.then(() => delayedColorChange('green', 1000))
	.then(() => delayedColorChange('blue', 1000))
	.then(() => delayedColorChange('yellow', 1000));