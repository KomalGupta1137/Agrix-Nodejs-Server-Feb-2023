module.exports = mongoose => {
    const implementIdentifier = mongoose.model(
        "implementIdentifier",
        mongoose.Schema(
            {
                name: {
                    type: String,
                }
            },
            { timestamps: true }
        )
    );
    return implementIdentifier;
};