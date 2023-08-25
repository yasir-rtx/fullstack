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

async function changeColor() {
    await delayedColorChange('red', 1000);
    await delayedColorChange('orange', 1000);
    await delayedColorChange('yellow', 1000);
    await delayedColorChange('green', 1000);
    await delayedColorChange('blue', 1000);
    await delayedColorChange('purple', 1000);
    return 'All Done';
}

// changeColor().then((res) => alert(res));

async function printRainbow() {
    await changeColor();
    console.log('All Done');
}

printRainbow();