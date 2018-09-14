'use strict';

const routePath = '/secrets';

module.exports = function(apiHelper) {
  return {
    listScopes: async function() {
      return await apiHelper.getMethod(`${routePath}/scopes/list`);
    },

    createScope: async function(scope, initial_manage_principal) {
      const body = {
        scope,
        initial_manage_principal
      };

      return await apiHelper.postMethod(`${routePath}/scopes/create`, body);
    },

    deleteScope: async function(scope) {
      return await apiHelper.postMethod(`${routePath}/scopes/create`, { scope });
    },

    put: async function(scope, key, string_value) {
      const body = {
        scope,
        key,
        string_value
      };

      return await apiHelper.postMethod(`${routePath}/put`, body);
    },

    delete: async function(scope, key) {
      const body = {
        scope,
        key
      };

      return await apiHelper.postMethod(`${routePath}/delete`, body);
    },

    list: async function() {
      return await apiHelper.getMethod(`${routePath}/list`);
    },

    putSecretAcl: async function(scope, principal, permission) {
      const body = {
        scope,
        principal,
        permission
      };

      return await apiHelper.postMethod(`${routePath}/acls/put`, body);
    },

    deleteSecretAcl: async function(scope, principal) {
      const body = {
        scope,
        principal
      };

      return await apiHelper.postMethod(`${routePath}/acls/delete`, body);
    },

    getSecretAcl: async function(principal, permission) {
      const body = {
        principal,
        permission
      };

      return await apiHelper.getMethod(`${routePath}/acls/get`, body);
    },

    listSecretAcl: async function() {
      return await apiHelper.getMethod(`${routePath}/acls/list`);
    },
  }
};