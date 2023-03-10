require('dotenv').config();

const config = {
    "AUTH0_DOMAIN" : process.env.AUTH0_DOMAIN,
    "AUTH0_CLIENT_SECRET" : process.env.AUTH0_CLIENT_SECRET,
    "AUTH0_CLIENT_ID" : process.env.AUTH0_CLIENT_ID
};

exports.config = config;