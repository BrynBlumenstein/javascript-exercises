const findTheOldest = function(people) {
    const CURRENT_YEAR = 2024;
    let maxAge = 0;
    let oldest;

    people.forEach(person => {
        if (person.hasOwnProperty('yearOfDeath')) {
            person.age = person.yearOfDeath - person.yearOfBirth;
        } else {
            person.age = CURRENT_YEAR - person.yearOfBirth;
        }
        
        if (person.age > maxAge) {
            maxAge = person.age;
            oldest = person;
        }
    });

    return oldest;
};

// Do not edit below this line
module.exports = findTheOldest;
