'use strict';

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
      // Jobs
      Groups: require('./resources/Groups')(this.config),
      Secrets: require('./resources/Secrets')(this.config),
      Workspaces: require('./resources/Workspaces')(this.config)
    });
  }

  get config() {
    return this._config;
  }
}

module.exports = Databricks;