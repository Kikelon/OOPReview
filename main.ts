import { Mobile } from "./Mobile";

let Nokia3210 = new Mobile("Nokia3210", "3210", "Nokia", 128, "Black", false, 1, 200);
let iPhone3G = new Mobile("iPhone3G", "iPhone", "Apple", 128, "White", false, 2, 350);
let SamsungGalaxy10 = new Mobile("Samsung Galaxy 10", "Galaxy 10", "Samsung", 256, "Grey", true, 4, 800);
// Nokia3210.printAll();
// iPhone3G.printAll();
// SamsungGalaxy10.printAll();
// Nokia3210.setIs5G(true);
// Nokia3210.setCameraNumber(4);
// Nokia3210.printAll();
// iPhone3G.printAll();
// SamsungGalaxy10.printAll();

let misMobiles : Mobile[] = [Nokia3210, iPhone3G, SamsungGalaxy10];
misMobiles.forEach(element => {element.printAll()});
