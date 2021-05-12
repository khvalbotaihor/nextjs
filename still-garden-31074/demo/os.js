const os = require('os')

console.log("Operation system: ", os.platform())

console.log("Processor architecture: ", os.arch())

console.log("Processors information: ", os.cpus())

console.log("Free space: ", os.freemem())

console.log("All memory: ", os.totalmem())

console.log("Home directory: ", os.homedir())

console.log("System is already running during: ", os.uptime())