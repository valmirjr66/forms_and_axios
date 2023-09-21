import { Divider, Grid, Paper } from "@mui/material";
import { useEffect, useState } from "react";
import toast from "react-hot-toast";
import Panel from "../components/Panel";
import { listProducts } from '../services';

export default function Home() {
  const [products, setProducts] = useState([]);

  useEffect(() => {
    listProducts(products => setProducts(products.data),
      err => toast.error(err.response?.data || "Erro na listagem de produtos"));
  }, []);

  return (
    <Panel>
      <Grid style={{ padding: '10px 150px' }} container spacing={{ xs: 8, md: 8 }} columns={{ md: 4 }}>
        {
          products.map(product => (
            <Grid item xs={1} key={product.key}>
              <Paper sx={{ flexGrow: 1, padding: '50px 10px' }}>
                {product.name}
                <Divider sx={{ marginTop: 5, marginBottom: 5 }} />
                {product.price}
              </Paper>
            </Grid>
          ))
        }
      </Grid>
    </Panel>
  );
}