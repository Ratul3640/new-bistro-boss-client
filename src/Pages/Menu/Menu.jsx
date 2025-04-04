import React from 'react';
import { Helmet } from 'react-helmet';
import Cover from '../Sheard/Cover/Cover';
import menuImg from '../../assets/menu/banner3.jpg'
import pizzaImg from '../../assets/menu/pizza-bg.jpg'
import saladImg from '../../assets/menu/salad-bg.jpg'
import soupImg from '../../assets/menu/soup-bg.jpg'
import dessertImg from '../../assets/menu/dessert-bg.jpeg'
import useMenu from '../../Hooks/useMenu';
import SectionTitle from '../../Components/SectionTitle/SectionTitle';
import MenuCategory from './MenuCategory/MenuCategory';
const Menu = () => {
    const [menu] = useMenu();
    const desserts = menu.filter(item => item.category === 'dessert')
    const soup = menu.filter(item => item.category === 'soup')
    const salad = menu.filter(item => item.category === 'salad')
    const pizza = menu.filter(item => item.category === 'pizza')
    const offered = menu.filter(item => item.category === 'offered')
    return (
        <div>
            <Helmet>
                <title>Bistro Boss || Menu</title>
            </Helmet>
            <Cover img={menuImg} title="our menu"></Cover>
            <SectionTitle subHeading="Don't Miss" heading="Todays Offer" ></SectionTitle>
            
            <MenuCategory items={offered}></MenuCategory>
            <MenuCategory items={desserts} title="Desssert" img={dessertImg}></MenuCategory>
            <MenuCategory items={pizza} title="Pizza" img={pizzaImg}></MenuCategory>
            <MenuCategory items={soup} title="Soup" img={soupImg}></MenuCategory>
        </div>
    );
};

export default Menu;