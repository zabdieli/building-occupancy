// BuildingOccupancy.js
import React, { useState, useEffect } from 'react';
import { fetchBuildingOccupancy } from '../services/api';
import './BuildingOccupancy.css';

const BuildingOccupancy = () => {
  const [buildingOccupancy, setBuildingOccupancy] = useState([]);

  useEffect(() => {
    fetchBuildingOccupancy().then(data => {
      setBuildingOccupancy(data);
    });
  }, []);

  return (
    <div className="building-occupancy">
      {buildingOccupancy.map((floor, index) => (
        <div key={index} className={`floor floor-${floor.floorNumber}`}>
          <h2>{floor.floorName}</h2>
          <p>% d'occupation: {floor.occupancyPercentage}</p>
          <ul className="room-list">
            {floor.rooms.map((room, roomIndex) => (
              <li key={roomIndex} className={`room ${room.occupancy === true ? 'occupied' : (room.occupancy === false ? 'not-occupied' : 'undefined')}`}>
                {`Pièce ${room.roomNumber}`} {room.occupancy === true ? "TRUE" : (room.occupancy === false ? "FALSE" : "UNDEFINED")}
              </li>
            ))}
          </ul>
        </div>
      ))}
    </div>
  );
};

export default BuildingOccupancy;
