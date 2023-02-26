module.exports = moogose =>{
    const cultivationDate = moogose.model(
        'cultivation-date',
        moogose.Schema({
            plotId: String,
            cultivationDate: String
        },
        {timestamps:true}
        ),
    );
    return cultivationDate;
};