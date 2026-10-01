let role = "admin";
let action = "delete";
console.log(role == "admin" ? action == "delete" ? "Admin Delete" : action == "edit" ? "Admin Edit" : "Admin Other" : role == "user" ? action == "View" ? "User View" : "User Restricted" : "Invalid Role");
