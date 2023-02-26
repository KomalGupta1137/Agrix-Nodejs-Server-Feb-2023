 module.exports = moogose => {
    const farmingSeason =moogose.model(
        "farmingseason",
        moogose.Schema({
            farmingSeason:String
        },
        {timestamps:true}
        )
    ); 
    return farmingSeason;
 }