module.exports = {
    // Database name
    database_name: 'SQLSyncDemo',

    database_schema: 'dbo',

    // Realm Object Server URL
    //self-hosted: realm://10.0.0.7:9080
    //cloud: realms://small-plastic-handle.us1a.cloud.realm.io/
    //note: port only required for self-hosted
    realm_object_server_url: "realms://gebon-mt.us1.cloud.realm.io/",

    //self-hosted:http://10.0.0.7:9080
    //cloud: https://small-plastic-handle.us1a.cloud.realm.io/
    auth_server_url: "https://gebon-mt.us1.cloud.realm.io/",

    //enter as necessary
    admin_username: 'realm-admin',
    admin_password: 'p.mtro123#@',

    // The synced Realm path for the data
    target_realm_path: '/SQLDemoNew',

    // MSSQL config used for all connections - replace with your data
    sqlserver_config: {
        user:       'sa',
        password:   '1234',
        server:     'localhost\\PARTNERSQL',
        port:        1433,
        connectionTimeout: 300000,
        requestTimeout:    300000,
        pool: {
           idleTimeoutMillis: 300000
       }   
  },
}