import React from "react";
import Masonry from 'react-masonry-css'
import Picture from "./Masonry";

import Img1 from '../assets/img/117283050_283244616291894_2671388710331678751_n.jpg'
import Img2 from '../assets/img/123313756_990631711436286_1785987615958385750_n.jpg'
import {Row,Col} from 'react-bootstrap'

function Home() {

    var items = [
        {id: 1, name: 'My First Item'},
        {id: 2, name: 'Another item'},
        {id: 3, name: 'Third Item'},
        {id: 4, name: 'Here is the Fourth'},
        {id: 5, name: 'High Five'}
    ];
    items = items.map(function(item) {
        return <img key={item.id} src={Img2}/>
    });

    return (<div>
            <Masonry
                breakpointCols={3}
                className="my-masonry-grid"
                columnClassName="my-masonry-grid_column">
                {items}
            </Masonry>



        </div>

    )
}
export default Home
