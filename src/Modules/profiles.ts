import { Schema, models, model } from "mongoose";

const data = new Schema({

    id: Number,
    nickname: String,
    surname: String,
    age: Number,
    icon: String

})

export default models.Profile || model("Profile", data);