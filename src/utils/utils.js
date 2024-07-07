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
  image,
  price,
  title,
  title_ru,
  title_en,
  content,
  content_ru,
  content_en,
  color,
  weight,
  category,
  quantity,
}) {
  let cartItems = JSON.parse(localStorage.getItem("cartItems")) || [];
  let item = {
    id: cartItems.at(-1)?.id + 1 || 1,
    title: title,
    title_ru: title_ru,
    title_en: title_en,
    content: content,
    content_ru: content_ru,
    content_en: content_en,
    image: image,
    price: price,
    quantity: quantity || 1,
    weight: weight || ["10g"],
    color: color || "A1",
    category: category || 0,
  };

  cartItems.push(item);
  localStorage.setItem("cartItems", JSON.stringify(cartItems));
}

export const useFetch = (url) => {
  const [data, setData] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  const getData = async () => {
    fetch(`${BASE_URL}${url}`)
      .then((response) => {
        return response.json();
      })
      .then((data) => {
        setData(data);
      })
      .catch((error) => {
        setError(error);
      })
      .finally(() => {
        setLoading(false);
      });
  };
  useEffect(() => {
    setLoading(true);
    getData();
  }, [url]);
  return { data, loading, error };
};

export const handleDownload = (urls) => {
  urls.forEach((url, index) => {
    fetch(url.catalog)
      .then((response) => response.blob())
      .then((blob) => {
        const url = window.URL.createObjectURL(blob);
        const a = document.createElement("a");
        a.style.display = "none";
        a.href = url;
        a.download = `Derek_uz_${index}`;
        document.body.appendChild(a);
        a.click();
        window.URL.revokeObjectURL(url);
      })
      .catch(() => console.error("Failed to download"));
  });
};
