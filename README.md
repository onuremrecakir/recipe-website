# Recipe Website

A minimalist recipe website that shows random recipes from the Spoonacular API.

## Features

- 🍽️ **Random Recipe Generator**: Get a new random recipe every time you visit or click the button
- 📱 **Responsive Design**: Works perfectly on desktop, tablet, and mobile devices
- 🎨 **Minimalist UI**: Clean, centered layout with beautiful typography
- 📋 **Complete Recipe Info**: Shows title, image, ingredients, and cooking instructions
- ⚡ **Fast Loading**: Built with Next.js for optimal performance

## Getting Started

### Prerequisites

- Node.js (version 14 or higher)
- npm or yarn

### Installation

1. Clone the repository:
```bash
git clone <your-repo-url>
cd recipeWebsite
```

2. Install dependencies:
```bash
npm install
```

3. Set up environment variables:
   - Rename `env.local` to `.env.local`
   - Add your Spoonacular API key:
   ```
   NEXT_PUBLIC_SPOONACULAR_KEY=your_actual_api_key_here
   ```

4. Get a free Spoonacular API key:
   - Visit [Spoonacular API](https://spoonacular.com/food-api)
   - Sign up for a free account
   - Copy your API key to the `.env.local` file

5. Run the development server:
```bash
npm run dev
```

6. Open [http://localhost:3000](http://localhost:3000) in your browser

## Project Structure

```
recipeWebsite/
├── components/
│   └── RecipeCard.tsx      # Recipe display component
├── lib/
│   └── api.ts              # API integration functions
├── pages/
│   ├── _app.tsx            # Next.js app wrapper
│   └── index.tsx           # Homepage with random recipe
├── styles/
│   └── globals.css         # Global styles
├── package.json            # Dependencies and scripts
├── tsconfig.json           # TypeScript configuration
└── env.local               # Environment variables (rename to .env.local)
```

## API Integration

### Current
- **Spoonacular API**: Fetches random recipes with complete details

### Future Features
- **Edamam API**: Nutrition information integration (placeholder ready)
- Search and filtering capabilities
- Dietary restrictions support

## Technologies Used

- **Next.js 14**: React framework with server-side rendering
- **TypeScript**: Type-safe JavaScript
- **Axios**: HTTP client for API requests
- **CSS**: Custom styling with responsive design

## Deployment

The website is ready to deploy on Vercel:

1. Push your code to GitHub
2. Connect your repository to Vercel
3. Add your environment variables in Vercel dashboard
4. Deploy!

## Contributing

1. Fork the repository
2. Create a feature branch
3. Make your changes
4. Submit a pull request

## License

This project is open source and available under the [MIT License](LICENSE). 