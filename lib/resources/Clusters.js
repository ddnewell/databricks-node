'use strict';

const _ = require('lodash');

const routePath = '/clusters';

function getOptionalCreateAndEditBodyParams(opts) {
  const optionalParams = [
    'node_type_id',
    'spark_version',
    'autoscale',
    'num_workers',
    'cluster_name',
    'spark_conf',
    'aws_attributes',
    'driver_node_type_id',
    'ssh_public_keys',
    'custom_tags',
    'cluster_log_conf',
    'init_scripts',
    'spark_env_vars',
    'autotermination_minutes',
    'enable_elastic_disk'
  ];

  let bodyParams = {};
  _.each(optionalParams, param => {
    const value = _.get(opts, param);

    if (value) {
      bodyParams[param] = value;
    }
  });
}

module.exports = function(apiHelper) {
  return {
    /**
     * Creates a new Databricks Cluster
     * @param {string} node_type_id - This field encodes, through a single value, the resources available to each of the Spark nodes in this cluster.
     * @param {string} spark_version - The Spark version of the cluster.
     * @param {object|number} size - Either an autoscale object { min_workers: 1, max_workers: 0} or a static number of workers
     * @param {object} optionalParams - Optional Params (see: https://docs.databricks.com/api/latest/clusters.html#create)
     */
    create: async function(node_type_id, spark_version, size, optionalParams) {
      const requiredParams = {
        node_type_id,
        spark_version
      };

      if (_.isObject(size)) {
        requiredParams.autoscale = size;
      } else {
        requiredParams.num_workers = size;
      }

      const body = _.extend(requiredParams, getOptionalCreateAndEditBodyParams(optionalParams));

      return await apiHelper.postMethod(`${routePath}/create`, body);
    },

    edit: async function(cluster_id, clusterParams) {
      const body = getOptionalCreateAndEditBodyParams(clusterParams);

      return await apiHelper.postMethod(`${routePath}/create`, body);
    },

    get: async function(cluster_id) {
      return await apiHelper.getMethod(`${routePath}/get`, { cluster_id });
    },

    list: async function() {
      return await apiHelper.getMethod(`${routePath}/list`);
    },

    listZones: async function() {
      return await apiHelper.getMethod(`${routePath}/list-zones`);
    },

    listNodeTypes: async function() {
      return await apiHelper.getMethod(`${routePath}/list-node-types`);
    },

    start: async function(cluster_id) {
      return await apiHelper.postMethod(`${routePath}/start`, { cluster_id });
    },

    restart: async function(cluster_id) {
      return await apiHelper.postMethod(`${routePath}/restart`, { cluster_id });
    },

    resize: async function(cluster_id, num_workers) {
      return await apiHelper.postMethod(`${routePath}/resize`, { cluster_id, num_workers });
    },

    delete: async function(cluster_id) {
      return await apiHelper.postMethod(`${routePath}/delete`, { cluster_id });
    },

    permanentDelete: async function(cluster_id) {
      return await apiHelper.postMethod(`${routePath}/permanent-delete`, { cluster_id });
    },

    pin: async function(cluster_id) {
      return await apiHelper.postMethod(`${routePath}/pin`, { cluster_id });
    },

    unpin: async function(cluster_id) {
      return await apiHelper.postMethod(`${routePath}/unpin`, { cluster_id });
    },

    sparkVersions: async function() {
      return await apiHelper.getMethod(`${routePath}/spark-versions`);
    },

    events: async function(cluster_id, start_time) {
      const body = {
        cluster_id
      };

      if (start_time) {
        body.start_time = start_time;
      }

      return await apiHelper.postMethod(`${routePath}/events`, body);
    },
  }
};