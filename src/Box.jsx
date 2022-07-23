export const Box = ({ text, isNew }) => {
  return (
    <div className="square">
      {isNew && <div className="circle"></div>}
      <div className="square_text">
        <h3 className="service">{text}</h3>
        {isNew && <h4 className="news">(nowość)</h4>}
      </div>
    </div>
  );
};
