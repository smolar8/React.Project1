export const AboutUs = () => {
  return (
    <div className="about_us">
      <section className="about_us" id="about_us">
        <div className="specialists_wrapper container_everything">
          <h2 className="title">Nasi specjaliści</h2>
          <div className="box">
            <div className="container_photo">
              <img className="photo" src="masaztwarzy.jpg" />
            </div>
            <div className="about_people">
              <h3 className="last_name">Małgorzata Kowalska</h3>
              <p className="description">
                Lorem ipsum, dolor sit amet consectetur adipisicing elit.
                Commodi a possimus voluptatibus, eos porro sit modi quod odio
                minus ad sequi quasi? Dolorem quos commodi reprehenderit animi
                assumenda dignissimos veniam!
              </p>
            </div>
          </div>
          <div className="box revers">
            <div className="container_photo">
              <img className="photo" src="masaztwarz1.jpg" />
            </div>
            <div className="about_people">
              <h3 className="last_name">Alicja Nowak</h3>
              <p className="description">
                Lorem ipsum, dolor sit amet consectetur adipisicing elit.
                Commodi a possimus voluptatibus, eos porro sit modi quod odio
                minus ad sequi quasi? Dolorem quos commodi reprehenderit animi
                assumenda dignissimos veniam!
              </p>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};
