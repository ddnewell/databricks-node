'use strict';

const routePath = '/groups';

module.exports = function(apiHelper) {
  return {
    addMember: async function(user_name, parent_name) {
      const body = {
        user_name,
        parent_name
      };

      return await apiHelper.postMethod(`${routePath}/add-member`, body);
    },

    addSubGroup: async function(group_name, parent_name) {
      const body = {
        group_name,
        parent_name
      };

      return await apiHelper.postMethod(`${routePath}/add-member`, body);
    },

    create: async function(group_name) {
      return await apiHelper.postMethod(`${routePath}/create`, { group_name });
    },

    delete: async function(group_name) {
      return await apiHelper.postMethod(`${routePath}/delete`, { group_name });
    },

    list: async function() {
      return await apiHelper.getMethod(`${routePath}/list`);
    },

    listMembers: async function(group_name) {
      return await apiHelper.getMethod(`${routePath}/list-members`, { group_name });
    },

    listMemberParents: async function(user_name) {
      return await apiHelper.getMethod(`${routePath}/list-parents`, { user_name });
    },

    listGroupParents: async function(group_name) {
      return await apiHelper.getMethod(`${routePath}/list-parents`, { group_name });
    },

    removeSubGroupFromGroup: async function(group_name, parent_name) {
      const body = {
        group_name,
        parent_name
      };

      return await apiHelper.postMethod(`${routePath}/remove-member`, body);
    },

    removeUserFromGroup: async function(user_name, parent_name) {
      const body = {
        user_name,
        parent_name
      };

      return await apiHelper.postMethod(`${routePath}/remove-member`, body);
    },
  }
};