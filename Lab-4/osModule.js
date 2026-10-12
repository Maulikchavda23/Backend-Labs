const os = require("os");

// 6. Operating System Information
console.log("===== OPERATING SYSTEM INFORMATION =====");

console.log("Operating System Name :", os.type());
console.log("Release Version      :", os.release());
console.log("Platform             :", os.platform());
console.log("Architecture         :", os.arch());


// 7. Memory Information
console.log("\n===== MEMORY INFORMATION =====");

let totalMemory = os.totalmem();
let freeMemory = os.freemem();

console.log(
    "Total Memory :", (totalMemory / (1024 ** 3)).toFixed(2), "GB"
);

console.log(
    "Free Memory  :", (freeMemory / (1024 ** 3)).toFixed(2), "GB"
);


// 8. Current Logged-in User
console.log("\n===== CURRENT USER INFORMATION =====");

let user = os.userInfo();

console.log("Username :", user.username);
console.log("User ID  :", user.uid);
console.log("Group ID :", user.gid);
console.log("Home Dir :", user.homedir);
console.log("Shell    :", user.shell);


// 9. System Uptime
console.log("\n===== SYSTEM UPTIME =====");

let uptimeSeconds = os.uptime();
let uptimeHours = uptimeSeconds / 3600;

console.log(
    "Uptime in Seconds :", uptimeSeconds.toFixed(2)
);

console.log(
    "Uptime in Hours   :", uptimeHours.toFixed(2)
);


// 10. CPU Information
console.log("\n===== CPU INFORMATION =====");

let cpus = os.cpus();

console.log("Number of CPU Cores :", cpus.length);

for (let i = 0; i < cpus.length; i++) {
    console.log(
        "Core " + (i + 1) + " Model :", cpus[i].model
    );
}


// Network Interface Information
console.log("\n===== NETWORK INTERFACE INFORMATION =====");

let network = os.networkInterfaces();

console.log(network);