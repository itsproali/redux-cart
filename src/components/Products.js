import React, { useState } from "react";
import Card from "@mui/material/Card";
import CardContent from "@mui/material/CardContent";
import CardMedia from "@mui/material/CardMedia";
import Typography from "@mui/material/Typography";
import { Button, CardActionArea, CardActions, Container } from "@mui/material";
import ProductData from "../Data/ProductData";
import { useNavigate } from "react-router-dom";

const Products = () => {
  const [products, setProducts] = useState(ProductData);
  const navigate = useNavigate();
  return (
    <>
      <Container className="m-5 mx-auto d-flex flex-wrap justify-content-center">
        {products?.map((product) => {
          const { id, title, price, description, category, image, rating } =
            product;
          return (
            <Card
              sx={{ maxWidth: 345 }}
              key={id}
              className="mx-3 my-5 d-flex flex-column justify-content-between shadow-md"
            >
              <CardActionArea>
                <CardMedia
                  component="img"
                  height="140"
                  image={image}
                  alt={title}
                />
                <CardContent onClick={() => navigate(`/product/${id}`)}>
                  <Typography gutterBottom variant="h5" component="div">
                    {title?.slice(0, 20)}
                  </Typography>
                  <Typography variant="body2" color="text.secondary">
                    {description?.slice(0, 100)}
                  </Typography>
                </CardContent>
              </CardActionArea>
              <CardActions className="d-flex flex-column align-items-start">
                <p className="my-2 text-start fs-5">Price: $ {price}</p>
                <Button variant="contained" style={{ width: "100%" }}>
                  Add To Cart
                </Button>
              </CardActions>
            </Card>
          );
        })}
      </Container>
    </>
  );
};

export default Products;
