import React, { useEffect, useState } from "react";
import { useLoaderData } from "react-router";
import FoodCard from "./FoodCard";
import axios from "axios";

const MyOrder = () => {
  const data = useLoaderData() || [];
  const [mainData, setMainData] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchFoods = async () => {
      try {
        const res = await axios.get(`${import.meta.env.VITE_API_URL}/foods`);
        setMainData(res.data);
      } catch (error) {
        console.error("Error fetching data:", error);
      } finally {
        setLoading(false);
      }
    };
    fetchFoods();
  }, []);

  if (loading) {
    return (
      <div className="text-center mt-10 text-2xl font-semibold">
        Loading Orders...
      </div>
    );
  }

  return (
    <div className="container mx-auto p-5 max-w-7xl">
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {data.map((order) => {
          const matchedFood = mainData.find(
            (food) => food._id === order.foodId?.id,
          );
          if (!matchedFood) return null;

          return <FoodCard key={order._id} order={order} food={matchedFood} />;
        })}
      </div>
    </div>
  );
};

export default MyOrder;
