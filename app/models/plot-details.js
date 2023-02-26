module.exports = mongoose => {
  const AddPlotDetails = mongoose.model(
    "Plot-detail",
    mongoose.Schema(
      {
        farmerId: { type: mongoose.Schema.Types.ObjectId, ref: "farmer" },
        state: String,
        location: String,
        village: String,
        district: String,
        latitude: Number,
        long: Number,
        areaOfPlot: Number,
        perimeterOfPlot: Number,
        plotShape: String,
        soilType: String,
        nutrientContentAnalysis: String,
        waterSource: String,
        plotId: String,
        clusterId: String,
        googleEarthLink:String
      },
      { timestamps: true }
    )
  );
  return AddPlotDetails;
};