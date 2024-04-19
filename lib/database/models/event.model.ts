import { Document, Schema, model, models } from "mongoose";

export interface IEvent extends Document {
  startDateTime(startDateTime: any): unknown;
  price: any;
  isFree: any;
  _id: string;
  title: string;
  description?: string;
  imageUrl: string;
  category: { _id: string; name: string };
  organizer: { _id: string; firstName: string; lastName: string };
}

const EventSchema = new Schema({
  title: { type: String, required: true },
  description: { type: String },
  imageUrl: { type: String, required: true },
  category: { type: Schema.Types.ObjectId, ref: "Category" },
  organizer: { type: Schema.Types.ObjectId, ref: "User" },
});

const Event = models.Event || model("Event", EventSchema);

export default Event;
