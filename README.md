# Quantum Walks Visualization Application Frontend
Team: Addie Jordon, Jose Ossorio, Samantha Norrie, Austin Hawkins-Seagram

University of Victoria, 2023

## Description

The Quantum Walks Visualization Application is a web-application written in React as an educational tool for those interested in learning quantum walks. Due to the scarcity of available and accessible quantum walk visualizations, we have decided to create an application that models each step of a quantum walk on a line, grid, or cube (with Torus-like functionality; ie. if you walk off one side of the structure, you will appear back on the other side).

The user is able to specify the size of the structure and number of steps taken. Visualizations are then created using quantum simulators.

## Frontend

This frontend project is written using the React.js framework and classy npm components such as

- [Ant Design](https://ant.design) for the options form
- [Material UI](https://mui.com) for the slider
- [Awesome Button](https://github.com/rcaferati/react-awesome-button) for the buttons on the landing page
- [react-loading-icons](https://www.npmjs.com/package/react-loading-icons) for the loading grid

## Backend

You can find the repository for the backend here: [https://github.com/addie43110/qwalk-app-backend](https://github.com/addie43110/qwalk-app-backend).