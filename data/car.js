class Car {
  #brand;
  #model;
  speed = 0;
  isTrunkOpen = false;

  constructor(carDetails) { 
    this.#brand = carDetails.brand;
    this.#model = carDetails.model;
  }

  displayInfo() {
    this.isTrunkOpen? 'open': 'closed';
    return console.log(`${this.#brand} ${this.#model}, speed: ${this.speed} Km/h,  Trunk: ${this.isTrunkOpen}`); 
  }

  go() {
    this.speed += 5;
    if(!this.isTrunkOpen){
      this.speed += 5;
    }

    if(this.speed > 200) {
      this.speed = 200;
    };
  };

  brake() {
    this.speed -= 5;

    if(this.speed < 0) {
      this.speed = 0;
    }
  }

  openTrunk() {
    if(this.speed === 0) {
      this.isTrunkOpen = true;
    }
  }

  closeTrunk() {
    if(this.speed > 0) {
      this.isTrunkOpen = false;
    }
  }
}

class RaceCar extends Car{
  acceleration;

  constructor(carDetails) {
    super(carDetails);
    this.acceleration = carDetails.acceleration;
  }

  go() {
    this.speed += this.acceleration;

    if(this.speed > 300) {
      this.speed = 300;
    };
  };

  openTrunk() {
    console.log('this car does not have truck');
  }

  closeTrunk() {
   console.log('this car does not have truck');
  }
}

const car1 = new Car({
  brand: 'Toyota',
  model: 'Corolla'
});

const car2 = new Car({
  brand: 'Tesla',
  model: 'Model 3' 
});

const raceCar = new RaceCar({
  brand: 'McLaren',
  model: 'F1',
  acceleration: 20
});

console.log(car1);
console.log(car2);
console.log(raceCar);

car1.openTrunk();
car1.displayInfo()
car1.go();

car2.displayInfo();
car2.go();
car2.displayInfo();
car2.brake();
car2.brake();
car2.displayInfo();

car2.openTrunk();
car2.go();
car2.displayInfo();

raceCar.go();
raceCar.go();
raceCar.go();
raceCar.displayInfo();
raceCar.openTrunk();
raceCar.displayInfo();
raceCar.brake();
raceCar.displayInfo();
