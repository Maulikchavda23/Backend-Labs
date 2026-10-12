const url = require("url");

const inputURL = "https://localhost:8090/users/profile?id=101&name=maulik";

// const parsed = url.parse(inputURL,true);
const parsed = new URL(inputURL);
console.log(parsed);

console.log("Protocol:", parsed.protocol);
console.log("Hostname:", parsed.hostname);
console.log("Pathname:", parsed.pathname);
console.log("Query Params:", parsed.searchParams);
console.log("Query id:", parsed.searchParams.get("id"));
console.log("Query name:", parsed.searchParams.get("name"));
console.log("port:", parsed.port);

const myURL = new URL("https://example.com");
myURL.pathname = "/products/item";

myURL.searchParams.append("id", "102");
myURL.searchParams.append("name", "box");

console.log("Final URL:", myURL);
console.log("Specialized URL:", myURL.toString());
