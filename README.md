# Quiz App

## Overview
This is a web-based quiz application with gamification features, designed to provide an interactive quiz experience. The application fetches quiz data from the provided API endpoint and presents multiple-choice questions to the user. Upon completion, a summary of results, including total points scored, is displayed.I used react framework for the developement and I access the API data using axios if axios could not get the data i gave an mock data to the app to be fail free.

## Features
- **Start Quiz**: Users can begin the quiz with a click.
- **Multiple-Choice Questions**: Each question presents multiple answer options.
- **Real-Time Score Calculation**: Points are awarded based on correct answers.
- **Summary Screen**: Displays total points scored at the end.
- **Gamification Elements**: Timers and animations.
- **Responsive Design**: The quiz app can support Laptop and mobiles.

## Technologies Used
- **Frontend Framework**: React.js
- **Styling**: CSS
- **Data Fetching**: Fetch API/Axios

## API Integration
The quiz questions are fetched from the following endpoint:
```
https://api.jsonserve.com/Uw5CrX
```
### Error Handling
- Handles API errors gracefully with fallback messages.
- Displays loading indicators while fetching data.
- If the Data cannot be fetched then it use an mock data copied from the given URL.

## Installation and Setup
### Prerequisites
- Node.js and npm/yarn installed

### Steps to Run the Project
1. Clone the repository:
   ```bash
   git clone https://github.com/Bala-kumaran-S/Quiz-app
   ```
2. Navigate to the project folder:
   ```bash
   cd quiz-app
   ```
3. Install dependencies:
   ```bash
   npm install  # or yarn install
   ```
4. Start the development server:
   ```bash
   npm start 
   ```
5. Open the browser and go to:
   ```
   http://localhost:3000
   ```

## Screenshots & Demo
![Screenshot (27)](https://github.com/user-attachments/assets/9b932958-df93-42d8-9a32-71fb601d6f76)
![Screenshot (28)](https://github.com/user-attachments/assets/8c59cd65-ef24-41c0-abcb-dba7b2de9390)
![Screenshot (29)](https://github.com/user-attachments/assets/6f12a46b-9e51-4f5b-a372-ebc33bb92fc3)
![Screenshot (31)](https://github.com/user-attachments/assets/4a17e26b-f32b-4cd2-a53c-9647a6c032b1)
![Screenshot (32)](https://github.com/user-attachments/assets/290754bd-2430-4595-9cc5-a86d4a863f9f)



https://github.com/user-attachments/assets/123db3fd-4f51-44e7-8b59-ac92a60e83b2





## License
This project is licensed under the MIT License.


