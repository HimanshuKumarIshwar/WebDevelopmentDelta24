import Title from "./Title"
import Description from "./Description"
import "./Product.css"
function Product({title, features}){
  
    
    return (
        <>
        <div className="Product" style={style}>
        <h1>{title}</h1>
        <p>Price: {price}</p>
        <p>{features.map((feature)=> (
            <li>{feature}</li>
        ))}</p>  
        {/* <p>{price >= 10000 ? "Discount 5%": ""}</p> */}
        {/* {price>= 10000 ? <p>Discount of 5%</p>: null } */}
        {isDiscount && <p>Discount of 5%</p>}
     </div>
        </>
    )
}

export default Product;

