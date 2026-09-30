let input = null;

switch (typeof(input)) {
    case "number":
        console.log("Number");
        break;
    case "string":
        console.log("String");
        break;
    case "boolean":
        console.log("Boolean");
        break;
    case "object":
        console.log("null");
        break;
    case "undefined":
        console.log("Undefined");
        break;
}