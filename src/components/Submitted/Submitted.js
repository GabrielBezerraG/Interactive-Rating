import './Submitted.css';

export default function Submitted(props) {
   return (
      <div className="submitted">
         <i className="submitted__icon" />
         <h2 className="submitted__selected-number">You selected {props.rating} out of 5</h2>
         <h1 className="submitted__title">Thank you!</h1>
         <p className="submitted__text">We appreciate you taking the time to give a rating. If you ever need more support, don't hesitate to get in touch!</p>
      </div>
   )
}