// Define a type for the additional properties
type AdditionalProperties = {
    [key: string]: any;
};

// Define a function that stores information about a car in an object
function create_car(manufacturer: string, model: string, additionalProperties: AdditionalProperties): object {
    let car = {
        manufacturer: manufacturer,
        model: model,
        ...additionalProperties
    };
    return car;
}

// Call the function with required information and additional properties
let car1 = create_car("Toyota", "Corolla", { color: "Blue", year: 2020 });
let car2 = create_car("Tesla", "Model 3", { color: "Red", autopilot: true });
let car3 = create_car("Ford", "Mustang", { color: "Black", convertible: true });

// Print the returned objects
console.log(car1);
console.log(car2);
console.log(car3);
