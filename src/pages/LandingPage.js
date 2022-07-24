import { useState } from "react";
import Navbar from "../components/Navbar/Navbar";
import TabNavItem from "../components/Tabs/TabNavItem";
import TabContent from "../components/Tabs/TabContent";
import SearchContent from "../components/Tabs/SearchContent/SearchContent";
import OfferCard from "../components/Tabs/OffersContent/OfferCard";
import RecomendedContent from "../components/Tabs/RecomendedContent/RecomendedContent";
import Comment from "../components/Comment/Comment";
import { FaHotel } from "react-icons/fa";
import { GiCommercialAirplane } from "react-icons/gi";
import { FaChevronLeft} from "react-icons/fa";
import { FaChevronRight} from "react-icons/fa";
import "./LandingPage.css";

const LandingPage = () => {
  const [activeTab, setActiveTab] = useState("tab1");
  const [offersActiveTab, setOffersActiveTab] = useState("offerTab1");
  const [recomendedActiveTab, setrecomendedActiveTab] =
    useState("recomendedTab1");
  return (
    <div className="page-wrapper">
      {/* Navbar */}
      <Navbar className="nav" />
      {/* Navbar */}

      {/* hero */}
      <div className="hero">
        <div className="hero-content">
          <p className="hero-header">
            Discover Your Life , Travel Where You Want
          </p>
          <p className="hero-p">
            would you explore nature paradise in the world , lets find the best
            destination in the world with you.
          </p>
        </div>
        <div className="overlay"></div>
      </div>
      {/* hero */}

      {/* Container */}
      <div className="container">
        {/* search */}
        <div className="search">
          <div className="search-top">
            <ul>
              <TabNavItem
                id="tab1"
                activeTab={activeTab}
                setActiveTab={setActiveTab}
              >
                <GiCommercialAirplane className="tab-icon" />
                Travel
              </TabNavItem>
              <TabNavItem
                id="tab2"
                activeTab={activeTab}
                setActiveTab={setActiveTab}
              >
                <FaHotel className="tab-icon" />
                Hotel
              </TabNavItem>
            </ul>
          </div>

          <div className="search-body">
            <TabContent id="tab1" className="TabContent" activeTab={activeTab}>
              <SearchContent className="search-content" />
            </TabContent>
            <TabContent id="tab2" activeTab={activeTab}>
              <p>Tab 2 works!</p>
            </TabContent>
          </div>
        </div>
        {/* search */}

        {/* offers */}
        <div className="offers">
          <h1 className="offers-heading">Special Upcoming Offers</h1>
          <div className="offers-tab-nav">
            <ul>
              <TabNavItem
                id="offerTab1"
                activeTab={offersActiveTab}
                setActiveTab={setOffersActiveTab}
              >
                Team
              </TabNavItem>
              <TabNavItem
                id="offerTab2"
                activeTab={offersActiveTab}
                setActiveTab={setOffersActiveTab}
              >
                Couple
              </TabNavItem>
              <TabNavItem
                id="offerTab3"
                activeTab={offersActiveTab}
                setActiveTab={setOffersActiveTab}
              >
                Family
              </TabNavItem>
            </ul>
          </div>
          <TabContent
            className="offers-tab-content"
            id="offerTab1"
            activeTab={offersActiveTab}
          >
            <OfferCard
              date="3 jun , sat"
              title="Loga Sea"
              duration="3 Days, 3 Nights"
              type="Relax"
              price="700"
              priceFor="Person"
            />
            <OfferCard
              date="3 jun , sat"
              title="Loga Sea"
              duration="3 Days, 3 Nights"
              type="Relax"
              price="700"
              priceFor="Person"
            />
            <OfferCard
              date="3 jun , sat"
              title="Loga Sea"
              duration="3 Days, 3 Nights"
              type="Relax"
              price="700"
              priceFor="Person"
            />
          </TabContent>
          <TabContent
            className="offers-tab-content"
            id="offerTab2"
            activeTab={offersActiveTab}
          >
            <OfferCard
              date="3 jun , sat"
              title="Loga Sea"
              duration="3 Days, 3 Nights"
              type="Relax"
              price="700"
              priceFor="Person"
            />
          </TabContent>
          <TabContent
            className="offers-tab-content"
            id="offerTab3"
            activeTab={offersActiveTab}
          >
            <p>Nothing here !</p>
          </TabContent>
        </div>
        {/* offers */}

        {/* Travel */}
        <div className="travel">
          <div className="left">
            <img src="https://source.unsplash.com/480x800" alt="" />
            <div className="floating fl-top-right">
              <p className="floating-num">300 +</p>
              <p className="floating-id">Destinations</p>
            </div>
            <div className="floating fl-left-center">
              <p className="floating-num">300 +</p>
              <p className="floating-id">Destinations</p>
            </div>
            <div className="floating fl-bottom-right">
              <p className="floating-num">300 +</p>
              <p className="floating-id">Destinations</p>
            </div>
          </div>
          <div className="right">
            <h1 className="travel-heading">
              Travel Any Corner of The World With Us
            </h1>
            <p>
              Would you explore nature paradise in the world, let’s find the
              best destination in world with us, Would you explore nature
              paradise in the world, let’s find the best destination in world
              with us. Would you explore nature paradise in the world, let’s
              find the best destination in world with us.
            </p>
            <p className="second-para">
              Would you explore nature paradise in the world, let’s find the
              best destination in world with us.
            </p>
            <button className="btn secondary-btn">Contact Us</button>
          </div>
        </div>
        {/* Travel */}

        {/* Recomended */}
        <div className="recomended">
          <h1 className="offers-heading">Recommended Destination</h1>
          <div className="offers-tab-nav recomended-tabs">
            <ul>
              <TabNavItem
                id="recomendedTab1"
                activeTab={recomendedActiveTab}
                setActiveTab={setrecomendedActiveTab}
              >
                Team
              </TabNavItem>
              <TabNavItem
                id="recomendedTab2"
                activeTab={recomendedActiveTab}
                setActiveTab={setrecomendedActiveTab}
              >
                Couple
              </TabNavItem>
              <TabNavItem
                id="recomendedTab3"
                activeTab={recomendedActiveTab}
                setActiveTab={setrecomendedActiveTab}
              >
                Family
              </TabNavItem>
            </ul>
          </div>
          <div className="recomended-content">
            <TabContent
              className="offers-tab-content"
              id="recomendedTab1"
              activeTab={recomendedActiveTab}
            >
              <RecomendedContent
                title="Kina Mountain"
                rate="3.4"
                place="Colombia"
              />
              <RecomendedContent
                title="Kina Mountain"
                rate="3.4"
                place="Colombia"
              />
              <RecomendedContent
                title="Kina Mountain"
                rate="3.4"
                place="Colombia"
              />
              <RecomendedContent
                title="Kina Mountain"
                rate="3.4"
                place="Colombia"
              />
            </TabContent>
          </div>
        </div>
        {/* Recomended */}

        {/* Comments */}
        <div className="comments">
          <Comment
            content="Our trip to Morocco was truly a onece in a lifetime experience and we are so grateful to everyone that made it happen seamlessly. Our travel planner, Jaouad, was increadible."
            writer="mohammed"
            slogen="Happy Trello"
          />
          <Comment
            content="Our trip to Morocco was truly a onece in a lifetime experience and we are so grateful to everyone that made it happen seamlessly. Our travel planner, Jaouad, was increadible."
            writer="mohammed"
            slogen="Happy Trello"
          />
        </div>
        <div className="comment-indecators">
            <FaChevronLeft />
            <FaChevronRight />
        </div>
        {/* Comments */}
      </div>
      {/* Container */}
    </div>
  );
};
export default LandingPage;
