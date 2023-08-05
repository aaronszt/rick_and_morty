// const axios = require("axios");

// const getCharById = (res, id) => {
//     axios(`https://rickandmortyapi.com/api/character/${id}`)
//     .then(response => response.data)
//     .then(({name, gender, species, origin, image, status}) => {
//         const character = {
//             id,
//             name,
//             gender,
//             species,
//             origin: origin,
//             image,
//             status
//         }

//         return res
//                 .writeHead(200, {"Content-type": "application/json"})
//                 .end(JSON.stringify(character))
//     })
//     .catch(error => {
//         return res                        
//                 .writeHead(500, {"Content-type": "text/plain"})
//                 .end(error.message) 
//     })
// }





// module.exports = {
//     getCharById
// };
const URL = "https://rickandmortyapi.com/api/character";
const axios = require("axios");

const getCharById = async (req, res) => {
    try {
        const {id} = req.params;
        const {data} = await axios(`${URL}/${id}`);
        const {status, species, name, origin, image, gender} = data;
        
        if (!name) throw Erorr (`ID: ${id} Not found`);
            
        const character = { 
            id,
            name,
            species,
            origin,
            image,
            gender,
            status
        }

        return res.status(200).json(character)
            
    } catch (error) {
        return error.message.includes("ID")
        ? res.status(404).send(error.message)
        : res.status(500).send(error.message)
    }
}


module.exports = {
    getCharById
}