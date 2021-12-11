import React, { PureComponent } from "react";

class Searchbar extends PureComponent {
    constructor(props) {
        super(props);
        this.state = {};
    }

    handleFilterTextChange = (e) => {
        this.props.onFilterTextChange(e.target.value);
    };

    handleInStockChange = (e) => {
        this.props.onInStockChange(e.target.value);
    };

    render() {
        return (
            <div>
                <input
                    type="text"
                    placeholder="Izlash..."
                    value={this.props.inputText}
                    onChange={this.handleFilterTextChange}
                />
                <p>
                    <input
                        type="checkbox"
                        id="onlyInStack"
                        name="onlyInStack"
                        checked={this.props.inStockOnly}
                        onChange={this.handleInStockChange}
                    />
                    <label for="onlyInStack">
                        Faqat omborda mavjud bo'lgan maxsulotlar
                    </label>
                </p>
            </div>
        );
    }
}

export default Searchbar;
