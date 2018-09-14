'use strict';

const routePath = '/libraries';

module.exports = function(apiHelper) {
  return {
    create: async function(lifetime_seconds, comment) {
      const body = {
        lifetime_seconds,
        comment
      };

      return await apiHelper.postMethod(`${routePath}/create`, body);
    },

    allClusterStatuses: async function() {
      return await apiHelper.getMethod(`${routePath}/all-cluster-statuses`);
    },

    clusterStatus: async function() {
      return await apiHelper.getMethod(`${routePath}/cluster-statuses`);
    },

    /**
     * Sets libraries to be installed on a cluster
     * @param {string} cluster_id
     * @param {array} libraries - An array of library objects (see: https://docs.databricks.com/api/latest/libraries.html#managedlibrarieslibrary)
     * @return {Promise<*>}
     */
    install: async function(cluster_id, libraries) {
      return await apiHelper.postMethod(`${routePath}/install`, { cluster_id, libraries });
    },

    /**
     * Sets libraries to be uninstalled on a cluster
     * @param {string} cluster_id
     * @param {array} libraries - An array of library objects (see: https://docs.databricks.com/api/latest/libraries.html#managedlibrarieslibrary)
     * @return {Promise<*>}
     */
    uninstall: async function(cluster_id, libraries) {
      return await apiHelper.postMethod(`${routePath}/uninstall`, { cluster_id, libraries });
    }
  }
};