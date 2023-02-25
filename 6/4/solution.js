function f(){
    let json = {
        "orderID": 12345,
        "shopperName": "Ваня Иванов",
        "shopperEmail": "ivanov@example.com",
        "contents": [
            {
                "productID": 34,
                "productName": "Супер товар",
                "quantity": 1
            }, {
                "productID": 56,
                "productName": "Чудо товар",
                "quantity": 3
            }],
        "orderCompleted": true,
        "JSType":"Clear"
    };
    let jsonString = JSON.stringify(json);
    let cart = JSON.parse(jsonString);
    alert(cart.shopperEmail);
    alert(cart.contents[1].productName);
}
function s(){
    var jsobj = {plugin: 'jquery-json', version: 2.3};

    var encoded = $.toJSON( jsobj );
// вjs-objбудетприсвоено '{"plugin":"jquery-json","version":2.3}'
    var name = $.evalJSON( encoded ).plugin;
// в name будет присвоено "jquery-json"
    var version = $.evalJSON(encoded).version;
// в version будет присвоено 2.3
    alert(name);
    alert(version);
}
