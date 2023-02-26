const db = require("../models");
const Farmer = db.farmer;
const Plot = db.plot;
const Cluster = db.cluster;
const Machine = db.machine;
const Driver = db.driver;
const FarmMachineHistory = db.farmMachine;

exports.countData = async (req, res) => {
    const response = {
        farmerStat: 0,
        plotStat: 0,
        clusterStat: 0,
        driverStat: 0,
        farmMachineHistoryStat: 0,
        machineStat: 0
    };

    await Farmer.count().then(function (count, err) {
        response.farmerStat = count
    });

    await Plot.count().then(function (count, err) {
        response.plotStat = count
    });

    await Cluster.count().then(function (count, err) {
        response.clusterStat = count
    });

    await FarmMachineHistory.count().then(function (count, err) {
        response.farmMachineHistoryStat = count
    });
    await Machine.count().then(function (count, err) {
        response.machineStat = count
    });
    await Driver.count().then(function (count, err) {
        response.driverStat = count
    });

    // console.log("conting stat", response);

    res.status(200).send(response);
}