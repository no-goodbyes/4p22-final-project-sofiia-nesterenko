import React from 'react';
import '../styles/Categories-bar.css';
import '../styles/Card-container.css';
import {ReactComponent as ImgCategoryElectric} from "../assets/img/Electric.svg";
import {ReactComponent as ImgCategoryHanger} from "../assets/img/Hanger.svg";
import {ReactComponent as ImgCategoryDiamond} from "../assets/img/Diamond.svg";
import { useEffect, useState } from 'react';
import Card from './Card';

const CategoriesBar = () => {

    const [products, setProducts] = useState([]);
   
    useEffect(() => {
        fetch('https://fakestoreapi.com/products')
        .then((response) => response.json())
        .then((result) => {
          setProducts(result);
        })
      }, []);
    const [filtered, setFiltered] = useState(products);

    useEffect( () => {
            setFiltered(products)
        }, [products]);

    function toFilter (category){
        if(category === 'all'){
            setFiltered(products)
        }else {
            let newProducts = [...products].filter(item => item.category === category)
            setFiltered(newProducts)
        };
    }


    return (
        <>
        <div className='CategoriesBar'>
            <button className="BodyShopCategoryButton"  onClick= {() => toFilter(`all`)}> ALL</button>
                <button className="BodyShopCategoryButton"  onClick={() => toFilter(`women's clothing`)}>
                    <ImgCategoryHanger alt="Hanger" className="BodyShopCategoryButtonImg"/>
                    Women's clothing
                </button>

                <button className="BodyShopCategoryButton" onClick= {() => toFilter(`men's clothing`)}>
                    <ImgCategoryHanger alt="Hanger" className="BodyShopCategoryButtonImg" />
                    Men's clothing
                </button>

                <button className="BodyShopCategoryButton" onClick= {() => toFilter('electronics')}>
                    <ImgCategoryElectric alt="Electric" className="BodyShopCategoryButtonImg" />
                    Electronics
                </button>

                <button className="BodyShopCategoryButton" onClick= {() => toFilter('jewelery')}>
                    <ImgCategoryDiamond alt="Diamond" className="BodyShopCategoryButtonImg" />
                    Jsewelry
                </button>
        </div>
        <div className='Card-container'>
        {filtered.map((item, index) => {
    return <Card key={index}
                  title ={item.title}
                  description={item.description}
                  image={item.image}
                  price={item.price}
                  id={item.id}/>
                })
}
    </div>
    </>
    );
};

export default CategoriesBar;