"use strict";
exports.__esModule = true;
var Mobile_1 = require("./Mobile");
var Nokia3210 = new Mobile_1.Mobile("Nokia3210", "3210", "Nokia", 128, "Black", false, 1, 200);
var iPhone3G = new Mobile_1.Mobile("iPhone3G", "iPhone", "Apple", 128, "White", false, 2, 350);
var SamsungGalaxy10 = new Mobile_1.Mobile("Samsung Galaxy 10", "Galaxy 10", "Samsung", 256, "Grey", true, 4, 800);
// Nokia3210.printAll();
// iPhone3G.printAll();
// SamsungGalaxy10.printAll();
// Nokia3210.setIs5G(true);
// Nokia3210.setCameraNumber(4);
// Nokia3210.printAll();
// iPhone3G.printAll();
// SamsungGalaxy10.printAll();
var misMobiles = [Nokia3210, iPhone3G, SamsungGalaxy10];
misMobiles.forEach(function (element) { element.printAll(); });
