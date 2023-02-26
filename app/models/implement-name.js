module.exports = mongoose =>{
    const implementname = mongoose.model(
        "implementname",
        mongoose.Schema(
            {
                name: String,
                shortName: String
            },
            {timestamps:true}
        )
    );
    return implementname;
};