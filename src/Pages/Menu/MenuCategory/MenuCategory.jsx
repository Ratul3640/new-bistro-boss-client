import React from 'react';

import MenuItem from '../../Sheard/MenuItem/MenuItem';
import Cover from '../../Sheard/Cover/Cover';

const MenuCategory = ({ items, title, img }) => {



    return (
        <div className='pt-8'>
            {title && <Cover img={img} title={title}></Cover>}
            <div className='grid md:grid-cols-2 gap-4 mt-16'>
                {items.map(item => <MenuItem key={item._id} item={item}></MenuItem>)}
            </div>
        </div>
    );
};

export default MenuCategory;