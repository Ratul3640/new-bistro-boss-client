
import SectionTitle from '../../../Components/SectionTitle/SectionTitle';
import MenuItem from '../../Sheard/MenuItem/MenuItem';
import useMenu from '../../../Hooks/useMenu';

const PopularMenu = () => {
    const [menu] = useMenu();
    const popular=menu.filter(item=>item.category==='popular')
    // const [menu, setMenu] = useState([]);
    // useEffect(() => {
    //     fetch('menu.json')
    //         .then(res => res.json())
    //         .then(data => {
    //             const PopularItems = data.filter(item => item.category === 'popular')
    //             setMenu(PopularItems)
    //         })
    // },[])
    return (
        <section className='mb-12'>
            <SectionTitle
                heading={'From Our Menu'}
                subHeading={'Popular Menu'}
            ></SectionTitle>
            <div className='grid md:grid-cols-2 gap-4 '>
                {popular.map(item => <MenuItem key={item._id} item={item}></MenuItem>)}
            </div>
        </section>
    );
};

export default PopularMenu;