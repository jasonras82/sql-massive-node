let massive = require('massive');

let connectionString = 'postgres://postgres:DevMountain@localhost/sandbox';
let massiveInstance = massive.connectSync({connectionString});
module.exports = massiveInstance;
