module.exports = mongoose =>{
    const counter = mongoose.model(
        "counter",
        mongoose.Schema(
            {
                id: String,
                sequence: Number
            },
            {timestamps:true}
        )
    );
    return counter;
};