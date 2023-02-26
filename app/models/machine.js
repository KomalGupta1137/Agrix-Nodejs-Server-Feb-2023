module.exports=mongoose => {
    const Machine = mongoose.model(
        "machine",
        mongoose.Schema(
            {
                implementCode: { type: String,unique: true,required: true },
                implementNameId: { type: mongoose.Schema.Types.ObjectId, $ref: "implement-name"},
                implementCategoryId: { type: mongoose.Schema.Types.ObjectId, $ref: "category"},
                ownershipId: { type: mongoose.Schema.Types.ObjectId, $ref: "vendor"},
                clusterCode: { type: mongoose.Schema.Types.ObjectId, $ref: "cluster"},
                cluster: String,
                implementIdentifier: String,
                horsePower: String,
                wheelDrive: String,
                machineBrand: String,
                model: String,
                imieNo: Number,
                simNo: String,
                simType: String
            },
            {timestamps:true}
        )
    );
    return Machine;
};