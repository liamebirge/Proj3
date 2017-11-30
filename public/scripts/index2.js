// index.js

var REST_DATA = 'api/walks';
var defaultItems = [
    
    ];
var item = 0;

function encodeUriAndQuotes(untrustedStr) {
    return encodeURI(String(untrustedStr)).replace(/'/g, '%27').replace(')', '%29');
}

function addWalk() {
    console.log("adding walk");
    //var data = document.getElementById('newcar').value;
    var firstName = document.getElementById('firstName').value,
        lastName = document.getElementById('lastName').value,
        phoneNumber = document.getElementById('phoneNumber').value,
        email = document.getElementById('email').value,
        walkSelect = document.getElementById('walkSelect').value,
        walkDate = document.getElementById('walkDate').value,
        walkTime = document.getElementById('walkTime').value,
        comments = document.getElementById('comments').value
    var data = {
        _id: "Dog Walking Client" + item,
        name_first: firstName,
        name_last: lastName,
        contactinfo_phone: phoneNumber,
        contactinfo_email: email,
        walkinfo_packages: walkSelect,
        walkinfo_date: walkDate,
        walkinfo_time: walkTime,
        comments: comments
    };
    item++;
    console.log(data);
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
    
        var table = document.getElementById('walkTable');
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


