export interface RoomFeatures {
    bedType: string;
    maxOccupancy: number;
    wifi: boolean;
    airConditioning: boolean;
    tv: boolean;
    minibar: boolean;
  }
  
  export interface Room {
    id: number;
    name: string;
    type: string;
    price: number;
    currency: string;
    availability: boolean;
    description: string;
    features: RoomFeatures;
    images: string[];
  }
  