import 'react-mdl/extra/material.css';
import 'react-mdl/extra/material.js';
import React, { Component } from 'react';
import { Tabs, Tab, Grid, Cell, } from 'react-mdl';
import ProductInventory from './ProductInventory';
import ListingInventory from './ListingInventory';
import History from './History';

const width = window.outerWidth
console.log(width)

class ProductTabs extends Component {
    constructor(props) {
        super(props)
        this.state = { activeTab: 0 };
    }
    toggleCategorgies() {
        if (this.state.activeTab === 0) {
            return (
                <ProductInventory/>
            )
        } else if (this.state.activeTab === 1) {
            return (
                <ListingInventory />
            )
        } else if (this.state.activeTab === 2) {
            return (
                <History/>
            )
        } 
    }
    // if(width>"800px"){ return <Settings
    // }
    render() {
        return (
            <div className="category-tabs" >
                <Tabs activeTab={this.state.activeTab} onChange={(tabId) => this.setState({ activeTab: tabId })} ripple>
                    <Tab>Products</Tab>
                    <Tab>Listings</Tab>
                    <Tab>History</Tab>
                </Tabs>
                <Grid>
                    <Cell col={12}>
                        <div className="content">{this.toggleCategorgies()}</div>
                    </Cell>
                </Grid>
            </div>
        )
    }
}
export default ProductTabs;