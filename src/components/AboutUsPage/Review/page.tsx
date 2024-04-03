import Image from "next/image"
import ReviewItem from "./ReviewItem"

function Review() {
    return (
        <section id="review" className="w-[90%] mx-auto mt-20">
            <div className="text-center tracking-wider mb-5">TESTIMONIALS</div>
            <div className="text-center text-5xl mb-14">What Our Clients Say</div>
            <div className="wrap-review flex flex-col md:flex-row gap-10 md:gap-5">
                <ReviewItem reviewContent="Lorem ipsum dolor sit amet consectetur adipisicing elit. Cum sit distinctio numquam soluta est, voluptatem sapiente amet dolores porro deserunt minima nulla aspernatur atque, omnis at. Vel quo saepe quos." 
                linkAvatarReviewer="/img/reviewer1.jpg"
                nameViewer="Mark Jankins"
                positionViewer="Art Expert"/>
                
                <ReviewItem reviewContent="Lorem ipsum dolor sit amet consectetur adipisicing elit. Cum sit distinctio numquam soluta est, voluptatem sapiente amet dolores porro deserunt minima nulla aspernatur atque, omnis at. Vel quo saepe quos." 
                linkAvatarReviewer="/img/reviewer1.jpg"
                nameViewer="Mark Jankins"
                positionViewer="Art Expert"/>
            </div>
        </section>
    )
}

export default Review