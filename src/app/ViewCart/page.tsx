import Footer from "@/components/Footer/page";
import Header from "@/components/Header/page";
import TitleH2 from "@/components/TitleH2";
import Cart from "@/components/ViewCartPage/Cart/page";
import CartResponsive from "@/components/ViewCartPage/CartResponsive/page";
import ChoosePayment from "@/components/ViewCartPage/ChoosePayment/page";
import ProcessPayment from "@/components/ViewCartPage/ProcessPayment/page";

function ViewCart() {

    return (
        <div className="bg-background-200">
            <Header />
            <TitleH2 titlePage="Cart"></TitleH2>
            <div className="mt-10">
                <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth="1.5" stroke="currentColor" className="mx-auto w-6 h-6">
                    <path strokeLinecap="round" strokeLinejoin="round" d="m19.5 8.25-7.5 7.5-7.5-7.5" />
                </svg>
            </div>
           <ProcessPayment />
            <Cart></Cart>
            <CartResponsive></CartResponsive>
            <ChoosePayment />
            <Footer />
        </div>
    )
}

export default ViewCart