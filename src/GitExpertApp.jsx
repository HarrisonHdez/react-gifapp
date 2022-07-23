import { useState } from "react"
import { AddCategory, GitGrid } from "./components";


export const GitExpertApp = () => {

    const [categories, setCategories] = useState(['Pokemon']);

    const onAddCategory = ( newCategory ) => {

        if( categories.includes(newCategory) ) return;
        setCategories([ newCategory, ...categories ]);
    }

  return (

    <>
        <h1>GIF Finder</h1>

        <AddCategory 
            onNewCategory={ (value) => onAddCategory(value) }
        />


        { 
            categories.map( ( category ) => (
                <GitGrid 
                    key={ category } 
                    category={ category } 
                />
            )) 
        }

    </>
  )
}
