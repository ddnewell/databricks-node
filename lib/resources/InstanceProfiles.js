'use strict';

const routePath = '/instance-profiles';

module.exports = function(apiHelper) {
  return {
    add: async function(instance_profile_arn, skip_validation) {
      return await apiHelper.postMethod(`${routePath}/create`, { instance_profile_arn, skip_validation });
    },

    list: async function() {
      return await apiHelper.getMethod(`${routePath}/list`);
    },

    remove: async function(instance_profile_arn) {
      return await apiHelper.postMethod(`${routePath}/remove`, { instance_profile_arn });
    },
  }
};