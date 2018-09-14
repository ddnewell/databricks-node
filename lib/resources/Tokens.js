'use strict';

const routePath = '/token';

module.exports = function(apiHelper) {
  return {
    create: async function(lifetime_seconds, comment) {
      const body = {
        lifetime_seconds,
        comment
      };

      return await apiHelper.postMethod(`${routePath}/create`, body);
    },

    list: async function() {
      return await apiHelper.getMethod(`${routePath}/list`);
    },

    revoke: async function(token_id) {
      return await apiHelper.postMethod(`${routePath}/${token_id}/revoke`);
    }
  }
};