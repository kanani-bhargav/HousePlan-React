import React from 'react'
import CollectionCard from './CollectionCard';
import { useSelector } from 'react-redux';

const PlanCollection = () => {
    const subCategoryData = useSelector((state) => state.subCategoryReducer);
    console.log('File: PlanCollection.js', 'Line 7:',subCategoryData.subcategory );

  return (
    <div className=' py-5'>
        <h3>Home Plan Collections</h3>
    <div className='row px-1'>
    {
        subCategoryData.subcategory.map((val,ind)=>{
             if(ind<4){
                return (<CollectionCard imageUrl={val.subCategory_image} categoryName={val.subCategory_name} key={ind}/>)
             }
             else{
                return null
             }
        })
        }
    </div>
    <a className='text-end d-block '>Search all Collections »</a>

    </div>
  )
}

export default PlanCollection
