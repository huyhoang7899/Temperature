
let Temperature = function (c) {
    this.c = c;
    this.convertToF = function () {
        return this.c*1.8+32;
    }
    this.convertToK = function () {
        return this.c + 273.15;
    }
};