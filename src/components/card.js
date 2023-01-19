export default function Card(props) {
  return (
    <div className="country_container">
      {" "}
      <img src={props.img}></img>
      <div className="content_container">
        <p className="country">
          <i class="fa-light fa-location-dot"></i>
          {props.land}{" "}
          <a href="#" className="google_map">
            View on Google Maps
          </a>
        </p>
        <h2>{props.title}</h2>
        <span className="date_span">{props.date}</span>
        <p className="discription">{props.text}</p>
      </div>
    </div>
  );
}
