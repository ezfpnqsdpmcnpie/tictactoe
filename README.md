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

Start the development server:

```bash
npm run dev
```

Once the server is running, the application will be accessible in your browser at the host and port specified in your **.env** file.

For example, if your .env contains:
```env
VITE_HOST=localhost
VITE_PORT=5173
```
You can open the app at: http://localhost:5173

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