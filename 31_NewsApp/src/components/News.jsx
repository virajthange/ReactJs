import React, { useEffect, useState } from "react";
import axios from "axios";

const News = () => {
  const [data, setData] = useState([]);

  async function fetchNews() {
    const data = await axios.get(
      // "https://newsdata.io/api/1/latest?apikey=pub_9c83c00a4e21473aae48e343cef9a92b&category=science",
      "https://newsdata.io/api/1/latest?apikey=pub_9c83c00a4e21473aae48e343cef9a92b",
    );
    setData(data.data.results);
  }
  useEffect(() => {
    fetchNews();
  }, []);

  return (
    <div className="news">
      {data.map((item, ind) => {
        return <Card key={ind} item={item} />;
      })}
    </div>
  );
};

const Card = ({ item }) => {
  console.log(item);
  return item.image_url ? (
    <div className="card">
      <img src={item.image_url} alt="image" />
      <p>Category: {item.category}</p>
      <p className="desc"> Description: {item.description}</p>
    </div>
  ) : null;
};

export default News;
