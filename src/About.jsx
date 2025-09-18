import React from "react";

function About() {
  return (
    <div
      style={{
        padding: "20px",
        maxWidth: "800px",
        margin: "0 auto",
        lineHeight: "1.6",
      }}
    >
      <h1>About This Website</h1>
      <p>
        This is a simple single-page application built with React. It
        demonstrates the use of key React features such as components, state
        management with the `useState` hook, and side effects.
      </p>
      <p>
        The primary purpose of this project is to showcase the development of a
        BMI (Body Mass Index) Calculator and a simple counter. It's designed as
        a learning tool for those new to React, providing a clear example of how
        to handle user input, perform calculations, and display results
        dynamically.
      </p>
      <h2>Features</h2>
      <ul>
        <li>
          **BMI Calculator**: Calculates BMI based on weight and height inputs,
          providing real-time feedback on your health status.
        </li>
        <li>
          **Simple Counter**: A basic counter that allows you to increment and
          decrement a value.
        </li>
        <li>
          **React Router**: Navigates between different pages (BMI, Counter)
          without reloading the entire application, offering a smooth user
          experience.
        </li>
      </ul>
      <p>
        This project is a work in progress and will be updated with more
        features and improvements over time.
      </p>
    </div>
  );
}

export default About;
