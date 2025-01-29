                                                    
                                                                                                                
import {useState} from 'react';

export default function ProductList() {
  const products = [
    {
        id: 1,
        name: 'Iphone 12',
        price: 700,
        image: 'https://cdn.pixabay.com/photo/2016/11/20/08/33/camera-1842202__480.jpg'
    },
    {
        id: 2,
        name: 'Samsung s10',
        price: 400,
        image: 'https://cdn.pixabay.com/photo/2016/03/27/19/43/samsung-1283938__340.jpg'
    },
    {
        id: 3,
        name: 'Samsung Tv',
        price: 1200,
        image: 'https://cdn.pixabay.com/photo/2019/06/30/18/19/tv-4308538__480.jpg'
    },
    {
        id: 4,
        name: 'Huwawei Mate',
        price: 900,
        image: 'https://cdn.pixabay.com/photo/2017/08/11/14/19/honor-2631271__340.jpg'
    }
  ];
  const [productToShow, setProductToShow] = useState(2);

  const loadMoreProducts = () => {
      if(productToShow >= products.length){
          return;
      }else{
          setProductToShow(prevProductToShow => prevProductToShow + 2);
      }
  }

  return (
    <div className="row my-4">
        {
            products.slice(0, productToShow).map(product => (
              <div className="col-md-4" key={product.id}>
                <div className="card mb-2" style={{width: '18rem'}}>
                    <img src={product.image} className="card-img-top" alt={product.name} />
                    <div className="card-body">
                        <h5 className="card-title">{product.name}</h5>
                        <p className="card-text">Some quick example text to build on the card title and make up the bulk of the card's content.</p>
                        <button className="btn btn-primary">
                            <i className="bi bi-cart-check-fill"></i> Add to cart
                        </button>
                    </div>
                </div>
            </div>
            ))
        }
        {
          productToShow < products.length && <div className="my-3">
              <button className="btn btn-danger" onClick={() => loadMoreProducts()}>
                  Looad more
              </button>
          </div>
        }
    </div>
  )
}


                                                    
                                                