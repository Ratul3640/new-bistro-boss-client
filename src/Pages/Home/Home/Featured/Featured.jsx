import React from 'react';
import SectionTitle from '../../../../Components/SectionTitle/SectionTitle';
import featuredImage from '../../../../assets/home/featured.jpg'
const Featured = () => {
    return (
        <div>
            <SectionTitle subHeading={'Check is out'} heading={'Featured item'}></SectionTitle>
            <div className='md:flex justify-center items-center py-8 px-16'>
                <div><img src={featuredImage} alt="" /></div>
                <div className='md:ml-10'>
                    <p className='uppercase my-2 text-xl'>Where can i get some?</p>
                    <p className='text-start'>Lorem, ipsum dolor sit amet consectetur adipisicing elit. Quas voluptatem aut consequatur obcaecati minima quod animi quae quos, dolorem nostrum architecto praesentium dicta harum impedit dolore aperiam eveniet in molestias inventore dignissimos dolores provident et ex exercitationem? Perspiciatis dolor consequatur voluptas nulla dolore. Placeat, asperiores! Corporis quibusdam facilis voluptatum. Ut?</p>
                    <button className='btn btn-outline my-2'>Order Now</button>
                </div>
            </div>
        </div>
    );
};

export default Featured;