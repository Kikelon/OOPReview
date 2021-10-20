"use strict";
exports.__esModule = true;
exports.Mobile = void 0;
var Mobile = /** @class */ (function () {
    //  Constrructor
    function Mobile(name, model, tradeMark, sdSize, color, is5G, cameraNumber, price) {
        this.name = name;
        this.model = model;
        this.tradeMark = tradeMark;
        this.sdSize = sdSize;
        this.color = color;
        this.is5G = is5G;
        this.cameraNumber = cameraNumber;
        this.price = price;
    }
    ;
    // Métodos
    Mobile.prototype.setName = function (name) {
        this.name = name;
    };
    ;
    Mobile.prototype.getName = function () {
        return this.name;
    };
    ;
    Mobile.prototype.setModel = function (model) {
        this.model = model;
    };
    ;
    Mobile.prototype.getModel = function () {
        return this.model;
    };
    ;
    Mobile.prototype.setTradeMark = function (tradeMark) {
        this.tradeMark = tradeMark;
    };
    ;
    Mobile.prototype.getTradeMark = function () {
        return this.tradeMark;
    };
    ;
    Mobile.prototype.setSdSize = function (sdSize) {
        this.sdSize = sdSize;
    };
    ;
    Mobile.prototype.getSdSize = function () {
        return this.sdSize;
    };
    ;
    Mobile.prototype.setColor = function (color) {
        this.color = color;
    };
    ;
    Mobile.prototype.getColor = function () {
        return this.color;
    };
    ;
    Mobile.prototype.setIs5G = function (is5G) {
        this.is5G = is5G;
    };
    Mobile.prototype.setCameraNumber = function (cameraNumber) {
        this.cameraNumber = cameraNumber;
    };
    ;
    Mobile.prototype.getCameraNumber = function () {
        return this.cameraNumber;
    };
    Mobile.prototype.setPrice = function (price) {
        this.price = price;
    };
    Mobile.prototype.getPrice = function () {
        return this.price;
    };
    Mobile.prototype.printAll = function () {
        console.log("The characteristics of the mobile", this.name, "are:\n\t- Name:", this.name, "\n\t- Model:", this.model, "\n\t- TradeMark:", this.tradeMark, "\n\t- SD Size(GB):", this.sdSize, "\n\t- Color:", this.color, "\n\t- Is 5G?:", this.is5G, "\n\t- Number of Cameras:", this.cameraNumber, "\n");
    };
    return Mobile;
}());
exports.Mobile = Mobile;
;
