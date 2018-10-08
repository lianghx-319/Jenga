const Joi = require("joi")
const GROUP_NAME = "shops"
const { Shops } = require("../models")

module.exports = [
    {
        method: "GET"
        , path: `/${GROUP_NAME}`
        , handler: async (request, reply) => {
            const result = await Shops.find()
            reply(result);
        }
        , config: {
            tags: ["api", GROUP_NAME]
            , description: "获取店铺列表"
        }
    }
    , {
        method: "GET"
        , path: `/${GROUP_NAME}/{shopId}/goods`
        , handler: async (request, reply) => {
            reply()
        }
        , config: {
            tags: ["api", GROUP_NAME]
            , description: "获取店铺商品列表"
            , validate: {
                params: {
                    shopId: Joi.string().required()
                }
            }
        }
    }
]