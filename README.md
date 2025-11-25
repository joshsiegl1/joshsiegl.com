# Josh Siegl's Portfolio Site

A modern, responsive portfolio website built with AI collaboration, showcasing a software engineer's experience, skills, and projects.

## Features

- **Responsive Design**: Mobile-first approach that adapts seamlessly to all screen sizes
- **Live Weather Widget**: Real-time weather data for West Chester, PA displayed in the top-right corner
- **Social Media Links**: Quick access to GitHub, LinkedIn, and Twitter profiles
- **Modern Typography**: Clean Poppins font for a professional appearance
- **Backend API**: Node.js Express server with weather data integration
- **Auto-Reload Development**: Built with nodemon for seamless local development

## Tech Stack

- **Frontend**: HTML5, CSS3, Vanilla JavaScript
- **Backend**: Node.js, Express, Axios
- **Weather API**: Open-Meteo (no API key required)
- **Dev Tools**: nodemon for auto-reloading
- **Hosting**: Static files served by Express backend

## Getting Started

### Prerequisites

- Node.js (v14 or higher)
- npm

### Installation

1. Clone or download the repository
2. Install dependencies:

```bash
npm install
```

### Running the Server

#### Development (with auto-reload)

```bash
npm run dev
```

The server will start on `http://localhost:3000` and automatically reload when files change.

#### Production

```bash
npm start
```

## Project Structure

```
AIHTML/
├── index.html          # Main portfolio page
├── styles.css          # Responsive styling
├── server.js           # Express backend for serving files and weather API
├── me.jpeg             # Profile avatar image
├── package.json        # Project dependencies and scripts
└── README.md           # This file
```

## Features Explained

### Weather Widget

The site displays real-time weather information in the top-right corner of the card. The backend fetches data from Open-Meteo and converts temperatures to Fahrenheit for US-based users. Data refreshes every 15 minutes.

### Social Links

Located beneath the profile avatar (desktop view), social links include:
- GitHub
- LinkedIn
- Twitter

Social links are hidden on mobile devices (< 640px) to maintain clean layout.

### Responsive Layout

- **Desktop (640px+)**: Full layout with avatar, social links, and wide content area
- **Mobile (< 640px)**: Compact layout with hidden social links and adjusted spacing to prevent overlap

## Customization

### Update Profile Information

Edit `index.html` to change:
- Name and title
- About Me section
- Location
- Contact email
- Social media URLs

### Change Colors

Edit `styles.css` CSS variables in the `:root` selector:
- `--bg`: Background color
- `--accent`: Accent color (used for links)
- `--text`: Text color
- `--muted`: Muted text color

### Change Font

The site uses Poppins from Google Fonts. To change fonts, update the import in `index.html` and modify the `font-family` in `styles.css`.

## API Endpoints

### GET /api/weather

Fetches current weather for West Chester, PA.

**Query Parameters:**
- `lat` (optional): Latitude (default: 39.9607)
- `lon` (optional): Longitude (default: -75.6055)

**Response:**
```json
{
  "temperature": 12.5,
  "windspeed": 15,
  "winddirection": 230,
  "weathercode": 3,
  "description": "Overcast",
  "timezone": "America/New_York",
  "fetchedAt": "2025-11-25T18:30:00.000Z"
}
```

## Development Notes

- This site was built using AI assistance, demonstrating modern collaborative development workflows
- The backend uses CORS to allow frontend requests
- Static files are served directly from the project root
- No external databases required

## Future Enhancements

- Portfolio projects section
- Dark mode toggle
- Blog or articles section
- Contact form with email integration
- Search engine optimization (SEO)

## License

MIT License - feel free to use this as a template for your own portfolio!
