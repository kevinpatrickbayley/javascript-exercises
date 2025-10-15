const findTheOldest = function(people) {
    const now = new Date().getFullYear();
    const ages = people.map(p => (p.yearOfDeath ?? now) - p.yearOfBirth);
    const maxValue = Math.max(...ages);
    const indexOfMaxValue = ages.indexOf(maxValue);
    return people[indexOfMaxValue];
};

// Do not edit below this line
module.exports = findTheOldest;
