let role = "admin";
let action = "delete";

switch (role) {
    case ("admin"):
        switch (true) {
            case (action == "create"):
                console.log("Create");
                break;
            case (action == "edit"):
                console.log("Edit");
                break;
            case (action == "delete"):
                console.log("Delete");
                break;
        }
        break;
    case ("user"):
        console.log("Limited Access");
        break;
    default:
        console.log("Invalid Role!")
};
