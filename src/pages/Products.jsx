import ProductItem from "../components/ProductItem";

export default function Products()
{

    return(
        <>
            <div className="products">
                
                <ProductItem name="Iphone" price ={78000}/>
                <ProductItem name="Hair Dryer" price ={1200}/>
                <ProductItem name="Samsung S23" price ={45000}/>
                <ProductItem name="Granaro Mic" price ={1100}/>
            
            </div>

            
        </>
    )
}