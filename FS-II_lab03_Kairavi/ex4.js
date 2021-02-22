function Car(obj) {
    this.brand = obj.brand;
    this.model = obj.model;
    this.getModel = function() {
        console.log("The Model is:", this.model);
    };
    this.getBrand = function() {
        console.log("The Manufacturer is:", this.brand);
    };
}

var tesla = new Car({ brand: 'Tesla', model: 'S' });
tesla.getBrand();
tesla.getModel();