# Databricks Node.js Library

[![npm](https://img.shields.io/npm/v/:package.svg)](https://www.npmjs.com/package/databricks-node)

This is a simple API wrapper to provide access to the databricks API.

## Documentation

[Databricks API Documentation](https://docs.databricks.com/api/latest/index.html#)

## Installation

Install the package:

    npm install databricks-node --save

## Usage

``` js

const Databricks = require('databricks-node');

const HOST = '12345-abcdef-678.cloud.databricks.com';
const AUTH_TOKEN = '123456789abcdefghi';

const databricks = new Databricks(HOST, AUTH_TOKEN);

(async () => {
    const clusters = await databricks.Clusters.list();
    console.log(clusters);
})();

```

## TODO

* Jobs routes
* DBFS routes
* SCIM routes (when implemented)

## Methods

### Clusters
##### create
    Clusters.create(node_type_id, spark_version, size, optionalParams)
##### edit
    Clusters.edit(cluster_id, clusterParams)
##### get
    Clusters.get(cluster_id)
##### list
    Clusters.list()
##### listZones
    Clusters.listZones()
##### listNodeTypes
    Clusters.listNodeTypes()
##### start
    Clusters.start(cluster_id)
##### restart
    Clusters.restart(cluster_id)
##### resize
    Clusters.resize(cluster_id, num_workers)
##### delete
    Clusters.delete(cluster_id)
##### permanentDelete
    Clusters.permanentDelete(cluster_id)
##### pin
    Clusters.pin(cluster_id)
##### unpin
    Clusters.unpin(cluster_id)
##### sparkVersions
    Clusters.sparkVersions()
##### events
    Clusters.events(cluster_id, start_time)

### Groups
##### addMember
    Groups.addMember(user_name, parent_name)
##### addSubGroup
    Groups.addSubGroup(group_name, parent_name)
##### create
    Groups.create(group_name)
##### delete
    Groups.delete(group_name)
##### list
    Groups.list()
##### listMembers
    Groups.listMembers(group_name)
##### listMemberParents
    Groups.listMemberParents(user_name)
##### listGroupParents
    Groups.listGroupParents(group_name)
##### removeSubGroupFromGroup
    Groups.removeSubGroupFromGroup(group_name, parent_name)
##### removeUserFromGroup
    Groups.removeUserFromGroup(user_name, parent_name)

### Instance Profiles
##### add
    InstanceProfiles.add(instance_profile_arn, skip_validation)
##### list
    InstanceProfiles.list()
##### remove
    InstanceProfiles.remove(instance_profile_arn)

### Libraries
##### create
    Libraries.create(lifetime_seconds, comment)
##### allClusterStatuses
    Libraries.allClusterStatuses()
##### clusterStatus
    Libraries.clusterStatus()
##### install
    Libraries.install(cluster_id, libraries)
##### uninstall
    Libraries.uninstall(cluster_id, libraries)

### Secrets
##### listScopes
    Secrets.listScopes()
##### createScope
    Secrets.createScope(scope, initial_manage_principal)
##### deleteScope
    Secrets.deleteScope(scope)
##### put
    Secrets.put(scope, key, string_value)
##### delete
    Secrets.delete(scope, key)
##### list
    Secrets.list()
##### putSecretAcl
    Secrets.putSecretAcl(scope, principal, permission)
##### deleteSecretAcl
    Secrets.deleteSecretAcl(scope, principal)
##### getSecretAcl
    Secrets.getSecretAcl(principal, permission)
##### listSecretAcl
    Secrets.listSecretAcl()

### Tokens
##### create
    Tokens.create(lifetime_seconds, comment)
##### list
    Tokens.list()
##### revoke
    Tokens.revoke(token_id)

### Workspaces
##### export
    Workspaces.export(path, format, direct_download)
##### import
    Workspaces.import(path, format, language, content, overwrite)
##### delete
    Workspaces.delete(path, recursive)
##### mkdirs
    Workspaces.mkdirs(path)
##### list
    Workspaces.list(path)
##### getStatus
    Workspaces.getStatus(path)