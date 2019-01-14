const Realm = require('realm');
const fs = require('fs');
const path = require('path');
console.log('0000');
const SQLServerRealmLoader = require('realm-mssql-adapters').SQLServerRealmLoader;
console.log('0001nn');
const Config = require('./config');

const Models = require('./realmmodels');

if (process.env.NODE_ENV !== 'production') {
    require('source-map-support').install();
}

// Print out uncaught exceptions
process.on('uncaughtException', (err) => console.log(err));

async function main() {
    //login as an admin user 
    var admin_user = await Realm.Sync.User.login(Config.auth_server_url, Config.admin_username, Config.admin_password)

    const conf = {
        // Realm configuration parameters for connecting to ROS
        realmConfig: {
            server: Config.realm_object_server_url, // or specify your realm-object-server location
            user: admin_user,
        },
        dbName: Config.database_name,
        dbSchema: Config.database_schema,
        // SQL Server configuration and database name
        sqlserverConfig: Config.sqlserver_config,

        // Set to true to create the SQL Server DB if not already created
        createSQLServerDB: false,
        initializeRealmFromSQLServer: false,
        // Enable and set this function if you'd like to speed up your loader 
        //loaderSQLBatchSize: 1000,

        // Set to true to indicate SQL Server tables should be created and
        // properties added to these tables based on schema additions
        // made in Realm. If set to false any desired changes to the
        // SQL Server schema will need to be made external to the adapter.
        applyRealmSchemaChangesToSQLServer: false,

        // Only match a single Realm called 'testRealm'
        //realmRegex: `/*`+Config.database_name,
        realmRegex: Config.target_realm_path,

        // Specify the Realm name all SQL Server changes should be applied to
        mapSQLServerChangeToRealmPath: Config.target_realm_path,

        // Specify the Realm objects we want to replicate in SQL Server.
        // Any types or properties not specified here will not be replicated
        schema: Models,

        printCommandsToConsole: true,

    }
    var loader = new SQLServerRealmLoader(conf);
    loader.init().catch(console.error)
}

main();