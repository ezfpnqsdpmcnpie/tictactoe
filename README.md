# Tic Tac Toe Project

A simple and easily customizable tic-tac-toe game.

---

## Table of Contents

- [Installation](#installation)
- [Environment Variables](#environment-variables)
- [Usage](#usage)
- [Project Structure](#project-structure)
- [Constants](#constants)

---

## Installation

1. Clone the repository:  
```bash
git clone https://github.com/ezfpnqsdpmcnpie/tictactoe.git
```

2. Install dependencies:
```bash
cd tictactoe
npm install
```

## Environment Variables

Create a **.env** file in the root of the project to store environment-specific variables.

```ini
VITE_PORT = Application port
VITE_HOST = Application host
```

## Usage

1. Start the development server:
```bash
npm start
```

2. Build the project for production:
```bash
npm run build
```

## Project Structure

```
tictactoe/
│
├─ public/
│   └─ tic-tac-toe.png
│
├─ src/
│   ├─ components/        # Reusable React components
│   │   └─ BoardPanel/
│   │
│   ├─ hooks/             # Custom React hooks
│   │   └─ useGameStatus.ts
│   │
│   ├─ store/             # Redux management
│   │   ├─ slice/
│   │   └─ index.ts
│   │
│   ├─ constants.ts       # Project-wide constants
│   ├─ App.tsx
│   ├─ main.tsx
│   └─ index.css
│
├─ index.html  
├─ .env                   # Environment variables
├─ package.json
└─ README.md
```

## Constants

The **constants.ts** file contains reusable values for the application.
You can change them to modify the game settings.

```ini
export const GAME_SIZE: number = Number of rows & columns
export const SYMBOLS: string[] = Array containing the 2 game symbols
```