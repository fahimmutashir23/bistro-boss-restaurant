import { CardElement, useElements, useStripe } from "@stripe/react-stripe-js";
import { useEffect, useState } from "react";
import useAxiosSecure from "../../../Hooks/useAxiosSecure";
import useAuth from "../../../Hooks/useAuth";
import Swal from "sweetalert2";
import { FidgetSpinner } from "react-loader-spinner";

const CheckoutForm = () => {
  const [clientSecret, setClientSecret] = useState("");
  const [payment, setPayment] = useState("");
  const [errorMsg, setErrorMsg] = useState("");
  const [name, setName] = useState("");
  const [loading, setLoading] = useState(false);
  const stripe = useStripe();
  const elements = useElements();
  const axiosSecure = useAxiosSecure();
  const { user } = useAuth();

  useEffect(() => {
    axiosSecure.post("/create-payment-intent", { price: 27.6 }).then((res) => {
      setClientSecret(res.data.clientSecret);
    });
  }, [axiosSecure]);

  const handleSubmit = async (e) => {
    e.preventDefault();
    setLoading(true);
    if (!stripe || !elements) {
      return;
    }

    const card = elements.getElement(CardElement);
    if (card === null) {
      return;
    }

    const { error, paymentMethod } = await stripe.createPaymentMethod({
      type: "card",
      card,
    });
    if (error) {
      setErrorMsg("Something went wrong, Please submit valid information");
    } else {
      console.log("success", paymentMethod);
    }

    const { paymentIntent, error: cardError } = await stripe.confirmCardPayment(
      clientSecret,
      {
        payment_method: {
          card: card,
          billing_details: {
            email: user?.email,
            name: user?.displayName,
          },
        },
      }
    );

    if (cardError) {
      setErrorMsg("Something went wrong, Please submit valid information");
    } else if (paymentIntent.status === "succeeded") {
      setPayment(paymentIntent.id);
      setName(
        paymentIntent.billing_details?.name
          ? paymentIntent.billing_details.name
          : "Anonymous"
      );
      setLoading(false);
      setErrorMsg(" ");
      Swal.fire({
        position: "top-end",
        icon: "success",
        title: "Your Payment has been Succeeded",
        showConfirmButton: false,
        timer: 1500,
      });
    }
  };

  return (
    <div>
      <form
        onSubmit={handleSubmit}
        className="border-[1px] border-black rounded-md p-4"
      >
        <CardElement
          options={{
            style: {
              base: {
                fontSize: "16px",
                color: "#424770",
                "::placeholder": {
                  color: "#aab7c4",
                },
              },
              invalid: {
                color: "#9e2146",
              },
            },
          }}
        />
        <button
          className="btn btn-sm mt-5 rounded-md bg-orange-400 w-full"
          type="submit"
          disabled={!stripe}
        >
          {loading ? (
            <FidgetSpinner
              visible={true}
              height="25"
              width="25"
              ariaLabel="dna-loading"
              wrapperStyle={{}}
              wrapperClass="dna-wrapper"
              ballColors={["white", "white", "white"]}
              backgroundColor="black"
            />
          ) : (
            "Pay"
          )}
        </button>
      </form>
      <p className="text-red-700">{errorMsg}</p>
      <p className="text-md font-medium mt-5">
        <span className="font-semibold text-xl">Name:</span> {name}
      </p>
      <p className="text-md font-medium mt-5">
        <span className="font-semibold text-xl">Your Transaction Id :</span>{" "}
        {payment}
      </p>
    </div>
  );
};

export default CheckoutForm;
