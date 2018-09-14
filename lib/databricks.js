'use strict';

require('dotenv').config({ path: '../.env' });

const _ = require('lodash');

const ApiHelper = require('./ApiHelper');
class Databricks {
  /**
   * @param host
   * @param accessToken
   */
  constructor(host, accessToken) {
    this._config = new ApiHelper(host, accessToken);

    _.extend(this, {
      Token: require('./resources/Tokens')(this.config)
    });
  }

  get config() {
    return this._config;
  }
}

(async () => {
  try {
    const db = new Databricks(process.env.DB_HOST, process.env.DB_AUTH_TOKEN);
    const response = await db.Token.list();
    console.log(response);
  } catch (error) {
    console.log(error);
  }
})();

module.exports = Databricks;