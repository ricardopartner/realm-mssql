const Customer = {
    name: 'Customer',
    primaryKey: 'ID',
    properties: {
        ID: 'int',
        Company: 'string',
        Estimates: { type: 'list', objectType: 'Estimate', watch_table: true }, 
    }
}

const Address = {
    name: 'Address',
    primaryKey: 'ID',
    properties: {
        ID: 'int',
        ZipCode: 'string',
    },
}

const Estimate = {
    name: 'Estimate',
    primaryKey: 'ID',
    properties: {
        ID: 'int',
        customerid: { type: 'linkingObjects', objectType: 'Customer', property: 'Estimates' },
        Something: 'string',
    }
}


module.exports = [
    Customer,  
    Address, 
    Estimate
];