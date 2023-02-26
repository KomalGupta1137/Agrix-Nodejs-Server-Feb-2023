module.exports = moogose =>{
    const CropSubType=moogose.model(
        'cropsubtype',
        moogose.Schema({
            cropSubType:String
        },
        {timestamps:true}
        ),
    );
    return CropSubType;
};