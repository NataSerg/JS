class Auto {
    constructor(brand, model, year, vinCode) {
        this.brand = brand;
        this.model = model;
        this.year = year;
        this.vinCode = vinCode;
    }

    log() {
        return `${this.brand} ${this.model} ${this.year}`;
    }

    checkVin() {
        if (this.vinCode.length === 16) {
        return true;
    } else {return false;}
    }

}

class Auto_Fuel extends Auto {
    constructor(brand, model, year, vinCode, engineCapacity, fuelConsumption) {
        super(brand, model, year, vinCode);
        this.brand = brand;
        this.model = model;
        this.year = year;
        this.vinCode = vinCode; 
        this.engineCapacity = engineCapacity;
        this.fuelConsumption = fuelConsumption;
    }
    showFuelConsumption() {
        return `${this.engineCapacity} ${this.fuelConsumption}`;
    }
}

class Auto_Electric extends Auto {
    constructor(brand, model, year, vinCode, batteryCapacity) {
        super(brand, model, year, vinCode);
        this.brand = brand;
        this.model = model;
        this.year = year;
        this.vinCode = vinCode; 
        this.batteryCapacity = batteryCapacity;
    }
    showBatteryConfig() {
        return `${this.batteryCapacity}`;
    }
}