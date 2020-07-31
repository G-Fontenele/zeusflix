import config from '../config';

const URL_CATEGORIES = `${config.URL_BACKEND_TOP}/categories`;
const VIDEO_URL_CATEGORIES = `${URL_CATEGORIES}?_embed=videos`;

function getAll() {
    return fetch(`${URL_CATEGORIES}`)
    .then(async (serverFeedback) =>{
     if(serverFeedback.ok) {
       const feedback = await serverFeedback.json();
       return feedback;
    }
     throw new Error('Not able reaching data');
    });
}

function getAllWithVideos() {
    return fetch(VIDEO_URL_CATEGORIES)
    .then(async (serverFeedback) =>{
     if(serverFeedback.ok) {
       const feedback = await serverFeedback.json();
       return feedback;
    }
     throw new Error('Not able reaching data');
    });
}

export default {
    getAllWithVideos,
    getAll,
};
