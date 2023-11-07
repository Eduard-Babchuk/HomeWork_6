const prompt = require("prompt-sync")()
const colors = { reset: '\x1b[0m', green: '\x1b[32m' }
const deliveryPrise = 5050/100
let statusDelivery = null
let person = null
let myOrder = null


const menu = [
    {
        category: "Pizza",
        items: [
            {
                title: "Salami",
                price: 12000,
                weight: "500 g",
                ingredients: ['Dough', 'Salami', 'Cheese', 'Souse'],
                adress: "Pizza Avenue 46a"
            },
            {
                title: "Hawaii",
                price: 14500,
                weight: "500 g",
                ingredients: ['Dough', 'Pineapple', 'Cheese', 'Olives', 'Souse'],
                adress: "Pizza Avenue 46a"
            },
        ]
    },
    {
        category: "Sushi",
        items: [
            {
                title: "California",
                price: 70000,
                weight: "1 kg",
                ingredients: ['Rice', 'Souse', 'Sea Fish'],
                adress: "Sushi Boulevard 1c"
            },
            {
                title: "Philadelphia",
                price: 70000,
                weight: "1 kg",
                ingredients: ['Rice', 'Nori', 'Avokado', 'Salmon'],
                adress: "Sushi Boulevard 1c"
            }
        ]
    },
    {
        category: "Shawarma",
        items: [
            {
                title: "With Chicken",
                price: 8050,
                weight: "300 g",
                category: "Shawarma",
                ingredients: ['Pita', 'Tomat', 'Cabbage', 'Chicken'],
                adress: "Shawarma Street 2b"
            },
            {
                title: "With Beef",
                price: 9050,
                weight: "300 g",
                category: "Shawarma",
                ingredients: ['Pita', 'Tomat', 'Cabbage', 'Beef'],
                adress: "Shawarma Street 2b"
            }
        ]
    }
]

introScene()

function introScene(){
    console.clear()
    console.log('\x1b[33m%s\x1b[0m', "Welcom to...")
    console.log('\x1b[32m%s\x1b[0m', "     ___  _______       ______   _______  ___     ")
    console.log('\x1b[32m%s\x1b[0m', "    |   ||       |     |      | |       ||   |    ")
    console.log('\x1b[32m%s\x1b[0m', "    |   ||  _____|     |  _    ||    ___||   |    ")
    console.log('\x1b[32m%s\x1b[0m', "    |   || |_____      | | |   ||   |___ |   |    ")
    console.log('\x1b[32m%s\x1b[0m', " ___|   ||_____  |     | |_|   ||    ___||   |___ ")
    console.log('\x1b[32m%s\x1b[0m', "|       | _____| |  _  |       ||   |___ |       |")
    console.log('\x1b[32m%s\x1b[0m', "|_______||_______| |_| |______| |_______||_______|")
    console.log("                                                  ")
    console.log("Please Sig IN in our console app")
    console.log("==================================================")
    const nameUser = prompt("Enter your name: ") 
    const emailUser = prompt("Enter your email: ")
    const phoneUser = prompt("Enter your phone: ")
    const adressUser = prompt("Enter your adress: ")
    console.log("==================================================")
    person = {
        Name: nameUser,
        eMail: emailUser,
        Phone: phoneUser,
        Adress: adressUser
    }
    comandMenu()
}

function comandMenu(){
    console.clear()
    console.log("Hello,", person.Name)
    if(statusDelivery !== null){
        process.stdout.write(colors.green + "STATUS: " + colors.reset);
        process.stdout.write(statusDelivery + "\n");
    }
    console.log("==================================================")
    console.log("Comand`s MENU")
    console.log("--------------------------------------------------")
    console.log(" [MI] - My information")
    console.log(" [SM] - Show MENU")
    if(statusDelivery !== null){console.log(" [MO] - My Order")}
    console.log(" [E] - Exit")
    console.log("==================================================")

    selectComand()
}

function menuOfDishes(){
    console.clear()
    console.log('\x1b[33m%s\x1b[0m', "What do you WANT?:")
    console.log("------( MENU )-----------( Price )---")
    console.log( menu[0].category + ":                           ")
    console.log(" [S] -", menu[0].items[0].title, "         | ", menu[0].items[0].price/100, "  UAH |  ")
    console.log(" [H] -", menu[0].items[1].title, "         | ", menu[0].items[1].price/100, "  UAH |  ")
    console.log( menu[1].category + ":                           ")
    console.log(" [C] -", menu[1].items[0].title, "     | ", menu[1].items[0].price/100, "  UAH |  ")
    console.log(" [P] -", menu[1].items[1].title, "   | ", menu[1].items[1].price/100, "  UAH |  ")
    console.log( menu[2].category + ":                        ")
    console.log(" [Wc] -", menu[2].items[0].title, "  | ", menu[2].items[0].price/100, " UAH | ")
    console.log(" [Wb] -", menu[2].items[1].title, "     | ", menu[2].items[1].price/100, " UAH | ")
    console.log("-------------------------------------")
    console.log(" [R] - Return to Comand`s MENU")
    console.log("-------------------------------------")
    selectOrder()
}

function returnToMenu() 
{
    let comandToExit = prompt("Press Enter to return to the MENU...")
    comandMenu()
}

function selectComand(){
    let choice = prompt(">> ") 
    switch (choice){
        case 'MI': console.clear(); console.table(person); returnToMenu(); break 
        case 'SM': console.clear(); menuOfDishes(); break
        case 'MO': 
        console.clear()
        console.log(myOrder)
        console.log("Enter 'Y' if received order or 'N' if don`t")
        let comandToExit2
        do {
            comandToExit2 = prompt(">> ")
            if (comandToExit2 === "Y") {
                statusDelivery = "Success"
            } else if (comandToExit2 === "N") {
                statusDelivery = "In Procces"
            } else {
                console.log('\x1b[31m%s\x1b[0m', 'ERROR: Command not found. Try again')
            }
        } while (comandToExit2 !== "Y" && comandToExit2 !== "N")
        comandMenu()
        break
        case 'E': console.clear(); process.exit(0); break
        default: console.log('\x1b[31m%s\x1b[0m', 'ERROR: Command not found. Try again'); selectComand()
    }
}

function selectOrder(){
    let order = prompt(">> ") 
    switch (order){
        case 'S': console.clear(); dateAboutOrder(menu[0].category, menu[0].items[0].title, menu[0].items[0].price/100, menu[0].items[0].weight, menu[0].items[0].ingredients, menu[0].items[0].adress); break
        case 'H': console.clear(); dateAboutOrder(menu[0].category, menu[0].items[1].title, menu[0].items[1].price/100, menu[0].items[1].weight, menu[0].items[1].ingredients, menu[0].items[1].adress); break
        case 'C': console.clear(); dateAboutOrder(menu[1].category, menu[1].items[0].title, menu[1].items[0].price/100, menu[1].items[0].weight, menu[1].items[0].ingredients, menu[1].items[0].adress); break
        case 'P': console.clear(); dateAboutOrder(menu[1].category, menu[1].items[1].title, menu[1].items[1].price/100, menu[1].items[1].weight, menu[1].items[1].ingredients, menu[1].items[1].adress); break
        case 'Wc': console.clear(); dateAboutOrder(menu[2].category, menu[2].items[0].title, menu[2].items[0].price/100, menu[2].items[0].weight, menu[2].items[0].ingredients, menu[2].items[0].adress); break
        case 'Wb': console.clear(); dateAboutOrder(menu[2].category, menu[2].items[1].title, menu[2].items[1].price/100, menu[2].items[1].weight, menu[2].items[1].ingredients, menu[2].items[1].adress); break
        case 'R': comandMenu(); break
        default: console.log('\x1b[31m%s\x1b[0m', 'ERROR: Command not found. Try again'); selectOrder()
    }
}

function dateAboutOrder(category, title, price, weight, ingredients, adress){
    console.clear()
    console.log("=====================================")
    console.log("Your order:", category, ":", title)
    console.log("-------------------------------------")
    console.log("Weight: ", weight)
    console.log("Ingredients: ", ingredients)
    console.log("-------------------------------------")
    console.log("Adress from: ", adress)
    console.log("Adress to: ", person.Adress)
    console.log("-------------------------------------")
    console.log("Delivery: ", deliveryPrise)
    console.log("Price: ", price)
    console.log("Total: ", deliveryPrise + price)
    console.log("=====================================")
    console.log("Enter 'Y' for - Confirm the order or 'N' - return to the MENU ")

    let comandToExit3
    do{
        comandToExit3 = prompt(">> ")
        comandToExit3 === "Y" ? confirmOrder() : comandToExit3 === "N" ? menuOfDishes() : console.log('\x1b[31m%s\x1b[0m', 'ERROR: Command not found. Try again')
    } while (comandToExit3 !== "Y" && comandToExit3 !== "N")

    function confirmOrder(){
        statusDelivery = "In Procces"
    
        myOrder = {
            Recipient: person.Name,
            yourOrder: title + menu[0].items[0].title,
            Ingredients: ingredients,
            adressFrom: adress,
            adressTo: person.Adress,
            totalPrice: deliveryPrise + price,
        }
        comandMenu()
    }
}