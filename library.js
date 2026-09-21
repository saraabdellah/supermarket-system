const prompt=require("prompt-sync")();
let choice;
let books=[];
function menu(){
    console.log("===== LIBRARY SYSTEM =====");
    console.log("1.Add Book");
    console.log("2.Show All Books");
    console.log("3.Search for a Book");
    console.log("4.Borrow Book");
    console.log("5.Return Book");
    console.log("6.Exit");
}
do{
    menu();
    choice=Number(prompt("Enter your choice: "));
    if(choice===1){
        let found=false;
     let title=prompt("Enter Book Title: ");
     let author=prompt("Enter Book Author: ");
     for(let i=0;i<books.length;i++){
     if(title===books[i].title&&author===books[i].author){
      books[i].copies+=Number(prompt("Enter How many Copies: "));
      console.log("Copies Added Successfully");
      found=true;
      console.log();
     }
    }
   if(!found){
    let copies=Number(prompt("Enter How many Copies: "));
    let newBook={
        title:title,
        author:author,
        copies:copies
    };
     books.push(newBook);
     console.log("Book Added Successfully!");
    }
}    
    else if(choice===2){
        console.log("=====  ALL BOOKS  =====");
        for(let i=0;i<books.length;i++){
            console.log(books[i]);
        }
    }
    else if(choice===3){
       let found=false;
        let title=prompt("Enter Book Title to Search: ");
        for(let i=0;i<books.length;i++){
            if(title===books[i].title){
                console.log("Book found!");
                console.log(books[i]);
                found=true;
            }
        }
        if(!found){
            console.log("Book not found.");
        }
}
    
    else if(choice===4){
       let found=false;
        let borrow=prompt("Enter Book Title to borrow: ");
        for(let i=0;i<books.length;i++){
            if(borrow===books[i].title){
             books[i].copies-=Number(prompt("Enter how many Copies: "));
             console.log("Book borrowed Successfully");
             found=true;
            }
        }
        if(!found){
            console.log("Book not Found.")
        }
}
    
    else if(choice===5){
       let found=false;
        let title=prompt("Enter Book Title: ");
        for(let i=0;i<books.length;i++){
            if(title===books[i].title){
                books[i].copies++;
                console.log("Book returned Successfully!");
                found=true;
                console.log();
            }
        }
        if(!found){
            console.log("Book not found.");
            console.log("Try again.");
        }
}
    
    else if(choice===6){
        console.log("Thank you for using our library system.");
        console.log("Goodbye!");
    }
        else{
            console.log("Invalid input.");
        }

    }while(choice!==6);
