import { Document } from 'mongoose';

export default interface Command extends Document {
  name: string;
  description: string;
  type: string;
  enabled: boolean;
}
