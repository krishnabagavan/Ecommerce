import React, { useEffect, useState } from "react";
import axios from "axios";

const OrderHistory = () => {
  const [orders, setOrders] = useState([]);

  useEffect(() => {
    const fetchOrders = async () => {
      const userId = "user-id"; // Get from authentication
      const res = await axios.get(`/api/orders/${userId}`);
      setOrders(res.data);
    };
    fetchOrders();
  }, []);

  return (
    <div className="container mx-auto p-6">
      <h2 className="text-2xl font-semibold">Order History</h2>
      {orders.length === 0 ? <p>No orders found.</p> : (
        <div className="grid gap-4">
          {orders.map(order => (
            <div key={order._id} className="border p-4 shadow-md rounded-lg">
              <p>Total: ${order.totalAmount}</p>
              <p>Status: {order.paymentStatus}</p>
            </div>
          ))}
        </div>
      )}
    </div>
  );
};

export default OrderHistory;
