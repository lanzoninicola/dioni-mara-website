export interface Service {
  id: number;
  name: string;
  imageUrl: string;
  shortDescription: string;
  longDescription: string[];
  duration: number | number[];
}

export interface ServiceUI extends Service {
  infoMessage: string;
  bookingMessage: string;
}
