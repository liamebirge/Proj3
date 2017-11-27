// index.js

var REST_DATA = 'api/cars';
var defaultItems = [
    
    ];
var item = 0;

function encodeUriAndQuotes(untrustedStr) {
    return encodeURI(String(untrustedStr)).replace(/'/g, '%27').replace(')', '%29');
}

function addWalk() {
    console.log("adding walk");
    //var data = document.getElementById('newcar').value;
    var data = {
        _id: "Dog Walking Client",
        name_first: document.getElementById('firstName').value,
        name_last: document.getElementById('lastName').value,
        contactinfo_phone: document.getElementById('phoneNumber').value,
        contactinfo_email: document.getElementById('email').value,
        walkinfo_packages: document.getElementById('walkSelect').value,
        walkinfo_date: document.getElementById('walkDate').value,
        walkinfo_time: document.getElementById('walkTime').value,
        comments: document.getElementById('comments').value
    };
    item++;
    xhrPost(REST_DATA, data, function(item) {
        
    }, function(err) {
        console.error(err);
    });
}



function addItem(item) {
    
        var row = document.createElement('tr');
        row.className = "tableRows";
        var id = item && item.id;
        if (id) {
            row.setAttribute('data-id', id);
        }
    

        row.innerHTML = "<td>"+item.value+"</td>";
    
        var table = document.getElementById('cars');
        table.lastChild.appendChild(row);

    }
    
function loadItems() {
    xhrGet(REST_DATA, function(data) {

        console.log(data);
        
        var receivedItems = data || [];
        var items = [];
        var i;
        // Make sure the received items have correct format
        for (i = 0; i < receivedItems.length; ++i) {
            var item = receivedItems[i];
            if (item && 'id' in item) {
                items.push(item);
            }
        }
        var hasItems = items.length;
        if (!hasItems) {
            items = defaultItems;
        }
        for (i = 0; i < items.length; ++i) {
            addItem(items[i]);
        }

    }, function(err) {
        console.error(err);
    });
}

//updateServiceInfo();
loadItems();


