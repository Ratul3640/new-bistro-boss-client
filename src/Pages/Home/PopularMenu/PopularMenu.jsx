import React, { useEffect, useState } from 'react';
import SectionTitle from '../../../Components/SectionTitle/SectionTitle';
import { data } from 'react-router-dom';
import MenuItem from '../../Sheard/MenuItem/MenuItem';

const PopularMenu = () => {
    const [menu, setMenu] = useState([]);
    useEffect(() => {
        fetch('menu.json')
            .then(res => res.json())
            .then(data => {
                const PopularItems = data.filter(item => item.category === 'popular')
                setMenu(PopularItems)
            })
    })
    return (
        <section className='mb-12'>
            <SectionTitle
                heading={'From Our Menu'}
                subHeading={'Popular Menu'}
            ></SectionTitle>
            <div className='grid md:grid-cols-2 gap-4 '>
                {menu.map(item => <MenuItem key={item._id} item={item}></MenuItem>)}
            </div>
        </section>
    );
};

export default PopularMenu;