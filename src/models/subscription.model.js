import mongoose, {Schema} from "mongoose"

const subscriptionSchema = new Schema({
    subscriber: {
        // the one who is suscribing
        type: Schema.Types.ObjectId,
        ref: "User"
    },
    channel: {
        // user to which is subscribed
        type: Schema.Types.ObjectId,
        ref: "User"
    }
},
{timestamps: true }
)


export const Subscription = mongoose.model("Subscription", subscriptionSchema)