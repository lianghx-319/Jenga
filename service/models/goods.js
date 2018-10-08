const db = require("mongoose")
const Schema = db.Schema;

const GoodsSchema = new Schema({
    shop_id: {type: String, required: true}
    , name: {type: String, required: true}
    , thumb_url: String
})

module.exports = db.model("Goods", GoodsSchema)