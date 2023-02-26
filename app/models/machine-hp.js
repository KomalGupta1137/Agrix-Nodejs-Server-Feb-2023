module.exports = mongoose => {
    const machinehp = mongoose.model(
        "machinehp",
        mongoose.Schema(
            {
                range: String,
            },
            {timestamps:true}
        )
    );
    return machinehp;
};