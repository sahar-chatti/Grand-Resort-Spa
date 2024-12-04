import React, { useState, useEffect } from 'react';
import { Room } from '../types/room';
import { RoomCard } from './RoomCard';
import './RoomList.css';
import logo from './hotel-hero.png'
export const RoomList: React.FC = () => {
  const [rooms, setRooms] = useState<Room[]>([]);
  const [filteredRooms, setFilteredRooms] = useState<Room[]>([]);
  const [page, setPage] = useState(1);
  const [total, setTotal] = useState(0);
  const [loading, setLoading] = useState(true);
  const [searchTerm, setSearchTerm] = useState('');
  const [priceFilter, setPriceFilter] = useState('all');
  const ITEMS_PER_PAGE = 6;

  useEffect(() => {
    const fetchRooms = async () => {
      try {
        setLoading(true);
        const response = await fetch(`http://localhost:3001/rooms?page=${page}&limit=${ITEMS_PER_PAGE}`);
        const data = await response.json();
        setRooms(data.rooms || []);
        setFilteredRooms(data.rooms || []);
        setTotal(data.total || 0);
      } finally {
        setLoading(false);
      }
    };

    fetchRooms();
  }, [page]);

  useEffect(() => {
    const filtered = rooms.filter(room => {
      const matchesSearch = room.name.toLowerCase().includes(searchTerm.toLowerCase()) ||
                          room.type.toLowerCase().includes(searchTerm.toLowerCase());
      
      let matchesPrice = true;
      if (priceFilter === 'low') matchesPrice = room.price <= 80;
      if (priceFilter === 'medium') matchesPrice = room.price > 80 && room.price <= 100;
      if (priceFilter === 'high') matchesPrice = room.price >100;

      return matchesSearch && matchesPrice;
    });

    setFilteredRooms(filtered);
  }, [searchTerm, priceFilter, rooms]);

  return (
    <>

    <nav className="navbar">
    <div className="navbar-container">
      <div className="logo">
        <img src={logo} alt="" />
        <span>Grand Resort & Spa</span>
      </div>
      <div className="nav-links">
        <a href="#home">Home</a>
        <a href="#rooms">Rooms</a>
        <a href="#dining">Dining</a>
        <a href="#spa">Spa</a>
        <a href="#contact">Contact</a>
        <button className="book-now">Book Now</button>
      </div>
    </div>
  </nav>
   

  <div className="hero-section">
    <h1>Welcome to Luxury Living</h1>
    <p>Experience unparalleled comfort and elegance</p>
  </div>
    <div className="room-list">
      <h1>Available Rooms</h1>
      <div className="filters">
        <input
          type="text"
          placeholder="Search rooms..."
          value={searchTerm}
          onChange={(e) => setSearchTerm(e.target.value)}
          className="search-input"
        />
        <select
          value={priceFilter}
          onChange={(e) => setPriceFilter(e.target.value)}
          className="price-filter"
          title="Price range filter"

        >
          <option value="all">All Prices</option>
          <option value="low">Under $80</option>
          <option value="medium">$80 - $100</option>
          <option value="high">Above $100</option>
        </select>
      </div>
      {loading ? (
        <div className="loading">Loading...</div>
      ) : (
        <>
          <div className="rooms-grid">
            {filteredRooms.map(room => (
              <RoomCard key={room.id} room={room} />
            ))}
            {filteredRooms.length === 0 && (
              <div className="no-results">No rooms match your criteria</div>
            )}
          </div>
          <div className="pagination">
            <button 
              onClick={() => setPage(p => Math.max(1, p - 1))}
              disabled={page === 1}
            >
              Previous
            </button>
            <span>Page {page}</span>
            <button 
              onClick={() => setPage(p => p + 1)}
              disabled={page * ITEMS_PER_PAGE >= total}
            >
              Next
            </button>
          </div>
        </>
      )}
    </div>
    </>
  );
};
