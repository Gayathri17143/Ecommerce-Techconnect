import React, { useEffect } from "react";

/* REACT-BOOTSTRAP */
import { Row, Col, Container } from "react-bootstrap";

/* COMPONENTS */
import Bannercarousel from "../components/Bannercarousel";

import TrendingProducts from "../components/TrendingProducts";

import ImageGrid from "../components/ImageGrid";
import Product from "../components/Product";
import Loader from "../components/Loader";
import Message from "../components/Message";
import Paginate from "../components/Paginate";
// import ProductCarousel from "../components/ProductCarousel";

/* REACT - REDUX */
import { useDispatch, useSelector } from "react-redux";
import Newsletter from "../components/Newsletter";
/* ACTION CREATORS */
import { listProducts } from "../actions/productActions";
import Brandlogos from "../components/Brandlogos";
import Services from "../components/Services";
import Productpage from "../components/Productpage";
// import Categories from "../components/Categories";
function HomeScreen({ history }) {
  const dispatch = useDispatch();

  /* PULLING A PART OF STATE FROM THE ACTUAL STATE IN THE REDUX STORE */
  const productList = useSelector((state) => state.productList);
  const { products, page, pages, loading, error } = productList;

  /* FIRING OFF THE ACTION CREATORS USING DISPATCH */

  let keyword =
    history.location
      .search; /* IF USER SEARCHES FOR ANYTHING THEN THIS KEYWORD CHANGES AND USE EFFECT GETS TRIGGERED */

  useEffect(() => {
    dispatch(listProducts(keyword));
  }, [dispatch, keyword]);

  return (
    <>
      <Bannercarousel />
      <ImageGrid />
      {/* <Hero /> */}
     
      <Container>
        <div>
          {/* {!keyword && <ProductCarousel />} */}

          <div style={{ fontSize: '27px', color: "#000", fontWeight: '600', paddingTop: "30px" }}>Latest Products</div>


          {loading ? (
            <Loader />
          ) : error ? (
            <Message variant="danger">{error}</Message>
          ) : (
            <div>
              <Row>
                {products.map((product) => {
                  return (
                    <Col key={product._id} sm={12} md={6} lg={4} xl={3}>
                      <Product product={product} />
                    </Col>
                  );
                })}
              </Row>

              <Paginate page={page} pages={pages} keyword={keyword} />
            </div>
          )}
        </div>
      </Container>
      <Brandlogos />
          {/* <Categories/> */}
     
      <TrendingProducts />
      <Services />
      <Newsletter/>
    </>
  );
}

export default HomeScreen;
