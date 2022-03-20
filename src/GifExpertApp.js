import React, { useState } from 'react';
import { AddCategory } from './components/AddCategory';
import { GifGrid } from './components/GifGrid';

const GifExpertApp = () => {


      const categoriesInitial =  ['one puch'];
      const [categories, setcategories] = useState(categoriesInitial);

      // const handleAdd = () => {
      //       // setcategories( ['HunterXGunter', ...categories]);
      //       setcategories( cats => ['HunterXGunter',...categories])
      // }

      return (
            <>
               <h2>GifExpertApp</h2>
               <AddCategory setCategories= {setcategories}/>
               <hr></hr>
               <ol>
                     {
                      categories.map( (category) => <GifGrid category={ category } key={category}/>)
                     }
               </ol>
            </>
      );
};

export default GifExpertApp;