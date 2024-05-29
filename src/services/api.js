// src/services/api.js
const mockData = [
  {
    "floorName": "Premier étage",
    "floorNumber": 1,
    "occupancyPercentage": 60,
    "rooms": [
      { "roomNumber": 101, "occupancy": true },
      { "roomNumber": 102, "occupancy": false },
      { "roomNumber": 103, "occupancy": undefined },
      { "roomNumber": 104, "occupancy": false },
      { "roomNumber": 105, "occupancy": true }
    ]
  },
  {
    "floorName": "Deuxième étage",
    "floorNumber": 2,
    "occupancyPercentage": 75,
    "rooms": [
      { "roomNumber": 201, "occupancy": false },
      { "roomNumber": 202, "occupancy": true },
      { "roomNumber": 203, "occupancy": true },
      { "roomNumber": 204, "occupancy": true },
      { "roomNumber": 205, "occupancy": false }
    ]
  },
  {
    "floorName": "Troisième étage",
    "floorNumber": 3,
    "occupancyPercentage": 80,
    "rooms": [
      { "roomNumber": 80, "occupancy": false },
      { "roomNumber": 202, "occupancy": true },
      { "roomNumber": 203, "occupancy": true },
      { "roomNumber": 3094, "occupancy": true },
      { "roomNumber": 40, "occupancy": false }
    ]
  },
 
];

export const fetchBuildingOccupancy = () => {
  
  return new Promise((resolve) => {
    setTimeout(() => resolve(mockData), 1000);
  });
};
