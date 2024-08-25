import React, { useEffect, useState } from "react";
import { useAuthState } from "react-firebase-hooks/auth";
import { useNavigate, useParams } from "react-router-dom";
import auth from "../../firebase.init";
import Loading from "../../components/Shared/Loading";

const CancelledPayment = () => {
  const { id } = useParams();
  const [user] = useAuthState(auth);
  const navigate = useNavigate();

  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const updatePaymentStatus = async () => {
      try {
        const updateOrder = { paymentStatus: "Cancelled" };
        const url = `http://localhost:5000/order-cancelled/${id}`;
        const response = await fetch(url, {
          method: "PUT",
          headers: {
            "content-type": "application/json",
          },
          body: JSON.stringify(updateOrder),
        });

        if (response.ok) {
          // Successfully updated status
          setLoading(false);
          setTimeout(() => navigate("/dashboard"), 1500);
        } else {
          console.error("Payment update failed.");
          setLoading(false);
        }
      } catch (error) {
        console.error("An error occurred:", error);
        setLoading(false);
      }
    };

    updatePaymentStatus();
  }, [id, navigate]);

  return (
    <div className="d-flex justify-content-center align-items-center vh-100">
      {loading ? (
        <Loading />
      ) : (
        <div className="text-center">
          <h4 className="heading">
            You have cancelled the payment
          </h4>
        </div>
      )}
    </div>

  );
};

export default CancelledPayment;
