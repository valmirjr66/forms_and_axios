import CoffeeIcon from "@mui/icons-material/Coffee";
import CoffeeOutlinedIcon from "@mui/icons-material/CoffeeOutlined";
import {
  Button,
  Container,
  Divider,
  Grid,
  Paper,
  Typography,
} from "@mui/material";
import { useEffect, useState } from "react";
import toast from "react-hot-toast";
import { useParams } from "react-router-dom";
import Panel from "../components/Panel";
import { getProductById } from "../services";

export default function ProductDetails() {
  const { id } = useParams();
  const [details, setDetails] = useState([]);

  const renderRoastIcons = (roastNumber) => {
    const renderedComponents = [];
    for (let index = 1; index <= 5; index++) {
      if (index <= roastNumber) {
        renderedComponents.push(
          <CoffeeIcon color="primary" sx={{ mt: "1px" }} fontSize="small" />
        );
      } else {
        renderedComponents.push(
          <CoffeeOutlinedIcon
            color="primary"
            sx={{ mt: "1px" }}
            fontSize="small"
          />
        );
      }
    }

    return renderedComponents;
  };

  useEffect(() => {
    if (id) {
      getProductById(id, (product) => setDetails(product.data),
        (err) => toast.error(err.response?.data || "Erro ao entrar na página do produto"));
    }
  }, [id]);

  return (
    <Panel>
      <Grid
        style={{ padding: "10px 150px" }}
        container
        spacing={{ xs: 16, md: 16 }}
      >
        <Paper sx={{ width: "620px", p: 5 }} elevation={3}>
          <Typography variant="h1" fontSize="2.5rem" sx={{ mb: "5px" }}>
            {details.name}
          </Typography>
          <Typography
            variant="h2"
            fontSize="1.2rem"
            sx={{ mb: 3, color: "#6f6f70", letterSpacing: ".0625rem" }}
            fontWeight={100}
          >
            {details.short_description}
          </Typography>
          <Container
            sx={{
              display: "flex",
              flexDirection: "column",
              alignContent: "center",
              justifyContent: "center",
              alignItems: "center",
              gap: "8px",
            }}
          >
            <Typography variant="p" fontSize="1.5rem" fontWeight={500}>
              R${details.price}
            </Typography>
            <Button
              size="small"
              color="success"
              variant="contained"
              onClick={() => console.log("add to cart")}
              sx={{ p: 1, borderRadius: "5px" }}
            >
              Add to basket
            </Button>
          </Container>
          <Container
            sx={{
              display: "flex",
              pt: 3,
              px: 5,
              flexDirection: "column",
              textAlign: "left",
            }}
          >
            <Divider />
            <Typography
              variant="h2"
              fontSize="1.2rem"
              fontWeight={600}
              sx={{ mt: 2, mb: 1 }}
            >
              INFO
            </Typography>
            <Typography
              variant="p"
              fontSize="1rem"
              sx={{ mb: 0.5, color: "#6f6f70" }}
            >
              Notes: {details.notes}
            </Typography>
            <Typography
              variant="p"
              fontSize="1rem"
              sx={{ mb: 0.5, color: "#6f6f70" }}
            >
              Origin: {details.origin}
            </Typography>
            <div style={{ display: "flex" }}>
              <Typography
                variant="p"
                fontSize="1rem"
                sx={{ mb: 0.5, color: "#6f6f70" }}
              >
                Roast:
              </Typography>
              {renderRoastIcons(details.roast)}
            </div>
          </Container>
        </Paper>
      </Grid>
    </Panel>
  );
}
