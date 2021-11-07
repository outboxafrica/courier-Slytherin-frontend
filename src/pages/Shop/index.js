import React, { useContext, useState } from 'react'
import {
    Grid,
    Typography,
    TextField,
    MenuItem
} from '@mui/material';

// Custom components
import Cardlg from '../../components/Cardlg';

import { AppContext } from '../../Contexts/AppContext'

const categories = [
    {
        value: "electronics",
        label: 'Electronics',
    },
    {
        value: "jewelery",
        label: 'Jewelery',
    },
    {
        value: "men's clothing",
        label: "Men's Clothing",
    },
    {
        value: "women's clothing",
        label: "Women's Clothing",
    }
];

const priceRanges = [
    {
        value: "",
        label: 'All',
    },
    {
        value: "50",
        label: '$0 - $50',
    },
    {
        value: "100",
        label: '$51 - $100',
    },
    {
        value: "200",
        label: "$101 - $200",
    },
    {
        value: "201",
        label: "About $200",
    }
];

const Shop = () => {

    const { isLoaded, products, cart } = useContext(AppContext)

    const [isFilter, setIsFilter] = useState(false)
    const [productsData, setProductsData] = useState([])
    const [category, setCategory] = useState('')
    const [priceRange, setPriceRange] = useState('')

    // For the filtering feature of products data
    // useEffect(() =>{
    //     setProductsData(products)
    // }, [])

    const handleCategoryChange = (event) => {
        setCategory(event.target.value)
        setIsFilter(true)
    };

    const handlePriceChange = (event) => {
        setPriceRange(event.target.value)
        setIsFilter(true)
    };
 
    return (
        <Grid container spacing={4} style={{ padding: '20px 5%' }}>
            <Grid item xs={12} sm={12} md={12} lg={12} lx={12} style={{ padding: '40px 0px' }} align='center'>
                <Typography variant='h3' style={{ color: '#8a8a8a' }}>
                    Shop
                </Typography>
                <Grid container spacing={1} style={{ padding: '0px 1.5%', paddingTop: '50px' }} >
                    <Grid item xs={12} sm={12} md={6} lg={3} lx={3} align='left'>
                        <TextField
                            select
                            label="Category"
                            size='small'
                            value={category}
                            onChange={handleCategoryChange}
                            style={{ width: '100%', alignItems: 'left' }}
                            Id='textFields'
                            >
                            {categories.map((option) => (
                                <MenuItem key={option.value} value={option.value}>
                                    {option.label}
                                </MenuItem>
                            ))}
                        </TextField>
                    </Grid>
                    <Grid item xs={12} sm={12} md={6} lg={3} lx={3}></Grid>
                    <Grid item xs={12} sm={12} md={6} lg={3} lx={3}></Grid>
                    <Grid item xs={12} sm={12} md={6} lg={3} lx={3} align='right'>
                        <TextField
                            select
                            label="Sort By Price"
                            size='small'
                            value={priceRange}
                            onChange={handlePriceChange}
                            style={{ width: '100%', alignItems: 'left' }}
                            Id='textFields'
                            >
                            {priceRanges.map((option) => (
                                <MenuItem key={option.value} value={option.value}>
                                    {option.label}
                                </MenuItem>
                            ))}
                        </TextField>
                    </Grid>
                </Grid>
            </Grid>
            {isLoaded?
                <>
                    {isFilter?
                        productsData.map((product)=>(                        
                            <Grid item xs={12} sm={12} md={6} lg={4} lx={4} align='center'>
                                <Cardlg productData={product}/>
                            </Grid>
                        ))
                    :
                        products.map((product)=>(                        
                            <Grid item xs={12} sm={12} md={6} lg={4} lx={4} align='center'>
                                <Cardlg productData={product}/>
                            </Grid>
                        ))
                    }
                </>
            :
                <Grid item xs={12} sm={12} md={12} lg={12} lx={12} style={{ padding: '20px 0px' }} align='center'>
                    <Typography variant='h5' style={{ color: '#EE9F8B' }}>
                        Loading products....
                    </Typography>
                </Grid>
            }
        </Grid>
    )
}

export default Shop
