import React from 'react';

const MenuItem = ({ item }) => {
    const { name, image, recipe, price } = item;
    return (
        <div className='flex space-x-2'>
            <img style={{borderRadius:'0 200px 200px 200px'}} className='w-[80px]' src={image} alt="" />
            <div>
                <h3 className='uppercase text-start text-xl'>{name}-------</h3>
                <p className='text-start'>{recipe}</p>
            </div>
            <p className='text-yellow-500'>${price}</p>
        </div>
    );
};

export default MenuItem;