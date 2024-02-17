"use client";

import React from "react";
import styles from "./About.module.css";

const AboutUs = () => {
  return (
    <div className={styles.aboutUsContainer}>
      <h2>Welcome to Our Online Shop!</h2>
      <p>
        At [Your Shop Name], we are passionate about providing high-quality
        products to our customers. Our online shop is dedicated to offering a
        wide range of products that cater to your needs, whether it's the latest
        fashion trends, cutting-edge electronics, or essential home goods.
      </p>

      <h3>Our Mission</h3>
      <p>
        Our mission is to make your online shopping experience convenient,
        enjoyable, and secure. We strive to bring you the best products from
        around the world, carefully curated to meet your style, functionality,
        and budget preferences.
      </p>

      <h3>Quality Assurance</h3>
      <p>
        We take pride in the quality of our products. Every item in our
        inventory undergoes a thorough quality check to ensure it meets our
        standards. We work with trusted suppliers and brands to guarantee that
        you receive products that are durable, reliable, and stylish.
      </p>

      <h3>Customer Satisfaction</h3>
      <p>
        Your satisfaction is our top priority. Our dedicated customer support
        team is here to assist you with any inquiries, concerns, or feedback you
        may have. We value your trust and aim to build lasting relationships
        with our customers.
      </p>

      <h3>Contact Us</h3>
      <p>
        Have questions or suggestions? We'd love to hear from you! Feel free to
        reach out to our customer support team through our{" "}
        <a href="/contact" className={styles.contactLink}>
          Contact Page
        </a>
        .
      </p>

      <p>
        Thank you for choosing [Your Shop Name]. We look forward to serving you
        and providing an exceptional online shopping experience!
      </p>
    </div>
  );
};

export default AboutUs;
