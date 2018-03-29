var mysql = require("mysql");
var inquirer = require("inquirer");

var connection = mysql.createConnection({
    host: "localhost",
    port: 3306,
    user: "root",
    password: "root",
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
            message: "What is the item ID of the product you would like to purchase?",
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
            message: "How many of this item would you like to purchase?",
            validate: function(value) {
                if(!isNaN(value)){
                    return true;
                }
                else {
                    return false;
                }
            }
        }
        
    ]).then(function(answer){
        var chosenItem = answer.itemID;
        // console.log(chosenItem);
        var chosenQuantity = answer.quantity;
        // console.log(chosenQuantity);
        connection.query("SELECT * FROM products WHERE?", [{item_id: answer.itemID}], function(err, results){
            if (err) throw err;

            var currentInventory = results[0].stock_quantity;
            console.log("Current inventory level: " + currentInventory);
            var newInventory = currentInventory - answer.quantity;
            console.log("New inventory levels after most recent purchase: " + newInventory);
        })
    })
}