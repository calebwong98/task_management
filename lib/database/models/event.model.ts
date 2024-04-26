import { Document, Schema, model, Model } from "mongoose";

// Define the schema for the Event document
const eventSchema = new Schema({
  title: { type: String, required: true },
  description: { type: String, required: true },
  location: { type: String, required: true },
  imageUrl: { type: String, required: true },
  startDateTime: { type: Date, required: true },
  endDateTime: { type: Date, required: true },
  categoryId: { type: String, required: true },
  price: { type: String, required: true },
  isFree: { type: Boolean, required: true },
  url: { type: String, required: true },
});

// Define the interface for the Event document
export interface IEvent extends Document {
  title: string;
  description: string;
  location: string;
  imageUrl: string;
  startDateTime: Date;
  endDateTime: Date;
  categoryId: string;
  price: string;
  isFree: boolean;
  url: string;
}

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
