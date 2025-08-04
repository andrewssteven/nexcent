# Nexcent

Nexcent is a simple, static, and fully responsive landing page built with React and Vite. The project demonstrates modern frontend development practices, including component-based architecture, Tailwind CSS for styling, and optimized asset management.

## Features

- **Responsive Design:** Adapts seamlessly to all screen sizes using Tailwind CSS.
- **Component-Based Structure:** Reusable components such as Navbar, Button, Home, and Profile.
- **Static Content:** No backend integration; all content is rendered client-side.
- **Modern Tooling:** Built with Vite for fast development and hot module replacement (HMR).
- **Routing Example:** Includes sample navigation between Home and Profile pages using React Router.

## Live Demo
View the live demo here:
[https://nexcent-tau-wheat.vercel.app/]

## Project Structure

```
src
├── assets            # Static assets like images and fonts
├── components        # Reusable components
│   ├── Button.jsx
│   ├── Navbar.jsx
│   └── ...           # Other components
├── pages             # Page components for routing
│   ├── Home.jsx
│   ├── Profile.jsx
│   └── ...           # Other pages
├── App.jsx           # Main app component
├── main.jsx          # Entry point for React
└── ...               # Other files and folders
```

## Getting Started

To get started with the project, follow these steps:

1. **Clone the repository**

   ```bash
   git clone https://github.com/yourusername/nexcent.git
   cd nexcent
   ```

2. **Install dependencies**

   ```bash
   npm install
   ```

3. **Run the development server**

   ```bash
   npm run dev
   ```

   Open your browser and navigate to `http://localhost:3000` to see the landing page in action.

4. **Build for production**

   To create a production build of the landing page, run:

   ```bash
   npm run build
   ```

   The optimized assets will be generated in the `dist` folder.

## Customization

To customize the landing page, you can:

- Modify the content in the `src/pages` directory.
- Update the styles in the `src/index.css` file.
- Add or remove components in the `src/components` directory.
- Change the routing structure in `src/App.jsx`.
