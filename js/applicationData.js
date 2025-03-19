// This file contains the data structure for device programs.
const dishwasherPrograms = {
    "Eco": {
      totalDuration: 237, // 3 hours and 57 minutes in minutes
      phases: [
        {"name": "Pre-Wash",   "duration": 15,  "power": 10},
        {"name": "Main Wash",  "duration": 130, "power": 75},
        {"name": "Rinse Cycle", "duration": 47,  "power": 75},
        {"name": "Drying",     "duration": 45,  "power": 500},
      ],
    },
    "Normal": {
      totalDuration: 135, // 2 hours and 15 minutes in minutes
      phases: [
        {"name": "Pre-Wash",   "duration": 10,  "power": 10},
        {"name": "Main Wash",  "duration": 80,  "power": 75},
        {"name": "Rinse Cycle", "duration": 20,  "power": 75},
        {"name": "Drying",     "duration": 25,  "power": 500},
      ],
    },
    "Quick": {
      totalDuration: 90, // 1 hour and 30 minutes in minutes
      phases: [
        {"name": "Pre-Wash",   "duration": 5,   "power": 10},
        {"name": "Main Wash",  "duration": 45,  "power": 75},
        {"name": "Rinse Cycle", "duration": 15,  "power": 75},
        {"name": "Drying",     "duration": 25,  "power": 500},
      ],
    },
    "Intensive": {
      totalDuration: 165, // 2 hours and 45 minutes in minutes
      phases: [
        {"name": "Pre-Wash",   "duration": 10,  "power": 10},
        {"name": "Main Wash",  "duration": 90,  "power": 75},
        {"name": "Rinse Cycle", "duration": 20,  "power": 75},
        {"name": "Drying",     "duration": 45,  "power": 500},
      ],
    },
  };
