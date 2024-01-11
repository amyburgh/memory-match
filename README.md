# Memory Game

This is a memory game built with React and Tailwind CSS. The game uses a deck of cards API to generate the cards for the game.

## Getting Started

These instructions will get you a copy of the project up and running on your local machine.

### Prerequisites

- Node.js
- npm

### Installation

1. Clone the repository

```
git clone 'https://github.com/amyburgh/memory-match.git'
```

2. Navigate into the project directory

```
cd memory-match
```

3. Install the dependencies

```
npm install
```

## Usage

To start the development server, run:

```
npm run dev
```

The application will start on http://localhost:3000.

To build the project for production, run:

```
npm run build
```

## Project Structure

- `src/App.jsx`: This is the main component of the application. It manages the game state and handles game logic.
- `src/components/Main.jsx`: This component handles the main game logic, including fetching the cards from the API, shuffling the cards, and handling card selection.
- `src/components/Card.jsx`: This component represents a single card in the game.
- `src/index.css`: This file contains global styles for the application.
- `src/main.jsx`: This is the entry point of the application.

## Built With

- React
- Tailwind CSS
- Vite

## License

This project is licensed under the MIT License.
