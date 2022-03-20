// raf 

import { useEffect, useState } from "react";
import { getGifs } from "../helpers/getGifs";
import { useFetchGifs } from "../hooks/useFetchGifs";
import { GifGridItem } from "./GifGridItem";


export const GifGrid = ({ category }) => {

      // const [images, setimages] = useState([]);

      const {data: imagenes, loading} = useFetchGifs(category);
      return (
            <div className="card animate__animated animate__fadeIn" >
                  <h3>{category}</h3>
                  {loading && <p>Loading</p>}
                  <div className="gallery">
                        {
                              imagenes.map( img => <GifGridItem key={img.id} {...img} />)
                        }
                  </div>
            </div>
      );
}


