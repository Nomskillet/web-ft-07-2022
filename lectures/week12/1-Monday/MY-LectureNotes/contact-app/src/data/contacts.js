import { v4 as uuidv4 } from 'uuid'



const contacts = [
    {
        id: uuidv4(),
        name: "Randy Marsh",
        number: "123-123-1234",
        email: "randy@sp.com",
        address: "123 South Park Lane",
        city: "South Park",
        state: "CO",
        zip: "12345"
     },
     {
        id: uuidv4(),
        name: "Darth Vader",
        number: "123-123-1234",
        email: "vaderrulez@sw.com",
        address: "567 Dark Side Street",
        city: "Death Star",
        state: "Space",
        zip: "90909"
     },
     {
        id: uuidv4(),
        name: "Sarah Conner",
        number: "Unknown",
        email: "Unknown",
        address: "Unknown",
        city: "Unknown",
        state: "Unknown",
        zip: "Unknown"
     },
     {
        id: uuidv4(),
        name: "Beatrix Kiddo",
        number: "123-123-1234",
        email: "thebride@kb.com",
        address: "565 Revenge Road",
        city: "El Paso",
        state: "TX",
        zip: "76543"
     },
     {
        id: uuidv4(),
        name: "Ash Williams",
        number: "123-123-1234",
        email: "ash@ed.com",
        address: "666 Hells Bells",
        city: "Hell",
        state: "Hell",
        zip: "67676",
        isFavorite: false
     },
    ]


    export default contacts;