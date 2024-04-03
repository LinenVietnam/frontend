'use client'
import Banner from "@/components/Banner/page";
import Footer from "@/components/Footer/page";
import Header from "@/components/Header/page";
import AllProduct from "@/components/Homepage/AllProduct/page";
import Message from "@/components/Message/page";
import SearchSection from "@/components/Homepage/SearchSection";
import WhatWeOffer from "@/components/Homepage/WhatWeOffer";
import WorldClass from "@/components/Homepage/WorldClass";
import { PayPalScriptProvider } from "@paypal/react-paypal-js";
import { ToastContainer } from "react-toastify";
import 'react-toastify/dist/ReactToastify.css';

export default function Home() {
  return (
    <PayPalScriptProvider options={{ "clientId": "AaO1ZyQPdlWutw2t9D2iXjOVxsYsyUsnuaLs7ri9M_HVBE4KUy63uIVqzxWxck3YxN01UI1X-21oryBi" }}>
      <div className="bg-background-200">
        <Header></Header>
        <SearchSection></SearchSection>
        <WorldClass></WorldClass>
        <Banner linkBanner="url('/img/banner.jpg')"></Banner>
        {/* <PremiumQuality></PremiumQuality> */}
        {/* <Banner linkBanner="url('/img/banner-2.jpg')"></Banner> */}
        <WhatWeOffer></WhatWeOffer>
        <AllProduct></AllProduct>
        <Message></Message>
        {/* <WhatsNew></WhatsNew>
        <BlogComponent></BlogComponent> */}
        <Footer></Footer>
        <ToastContainer />
      </div>
    </PayPalScriptProvider>
  );
}
