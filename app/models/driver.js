const { Schema } = require("mongoose");

module.exports=mongoose =>{
    const Driver = mongoose.model(
        "Driver",
        mongoose.Schema(
            {
                driverId:String,
                firstName:String,
                lastName:String,
                contactDetails:String,
                village:String,
                district:String,
                state:String,
                clusterId:String
            },
            {timestamps:true}
        )
    );
    return Driver;
};