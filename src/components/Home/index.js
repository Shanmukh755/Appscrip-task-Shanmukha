import { useEffect, useState } from "react";
import { PiSquaresFour } from "react-icons/pi";
import { CgCloseO } from "react-icons/cg";
import { BsFilterLeft } from "react-icons/bs";
import Header from "../Header";
import Product from "../Product";
import Footer from "../Footer";
import './index.css'

const Home = () => {
    const [productsList, setProductsList] = useState([])
    const [sortOption, setSortOption] = useState('RECOMENDED')
    const [isClickFilter, setIsClickFilter] = useState(false)
    const [category, setCategory] = useState('All')
    const [filteredList, setFilteredList] = useState(productsList)
    const renderList = category==='All' ? productsList : filteredList
    useEffect(()=>{
        const fetchApi = async () => {
            try{
                const response = await fetch('https://fakestoreapi.com/products')
                const data = await response.json()
                if (response.ok){
                    setProductsList(data)
                } else{
                    console.log(data)
                }
            } catch (error) {
                console.log('Error: ', error)
            }
        }
        fetchApi()
    }, [])
    const onChangeSortOption = event => {
        setSortOption(event.target.value)
    }
    const onClickFilter = () => {
        setIsClickFilter(true)
    }
    const onClickClose = () => {
        setIsClickFilter(false)
    }
    const displayFilter = isClickFilter ? "display-filter" : "hide-filter"
    const onClickMens = () => {
        const updatedList = productsList.filter(each => each.category === "men's clothing")
        setFilteredList(updatedList)
        setIsClickFilter(false)
        setCategory('Mens Clothing')
    }
    const onClickAll = () => {
        setFilteredList(productsList)
        setIsClickFilter(false)
        setCategory('All')
    }
    const onClickWomens = () => {
        const updatedList = productsList.filter(each => each.category === "women's clothing")
        setFilteredList(updatedList)
        setIsClickFilter(false)
        setCategory("Women's Clothing")
    }
    const onClickJewelery = () => {
        const updatedList = productsList.filter(each => each.category === "jewelery")
        setFilteredList(updatedList)
        setIsClickFilter(false)
        setCategory('Jewelery')
    }
    const onClickElectronics = () => {
        const updatedList = productsList.filter(each => each.category === "electronics")
        setFilteredList(updatedList)
        setIsClickFilter(false)
        setCategory('Electronics')
    }
    useEffect(() => {
        const sortProducts = () => {
            let sortedProductsList = [...productsList];

            switch (sortOption) {
                case 'RECOMMENDED':
                    return sortedProductsList
                    break;
                case 'PRICE HIGH TO LOW':
                    sortedProductsList.sort((a, b) => b.price - a.price);
                    break;
                case 'PRICE LOW TO HIGH':
                    sortedProductsList.sort((a, b) => a.price - b.price);
                    break;
                case 'SORT BY A TO Z':
                    sortedProductsList.sort((a, b) => a.title.localeCompare(b.title));
                    break;
                default:
                    return sortedProductsList
                    break;
            }

            setProductsList(sortedProductsList);
        };

        sortProducts();
    }, [sortOption]);
    return(
        <div className='home-bg-container'>
            <div className='home-top'>
                <div className="home-top-data">
                    <PiSquaresFour className="square-icon"/>
                    <p className="home-top-text">Lorem ipsum dalor</p>
                </div>
                <div className="home-top-data1">
                    <PiSquaresFour className="square-icon"/>
                    <p className="home-top-text">Lorem ipsum dalor</p>
                </div>
                <div className="home-top-data2">
                    <PiSquaresFour className="square-icon"/>
                    <p className="home-top-text">Lorem ipsum dalor</p>
                </div>
            </div>
            <Header />
            <div className="home-heading-container">
                <h1 className="home-main-heading">DISCOVER OUR PRODUCTS</h1>
                <p className="home-main-text">
                    Lorem ipsum dolor sit amet consectetur. Amet est posuere rhoncus <br/>
                    scelerisque. Dolor integer scelerisque nibh amet mi ut elementum dolor
                </p>
            </div>
            <div className="filter-section">
                <div className="filter-row">
                    <h2 className="filter-text">FILTER</h2>
                    <BsFilterLeft onClick={onClickFilter} className="filter-icon" />
                </div>
                <div className={`filter-container ${displayFilter}`}>
                    <h2 className="follow-text1">Filter</h2>
                    <div>
                        <div className="row-direction">
                            <h2 className="category-text">Categories</h2>
                            <CgCloseO className="close-filter" type="button" onClick={onClickClose}/>
                        </div>
                        <ul className={`filter-list`}>
                            <li onClick={onClickAll}>All</li>
                            <li onClick={onClickMens}>Mens wear</li>
                            <li onClick={onClickWomens}>Womens wear</li>
                            <li onClick={onClickJewelery}>Jewelery</li>
                            <li onClick={onClickElectronics}>Electronics</li>
                        </ul>
                    </div>
                </div>
                <select className="sort-cont" onChange={onChangeSortOption}>
                    <option className="filter-text">RECOMMENDED</option>
                    <option className="filter-text">PRICE LOW TO HIGH</option>
                    <option className="filter-text">PRICE HIGH TO LOW</option>
                    <option className="filter-text">SORT BY A TO Z</option>
                </select>
            </div>
            <div className="home-products-container" id="shop">
                <h2 className="category-text h-center">{category}</h2>
                <ul className="products-list-container">
                    {renderList.map(each => (
                        <Product productDetails={each} key={each.id} />
                    ))}
                </ul>
            </div>
            <Footer />
        </div>
    )
}

export default Home