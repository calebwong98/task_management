<<<<<<< HEAD
import { Document, Schema, model, models } from "mongoose";
=======
import { Document, Schema, model, Model } from "mongoose";
>>>>>>> c6055e42b996b3514444ea71f9d17c15d0bb1350

export interface IEvent extends Document {
  _id: string;
  title: string;
  description?: string;
  location?: string;
  createdAt: Date;
  imageUrl: string;
  startDateTime: Date;
  endDateTime: Date;
  price: string;
  isFree: boolean;
  url?: string;
  category: { _id: string; name: string };
  organizer: { _id: string; firstName: string; lastName: string };
}

<<<<<<< HEAD
const EventSchema = new Schema({
  title: { type: String, required: true },
  description: { type: String },
  location: { type: String },
  createdAt: { type: Date, default: Date.now },
  imageUrl: { type: String, required: true },
  startDateTime: { type: Date, default: Date.now },
  endDateTime: { type: Date, default: Date.now },
  price: { type: String },
  isFree: { type: Boolean, default: false },
  url: { type: String },
  category: { type: Schema.Types.ObjectId, ref: "Category" },
  organizer: { type: Schema.Types.ObjectId, ref: "User" },
});

const Event = models.Event || model("Event", EventSchema);

export default Event;
=======
// Create a singleton class to manage the Event model
class EventModelSingleton {
  private static instance: Model<IEvent> | null = null;

  static getInstance(): Model<IEvent> {
    if (!EventModelSingleton.instance) {
      EventModelSingleton.instance = model<IEvent>("Event", eventSchema);
    }
    return EventModelSingleton.instance;
  }
}

// Export the Event model using the singleton instance
export const EventModel = EventModelSingleton.getInstance();
>>>>>>> c6055e42b996b3514444ea71f9d17c15d0bb1350
