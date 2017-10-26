services.factory("DataService", DataService);

function DataService() {
    var items = [
        {   "Number": "1",
            "Product": "TB - Monthly",
            "PaymentTaken": "01/04/2012 ",
            "Status": "Default "
        },
        {   "Number": "1",
            "Product": "TB - Monthly",
            "PaymentTaken": "01/04/2012 ",
            "Status": "Approved"
        },
        {   "Number": "2",
            "Product": "TB - Monthly",
            "PaymentTaken": "02/04/2012 ",
            "Status": "Declined"
        },
        {   "Number": "3",
            "Product": "TB - Monthly",
            "PaymentTaken": "03/04/2012 ",
            "Status": "Pending"
        },
        {   "Number": "4",
            "Product": "TB - Monthly",
            "PaymentTaken": "04/04/2012 ",
            "Status": "Declined"
        }
    ];

    return {
        getItems:getItems
    };

    function getItems() {
        return items;
    };
};

