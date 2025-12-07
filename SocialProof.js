import { Link } from "react-router-dom";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";
import { Navigation, Pagination, Autoplay } from "swiper/modules";
import review1 from "../assets/review1.png";
// import review2 from "../assets/review2.png";
import review from "../assets/review-1-image.png";
import review2 from "../assets/review-2-image.png";
import review3 from "../assets/review-3-image.png";
import review4 from "../assets/review-4-image.png";
import review5 from "../assets/review-5-image.png";
// import review3 from "../assets/review3.png";
import "../styles/SocialProof.css";

export default function SocialProof() {
  return (
    <section className="social-proof-section">
      <div className="container">
        <h2 className="section-title blur-vanish">
          What Our Clients Say About Working With TechTCL
        </h2>

        <div className="testimonials-grid">
          <Swiper
            modules={[Navigation, Pagination, Autoplay]}
            spaceBetween={20}
            slidesPerView={3}
            navigation
            pagination={{ clickable: true }}
            autoplay={false}
            loop={true}
            breakpoints={{
              0: {
                slidesPerView: 1, // For all mobile widths
              },
              640: {
                slidesPerView: 1,
              },
              768: {
                slidesPerView: 2,
              },
              1024: {
                slidesPerView: 3, // Desktop
              },
            }}
          >
            {/* <SwiperSlide>
              <div className="testimonial-card stagger-item enhanced-hover">
                <div className="testimonial-quote">
                  "We contacted 5 agencies. TechTCL was the only one that asked
                  the right questions about our conversion goals instead of just
                  promising a pretty website."
                </div>
                <div className="testimonial-author">
                  <div className="author-info">
                    <div className="author_info_wrapper">
                      <div className="author_image">
                        <img src={review1} alt="reivew author" />
                      </div>
                      <div className="author_content">
                        <h4>Operations Manager</h4>
                        <p>— Daniel Carter</p>
                      </div>
                    </div>
                  </div>
                  <div className="quote-icon">
                    <i className="fas fa-quote-right"></i>
                  </div>
                </div>
              </div>
            </SwiperSlide> */}
            <SwiperSlide>
              <div className="testimonial-card stagger-item enhanced-hover">
                <div className="testimonial-quote">
                  “TechTCL handled our custom Shopify features flawlessly. Even
                  the complex requirements were delivered smoothly and exactly
                  as we needed. The team communicates clearly and responds
                  quickly. Our store now loads faster and creates a better
                  experience for customers. We appreciate their clean, reliable
                  work.
                </div>
                <div className="testimonial-author">
                  <div className="author-info">
                    <div className="author_info_wrapper">
                      <div className="author_image">
                        <img src={review} alt="reivew author" />
                      </div>
                      <div className="author_content">
                        <h4>Ecommerce Director</h4>
                        <p>— Ayesha Malik</p>
                      </div>
                    </div>
                  </div>
                  <div className="quote-icon">
                    <i className="fas fa-quote-right"></i>
                  </div>
                </div>
              </div>
            </SwiperSlide>
            <SwiperSlide>
              <div className="testimonial-card stagger-item enhanced-hover">
                <div className="testimonial-quote">
                  “Working with TechTCL was a great experience from start to
                  finish. They redesigned our homepage, improved the UI/UX, and
                  fixed several technical issues. The site now looks far more
                  professional and trustworthy. They guided us at every step
                  with helpful suggestions. Fast delivery and excellent support
                  overall.
                </div>
                <div className="testimonial-author">
                  <div className="author-info">
                    <div className="author_info_wrapper">
                      <div className="author_image">
                        <img src={review2} alt="reivew author" />
                      </div>
                      <div className="author_content">
                        <h4>Marketing Lead</h4>
                        <p>— Jonathan Price</p>
                      </div>
                    </div>
                  </div>
                  <div className="quote-icon">
                    <i className="fas fa-quote-right"></i>
                  </div>
                </div>
              </div>
            </SwiperSlide>
            <SwiperSlide>
              <div className="testimonial-card stagger-item enhanced-hover">
                <div className="testimonial-quote">
                  “TechTCL brought our Shopify store to a whole new level. They
                  improved our product pages, refined the layout, and made the
                  entire site feel much more premium. The team communicated
                  clearly and delivered each update right on time. Our mobile
                  experience especially looks far better now. Great work and
                  truly reliable service.
                </div>
                <div className="testimonial-author">
                  <div className="author-info">
                    <div className="author_info_wrapper">
                      <div className="author_image">
                        <img src={review3} alt="reivew author" />
                      </div>
                      <div className="author_content">
                        <h4>Brand Owner</h4>
                        <p>— Sofia Mendes</p>
                      </div>
                    </div>
                  </div>
                  <div className="quote-icon">
                    <i className="fas fa-quote-right"></i>
                  </div>
                </div>
              </div>
            </SwiperSlide>
            <SwiperSlide>
              <div className="testimonial-card stagger-item enhanced-hover">
                <div className="testimonial-quote">
                  “We had an amazing collaboration with TechTCL during our
                  website rebuild. They understood our needs from the first call
                  and delivered a clean, modern design. Their suggestions
                  throughout the project helped us improve usability a lot. The
                  site is now faster, visually stronger, and far more
                  user-friendly. Definitely a team worth working with.
                </div>
                <div className="testimonial-author">
                  <div className="author-info">
                    <div className="author_info_wrapper">
                      <div className="author_image">
                        <img src={review4} alt="reivew author" />
                      </div>
                      <div className="author_content">
                        <h4>Marketing Director</h4>
                        <p>— Robert Kim</p>
                      </div>
                    </div>
                  </div>
                  <div className="quote-icon">
                    <i className="fas fa-quote-right"></i>
                  </div>
                </div>
              </div>
            </SwiperSlide>
            <SwiperSlide>
              <div className="testimonial-card stagger-item enhanced-hover">
                <div className="testimonial-quote">
                  “TechTCL handled our Shopify customization smoothly and
                  professionally. Even the tricky parts of the project were
                  completed without any delays. They fixed layout issues,
                  optimized speed, and improved the checkout flow. Communication
                  was constant and very organized. We’re extremely satisfied
                  with the results.
                </div>
                <div className="testimonial-author">
                  <div className="author-info">
                    <div className="author_info_wrapper">
                      <div className="author_image">
                        <img src={review5} alt="reivew author" />
                      </div>
                      <div className="author_content">
                        <h4>Co-Founder</h4>
                        <p>— Emily Watson</p>
                      </div>
                    </div>
                  </div>
                  <div className="quote-icon">
                    <i className="fas fa-quote-right"></i>
                  </div>
                </div>
              </div>
            </SwiperSlide>
          </Swiper>
        </div>

        {/* <div className="social-cta blur-vanish">
          <p>*Ready to join brands who chose quality over quantity?</p>
          <div class="button_wrapper">
            <Link to="#" className="btn-primary">
              Start Your Project Today
            </Link>
          </div>
        </div> */}
      </div>
    </section>
  );
}
