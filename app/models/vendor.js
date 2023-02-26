module.exports = mongoose => {
    const vendor = mongoose.model(
        "vendor",
        mongoose.Schema(
            {
                name: String,
                address: String,
                vendorIdentifier: String,
            },
            { timestamps: true }
        )
    );
    return vendor;
};