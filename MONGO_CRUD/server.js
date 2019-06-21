
let app = require("./config/imports").express();
let bodyparser = require("./config/imports").bodyparser;
app.use(bodyparser.json());
app.use(bodyparser.urlencoded({extended:false}));
let cors = require("./config/imports").cors;
app.use(cors());
app.use("/fetch",require("./fetch/fetch"));
app.use("/insert",require("./insert/insert"));
app.use("/update",require("./update/update"));
app.use("/delete",require("./delete/delete"));
app.listen(8080);
console.log("server listening the port no.8080"); 