const mongoose =require('mongoose');

const orderSchema=mongoose.Schema({
    orderItems:[{
        // type:mongoose.Schema.Types.ObjectId,
        // ref:'OrderItem',
        type:String,
        require:true
    }],
    shippingAddress1:{
        type:String,
        require:true
    },
    shippingAddress2:{
        type:String,
        require:true
    },
    city:{
        type:String,
        require:true
    },
    zip:{
        type:String,
        require:true
    },
    country:{
        type:String,
        require:true
    },
    phone:{
        type:String,
        require:true
    },
    status:{
        type:String,
        require:true,
        default:'pending',
    },
    totalPrice:{
        type:Number,
    },
    user:{
        // type:mongoose.Schema.Types.ObjectId,
        // ref:'User',
        type:String
    },
    dateOrdered:{
        type:Date,
        default:Date.now
    },

})

orderSchema.virtual('id').get(function(){
    return this._id.toHexString();
});

orderSchema.set('toJSON',{
    virtuals:true,
})
exports.Order=mongoose.model('Order',orderSchema);