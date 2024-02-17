"use client";

import React from "react";
import { Container, Typography, Paper } from "@mui/material";
import { GoogleMap, LoadScript, Marker } from "@react-google-maps/api";
import styles from "./About.module.css";

const GOOGLE_MAPS_API_KEY = "AIzaSyD1Pms6Wk3jZgCVaaWKYrqmJ_S8P4i0WDU";

const companyInfo = {
  name: "Owl Shop at Dubai Mall",
  telephone: "077-777-777-777",
  address: "Downtown Dubai, UAE",
  location: { lat: 25.19748016121913, lng: 55.279804785951086 },
};

const mapContainerStyle = {
  height: "300px",
  width: "100%",
};

const AboutUs = () => {
  const outerContainerStyle = {
    backgroundColor: "#e6f7ff",
    minHeight: "100vh",
    minWidth: "98vw",
  };

  const paperStyle = {
    marginTop: "64px",
    padding: "20px",
    marginBottom: "10px",
    textAlign: "left",
  };

  return (
    <Container className={styles.container}>
      <Paper elevation={3} style={paperStyle} className={styles.paper}>
        <Typography variant="h5" gutterBottom className={styles.title}>
          Welcome to Our Online Shop!
        </Typography>
        <Typography variant="body1" paragraph className={styles.text}>
          We are passionate about providing high-quality products to our
          customers. Our online shop is dedicated to offering a wide range of
          products that cater to your needs, whether it's the latest fashion
          trends, cutting-edge electronics, or essential home goods.
        </Typography>

        <Typography variant="h6" className={styles.title}>
          Our Mission
        </Typography>
        <Typography variant="body1" paragraph className={styles.text}>
          Our mission is to make your online shopping experience convenient,
          enjoyable, and secure. We strive to bring you the best products from
          around the world, carefully curated to meet your style, functionality,
          and budget preferences.
        </Typography>

        <Typography variant="h6" className={styles.title}>
          Quality Assurance
        </Typography>
        <Typography variant="body1" paragraph className={styles.text}>
          We take pride in the quality of our products. Every item in our
          inventory undergoes a thorough quality check to ensure it meets our
          standards. We work with trusted suppliers and brands to guarantee that
          you receive products that are durable, reliable, and stylish.
        </Typography>

        <Typography variant="h6" className={styles.title}>
          Customer Satisfaction
        </Typography>
        <Typography variant="body1" paragraph className={styles.text}>
          Your satisfaction is our top priority. Our dedicated customer support
          team is here to assist you with any inquiries, concerns, or feedback
          you may have. We value your trust and aim to build lasting
          relationships with our customers.
        </Typography>
      </Paper>
      <Paper elevation={3} style={paperStyle} className={styles.map}>
        <Typography variant="h4" gutterBottom className={styles.title}>
          About Us
        </Typography>
        <Typography variant="h5" gutterBottom className={styles.title}>
          {companyInfo.name}
        </Typography>
        <Typography variant="body1" paragraph>
          <span className={styles.title}>Telephone:</span>{" "}
          {companyInfo.telephone}
        </Typography>
        <Typography variant="body1" paragraph>
          <span style={{ color: "blue", fontWeight: "bold" }}>Address:</span>{" "}
          {companyInfo.address}
        </Typography>

        <LoadScript googleMapsApiKey={GOOGLE_MAPS_API_KEY}>
          <GoogleMap
            mapContainerStyle={mapContainerStyle}
            center={companyInfo.location}
            zoom={15}
          >
            <Marker position={companyInfo.location} />
          </GoogleMap>
        </LoadScript>
      </Paper>
    </Container>
  );
};

export default AboutUs;
