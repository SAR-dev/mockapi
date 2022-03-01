var falso = require('@ngneat/falso');
var fs = require('fs');

var database = { users: [] };

for (var i = 1; i <= 100; i++) {
    database.users.push({
        id: i,
        name: falso.randFullName(),
        email: falso.randEmail(),
        username: falso.randUserName(),
        password: falso.randPassword(),
    });
}

var json = JSON.stringify(database);
fs.writeFile('api/database.json', json, 'utf8', (err) => {
    if (err) { console.error(err); return; };

});