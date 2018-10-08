const db = require("mongoose")
const Schema = db.Schema

const ShopsSchema = new Schema({
    name: { type: String, required: true, unique: true }
    , thumb_url: String
    , created_at: { type: Date, default: Date.now }
    , updated_at: { type: Date, default: Date.now }
})

module.exports = db.model("Shops", ShopsSchema);