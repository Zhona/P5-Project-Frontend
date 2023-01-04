import { motion } from "framer-motion";
import { NavLink } from "react-router-dom";
import mad from "../images/mad.png";

function Home({ user }) {
  return (
    <>
      <main className="main">
        <div className="main-container">
          <p>©2022</p>
          <span></span>
          <motion.div
            className="welcome"
            initial={{ y: 15, opacity: 0 }}
            whileInView={{ y: 0, opacity: 1, transition: { duration: 1 } }}
          >
            <h1>
              <i>Welcome</i>
            </h1>
            <p>TO WONDERLAND</p>
          </motion.div>
          <span></span>
          <div className="hours">
            <p>January</p>
          </div>
          <img src="mad" alt="image"></img>
        </div>
        <div className="main-footer">
          {/* <p>©2022</p> */}
          {/* <p>THE GREATEST GIFT OF THE GARDEN IS THE RESTORATION OF THE FIVE SENSES.</p> */}
          {/* <p>WINTER</p> */}
        </div>
      </main>
      <div className="intro">
        <div className="intro-container">
          <div className="text-container">
            <div className="sub-head">What is Wonderland?</div>
            <p>
              Wonderland is the curious place Alice discovers after falling down
              a rabbit hole in Lewis Carroll's novel Alice's Adventures in
              Wonderland. The inhabitants of Wonderland are all mad, according
              to the Cheshire Cat, and Alice meets the Mad Hatter, the White
              Rabbit, the Dodo, the Queen of Hearts, the March Hare, and many
              others over the course of her adventures there. In Carroll's
              novel, Wonderland includes a beautiful garden, an ocean, and a
              forest.
            </p>
          </div>
          <motion.img
            className="welcome"
            initial={{ y: 15, opacity: 0 }}
            whileInView={{ y: 0, opacity: 1, transition: { duration: 1.5 } }}
            src="https://live.staticflickr.com/2710/4229381266_8a0294f0c1_c.jpg"
            alt="image"
          />
        </div>

        <div className="intro-container">
          <motion.img
            className="welcome"
            initial={{ y: 15, opacity: 0 }}
            whileInView={{ y: 0, opacity: 1, transition: { duration: 1.5 } }}
            src="https://thedecorologist.com/wp-content/uploads/2010/03/toadstools-alice-in-wonderland-via-blog.movieset.jpg"
            alt="image"
          />
          {/* <motion.img
          initial={{ y: 15, opacity: 0.3 }}
          whileInView={{ y: 0, opacity: 1, transition: { duration: 0.8 } }}
          src="https://i.postimg.cc/FF62mMXX/4.png"
          alt="image"
          className="overlap-img"
        /> */}
          <div className="text-container">
            <div className="sub-head">Scenery</div>
            <p></p>
          </div>
        </div>

        <div className="intro-container">
          <div className="text-container">
            <div className="sub-head">Take a trip to Wonderland</div>
            <div>
              <p>
                These potions are produced with heavy blessing, magic, and
                intention. Blessed with the intention of filling your soul with
                the unconditional love & adventure. This tea is known to be
                heart expanding, soul enriching, and spiritually refreshing. The
                experience will leave you in awe and the adventure that you
                encounter that will fill your heart will be overflowing for a
                lifetime.
              </p>
              {/* <NavLink
              to="/events"
              exact="true"
              style={{ color: "#000", marginRight: "20px" }}
            >
              <button type="butotn" className="book-btn">
                Public Events
              </button>
            </NavLink>
            {user ? (
              <NavLink to="/request" exact="true" style={{ color: "#000" }}>
                <button type="butotn" className="book-btn">
                  Private Events
                </button>
              </NavLink>
            ) : (
              <NavLink to="/login" exact="true" style={{ color: "#000" }}>
                <button type="butotn" className="book-btn">
                  Private Events
                </button>
              </NavLink>
            )} */}
            </div>
          </div>
          <motion.img
            className="welcome"
            initial={{ y: 15, opacity: 0 }}
            whileInView={{ y: 0, opacity: 1, transition: { duration: 1.5 } }}
            src="https://s3.amazonaws.com/media.thecrimson.com/photos/2010/03/09/002059_1229422.jpg"
            alt="image"
          />
        </div>

        <hr></hr>

        <div className="intro-footer">
          <div className="info-container">
            <h1>Location</h1>
            <p>
              240 W 52nd St<br></br>
              Manhattan, NY 10019
            </p>
          </div>
          <div className="info-container">
            <h1>Hours</h1>
            <p>
              <span>Mon - Fri</span> : 9am - 5pm
            </p>
            <p>
              <span>Sat - Sun</span> : 11am - 8pm
            </p>
          </div>
          <div className="info-container">
            <h1>Contact</h1>
            <p>
              718 - 903 - 9990<br></br>
              Wonder@info.com
            </p>
          </div>
        </div>
      </div>
    </>
  );
}

export default Home;
