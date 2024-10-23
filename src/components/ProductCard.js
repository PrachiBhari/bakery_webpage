import './ProductCard.css';

const ProductCard = ({ product }) => {
    return (
      <div className="product-card">
        <img src={product.img} alt={product.name} />
        <h3>{product.name}</h3>
        <p>{product.description}</p>
        <p>{product.price}</p>
      </div>
    );
  }
  
  export default ProductCard;
  