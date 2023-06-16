import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';

import Slider from 'react-slick';
import { list } from './data';
import { FaQuoteRight } from 'react-icons/fa';

function SlickCarousel() {
  // Object settings (slick library)
  const settings = {
    dots: true,
    infinite: true,
    speed: 1000,
    slidesToShow: 1,
    slidesToScroll: 1,
    autoplay: true,
  };

  //RETURN
  return (
    <div>
      <Slider {...settings} className='slick-container'>
        {list.map((el) => {
          const { image, id, name, title, quote } = el;
          return (
            <article key={id}>
              <img src={image} alt={name} className='person-img' />
              <h5 className='name'>{name}</h5>
              <p className='title'>{title}</p>
              <p className='text'>{quote}</p>
              <FaQuoteRight className='icon' />
            </article>
          );
        })}
      </Slider>
    </div>
  );
}
export default SlickCarousel;
