module.exports = mongoose => {
    const AddCluster = mongoose.model(
      "Cluster",
      mongoose.Schema(
        {
            clusterName: String,
            clusterCode: String,
            clusterManager: String,
            village:String,
            district: String,
            state: String,
            officeAddress: String,
            contactDetail:  Number,
           
            // Cluster Level State
           
            customerState:String,
            sales:String,
            purchase:String, 
            expenditure:Number, 
            hrBasicDetails: String, 
            leadDetails:String,
            latitude:String,
            longitude:String
             
        },
        { timestamps: true }
      )
    );
    return AddCluster;
  };