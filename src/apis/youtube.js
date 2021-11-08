import axios from 'axios';

const KEY = 'AIzaSyA7_3f4_p4RMWTaz5blS1rbpM5MyMEBUkw';

export default axios.create({
    baseURL: 'https://www.googleapis.com/youtube/v3',
    params: {
        part: 'snippet',
        type:'video',
        maxResults: 5,
        key: KEY
    }
});

