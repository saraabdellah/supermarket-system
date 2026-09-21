const prompt=require("prompt-sync")();
let choice;
let totalSales=0;
let products=[];
function menu(){
    console.log("====== SUPERMARKET MANAGEMENT SYSTEM ======");
    console.log("1.Add products");
    console.log("2.show products");
    console.log("3.search for a product");
    console.log("4.Buy products");
    console.log("5.Show Total Sales");
    console.log("6.Exit");
}
do{
 menu();  
 choice=Number(prompt("Enter your choice: "));
 if(choice===1){
    let found=false;
    let name=prompt("Enter product name: ");
    for(let i=0;i<products.length;i++){
        if(name===products[i].name){
            products[i].quantity+=Number(prompt("Enter quantity of the product:  "));
            console.log("Product Updated Successfully!");
            found=true;
            break;
        }
    }
    if(!found){
      let price=Number(prompt("Enter product price: "));
      let quantity=Number(prompt("Enter quantity of the product: "));
    let newProduct={
    name:name,
    price:price,
    quantity:quantity
   };
products.push(newProduct);
console.log("Product Added Successfully!");
console.log();
}  
 }
else if(choice===2){
    console.log("====== PRODUCTS ======");
    for(let i=0;i<products.length;i++){
        console.log(products[i]);
        console.log();
    }
}
else if(choice===3){
    let found=false;
    let name=prompt("Enter the product name: ");
    for(let i=0;i<products.length;i++){
        if(name===products[i].name){
            console.log(products[i]);
            found=true;
            console.log();
            break;
        }
    }
    if(!found){
        console.log("Product not found.");
        console.log();
    }
}
else if(choice===4){
    let found=false;
    let name=prompt("Enter product name: ");
   let quantity= Number(prompt("Enter quantity of the product: "));
    for(let i=0;i<products.length;i++){
        if(name===products[i].name){
            found=true;
            if(quantity>products[i].quantity){
                console.log("Quantity is to high than available.");
                console.log("Available: " + products[i].quantity);
            
            }
            else{
             products[i].quantity-=quantity;
             let price=quantity*products[i].price;
             totalSales=price+totalSales;
             console.log("Purchase Successful!");
             console.log("Total: " + price + " Birr");
             console.log("Remaining: "+ products[i].quantity);
             console.log();
             break;
        }
    
    }
    }
    if(!found){
        console.log(name + "Not available");
        console.log();
    }

}
else if(choice===5){
console.log("Total Sales: " + totalSales + " Birr")
console.log();
}
else if(choice===6){
    console.log("Thank you for shopping with us!");
    console.log("GoodBye!");
}
else{
    console.log("Invalid input");
    console.log("Please Try Again.")
    console.log();
}
}while(choice!==6);