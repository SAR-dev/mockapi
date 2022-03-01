var falso = require('@ngneat/falso');
var fs = require('fs');

var database = { users: [] };

for (var i = 1; i <= 100; i++) {
    database.users.push({
        userId: i,
        email: falso.randEmail(),
        status: falso.rand(["completed", "pending", "cancelled"]),
        dateOfBirth: falso.randBetweenDate({ from: new Date('1/1/1990'), to: new Date() }),
        addressId: falso.randNumber(),
        firstName: falso.randFirstName(),
        lastName: falso.randLastName(),
        firstNameKana: falso.randFirstName(),
        lastNameKana: falso.randLastName(),
        gender: falso.randGender(),
        phoneNumber: falso.randPhoneNumber({ countryCode: 'JP' }),
        prefectureCode: falso.randNumber({ min: 1, max: 47 }),
        prefectureName: falso.randCity(),
        zipCode: falso.randZipCode(),
        address1: falso.randStreetAddress(),
        address2: falso.randStreetName(),
        userImageUrl: falso.randAvatar(),
        registrationMethod: "email",
        staffLastName: falso.randFirstName(),
        staffFirstName: falso.randLastName()
    });
}

var json = JSON.stringify(database);
fs.writeFile('api/database.json', json, 'utf8', (err) => {
    if (err) { console.error(err); return; };

});