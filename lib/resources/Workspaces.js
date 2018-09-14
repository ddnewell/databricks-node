'use strict';

const routePath = '/workspace';

module.exports = function(apiHelper) {
  return {
    export: async function(path, format, direct_download) {
      const params = {
        path,
        format,
        direct_download
      };

      return await apiHelper.getMethod(`${routePath}/export`, params);
    },

    import: async function(path, format, language, content, overwrite) {
      const body = {
        path,
        format,
        language,
        content,
        overwrite
      };

      return await apiHelper.postMethod(`${routePath}/import`, body);
    },

    delete: async function(path, recursive) {
      const body = {
        path,
        recursive
      };

      return await apiHelper.postMethod(`${routePath}/delete`, body);
    },

    mkdirs: async function(path) {
      return await apiHelper.postMethod(`${routePath}/mkdirs`, { path });
    },

    list: async function(path) {
      return await apiHelper.getMethod(`${routePath}/list`, { path });
    },

    getStatus: async function(path) {
      return await apiHelper.getMethod(`${routePath}/get-status`, { path });
    },
  }
};