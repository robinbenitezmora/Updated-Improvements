import React from 'react';
import './testimonials.css';
import AVTR1 from '../../assets/avatar1.jpg';
import AVTR2 from '../../assets/avatar2.jpg';
import AVTR3 from '../../assets/avatar3.jpg';
import AVTR4 from '../../assets/avatar4.jpg';

const Testimonial = () => {
  return (
    <section id='testimonials'>
      <h5>Review from clients</h5>
      <h2>Testimonials</h2>

      <div className="container testimonials__container">
        <article className="testimonial">
          <div className="client__avatar">
            <img src={AVTR1} alt="Avatar One" />
            <h5 className="client__name">Ernest Achiever</h5>
            <small className="client_review">
              lorem ipsum dolor sit amet consectetur addipisicing elit. Iusto quod nam impedit soluta odio possimus! Quas sint dignissimos distincto alias rerum laborum aperiam minus pariatur, totam dicta, repellendus a volupattibus!
            </small>
          </div>
        </article>
      </div>
    </section>
  )
}

export default Testimonial