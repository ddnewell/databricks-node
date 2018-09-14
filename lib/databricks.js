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
      Tokens: require('./resources/Tokens')(this.config),
      Clusters: require('./resources/Clusters')(this.config),
      InstanceProfiles: require('./resources/InstanceProfiles')(this.config),
      Libraries: require('./resources/Libraries')(this.config),
      // DBFS
      Groups: require('./resources/Groups')(this.config),
      // Jobs
      Secrets: require('./resources/Secrets')(this.config),
      Workspace: require('./resources/Workspaces')(this.config)
    });
  }

  get config() {
    return this._config;
  }
}

(async () => {
  try {
    const db = new Databricks(process.env.DB_HOST, process.env.DB_AUTH_TOKEN);
    const response = await db.Clusters.list();
    console.log(response);
  } catch (error) {
    console.log(error);
  }
})();

module.exports = Databricks;