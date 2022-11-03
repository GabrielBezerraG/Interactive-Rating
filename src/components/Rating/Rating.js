import './Rating.css';
import './numbers.css';

export default function Rating(props) {
  return (
    <div className="rating">
      <span aria-label='Star icon' className='rating__icon'>
        <i className="rating__star" />
      </span>
      <h1 className="rating__title">How did we do?</h1>
      <p className="rating__text">Please let us know how we did with your support request. All feedback is appreciated to help us improve our offering!</p>
      <ul className="numbers">
        {props.numbers.map(item => {
          return <li className='numbers__item' key={item.toString()}>
            <button data-number={item} onClick={props.chooseRatingNumber} className={props.rating === item ? "numbers__button numbers__button--active" : "numbers__button"}>
              {item}
            </button>
          </li>
        })}
      </ul>
      <button onClick={props.submit} className="rating__submit">Submit</button>
    </div>
  )
}