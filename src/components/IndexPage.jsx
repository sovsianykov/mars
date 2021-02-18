import React from 'react'
import api from './api'
import Img2 from '../assets/img/123313756_990631711436286_1785987615958385750_n.jpg'
import Masonry from 'react-masonry-css'



const IndexPage = () => {
    // Create state variables
    const imgGrid = document.querySelector('.imgGrid')
    let [responseData, setResponseData] = React.useState( [  Img2],[])
    let [images1, setResponseData2] = React.useState( [])
     let images =[]
    // fetches data
    const  fetchData = (e) => {
        e.preventDefault()

        api.getData()
            .then((response)=>{

                response.data.photos.forEach(el => {
                 let image = document.createElement('img')
                 let div = document.createElement('div')
                    div.className = 'imgHolder'
                  image.src = el.img_src
                   div.appendChild(image)
                   imgGrid.appendChild(div)




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
        <div>
            <h1>  </h1>

            <button onClick={(e) => fetchData(e)} type='button'>Click Me For Data</button>
            {/*<img src={responseData}  alt=""/>*/}
            {/*{responseData.data && responseData.data.map(date => {*/}
            {/*    return <p>{date}</p>*/}
            {/*})}*/}

               <div className="imgGrid">

               </div>

        </div>
    )
}

export default IndexPage
