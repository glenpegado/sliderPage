import { useEffect, useState } from 'react';
import { list, shortList, longList } from './data';
import { FaQuoteRight } from 'react-icons/fa';
import { FiChevronRight, FiChevronLeft } from 'react-icons/fi';

function Carousel() {
  //useState
  const [people, setPeople] = useState(list);
  const [currentPerson, setCurrentPerson] = useState(0);

  //FUNCTION Next
  const Next = () => {
    setCurrentPerson((oldPerson) => {
      const result = (oldPerson + 1) % people.length;
      return result;
    });
  };
  //FUNCTION Prev
  const Prev = () => {
    setCurrentPerson((oldPerson) => {
      const result = (oldPerson - 1 + people.length) % people.length;
      return result;
    });
  };

  //useEffect
  useEffect(() => {
    let sliderId = setInterval(() => {
      Next();
    }, 3000);
    return () => {
      clearInterval(sliderId);
    };
  }, [currentPerson]);

  //RETURN
  return (
    <section className='slider-container'>
      {people.map((el, index) => {
        const { image, id, name, title, quote } = el;
        return (
          <article
            className='slide'
            style={{
              transform: `translateX(${100 * (index - currentPerson)}%)`,
              opacity: index == currentPerson ? 1 : 0,
              visibility: index == currentPerson ? 'visible' : 'hidden',
            }}
            key={id}
          >
            <img src={image} alt={name} className='person-img' />
            <h5 className='name'>{name}</h5>
            <p className='title'>{title}</p>
            <p className='text'>{quote}</p>
            <FaQuoteRight className='icon' />
          </article>
        );
      })}
      <button className='prev' onClick={Prev}>
        <FiChevronLeft />
      </button>
      <button className='next' onClick={Next}>
        <FiChevronRight />
      </button>
    </section>
  );
}
export default Carousel;
