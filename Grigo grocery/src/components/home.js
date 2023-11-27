import mm from './images/mm.jpg'
import f1 from './images/f1.jpg'
import v1 from './images/v1.jpg'
import b1 from './images/b1.jpg'
import d1 from './images/d1.jpg'
import s1 from './images/s1.jpg'
import c1 from './images/c1.jpg'
import Carousel from 'react-bootstrap/Carousel';
// import d1 from './images/d1.jpg'
import './cssfiles/home.css'
export default function Home()
{
    return(
        <div style={{ maxWidth: '100%', height: 'auto', textAlign: 'center' }}>
          
            {/* <img src={mm} style={{ maxWidth: '100%', height: 'auto' }}></img> */}

            <Carousel fade >
      <Carousel.Item>
        <img
          className="d-block w-100 h-100"
          src="https://img.freepik.com/free-photo/top-view-fresh-foods-spices-vegetables-bottom-white-table_140725-142722.jpg?w=1060&t=st=1701053019~exp=1701053619~hmac=a6fc4c4b98e4c669e0a5729c0573a7f36369d1c2724650619a7369b6391ddb2c"
          alt="First slide"
          style={{ maxWidth: '100%', height: 'auto' }}
        />
        <Carousel.Caption>
          <h3>Cereals</h3>
          <p>High quality cereals for you.</p>
        </Carousel.Caption>
      </Carousel.Item>
      <Carousel.Item>
        <img
          className="d-block w-100"
          src="https://img.freepik.com/free-photo/top-view-assortment-vegetables-paper-bag_23-2148853335.jpg?w=1060&t=st=1701052941~exp=1701053541~hmac=c1cfe334b0e4a0b5fef65b464c3f904de3037ea2853c4e3506450ab481749fb2"
          alt="Second slide"
        />
        <Carousel.Caption>
          <h3>Vegetables</h3>
          <p>Go  green vegetables.</p>
        </Carousel.Caption>
      </Carousel.Item>
      <Carousel.Item>
        <img
          className="d-block w-100 h-100"
          src="https://img.freepik.com/free-photo/delivery-concept-handsome-african-american-delivery-man-carrying-package-box-grocery-food-drink-from-store-isolated-grey-studio-background-copy-space_1258-1228.jpg?w=1060&t=st=1701055268~exp=1701055868~hmac=3342950a493da0b07bf61b8e98d66ba10dbd80a4d4926a075b56f22cd2b09de5"
          alt="First slide"
          style={{ maxWidth: '100%', height: 'auto' }}
        />
        <Carousel.Caption>
          <h3>Fastest Delivery</h3>
          <p>Get in Hand.</p>
        </Carousel.Caption>
      </Carousel.Item>
      <Carousel.Item>
        <img
          className="d-block w-100 h-100"
          src="https://img.freepik.com/premium-photo/grocery-shop-with-food-shelves-budapest_117930-1488.jpg?w=1060"
          alt="First slide"
          style={{ maxWidth: '100%', height: 'auto' }}
        />
        <Carousel.Caption>
          <h3>Multiple Items</h3>
          <p>All Items in one hand.</p>
        </Carousel.Caption>
      </Carousel.Item>
      <Carousel.Item>
        <img
          className="d-block w-100 h-100"
          src="https://img.freepik.com/free-photo/legumes-beans-assortment-healthy-vegan-protein-food_114579-57213.jpg?w=1060&t=st=1701055499~exp=1701056099~hmac=b37bc9a99e28ed4e49fece84ca9413b5a6a4541b456e4e25c57271958041846b"
          alt="First slide"
          style={{ maxWidth: '100%', height: 'auto' }}
        />
        <Carousel.Caption>
          <h3>Nuts</h3>
          <p>Healthy Nuts.</p>
        </Carousel.Caption>
      </Carousel.Item>
      {/* Add more Carousel.Items here */}
    </Carousel>

    <div style={{height:"auto",backgroundColor:"antiquexwhite",overflow:'hidden'}}>
            <div class="container mt-4">
    <div class="row">
      <div class="col-md-4 mb-4 col-sm-6">
        <div class="card">
          <img src={f1} class="card-img-top" alt="..."/>
          <div class="card-body">
            <h5 class="card-title">Fruits</h5>
            <a href="#" class="btn btn-primary">Explore</a>
            
            
          </div>
        </div>
      </div>
      <div class="col-md-4 mb-4 col-sm-6">
        <div class="card">
        <img src={v1} class="card-img-top" alt="..."/>
          <div class="card-body">
            <h5 class="card-title">Vegetables</h5>
            <a href="#" class="btn btn-warning">Explore</a>
          </div>
        </div>
      </div>
      <div class="col-md-4 mb-4 col-sm-6">
        <div class="card">
        <img src={b1} class="card-img-top" alt="..."/>
          <div class="card-body">
            <h5 class="card-title">Bakes</h5>
            <a href="#" class="btn btn-success">Explore</a>
          </div>
        </div>
      </div>
      <div class="col-md-4 mb-4 col-sm-6">
        <div class="card">
        <img src={d1} class="card-img-top" alt="..."/>
          <div class="card-body">
            <h5 class="card-title">Drinks</h5>
            <a href="#" class="btn btn-danger">Explore</a>
          </div>
        </div>
      </div>
      <div class="col-md-4 mb-4 col-sm-6">
        <div class="card">
        <img src={s1} class="card-img-top" alt="..."/>
          <div class="card-body">
            <h5 class="card-title">Packed Snacks</h5>
            <a href="#" class="btn btn-info">Explore</a>
          </div>
        </div>
      </div>
      <div class="col-md-4 mb-4 col-sm-6">
        <div class="card">
        <img src={c1} class="card-img-top" alt="..."/>
          <div class="card-body">
            <h5 class="card-title">Cleaning</h5>
            <a href="#" class="btn btn-dark">Explore</a>

          </div>
        </div>
      </div>
    </div>
    </div>
        </div>
        
        </div>
    );
}