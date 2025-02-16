export type User = {
  id: number;
  name: string;
}

export type chat = {
  id: number;
  message: string;
  user: User;
  date: string;
}

export type conversation = {
  id: number;
  title: string;
  messages: chat[];
}