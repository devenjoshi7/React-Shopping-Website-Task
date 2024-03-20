import './Products.css' 
 
 function Products(props) {
  return (
    <div className='card'>
      <img className='card-image' src={props.image} alt='Product' height={200} width={200}></img>
      <h2 className='card-name'>{props.name}</h2>
      <h3 className='card-price'>${props.price}</h3>
    </div>
  )
}

export default Products