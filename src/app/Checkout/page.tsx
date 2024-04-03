import PaymentForm from "@/components/CheckoutPage/PaymentForm.tsx/page";
import ProcessPayment2 from "@/components/CheckoutPage/ProcessPayment2.tsx/page";
import Footer from "@/components/Footer/page";
import Header from "@/components/Header/page";
import TitleH2 from "@/components/TitleH2";

function Checkout() {
    return (
        <div className="bg-background-200">
            <Header />
            <TitleH2 titlePage="Checkout" />
            <ProcessPayment2 />
            <PaymentForm />
            <Footer />
        </div>
    )
}

export default Checkout