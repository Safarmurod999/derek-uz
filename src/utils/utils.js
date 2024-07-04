import { useState, useEffect } from "react";
import axios from "axios";
import { BASE_URL } from "../data/const";

const useFetchMultipleAPIs = (urls) => {
  const [data, setData] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    const fetchAPIs = async () => {
      try {
        const responses = await Promise.all(
          urls.map((url) => axios.get(`${BASE_URL}${url}`))
        );
        const resultData = responses.map((response) => response.data);
        setData(resultData);
      } catch (err) {
        setError(err);
      } finally {
        setLoading(false);
      }
    };

    fetchAPIs();
  }, []);

  return { data, loading, error };
};

export default useFetchMultipleAPIs;

export function addToCart({
  title,
  image,
  price,
  content,
  color,
  weight,
  category,
}) {
  let cartItems = JSON.parse(localStorage.getItem("cartItems")) || [];
  let item = {
    id: cartItems.at(-1)?.id + 1 || 1,
    title: title,
    image: image,
    price: price,
    quantity: 1,
    content: content,
    weight: weight || ["10g"],
    color: color || "A1",
    category: category || 0,
  };

  cartItems.push(item);
  localStorage.setItem("cartItems", JSON.stringify(cartItems));
}
