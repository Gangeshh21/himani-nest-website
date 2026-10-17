# Himani Nest Website

A complete React + Vite website for Himani Nest, Kalapahar, Guwahati, Assam.

## Run it in VS Code

### 1. Install Node.js
Install the current LTS version from https://nodejs.org if Node.js is not already installed.

Check in Terminal:
```bash
node -v
npm -v
```

### 2. Open the project
Extract `Himani-Nest-Website.zip`, then open the extracted `Himani-Nest-Website` folder in VS Code.

### 3. Install dependencies
Open **Terminal → New Terminal** in VS Code and run:
```bash
npm install
```

### 4. Start the website
```bash
npm run dev
```
Open the local URL printed by Vite (usually http://localhost:5173).

### 5. Build for production
```bash
npm run build
```
The deployable website is created in the `dist` folder.

## Main files
- `src/main.jsx` — website content, gallery, navigation, WhatsApp booking form and interactions.
- `src/styles.css` — responsive layout, colors, typography, animations and mobile styling.
- `public/images/` — your uploaded property photos.
- `index.html` — page title, metadata and fonts.

## Details already configured
- WhatsApp: +91 72507 81534 and +91 80991 73497
- Instagram: https://www.instagram.com/himani.nest?exln=bGphcml4NmdvNnNu
- Google Maps: https://maps.google.com/?q=26.148790,91.743607
- Price guide: ₹1,399–₹2,499 per night. The site shows a starting price and asks guests to confirm date-specific rates on WhatsApp.

## Easy customizations
- Change WhatsApp numbers, Instagram URL and Maps link at the top of `src/main.jsx`.
- Gallery photos are mapped in the `photos` array in `src/main.jsx`.
- Update copy and room/amenity details in `src/main.jsx`.
- Change colors in the `:root` section at the top of `src/styles.css`.

## Important
The enquiry form opens WhatsApp with the guest's entered details; it does not charge guests or save bookings to a database. Confirm availability and final pricing directly with the guest.
