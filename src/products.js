// import { PureComponent } from "react";
import { useEffect, useState } from "react/cjs/react.development";
import FilterableProductTable from "./filterableProductTable";

const API_URL = "https://www.amock.io.api/vd/products";

// class Products extends PureComponent {
//     constructor(props) {
//         super(props);
//         this.state = {
//             products: [],
//             isLoading: true,
//         };
//     }

//     render() {
//         if (this.state.isLoading) {
//             return (
//                 <p>Iltimos, ozroq sabr qiling. Malumotlar yuklanyapti....</p>
//             );
//         } else {
//             return <FilterableProductTable products={this.state.products} />;
//         }
//     }

//     componentDidMount() {
//         fetch(API_URL)
//             .then((response) => response.json())
//             .then((data) => {
//                 let jsonData = eval(`(` + data + `)`); // eslint-disable-line
//                 console.log(jsonData);
//                 this.setState({ products: jsonData, isLoading: false });
//             })
//             .catch((error) => {
//                 this.setState({ error, isLoading: false });
//             });
//     }
// }

export default function Products() {
    const [products, setProducts] = useState([]);
    const [isLoading, setIsLoading] = useState(true);

    useEffect(() => {
        fetch(API_URL)
            .then((response) => response.json())
            .then((data) => {
                let jsonData = eval(`(` + data + `)`); // eslint-disable-line
                console.log(jsonData);
                setProducts(jsonData);
                setIsLoading(false);
            })
            .catch((err) => {
                console.log(err);
                setIsLoading(false);
            });
    }, []);

    if (this.state.isLoading) {
        return <p>Iltimos, ozroq sabr qiling. Malumotlar yuklanyapti....</p>;
    } else {
        return <FilterableProductTable products={products} />;
    }
}

// export default Products;
