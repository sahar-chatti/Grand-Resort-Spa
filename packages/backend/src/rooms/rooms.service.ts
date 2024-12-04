import { Injectable } from '@nestjs/common';
import { Room } from './room.model';

@Injectable()
export class RoomsService {
  private rooms: Room[] = [
    {
      "id": 1,
      "name": "Deluxe Suite",
      "type": "Suite",
      "price": 150,
      "currency": "USD",
      "availability": true,
      "description": "A spacious suite with a king-size bed, private balcony, and sea view.",
      "features": {
        "bedType": "King",
        "maxOccupancy": 3,
        "wifi": true,
        "airConditioning": true,
        "tv": true,
        "minibar": true
      },
      "images": [
        "https://images.unsplash.com/photo-1590490360182-c33d57733427",
        "https://images.unsplash.com/photo-1595576508898-0ad5c879a061"
      ]
    },
    {
      "id": 2,
      "name": "Standard Room",
      "type": "Standard",
      "price": 80,
      "currency": "USD",
      "availability": false,
      "description": "A cozy standard room with a queen-size bed and a city view.",
      "features": {
        "bedType": "Queen",
        "maxOccupancy": 2,
        "wifi": true,
        "airConditioning": true,
        "tv": true,
        "minibar": false
      },
      "images": [
        "https://images.unsplash.com/photo-1566665797739-1674de7a421a",
        "https://images.unsplash.com/photo-1566665797789-89c5e3f3f1ed"
      ]
    },
    {
      "id": 3,
      "name": "Family Room",
      "type": "Family",
      "price": 120,
      "currency": "USD",
      "availability": true,
      "description": "Spacious family room with two queen beds and a city view.",
      "features": {
        "bedType": "Queen",
        "maxOccupancy": 4,
        "wifi": true,
        "airConditioning": true,
        "tv": true,
        "minibar": false
      },
      "images": [
        "https://images.unsplash.com/photo-1582719478250-c89cae4dc85b",
        "https://images.unsplash.com/photo-1582719478251-c89cae4dc85c"
      ]
    },
    {
      "id": 4,
      "name": "Executive Suite",
      "type": "Suite",
      "price": 200,
      "currency": "USD",
      "availability": true,
      "description": "Premium suite with king bed, private office, and lounge access.",
      "features": {
        "bedType": "King",
        "maxOccupancy": 2,
        "wifi": true,
        "airConditioning": true,
        "tv": true,
        "minibar": true
      },
      "images": [
        "https://images.unsplash.com/photo-1618773928121-c32242e63f39"
      ]
    },
    {
      "id": 5,
      "name": "Single Room",
      "type": "Single",
      "price": 50,
      "currency": "USD",
      "availability": true,
      "description": "Compact single room, ideal for solo travelers.",
      "features": {
        "bedType": "Single",
        "maxOccupancy": 1,
        "wifi": true,
        "airConditioning": false,
        "tv": true,
        "minibar": false
      },
      "images": [
        " https://images.unsplash.com/photo-1566665797739-1674de7a421a"
      ]
    },
    {
      "id": 6,
      "name": "Luxury Suite",
      "type": "Suite",
      "price": 250,
      "currency": "USD",
      "availability": false,
      "description": "Exclusive luxury suite with premium amenities and a panoramic view.",
      "features": {
        "bedType": "King",
        "maxOccupancy": 2,
        "wifi": true,
        "airConditioning": true,
        "tv": true,
        "minibar": true
      },
      "images": [
        "https://images.unsplash.com/photo-1505693416388-ac5ce068fe85",
       
      ]
    },
    {
      "id": 7,
      "name": "Economy Room",
      "type": "Economy",
      "price": 40,
      "currency": "USD",
      "availability": true,
      "description": "Simple and affordable room with essential amenities.",
      "features": {
        "bedType": "Twin",
        "maxOccupancy": 2,
        "wifi": false,
        "airConditioning": false,
        "tv": false,
        "minibar": false
      },
      "images": [
        "https://images.unsplash.com/photo-1590490360182-c33d57733427"
      ]
    },
    {
      "id": 8,
      "name": "Ocean View Room",
      "type": "Standard",
      "price": 110,
      "currency": "USD",
      "availability": true,
      "description": "Room with a beautiful ocean view, ideal for relaxation.",
      "features": {
        "bedType": "Queen",
        "maxOccupancy": 2,
        "wifi": true,
        "airConditioning": true,
        "tv": true,
        "minibar": false
      },
      "images": [
        "https://images.unsplash.com/photo-1505692952047-1a78307da8f2"
      ]
    },
    {
      "id": 9,
      "name": "City Suite",
      "type": "Suite",
      "price": 160,
      "currency": "USD",
      "availability": false,
      "description": "Modern suite with a cityscape view, perfect for business travelers.",
      "features": {
        "bedType": "King",
        "maxOccupancy": 2,
        "wifi": true,
        "airConditioning": true,
        "tv": true,
        "minibar": true
      },
      "images": [
        "https://images.unsplash.com/photo-1590490360182-c33d57733427"
      ]
    },
    {
      "id": 10,
      "name": "Garden Room",
      "type": "Standard",
      "price": 90,
      "currency": "USD",
      "availability": true,
      "description": "Peaceful room with a garden view and comfortable amenities.",
      "features": {
        "bedType": "Queen",
        "maxOccupancy": 2,
        "wifi": true,
        "airConditioning": false,
        "tv": true,
        "minibar": false
      },
      "images": [
        "https://images.unsplash.com/photo-1505693314120-0d443867891c"
      ]
    },
    {
      "id": 11,
      "name": "Penthouse Suite",
      "type": "Suite",
      "price": 300,
      "currency": "USD",
      "availability": true,
      "description": "Luxury penthouse suite with stunning views and top-tier amenities.",
      "features": {
        "bedType": "King",
        "maxOccupancy": 4,
        "wifi": true,
        "airConditioning": true,
        "tv": true,
        "minibar": true
      },
      "images": [
        "https://images.unsplash.com/photo-1505693314120-0d443867891c"
      ]
    },
    {
      "id": 12,
      "name": "Junior Suite",
      "type": "Suite",
      "price": 130,
      "currency": "USD",
      "availability": true,
      "description": "Comfortable junior suite with modern furnishings and amenities.",
      "features": {
        "bedType": "Queen",
        "maxOccupancy": 3,
        "wifi": true,
        "airConditioning": true,
        "tv": true,
        "minibar": true
      },
      "images": [
        "https://images.unsplash.com/photo-1595576508898-0ad5c879a061"
      ]
    },
    
  ];

  findPaginated(page: number, limit: number): { rooms: Room[]; total: number } {
    const start = (page - 1) * limit;
    const end = start + limit;
    
    return {
      rooms: this.rooms.slice(start, end),
      total: this.rooms.length
    };
  }
}
