import React from "react";
import { UilFacebook } from "@iconscout/react-unicons";
import { UilYoutube } from "@iconscout/react-unicons";
import { UilInstagram } from "@iconscout/react-unicons";
import { UilSnapchatAlt } from "@iconscout/react-unicons";
const About = () => {
  return (
    <section className="bg-light" style={{marginTop:"9rem"}}>
      <div className="container-md py-5">
        <div className="d-md-flex justify-content-between gap-3 align-items-center px-5">
          <img
            className="img-fluid "
            style={{}}
            src="../images/Offer1-img.png"
            alt=""
          />
          <div className="mt-3">
            <h2 className="text-center mb-4">About Us</h2>
            <p className="lead px-5">
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Suscipit
              ex, omnis inventore amet similique ullam delectus quibusdam
              excepturi, explicabo voluptatum quas adipisci dolor optio nesciunt
              animi modi, ad neque et. Lorem ipsum dolor sit amet consectetur
              adipisicing elit. Esse temporibus assumenda velit quibusdam saepe?
              Fuga doloremque mollitia reprehenderit earum sapiente tempora
              veritatis sit impedit? Asperiores enim obcaecati repellendus eos.
              Laborum!
            </p>
            <div className="d-flex justify-content-center gap-3 align-items-center">
              <UilFacebook />
              <UilYoutube />
              <UilInstagram />
              <UilSnapchatAlt />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;
