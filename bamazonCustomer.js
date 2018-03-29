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
                    return false;
                }
            }
        },
        {
            type: "input",
            name: "quantity",
            message: "How many of this item would you like to purchase?",
            validate: function(value) {
                if(!isNan(value)){
                    return true;
                }
                else {
                    return false;
                }
            }
        }
    ]).then(function(answer){
        console.log("Answer: " + answer);
    })
}