module.exports = mongoose => {
    const AddFarmer = mongoose.model(
        "Farmer",
        mongoose.Schema(
        {
            firstName: String,
            lastName: String,
            farmerId: String,
            clusterCode:String,
            ownerType: String,
            address:String,
            contact: Number,
            clusterId:String,
            farmingSeason: String,
            cropType: {type: mongoose.Schema.Types.ObjectId, ref: "crop-type"},
            cropSubType:String
        },
        { timestamps: true }
      )
    );
    return AddFarmer;
};