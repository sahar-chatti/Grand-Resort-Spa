import React from 'react';
import { Room } from '../types/room';
import './RoomCard.css';

interface RoomCardProps {
  room: Room;
}

export const RoomCard: React.FC<RoomCardProps> = ({ room }) => {
  return (
    <div className="room-card">
      <div className="room-image">
        <img src={room.images[0]} alt={room.name} loading="lazy" />
      </div>
      <div className="room-content">
        <h2>{room.name}</h2>
        <p className="room-type">{room.type}</p>
        <p className="room-price">
          ${room.price} {room.currency}/night
        </p>
        <p className="room-description">{room.description}</p>
        <div className="room-features">
          <span className="feature-item">🛏️ {room.features.bedType}</span>
          <span className="feature-item">👥 Max: {room.features.maxOccupancy} guests</span>
          {room.features.wifi && <span className="feature-item">📶 WiFi</span>}
          {room.features.airConditioning && <span className="feature-item">❄️ AC</span>}
          {room.features.tv && <span className="feature-item">📺 TV</span>}
          {room.features.minibar && <span className="feature-item">🍷 Minibar</span>}
        </div>
        <div className="room-status">
          <span className={`status-badge ${room.availability ? 'available' : 'unavailable'}`}>
            {room.availability ? 'Available' : 'Unavailable'}
          </span>
        </div>
      </div>
    </div>
  );
};
