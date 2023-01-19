const auth0deploy = require("auth0-deploy-cli");
const config = require('./config');

auth0deploy.dump({
    output_folder: './tenants',
    config: config.config,
    format: 'yaml'
})
.then(() => console.log("yey deploy was successful"))
.catch((err) => console.log(`Oh no, something went wrong. Error: ${err}`));
