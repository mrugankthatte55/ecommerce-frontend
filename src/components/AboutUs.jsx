import React from "react";
function AboutUs() {
  return (
    <>
      <div
        className="container center"
        style={{
          display: "flex",
          //alignItems: "center",
          paddingTop: 30,
          justifyContent: "center",
          //height: "100vh",
          //borderColor: "white",
          borderWidth: 3,
        }}
      >
        <h2>About Us</h2>
        <br />
        <p style={{ color: "white", paddingTop: 20 }}>
          The primary goal of this project is to develop a web-based application
          that will be useful while selling and purchasing automobiles. It is
          difficult under the existing system to maintain specific automobile
          information and provide it to customers who are willing to buy them.
          Customers experience problems in order to understand about the vehicle
          information such as manufacture year, car model, and other useful
          information in a single domain. People typically visit garages and
          showrooms in quest of the desired second-hand automobile that they
          intend to purchase, which becomes tedious at times and even time
          consuming, thus our system eliminates this problem and it will be
          capable of storing all of the necessary information for the user in
          order to properly engage him in the process of purchasing or selling a
          car, as well as assisting users in obtaining their desired vehicle
          details online in a single place. The proposed system can store
          automobile information such as manufacturer, year of production,
          price, and model, among other things. Users can examine and browse
          through these categories, as well as request their desired car by
          choosing it. The request will be sent to the seller, then the seller
          will do the needful. The web-based application comprises of thirteen
          major modules- varied interfaces provided for the buyer, seller and
          admin, a login portal, user registration, user profile, admin
          dashboard, the system homepage, FAQ section for common concerns and
          user guidelines, search and compare for data filtering, Wishlist to
          enable user convenience, data verification and transaction gateway.
          The portals will ensure user-convenience, systematic data flow and a
          secure system enabling structured user-experience.
        </p>
      </div>
    </>
  );
}

export default AboutUs;