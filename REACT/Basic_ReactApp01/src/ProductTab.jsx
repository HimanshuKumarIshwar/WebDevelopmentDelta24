import Product from "./Product"
function ProductTab(){
   let options = ["Hi-tech", "Long_chargeble", "Smart-handling"]
   let options2= {a:"Hi-tech", b: "Long-chargeble", c: "random"}
      return(
        <>
         <Product title="Phone" price={12000}  features ={options}/>
         <Product title="Laptop" price={34000}  features ={options}/>
         <Product title="Pan" price={10}  features ={options}/>
</>
      )
}




export  default ProductTab;