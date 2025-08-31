# Recipe Website Project Instructions

## Project Goal
Create a minimalist recipe website that shows a random recipe every time a user visits or clicks a button. The website should fetch recipes from the Spoonacular API (free tier) and be structured so that Edamam nutrition info can be added later.

---

## Requirements

### Framework
- Next.js (React)

### Design
- Minimalist, centered layout
- Clean typography
- Simple styling

### Pages / Structure
- `pages/index.tsx` → Homepage to show random recipe
- `components/RecipeCard.tsx` → Component to display recipe title, image, ingredients
- `lib/api.ts` → Handle API requests to Spoonacular (and placeholder for Edamam later)
- `.env.local` → Store API keys

---

## Features
- On load, fetch a **random recipe** from Spoonacular API
- Show recipe **title, image, ingredients**
- Button: “Show Another Recipe” → fetches a new random recipe
- Placeholder function for **Edamam nutrition info** (to integrate later)

---

## Environment / API Keys
- `.env.local` file for storing API keys. Example format:
```
NEXT_PUBLIC_SPOONACULAR_KEY=your_spoonacular_api_key_here
EDAMAM_APP_ID=your_edamam_app_id_here
EDAMAM_APP_KEY=your_edamam_app_key_here
```
- Make sure keys are **not committed to GitHub**

---

## Styling
- Center content on the page
- Minimalist card style for the recipe
- Responsive images (max-width 100%)
- Simple readable font

---

## Dependencies
- `next`
- `react` / `react-dom`
- `axios` for API calls

---

## Optional Future Features
- Integrate Edamam API to show nutrition info per recipe
- Add search or dietary filters
- Deploy to Vercel

---

## Cursor Instructions
> Generate a full Next.js project with the above structure, components, and API integration. Include placeholder `.env.local` for API keys. Use minimalist styling. Make the recipe fetch button functional. Ensure code is clean and ready to run locally.

