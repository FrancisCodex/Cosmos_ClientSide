import Navbar from "./Navbar/navbar";

const HomePage = () => {
  return (
    <>
      <Navbar />
      <meta charSet="UTF-8" />
      <meta httpEquiv="X-UA-Compatible" content="IE=edge" />
      <meta name="viewport" content="width=device-width, initial-scale=1.0" />
      <title>Cosmos</title>
      {/* SWIPER */}
      <link
        rel="stylesheet"
        href="https://unpkg.com/swiper@7/swiper-bundle.min.css"
      />
      {/* Font Awesome CDN Link  */}
      <link
        rel="stylesheet"
        href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/5.15.4/css/all.min.css"
      />
      {/* Custom CSS File Link  */}
      <link rel="stylesheet" href="css/style.css" />
      {/* HOME */}
      <section className="home" id="home">
        <div className="row">
          <div className="content">
            <h3>fresh coffee in the morning</h3>
            <a href="/listings" className="btn">
              buy one now
            </a>
          </div>
          <div className="image">
            <img
              src="image/home-img-1.png"
              className="main-home-image"
              alt=""
            />
          </div>
        </div>
        <div className="image-slider">
          <img src="image/home-img-1.png" alt="" />
          <img src="image/home-img-2.png" alt="" />
          <img src="image/home-img-3.png" alt="" />
        </div>
      </section>
      {/* ABOUT */}
      <section className="about" id="about">
        <h1 className="heading">
          about us <span>why choose us</span>
        </h1>
        <div className="row">
          <div className="image">
            <img src="image/about-img.png" alt="" />
          </div>
          <div className="content">
            <h3 className="title">what's make our coffee special!</h3>
            <p>
              Our coffee is a symphony of flavor, meticulously crafted from
              handpicked beans cultivated in ethereal landscapes. Roasted to
              perfection, each cup embodies a journey, blending rich notes of
              chocolate and hints of citrus. Delight in the embrace of our
              signature brew—a testament to passion, quality, and a truly
              special experience.
            </p>
            <a href="#" className="btn">
              read more
            </a>
            <div className="icons-container">
              <div className="icons">
                <img src="image/about-icon-1.png" alt="" />
                <h3>quality coffee</h3>
              </div>
              <div className="icons">
                <img src="image/about-icon-2.png" alt="" />
                <h3>our branches</h3>
              </div>
              <div className="icons">
                <img src="image/about-icon-3.png" alt="" />
                <h3>free delivery</h3>
              </div>
            </div>
          </div>
        </div>
      </section>
      <section className="menu" id="menu">
        <h1 className="heading">
          our menu <span>popular menu</span>
        </h1>
        <div className="box-container">
          <a href="#" className="box">
            <img src="image/menu-1.png" alt="" />
            <div className="content">
              <h3>Spiced Cinnamon Latte</h3>
              <p>
                A cozy fusion of espresso, steamed milk, and a dash of aromatic
                cinnamon. Experience the comforting embrace of this spiced
                delight, perfect for those seeking a touch of warmth and flavor.
              </p>
              <span>Php 107.99</span>
            </div>
          </a>
          <a href="#" className="box">
            <img src="image/menu-2.png" alt="" />
            <div className="content">
              <h3>Hazelnut Elegance Espresso</h3>
              <p>
                A rich and aromatic blend of espresso, steamed milk, and the
                subtle essence of hazelnut. Delight your senses with this
                sophisticated and comforting choice.
              </p>
              <span>Php 107.99</span>
            </div>
          </a>
          <a href="#" className="box">
            <img src="image/menu-3.png" alt="" />
            <div className="content">
              <h3>Mocha Delight</h3>
              <p>
                Rich espresso dances with velvety chocolate and creamy steamed
                milk, creating a heavenly blend that satisfies your chocolate
                cravings.
              </p>
              <span>Php 107.99</span>
            </div>
          </a>
          <a href="#" className="box">
            <img src="image/menu-4.png" alt="" />
            <div className="content">
              <h3>Maple Pecan Delight</h3>
              <p>
                Rich espresso combines with the sweet allure of maple and the
                nutty crunch of pecans, creating a warm and comforting blend
                that captures the essence of the season.
              </p>
              <span>Php 107.99</span>
            </div>
          </a>
          <a href="#" className="box">
            <img src="image/menu-5.png" alt="" />
            <div className="content">
              <h3>Caramel Dream Latte</h3>
              <p>
                Smooth espresso meets velvety steamed milk, crowned with a swirl
                of caramel, creating a dreamy, delightful sip.
              </p>
              <span>Php 107.99</span>
            </div>
          </a>
          <a href="#" className="box">
            <img src="image/menu-6.png" alt="" />
            <div className="content">
              <h3>Vanilla Bliss Macchiato</h3>
              <p>
                Our Macchiato features espresso with a hint of vanilla,
                harmoniously balanced with frothy steamed milk for a touch of
                sweetness.
              </p>
              <span>Php 107.99</span>
            </div>
          </a>
        </div>
      </section>
    </>
  );
};

export default HomePage;
