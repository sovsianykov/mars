import axios from 'axios'

export default {
    getData: () =>
      axios({
            'method':'GET',
            'url':'https://api.nasa.gov/mars-photos/api/v1/rovers/curiosity/photos?api_key=dOh5PZrZhIk0E6uAUeu9TM92CzVuAhHHNvbRpUPf&earth_date=2020-3-3&camera=navCAM'
            //     'content-type':'application/octet-stream',
            //     'x-rapidapi-host':'example.com',
            //     'x-rapidapi-key': process.env.RAPIDAPI_KEY
            // },
            // 'params': {
            //     'search':'parameter',
            // },
        })
}
