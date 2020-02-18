import React from 'react'
import { PRODUCTS } from "./mock";

export class FilterableProductTable extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            filterText: '', 
            inStockOnly: false
        };

        this.handleFilterTextChange = this.handleFilterTextChange.bind(this);

        this.handleInStockChange = this.handleInStockChange.bind(this);

    }

    handleFilterTextChange(filterText) {
        this.setState({
            filterText: filterText
        });
    }

    handleInStockChange(inStockOnly) {
        this.setState({
            inStockOnly: inStockOnly
        });
    }

    render() {

        return (
            <div>
                <SearchBar 
                    filterText={this.state.filterText}
                    inStockOnly={this.state.inStockOnly}
                    onFilterTextChange = {this.handleFilterTextChange}
                    onInStockChange = {this.handleInStockChange}
                />
                <ProductTable products={PRODUCTS} 
                    filterText={this.state.filterText}
                    inStockOnly={this.state.inStockOnly}
                />
            </div>
        )
    }

}

export class SearchBar extends React.Component {
    constructor(props) {
        super(props);

        this.handleFilterTextChange = this.handleFilterTextChange.bind(this)

        this.handleInStockChange = this.handleInStockChange.bind(this)
    }

    handleFilterTextChange(e) {
        this.props.onFilterTextChange(e.target.value);
    }

    handleInStockChange(e) {
        this.props.onInStockChange(e.target.checked);
    }



    render() {
        return (
            <div>
                <input 
                    type="text" 
                    placeholder="Search..."
                    value={this.props.filterText}
                    onChange={this.handleFilterTextChange}
                ></input>

                <input 
                    type="checkbox"
                    checked={this.props.inStockOnly}
                    onChange={this.handleInStockChange}
                    
                ></input>
                <p>Somente produtos em estoque</p>
            </div>
        )
    }

}

export class ProductTable extends React.Component {
    render() {
        const filterText = this.props.filterText;
        const inStockOnly = this.props.inStockOnly;

        const rows = []
        let lastCategory = null;

        this.props.products.forEach(product => {
            if (product.name.indexOf(filterText) === -1) {
                return;
            }

            if (inStockOnly && !product.stocked) {
                return;
            }

            if (product.category !== lastCategory) {
                rows.push(
                    <ProductCategoryRow 
                        category={product.category} 
                        key={product.category}
                    />)
            }

            rows.push(
            <ProductRow
                product={product}
                key={product.name}
                />
                );
            lastCategory = product.category;
        });


        return (
            <table>
                <tr>
                    <td><h3>Name</h3></td>
                    <td><h3>Price</h3></td>
                </tr>
                <tr>
                    {rows}
                </tr>
            </table>
        )
    }

}

export class ProductRow extends React.Component {

    render() {
        return (
            <div>
                <tr>
                    <td>{this.props.product.name}</td>
                    <td>{this.props.product.price}</td>
                </tr>
            </div>
        )
    }

}

const ProductCategoryRow = props => {
    return (
        <tr>
            <th colSpan="2">{props.category}</th>
        </tr>
    )

}