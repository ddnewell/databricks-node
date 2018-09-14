'use strict';

const _ = require('lodash');
const got = require('got');

const DEFAULT_API_VERSION = '2.0';
const PACKAGE_VERSION = require('../package.json').version;

module.exports = class ApiHelper {
  /**
   * @param {string} host
   * @param {string} accessToken
   * @param {object} config
   * @param {object} config.apiVersion
   */
  constructor(host, accessToken, config) {
    this._host = host;
    this._accessToken = accessToken;

    this._config = config || {};
    this._apiVersion = _.get(this._config, 'apiVersion', DEFAULT_API_VERSION);
  }

  get host() {
    return this._host;
  }

  get accessToken() {
    return this._accessToken;
  }

  get apiVersion() {
    return this._apiVersion;
  }

  set apiVersion(value) {
    this._apiVersion = value;
  }

  get baseApiPath() {
    return `api/${this.apiVersion}`;
  }

  async getMethod(route, query) {
    try {
      const opts = _.extend(this.getBaseOptions(), {
        query
      });

      const result = await got(`${this.getBaseUrl()}${route}`, opts);
      return result.body;
    } catch (e) {
      console.error(e);
    }
  }

  async postMethod(route, body) {
    try {
      const opts = _.extend(this.getBaseOptions, {
        body: body || {}
      });

      const result = await got.post(`${this.getBaseUrl()}${route}`, opts);
      return result.body;
    } catch (e) {
      console.error(e);
    }
  }

  _getHeaders() {
    return {
      Authorization: `Bearer ${this.accessToken}`,
      'User-Agent': `databricks-node/${PACKAGE_VERSION}`
    }
  }

  getBaseOptions() {
    return {
      headers: this._getHeaders(),
      json: true
    }
  }

  getBaseUrl() {
    return `https://${this.host}/${this.baseApiPath}`;
  }
};