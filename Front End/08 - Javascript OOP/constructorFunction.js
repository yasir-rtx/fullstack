// nama variabel untuk constructor harus menggunakan pascal case
function Color(r, g, b) {
    this.r = r;
    this.g = g;
    this.b = b;
}

Color.prototype.rgb = function () {
    const { r, g, b } = this;
    return `rgb(${r}, ${g}, ${b})`;
};

Color.prototype.rgba = function (alpha = 1.0) {
    const { r, g, b } = this;
    return `rgb(${r}, ${g}, ${b}, ${alpha})`;
};

Color.prototype.hex = function () {
    const { r, g, b } = this;
    return "#" + ((1 << 24) + (r << 16) + (g << 8) + b).toString(16).slice(1);
};

function convertColor(r, g, b) {
    const color = {};

    color.r = r;
    color.g = g;
    color.b = b;

    color.rgb = function () {
        const { r, g, b } = this; // Agar tidak perlu menggunakan this
        return `rgb(${r}, ${g}, ${b})`;
    };

    color.hex = function () {
        const { r, g, b } = this;
        return (
            "#" + ((1 << 24) + (r << 16) + (g << 8) + b).toString(16).slice(1)
        );
    };

    return color;
}

// factory function menghasilkan objek baru setiap dipanggil
// dan juga fungsi akan tersimpan dalam objek bukan prototype
const color1 = convertColor(12, 180, 24);
const color2 = convertColor(12, 180, 24);
console.log("Sumbek objek sama : ", color1.rgb === color2.rgb);

const color3 = new Color(12, 12, 12);
const color4 = new Color(13, 13, 13);
console.log("Sumber objek sama : ", color3.rgb === color4.rgb);
