const mongoose=require("mongoose");
require("dotenv").config();
const connect = () => {
    return mongoose.connect(`mongodb+srv://paytmbus:${process.env.PASSWORD}@cluster0.zsjk3.mongodb.net/myFirstDatabase?retryWrites=true&w=majority`, {
        useNewUrlParser: true,
        useUnifiedTopology: true,
        useCreateIndex: true,
        useFindAndModify: false

    })
}

module.exports=connect;