
const readlineSync = require('readline-sync');

let names = [];
const options = ['Add', 'Delete', 'Display', 'Exit'];

while (true) {
    const index = readlineSync.keyInSelect(options, 'Choose an action:');
    
    switch (index) {
        case 0: // Add
            const nameToAdd = readlineSync.question('Enter name to add: ');
            names.push(nameToAdd);
            break;

        case 1: // Delete
            const nameToDelete = readlineSync.question('Enter name to delete: ');
            names = names.filter(name => name !== nameToDelete);
            break;

        case 2: // Display
            console.log('Names:');
            names.forEach(name => console.log(name));
            break;

        case 3: // Exit
            console.log('Exiting...');
            process.exit(0);
            break;

        default:
            break;
    }
}
