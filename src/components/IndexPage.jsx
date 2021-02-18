import React from 'react'
import api from './api'
import Img2 from '../assets/img/123313756_990631711436286_1785987615958385750_n.jpg'
import Masonry from 'react-masonry-css'



const IndexPage = () => {
    // Create state variables
    const Grid = document.querySelector('.my-masonry-grid')
    let [responseData, setResponseData] = React.useState( [  Img2],[])
    let [images1, setResponseData2] = React.useState( [])
     let images =[]
    // fetches data
    const  fetchData = (e) => {
        e.preventDefault()
        const body = document.querySelector('body')
        const Grid = document.querySelector('.imgGrid')

        api.getData()
            .then((response)=>{

                response.data.photos.forEach(el => {
                 let image = document.createElement('img')

                  image.src = el.img_src
                   Grid.appendChild(image)







                })
                console.log(response)
                setResponseData2(images)
                console.log('images1 is ' + images1)



            })
            .catch((error) => {
                console.log(error)
            })
        console.log('data is ' + responseData)
    }


    return (
        <div >


            <button onClick={(e) => fetchData(e)} type='button'>Click Me For Data</button>
           <div className="imgGrid">

           </div>


        </div>
    )
}

export default IndexPage
