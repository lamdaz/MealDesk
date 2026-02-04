import React, { useEffect, useState } from "react";
import { useLoaderData } from "react-router";
import axios from "axios";
import { IoBagHandleOutline, IoFastFoodOutline } from "react-icons/io5";
import MyOrderCard from "./MyOrderCard";

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
      <div className="min-h-screen flex items-center justify-center bg-[#FFFBF0]">
        <div className="animate-bounce flex flex-col items-center gap-4">
          <IoFastFoodOutline className="text-6xl text-[#E67E22]" />
          <p className="text-[#5D4037] font-black uppercase tracking-widest">
            Loading Your Orders...
          </p>
        </div>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-[#FFFBF0] pt-32 pb-20 px-4">
      <div className="max-w-7xl mx-auto">
        <div className="flex flex-col md:flex-row items-center justify-between mb-12 gap-6">
          <div>
            <h1 className="text-4xl md:text-5xl font-black text-[#5D4037] uppercase tracking-tighter flex items-center gap-4">
              <IoBagHandleOutline className="text-[#E67E22]" />
              My <span className="text-[#E67E22]">Orders</span>
            </h1>
            <p className="text-stone-500 font-medium mt-2">
              Manage and track your delicious premium food orders.
            </p>
          </div>
          <div className="bg-white px-6 py-3 rounded-2xl shadow-sm border border-orange-100">
            <span className="text-sm font-black text-[#5D4037] uppercase tracking-widest">
              Total Orders: {data.length}
            </span>
          </div>
        </div>

        {data.length > 0 ? (
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {data.map((order) => {
              const matchedFood = mainData.find(
                (food) => food._id.toString() === order.foodId?.id?.toString(),
              );

              if (!matchedFood) return null;

              const foodWithQty = {
                ...matchedFood,
                purchaseQuantity: order.quantity,
                orderId: order._id,
                purchaseDate: order.date,
              };

              return (
                <div
                  key={order._id}
                  className="transition-transform duration-300 hover:scale-[1.02]"
                >
                  <MyOrderCard food={foodWithQty} />
                </div>
              );
            })}
          </div>
        ) : (
          <div className="text-center py-20 bg-white rounded-[3rem] border border-dashed border-orange-200 shadow-sm">
            <IoBagHandleOutline className="text-7xl text-stone-200 mx-auto mb-4" />
            <h3 className="text-2xl font-bold text-stone-400">
              No orders found!
            </h3>
            <p className="text-stone-400 mb-6">
              Hungry? Start exploring our menu.
            </p>
          </div>
        )}
      </div>
    </div>
  );
};

export default MyOrder;
