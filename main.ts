import { Mobile } from "./Mobile";

let Nokia3210 = new Mobile("Nokia3210", "3210", "Nokia", 128, "Black", false, 1, 200);
let iPhone3G = new Mobile("iPhone3G", "iPhone", "Apple", 128, "White", false, 2, 350);
let SamsungGalaxy10 = new Mobile("Samsung Galaxy 10", "Galaxy 10", "Samsung", 256, "Grey", true, 4, 800);
console.log(Nokia3210);
console.log(iPhone3G);
console.log(SamsungGalaxy10);
Nokia3210.is5g = true;
Nokia3210.cameraNumber = 4;
console.log(Nokia3210);
console.log(iPhone3G);
console.log(SamsungGalaxy10);
