import { useEffect, useState} from "react";
import { PiSquaresFour } from "react-icons/pi";
import { CgCloseO } from "react-icons/cg";
import { BsFilterLeft } from "react-icons/bs";
import Header from "../Header";
import Product from "../Product";
import Footer from "../Footer";
import './index.css'

const Home = ({cartDataList, setCartDataList}) => {
    const [productsList, setProductsList] = useState([])
    const [sortOption, setSortOption] = useState('RECOMENDED')
    const [isClickFilter, setIsClickFilter] = useState(false)
    const [category, setCategory] = useState('all')
    const [filteredList, setFilteredList] = useState(productsList)
    const renderList = category==='all' ? productsList : filteredList
    const displayFilter = isClickFilter ? "display-filter" : "hide-filter"

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

    useEffect(() => {
        if (category === 'all') {
            setFilteredList(productsList);
        } else {
            setFilteredList(
                productsList.filter(product => product.category === category)
            );
        }
    }, [category, productsList]);

    
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

    const addToCartList = id => {
        const cartItem = renderList.find(each => each.id === id)
        if (cartItem) {
            setCartDataList(prevState => [...prevState, cartItem])
        }
    }
    //console.log(cartDataList)
    const onChangeSortOption = event => {
        setSortOption(event.target.value)
    }
    const onClickFilter = () => {
        setIsClickFilter(true)
    }
    const onClickClose = () => {
        setIsClickFilter(false)
    }
    
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
                            <h2 className="category-text">Filter</h2>
                            <CgCloseO className="close-filter" type="button" onClick={onClickClose}/>
                        </div>
                        <hr />
                        <div className="filter-list-c">
                            <p>IDEAL FOR</p>
                            <select onChange={(e)=>setCategory(e.target.value)} className="category-select">
                                <option value="all" >All</option>
                                <option value="men's clothing" >Mens wear</option>
                                <option value="women's clothing" >Womens wear</option>
                                <option value="jewelery" >Jewelery</option>
                                <option value="electronics" >Electronics</option>
                            </select>
                        </div>
                        <div className="filter-list-c">
                            <p>OCCASION</p>
                            <select className="category-select">
                                <option value="all">All</option>
                                <option value="casual">Casual</option>
                                <option value="formal">Formal</option>
                                <option value="party">Party</option>
                            </select>
                        </div>
                        <div className="filter-list-c">
                            <p>FABRIC</p>
                            <select className="category-select">
                                <option value="all">All</option>
                                <option value="cotton">Cotton</option>
                                <option value="silk">Silk</option>
                                <option value="wool">Wool</option>
                                <option value="linen">Linen</option>
                            </select>
                        </div>
                        <div className="filter-list-c">
                            <p>SEGMENT</p>
                            <select className="category-select">
                                <option value="all">All</option>
                                <option value="premium">Premium</option>
                                <option value="midrange">Midrange</option>
                                <option value="budget">Budget</option>
                            </select>
                        </div>
                        <div className="filter-list-c">
                            <p>RAW MATERIALS</p>
                            <select className="category-select">
                                <option value="all">All</option>
                                <option value="cotton">Cotton</option>
                                <option value="polyester">Polyester</option>
                                <option value="wool">Wool</option>
                                <option value="silk">Silk</option>
                            </select>
                        </div>
                        <div className="filter-list-c">
                            <p>PATTERN</p>
                            <select className="category-select">
                                <option value="all">All</option>
                                <option value="solid">Solid</option>
                                <option value="floral">Floral</option>
                                <option value="stripes">Stripes</option>
                            </select>
                        </div>
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
                        <Product productDetails={each} key={each.id} addToCartList={addToCartList} />
                    ))}
                </ul>
            </div>
            <Footer />
        </div>
    )
}

export default Home