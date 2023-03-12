/* eslint-disable import/no-anonymous-default-export */
import { Box, Button, Typography } from "@mui/material";
import { useEffect, useState } from "react";
import { Favorite } from "../../assets/icons";
import useBasket from "../../hooks/useBasket";
import useProduct from "../../hooks/useProduct";
import ProductItem from "./ProductItem";

export default () => {
  const [isLike, setIsLike] = useState(false);
  const { basket } = useBasket();
  const { products } = useProduct();

  const handleLikedProducts = () => {
    setIsLike(!isLike);
  };
  useEffect(() => {
    !basket.length && setIsLike(false) 
}, [basket])
  return (
    <Box
      sx={{
        display: "flex",
        justifyContent: "center",
        gap: 2,
        my: "16px",
      }}
    >
      <Box
        maxWidth="desktop"
        sx={{
          display: "flex",
          flexFlow: "column nowrap",
          gap: 2,
        }}
      >
        <Box
          sx={{
            display: "flex",
            flexFlow: "row nowrap",
            justifyContent: "space-between",
            alignItems: "center",
            width: "100%",
            py: "8px",
          }}
        >
          <Typography fontWeight={500} fontSize="32px" lineHeight="38px">
            Content Title
          </Typography>
          <Box
            sx={{
              display: "flex",
              flexFlow: "row nowrap",
              justifyContent: "flex-start",
              alignItems: "center",
              gap: 1,
            }}
          >
            <Box>
              <Box sx={{ display: "inline-block", mr: 1 }}>
                <Favorite fill="#000" />
              </Box>
              <Typography
                sx={{ textTransform: "uppercase", display: "inline-block" }}
              >{`${basket?.length || 0} ürün`}</Typography>
            </Box>
            <Button
              size="small"
              variant="contained"
              sx={{
                textTransform: "none",
              }}
              onClick={handleLikedProducts}
              disabled={!basket.length}
            >
              Beğenilenler
            </Button>
          </Box>
        </Box>
        <Box
          sx={{
            display: "flex",
            flexFlow: "row wrap",
            gap: 1,
            padding: "8px",
            overflow: "hidden",
          }}
        >
          {!isLike
            ? products.map((item, index) => (
                <ProductItem key={index} item={item} />
              ))
            : basket.map((item, index) => (
                <ProductItem key={index} item={item} />
              ))}
        </Box>
      </Box>
    </Box>
  );
};
