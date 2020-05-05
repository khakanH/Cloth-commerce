import React from "react";
import SHOP_DATA from "./shop_data" ;
import "../../components/collection-preview/collection-preview"
import CollectionPreview from "../../components/collection-preview/collection-preview.js";

class ShopPage extends React.Component{
    constructor(props){
        super(props);
        this.state = {collection: SHOP_DATA};
    }
    render(){
        const {collection} = this.state;
        return(
            <div className="shop-page">
                {collection.map(({id, ...otherColectionProps})=>(
                    <CollectionPreview key={id} {...otherColectionProps
                    }/>
                ))}
            </div>
        )
    }
}
export default ShopPage;

