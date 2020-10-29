
import { SignLogs } from './sign-logs';
import { Discord } from './discord';

export class User {
  id: number;
  username: string;
  signLogs: SignLogs[];
  discord: Discord | null;
}