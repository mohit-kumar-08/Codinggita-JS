let foodCategory = "veg";
let foodItem = "pav";
let plateSize = "half"

switch (foodCategory) {
    case "veg":
        switch (foodItem) {
            case "pav":
                switch (plateSize) {
                    case "full":
                        foodPrice = 999;
                        break;
                    case "half":
                        foodPrice = 599;
                        break;
                }
                break;
            case "paneer":
                switch (plateSize) {
                    case "full":
                        foodPrice = 999;
                        break;
                    case "half":
                        foodPrice = 599;
                        break;
                };
                break;
            case "aloo":
                switch (plateSize) {
                    case "full":
                        foodPrice = 999;
                        break;
                    case "half":
                        foodPrice = 599;
                        break;
                };
                break;
        }
        break;
    case "nonveg":
        switch (foodItem) {
            case "item1":
                switch (plateSize) {
                    case "full":
                        foodPrice = 999;
                        break;
                    case "half":
                        foodPrice = 599;
                        break;
                }
                break;
            case "item2":
                switch (plateSize) {
                    case "full":
                        foodPrice = 999;
                        break;
                    case "half":
                        foodPrice = 599;
                        break;
                };
                break;
            case "item3":
                switch (plateSize) {
                    case "full":
                        foodPrice = 999;
                        break;
                    case "half":
                        foodPrice = 599;
                        break;
                };
                break;
        }
        break;
}

console.log(`Food Category: ${foodCategory}        Food Item: ${foodItem}         Food Plate: ${plateSize}         Food Price: ${foodPrice}`);
