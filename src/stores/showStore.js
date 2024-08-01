import { create } from "zustand";
import axios from "axios";

const showStore = create((set) => ({
  graphData: [],
  data: null,

  reset: () => {
    set ({graphdata: [], data: null})
  },
  fetchData: async (id) => {
    const [dataRes, graphRes] = await Promise.all([
      axios.get(
        `https://api.coingecko.com/api/v3/coins/${id}?localization=false&market_data=true`
      ),
      
      axios.get(
        `https://api.coingecko.com/api/v3/coins/${id}/market_chart?vs_currency=usd&days=120`
      ),
    ]);

    const graphData = graphRes.data.prices.map((price) => {
      const [timestamp, pr] = price;
      const date = new Date(timestamp).toLocaleDateString("tr-TR");
      return {
        Date: date,
        Price: pr,
      };
    });

    set({ graphData });
    set({ data: dataRes.data })
  },
}));

export default showStore;
