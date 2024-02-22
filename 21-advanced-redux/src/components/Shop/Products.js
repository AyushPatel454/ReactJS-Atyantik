import ProductItem from './ProductItem';
import classes from './Products.module.css';

const Products = (props) => {
  return (
    <section className={classes.products}>
      <h2>Buy your favorite products</h2>
      <ul>
        <ProductItem
          id='p1'
          title='Apple'
          price={6}
          description='My Red Apple!'
        />
        <ProductItem
          id='p2'
          title='Banana'
          price={2}
          description='This is a fresh banana'
        />
      </ul>
    </section>
  );
};

export default Products;
