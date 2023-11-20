import { Elements } from "@stripe/react-stripe-js";
import SectionTitle from "../../../Shared/SectionTitle/SectionTitle";
import { loadStripe } from "@stripe/stripe-js";
import CheckoutForm from "./CheckoutForm";



const stripePromise = loadStripe(import.meta.env.VITE_PAYMENT_API_KEY);

const Payment = () => {
    return (
        <div>
            <SectionTitle title="Payment" subTitle="Pay first to buy products"></SectionTitle>
            <div>
                <Elements stripe={stripePromise}>
                    <CheckoutForm></CheckoutForm>
                </Elements>
            </div>
        </div>
    );
};

export default Payment;