import axios from 'axios'

export default axios.create({
    baseURL:'https://api.yelp.com/v3/businesses',
    headers:{
        Authorization:'Bearer tQjvsxgZ5Wqh-n6X5VhItaUcTQTblyYT8u9GvqRpxPJWvx9VDcthHNuqaedEGclOhzSZoJlTSW1mvzdVyq0__WPMOYZzZplzy5dr-dGDjUJvtNG6EvH6mkKov-qZXnYx', 
    }
})

