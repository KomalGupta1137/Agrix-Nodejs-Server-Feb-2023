module.exports = mongoose => {
    const clusterList = mongoose.model(
        "clusterList",
        mongoose.Schema(
            {   
               clusterId: String
            },
            { timestamps: true }
        )
    );
    return clusterList;
};