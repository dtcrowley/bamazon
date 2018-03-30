var mysql = require("mysql");
var inquirer = require("inquirer");

var connection = mysql.createConnection({
    host: "localhost",
    port: 3306,
    user: "root",
    password: "",
    database: "bamazonDB"
});

connection.connect(function(err){
    if (err) throw err;
    display();
});

function display(){
    connection.query("SELECT * FROM products", function(err, results) {
        for (var i = 0; i < results.length; i++) {
          console.log("Product ID: " + results[i].item_id + "\n" +  
          "Product Name: " + results[i].product_name + "\n" + "Department Name: " + 
          results[i].department_name + "\n" + "Unit Price: $" + results[i].price +
        "\n" + "Current Inventory: " + results[i].stock_quantity + "\n" + "-----------------------");
        }
    purchaseItem();   
    });   
}

function purchaseItem(){
    inquirer.prompt([
        {
            type: "input",
            name: "itemID",
            message: "What is the item ID of the product you would like to purchase?\n",
            validate: function(value) {
                if (!isNaN(value) && value < 11) {
                    return true;
                }
                else {
                    console.log("\nPlease choose a valid item ID!");
                }
            }
        },
        {
            type: "number",
            name: "quantity",
            message: "How many of this item would you like to purchase?\n",
            validate: function(value) {
                if(!isNaN(value)){
                    return true;
                }
                else {
                    return false;
                }
            }
        } 
    ]).then(function(answer,results){
        var chosenItem = answer.itemID;
        // console.log(chosenItem);
        var chosenQuantity = answer.quantity;
        // console.log(chosenQuantity);
        connection.query("SELECT * FROM products WHERE?", [{item_id: answer.itemID}], function(err, results){
            if (err) throw err;
            var itemPrice = results[0].price;
            var originalInventory = results[0].stock_quantity;
            var newInventory = originalInventory - answer.quantity;
                console.log("\nInventory level prior to your purchase:\n" + originalInventory + "\n");
            if (chosenQuantity < originalInventory) {
                console.log("New inventory levels after your purchase:\n" + newInventory + "\n");
                console.log("The total price of your purchase is: \n$" + answer.quantity*itemPrice);
                connection.query("UPDATE products SET stock_quantity = ? WHERE item_id = ?", [newInventory, answer.itemID],);
            }
            else {
                console.log("Sorry! We don't have enough of that item left to fill your order. Please restart your order and choose a lower quantity to complete purchase.\n")
                purchaseItem();
            }
            connection.end();
        })
    })
}
