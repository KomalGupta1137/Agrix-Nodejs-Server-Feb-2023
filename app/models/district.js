module.exports = mongoose => {
    const district = mongoose.model(
        "District",
        mongoose.Schema(
            {
                name: String,
                shortName: String,
                stateId: { type: mongoose.Schema.Types.ObjectId, ref: "state"},

            },
            { timestamps: true }
        )
    );
    return district;
};



