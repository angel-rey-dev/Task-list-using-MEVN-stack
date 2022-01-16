import { Schema, model } from "mongoose"

const taskSchema = new Schema({
    title: {
        type: String,
        required: true
    },
    description: {
        type: String,
        required: true
    },
    done: {
        type: Boolean,
        default: false
    }
}, {
    versionKey: false
})

export default model("Task", taskSchema)