import config from '../config';

// const URL_CATEGORIES = `${config.URL_BACKEND_TOP}/categories`;
// const VIDEO_URL_CATEGORIES = `${URL_CATEGORIES}?_embed=videos`;

const VIDEO_URL = `${config.URL_BACKEND_TOP}/videos`;

function create(videoObject) {
    return fetch(`${VIDEO_URL}?_embed=videos`, {
        method: 'POST',
        headers: {
            'Content-type': 'application/json',
        },
        body: JSON.stringify(videoObject),
    })
    .then(async (serverFeedback) =>{
     if(serverFeedback.ok) {
       const feedback = await serverFeedback.json();
       return feedback;
    }
     throw new Error('Not able reaching data');
    });
}

export default {
    create,
};
