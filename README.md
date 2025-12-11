# EShop Frontend

This repository contains the frontend for the EShop application — a React single-page application for browsing products, viewing details, and managing a shopping cart. The frontend currently uses mock product data (see `src/services/ProductService.js`) but includes an example backend API URL and instructions to connect to the backend.

**Backend repository:** https://github.com/CharithyaDivisekara/backend

**Tech stack:**
- **React** (Create React App)
- **Bootstrap / React-Bootstrap** for UI
- **react-router-dom** for routing

**Quick status**: The app ships with a local mock data service in `src/services/ProductService.js`. To use a real backend, follow the section "Connecting to the backend" below.

**Project structure (important files)**
- `src/` — application source code
  - `src/services/ProductService.js` — product service (currently returns mock data)
  - `src/components/` — shared components (`Header`, `Footer`, `ProductCard`, etc.)
  - `src/pages/` — route pages (`Home`, `ProductDetails`, `Cart`, `Login`, etc.)
- `public/` — static assets and `index.html`
- `package.json` — scripts and dependencies

## Prerequisites
- Node.js (v14+ recommended)
- npm (bundled with Node) or yarn

## Install
Open a Windows `cmd.exe` terminal in the project root and run:

```cmd
npm install
```

## Run (development)
Start the dev server:

```cmd
npm start
```

This opens the app at `http://localhost:3000` by default.

## Build
Create a production build:

```cmd
npm run build
```

## Tests
Run the test runner (from Create React App):

```cmd
npm test
```

## Connecting to the backend
The backend repo is available here:

https://github.com/CharithyaDivisekara/backend

Notes about the current frontend integration:
- `src/services/ProductService.js` currently returns `mockProducts` (mock data). There is an example `fetch('http://localhost:8080/api/products')` call in the file, but the exported service is configured to return the mock list. To switch the frontend to call your backend API, update `ProductService.js` to use an environment-based API base URL and the built-in `fetch` calls. Example approach:

1. Add an environment variable (create a `.env` file in the project root):

```text
REACT_APP_API_BASE_URL=http://localhost:8080
```

2. Update `src/services/ProductService.js` to use the env var, e.g.:

```javascript
const API_BASE = process.env.REACT_APP_API_BASE_URL || 'http://localhost:8080';

export const productService = {
  getAllProducts: async () => {
    const res = await fetch(`${API_BASE}/api/products`);
    return res.json();
  },
  getProductById: async (id) => {
    const res = await fetch(`${API_BASE}/api/products/${id}`);
    return res.json();
  },
  // other methods using the API...
};
```

3. Start your backend locally (by default the example URL above expects it on port `8080`). Then run `npm start` for the frontend.

If you prefer to set the environment variable just for the current Windows `cmd` session, run:

```cmd
set "REACT_APP_API_BASE_URL=http://localhost:8080"
npm start
```

## Notes & recommendations
- The project is bootstrapped with Create React App and uses React 19. The `react-scripts` scripts in `package.json` are standard.
- The `ProductService.js` file currently provides useful mock data that helps the UI develop independently of the backend. When switching to the real backend, consider keeping a toggle (or feature flag) for mock vs real API for easier development and testing.
- Review CORS settings on the backend when calling from `http://localhost:3000` (enable CORS or use a proxy during development).

## Deployment
- Build with `npm run build` and deploy the contents of `build/` to your static host (Netlify, Vercel, GitHub Pages, or serve behind a Node/NGINX server).

## Contributing
- Fork the repo, create a branch, make changes, and open a pull request.
- For backend integration changes, include notes about required environment variables and API contract changes.

---


