import express from 'express';

const app = express();

const PORT = 3000;

const USERS = [
    {
        "id": 1,
        "name": "John Doe",
        "city": "New York",
        "email": "johndoe@example.com"
    },
    {
        "id": 2,
        "name": "Jane Smith",
        "city": "Los Angeles",
        "email": "janesmith@example.com"
    },
    {
        "id": 3,
        "name": "Alice Johnson",
        "city": "Chicago",
        "email": "alicejohnson@example.com"
    },
    {
        "id": 4,
        "name": "Bob Williams",
        "city": "Houston",
        "email": "bobwilliams@example.com"
    },
    {
        "id": 5,
        "name": "Emily Brown",
        "city": "Phoenix",
        "email": "emilybrown@example.com"
    },
    {
        "id": 6,
        "name": "David Wilson",
        "city": "Philadelphia",
        "email": "davidwilson@example.com"
    },
    {
        "id": 7,
        "name": "Olivia Davis",
        "city": "San Antonio",
        "email": "oliviadavis@example.com"
    },
    {
        "id": 8,
        "name": "Michael Garcia",
        "city": "San Diego",
        "email": "michaelgarcia@example.com"
    },
    {
        "id": 9,
        "name": "Sophia Rodriguez",
        "city": "Dallas",
        "email": "sophiarodriguez@example.com"
    },
    {
        "id": 10,
        "name": "James Miller",
        "city": "San Jose",
        "email": "jamesmiller@example.com"
    },
    {
        "id": 11,
        "name": "Ava Martinez",
        "city": "Austin",
        "email": "avamartinez@example.com"
    },
    {
        "id": 12,
        "name": "Ethan Hernandez",
        "city": "Jacksonville",
        "email": "ethanhernandez@example.com"
    },
    {
        "id": 13,
        "name": "Isabella Lopez",
        "city": "Fort Worth",
        "email": "isabellalopez@example.com"
    },
    {
        "id": 14,
        "name": "Daniel Wilson",
        "city": "Columbus",
        "email": "danielwilson@example.com"
    },
    {
        "id": 15,
        "name": "Sofia Moore",
        "city": "Charlotte",
        "email": "sofiamoore@example.com"
    },
    {
        "id": 16,
        "name": "Matthew Taylor",
        "city": "Indianapolis",
        "email": "matthewtaylor@example.com"
    },
    {
        "id": 17,
        "name": "Mia Thomas",
        "city": "San Francisco",
        "email": "miathomas@example.com"
    },
    {
        "id": 18,
        "name": "William Anderson",
        "city": "Seattle",
        "email": "williamanderson@example.com"
    },
    {
        "id": 19,
        "name": "Abigail Martin",
        "city": "Denver",
        "email": "abigailmartin@example.com"
    },
    {
        "id": 20,
        "name": "Joseph Lee",
        "city": "Washington",
        "email": "josephlee@example.com"
    },
    {
        "id": 21,
        "name": "Evelyn Clark",
        "city": "Boston",
        "email": "evelynclark@example.com"
    },
    {
        "id": 22,
        "name": "Benjamin Hall",
        "city": "Detroit",
        "email": "benjaminhall@example.com"
    },
    {
        "id": 23,
        "name": "Harper Young",
        "city": "Memphis",
        "email": "harpery@example.com"
    },
    {
        "id": 24,
        "name": "Logan King",
        "city": "Nashville",
        "email": "loganking@example.com"
    },
    {
        "id": 25,
        "name": "Ella Scott",
        "city": "Baltimore",
        "email": "ellascott@example.com"
    },
    {
        "id": 26,
        "name": "Caleb Brown",
        "city": "Oklahoma City",
        "email": "calebbrown@example.com"
    },
    {
        "id": 27,
        "name": "Eleanor Jones",
        "city": "Portland",
        "email": "eleanorjones@example.com"
    },
    {
        "id": 28,
        "name": "Henry Davis",
        "city": "Las Vegas",
        "email": "henrydavis@example.com"
    },
    {
        "id": 29,
        "name": "Grace Garcia",
        "city": "Louisville",
        "email": "gracegarcia@example.com"
    },
    {
        "id": 30,
        "name": "Alexander Wilson",
        "city": "Atlanta",
        "email": "alexanderwilson@example.com"
    },
    {
        "id": 31,
        "name": "Scarlett Robinson",
        "city": "Phoenix",
        "email": "scarlettrobinson@example.com"
    },
    {
        "id": 32,
        "name": "Ryan Lewis",
        "city": "San Antonio",
        "email": "ryanlewis@example.com"
    },
    {
        "id": 33,
        "name": "Amelia Allen",
        "city": "San Diego",
        "email": "ameliaallen@example.com"
    },
    {
        "id": 34,
        "name": "Noah Carter",
        "city": "Dallas",
        "email": "noahcarter@example.com"
    },
    {
        "id": 35,
        "name": "Evelyn Young",
        "city": "San Jose",
        "email": "evelynyoung@example.com"
    },
    {
        "id": 36,
        "name": "Liam Moore",
        "city": "Austin",
        "email": "liamoore@example.com"
    },
    {
        "id": 37,
        "name": "Ella Davis",
        "city": "Jacksonville",
        "email": "elladavis@example.com"
    },
    {
        "id": 38,
        "name": "Oliver Martin",
        "city": "Fort Worth",
        "email": "olivermartin@example.com"
    },
    {
        "id": 39,
        "name": "Sophia Hernandez",
        "city": "Columbus",
        "email": "sophiahernandez@example.com"
    },
    {
        "id": 40,
        "name": "James Taylor",
        "city": "Charlotte",
        "email": "jamest@example.com"
    },
    {
        "id": 41,
        "name": "Mia Wilson",
        "city": "Indianapolis",
        "email": "miawilson@example.com"
    },
    {
        "id": 42,
        "name": "Ethan Brown",
        "city": "San Francisco",
        "email": "ethanbrown@example.com"
    },
    {
        "id": 43,
        "name": "Isabella Garcia",
        "city": "Seattle",
        "email": "isabellagarcia@example.com"
    },
    {
        "id": 44,
        "name": "Daniel Lopez",
        "city": "Denver",
        "email": "daniellopez@example.com"
    },
    {
        "id": 45,
        "name": "Sofia Jones",
        "city": "Washington",
        "email": "sofiajones@example.com"
    },
    {
        "id": 46,
        "name": "Matthew Rodriguez",
        "city": "Boston",
        "email": "matthewrodriguez@example.com"
    },
    {
        "id": 47,
        "name": "Ava Lee",
        "city": "Detroit",
        "email": "avalee@example.com"
    },
    {
        "id": 48,
        "name": "William Allen",
        "city": "Memphis",
        "email": "williamallen@example.com"
    },
    {
        "id": 49,
        "name": "Abigail Carter",
        "city": "Nashville",
        "email": "abigailcarter@example.com"
    },
    {
        "id": 50,
        "name": "Joseph Young",
        "city": "Baltimore",
        "email": "josephyoung@example.com"
    },
    {
        "id": 51,
        "name": "Evelyn Moore",
        "city": "Oklahoma City",
        "email": "evelynmoore@example.com"
    },
    {
        "id": 52,
        "name": "Logan Davis",
        "city": "Portland",
        "email": "logandavis@example.com"
    },
    {
        "id": 53,
        "name": "Ella Martin",
        "city": "Las Vegas",
        "email": "ellamartin@example.com"
    },
    {
        "id": 54,
        "name": "Caleb Hernandez",
        "city": "Louisville",
        "email": "calebhernandez@example.com"
    },
    {
        "id": 55,
        "name": "Eleanor Taylor",
        "city": "Atlanta",
        "email": "eleanort@example.com"
    },
    {
        "id": 56,
        "name": "Henry Brown",
        "city": "Phoenix",
        "email": "henrybrown@example.com"
    },
    {
        "id": 57,
        "name": "Grace Wilson",
        "city": "San Antonio",
        "email": "gracewilson@example.com"
    },
    {
        "id": 58,
        "name": "Alexander Garcia",
        "city": "San Diego",
        "email": "alexandergarcia@example.com"
    },
    {
        "id": 59,
        "name": "Scarlett Lopez",
        "city": "Dallas",
        "email": "scarlettlopez@example.com"
    },
    {
        "id": 60,
        "name": "Ryan Jones",
        "city": "San Jose",
        "email": "ryanjones@example.com"
    },
    {
        "id": 61,
        "name": "Amelia Rodriguez",
        "city": "Austin",
        "email": "ameliarodriguez@example.com"
    },
    {
        "id": 62,
        "name": "Noah Allen",
        "city": "Jacksonville",
        "email": "noahallen@example.com"
    },
    {
        "id": 63,
        "name": "Evelyn Carter",
        "city": "Fort Worth",
        "email": "evelyncarter@example.com"
    },
    {
        "id": 64,
        "name": "Liam Young",
        "city": "Columbus",
        "email": "liamy@example.com"
    },
    {
        "id": 65,
        "name": "Ella Moore",
        "city": "Charlotte",
        "email": "ellamoor@example.com"
    },
    {
        "id": 66,
        "name": "Oliver Davis",
        "city": "Indianapolis",
        "email": "oliverd@example.com"
    },
    {
        "id": 67,
        "name": "Sophia Martin",
        "city": "San Francisco",
        "email": "sophiamartin@example.com"
    },
    {
        "id": 68,
        "name": "James Hernandez",
        "city": "Seattle",
        "email": "jameshernandez@example.com"
    },
    {
        "id": 69,
        "name": "Mia Taylor",
        "city": "Denver",
        "email": "miataylor@example.com"
    },
    {
        "id": 70,
        "name": "Ethan Brown",
        "city": "Washington",
        "email": "ethanbrown@example.com"
    },
    {
        "id": 71,
        "name": "Isabella Garcia",
        "city": "Boston",
        "email": "isabellagarcia@example.com"
    },
    {
        "id": 72,
        "name": "Daniel Lopez",
        "city": "Detroit",
        "email": "daniellopez@example.com"
    },
    {
        "id": 73,
        "name": "Sofia Jones",
        "city": "Memphis",
        "email": "sofiajones@example.com"
    },
    {
        "id": 74,
        "name": "Matthew Rodriguez",
        "city": "Nashville",
        "email": "matthewrodriguez@example.com"
    },
    {
        "id": 75,
        "name": "Ava Lee",
        "city": "Baltimore",
        "email": "avalee@example.com"
    },
    {
        "id": 76,
        "name": "William Allen",
        "city": "Oklahoma City",
        "email": "williamallen@example.com"
    },
    {
        "id": 77,
        "name": "Abigail Carter",
        "city": "Portland",
        "email": "abigailcarter@example.com"
    },
    {
        "id": 78,
        "name": "Joseph Young",
        "city": "Las Vegas",
        "email": "josephyoung@example.com"
    },
    {
        "id": 79,
        "name": "Evelyn Moore",
        "city": "Louisville",
        "email": "evelynmoore@example.com"
    },
    {
        "id": 80,
        "name": "Logan Davis",
        "city": "Atlanta",
        "email": "logandavis@example.com"
    },
    {
        "id": 81,
        "name": "Ella Martin",
        "city": "Phoenix",
        "email": "ellamartin@example.com"
    },
    {
        "id": 82,
        "name": "Caleb Hernandez",
        "city": "San Antonio",
        "email": "calebhernandez@example.com"
    },
    {
        "id": 83,
        "name": "Eleanor Taylor",
        "city": "San Diego",
        "email": "eleanort@example.com"
    },
    {
        "id": 84,
        "name": "Henry Brown",
        "city": "Dallas",
        "email": "henrybrown@example.com"
    },
    {
        "id": 85,
        "name": "Grace Wilson",
        "city": "San Jose",
        "email": "gracewilson@example.com"
    },
    {
        "id": 86,
        "name": "Alexander Garcia",
        "city": "Austin",
        "email": "alexandergarcia@example.com"
    },
    {
        "id": 87,
        "name": "Scarlett Lopez",
        "city": "Jacksonville",
        "email": "scarlettlopez@example.com"
    },
    {
        "id": 88,
        "name": "Ryan Jones",
        "city": "Fort Worth",
        "email": "ryanjones@example.com"
    },
    {
        "id": 89,
        "name": "Amelia Rodriguez",
        "city": "Columbus",
        "email": "ameliarodriguez@example.com"
    },
    {
        "id": 90,
        "name": "Noah Allen",
        "city": "Charlotte",
        "email": "noahallen@example.com"
    },
    {
        "id": 91,
        "name": "Evelyn Carter",
        "city": "Indianapolis",
        "email": "evelyncarter@example.com"
    },
    {
        "id": 92,
        "name": "Liam Young",
        "city": "San Francisco",
        "email": "liamy@example.com"
    },
    {
        "id": 93,
        "name": "Ella Moore",
        "city": "Seattle",
        "email": "ellamoor@example.com"
    },
    {
        "id": 94,
        "name": "Oliver Davis",
        "city": "Denver",
        "email": "oliverd@example.com"
    },
    {
        "id": 95,
        "name": "Sophia Martin",
        "city": "Washington",
        "email": "sophiamartin@example.com"
    },
    {
        "id": 96,
        "name": "James Hernandez",
        "city": "Boston",
        "email": "jameshernandez@example.com"
    },
    {
        "id": 97,
        "name": "Mia Taylor",
        "city": "Detroit",
        "email": "miataylor@example.com"
    },
    {
        "id": 98,
        "name": "Ethan Brown",
        "city": "Memphis",
        "email": "ethanbrown@example.com"
    },
    {
        "id": 99,
        "name": "Isabella Garcia",
        "city": "Nashville",
        "email": "isabellagarcia@example.com"
    },
    {
        "id": 100,
        "name": "Daniel Lopez",
        "city": "Baltimore",
        "email": "daniellopez@example.com"
    }
]


app.get('/', (req, res) => {
    res.send('Hello World');
});

app.get('/users', (req, res) => {
    res.status(200).json(USERS);
});

app.listen(PORT, () => {
    console.log(`Server is running on port ${PORT}`);
});