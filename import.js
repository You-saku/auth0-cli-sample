const auth0deploy = require("auth0-deploy-cli");
const config = require('./config');

auth0deploy.deploy({
    input_file: "tenants/tenant.yaml",
    config: config.config,
})
.then(() => console.log("yey deploy was successful"))
.catch(err => console.log(`Oh no, something went wrong. Error: ${err}`));
