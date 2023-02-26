module.exports = mongoose => {
    const machinebrand = mongoose.model(
        "machinebrand",
        mongoose.Schema(
            {
                name: String,
            },
            {timestamps:true}
        )
    );
    return machinebrand;
};