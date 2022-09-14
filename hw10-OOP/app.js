function Auto(brand, model, year, vinCode) {
    this.brand = brand;
    this.model = model;
    this.year = year;
    this.vinCode = vinCode;
}

Auto.prototype.log = function () {
    return `${this.brand} ${this.model} ${this.year}`;
}

Auto.prototype.checkVin = function () {
    if (this.vinCode.length === 16) {
        return true;
    } else {
        return false;
    }
}

function Auto_Fuel(brand, model, year, vinCode, engineCapacity, fuelConsumption) {
    this.brand = brand;
    this.model = model;
    this.year = year;
    this.vinCode = vinCode; 
    this.engineCapacity = engineCapacity;
    this.fuelConsumption = fuelConsumption;
}

Auto_Fuel.prototype = Object.create(Auto.prototype);

Auto_Fuel.prototype.showFuelConsumption = function () {
    return `${this.engineCapacity} ${this.fuelConsumption}`;
}

function Auto_Electric(brand, model, year, vinCode, batteryCapacity) {
    this.brand = brand;
    this.model = model;
    this.year = year;
    this.vinCode = vinCode;
    this.batteryCapacity = batteryCapacity;
}

Auto_Electric.prototype = Object.create(Auto.prototype);

Auto_Electric.prototype.showBatteryConfig = function () {
    return `${this.batteryCapacity}`;
}

