export default function ProductItem(props)
{

    return(
        <>
            <div className="product-item">
                <h1>{props.name}</h1>
                <h3>{props.price}</h3>
            </div>
        </>
    )
}