# bamazon

Bamazon is a database/app using MySQL, Node.js and JavaScript to keep a detailed inventory and account record for hypothetical retail giant, Bamazon.

The Bamazon app will house product names, their departments, price and current quantity for easy inventory analysis in the MySQL database, and will display that data to the user via Node.js, prompting a purchase inquiry. The user will then select the item they would like to purchase and the desired quantity.

If said quantity exceeds the item's current inventory, the purchase will be rejected and the user will be forced to restart the purchase process.

Once the user places an order successfully, new inventory will be displayed, along with the total cost of the order. After the order is completed, the corresponding MySQL database will be updated to reflect the purchased product's new inventory.

Links to screenshots:
1. https://github.com/dtcrowley/bamazon/blob/master/MySQL_originalTableBeforeOrder.png
2. https://github.com/dtcrowley/bamazon/blob/master/node_initialProductDisplay.png
3. https://github.com/dtcrowley/bamazon/blob/master/node_successfulPurchase.png
4. https://github.com/dtcrowley/bamazon/blob/master/MySQL_updatedTableAfterOrder.png
5. https://github.com/dtcrowley/bamazon/blob/master/node_exceedsInventoryError.png
