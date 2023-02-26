module.exports =mongoose =>{
    const OwnerType=mongoose.model(
        "owner-type",
        mongoose.Schema({
            ownerType:String
        },
        {timestamps:true}
        ),
    );
    return OwnerType;
};