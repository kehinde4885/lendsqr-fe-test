export function DetailBox(props) {
  const {img, text, func} = props

  
  return (
    <div className="detail-box">
      <div className="img1">
        <img src={img} alt="" />
      </div>
      <h2>{text}</h2>
      <p>{func()}</p>
    </div>
  );
}
