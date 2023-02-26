module.exports = mongoose =>{
    const Category = mongoose.model(
        "Impliment_Category",
        mongoose.Schema(
            {
                name: String,
                shortName: String
            },
            {timestamps:true}
        )
    );
    return Category;
};