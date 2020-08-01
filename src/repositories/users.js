import config from '../config';

const URL_USERS = `${config.URL_BACKEND_TOP}/users`;

function create(categoryObject) {
    return fetch(URL_USERS, {
        method: 'POST',
        headers: {
            'Content-type': 'application/json',
        },
        body: JSON.stringify(categoryObject),
    })
    .then(async (serverFeedback) =>{
     if(serverFeedback.ok) {
       const feedback = await serverFeedback.json();
       return feedback;
    }
     throw new Error('Not able reaching data');
    });
}

function getAll() {
    return fetch(`${URL_USERS}`)
    .then(async (serverFeedback) =>{
     if(serverFeedback.ok) {
       const feedback = await serverFeedback.json();
       return feedback;
    }
     throw new Error('Not able reaching data');
    });
}


export default {
    getAll,
    create,
};
