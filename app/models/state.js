module.exports = mongoose =>{
    const state = mongoose.model(
        "State",
        mongoose.Schema(
            {
                name:String,
                shortName:String
            },
            {timestamps:true}
        )
    );
    return state;
};