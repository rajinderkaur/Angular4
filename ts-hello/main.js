function log(message) {
    console.log(message);
}
var message = "Hello World";
log(message);
var count;
var c = [1, 2, 3];
var e = [2, 3, "tes", null];
/*enum concept*/
var colorRed = 0;
var colorGreen = 1;
var colorBlue = 2;
var Color;
(function (Color) {
    Color[Color["red"] = 0] = "red";
    Color[Color["green"] = 1] = "green";
    Color[Color["blue"] = 2] = "blue";
})(Color || (Color = {}));
;
var backgroundColor = Color.blue;
/*type assertions*/
var message1 = "abc";
message1.toUpperCase();
console.log(message1);
// if u dnt initialize the let then its type is any by deafult, then u need to do the following to work with string function
var message2;
message2 = "cde";
var result = message2.toUpperCase();
// other way
var result1 = message2.toUpperCase();
/*arrow function*/
var log1 = function (message) {
    console.log(message);
};
// change to this lambda
var log2 = function (message) { return console.log(message); };
var drawPoint = function (point) {
};
/*class*/
var Point = /** @class */ (function () {
    function Point() {
    }
    Point.prototype.draw = function () {
        console.log("X: ******************" + this.x);
    };
    Point.prototype.getDistance = function (another) { };
    return Point;
}());
/*create obkect of class Point*/
var point = new Point();
point.x = 12;
point.draw();
