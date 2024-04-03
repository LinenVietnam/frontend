import AboutUsPage from "@/components/AboutUsPage/AboutUsBanner/page";
import Review from "@/components/AboutUsPage/Review/page";
import Footer from "@/components/Footer/page";
import Header from "@/components/Header/page";
import Message from "@/components/Message/page";
import TitleH2 from "@/components/TitleH2";

function AboutUs() {
    return (
        <div className="bg-background-200">
            <Header></Header>
            <div>
                <TitleH2 titlePage="About Us"></TitleH2>
                <AboutUsPage></AboutUsPage>
                <section id="parallax-about-us" className="parallax-section h-80 w-full bg-cover bg-fixed bg-center bg-no-repeat shadow-lg mt-20" />
                <Review></Review>
                <Message></Message>
            </div>
            <Footer></Footer>
        </div>
    )
}

export default AboutUs