# Sneha Dilip & Sooraj — Royal Hindu Wedding Invitation

A digital Hindu wedding invitation website designed with a luxury handcrafted aesthetic: **Deep Burgundy Silk, Antique Gold Foiling, and Ivory Floral Lace**.

---

## 🌟 Visual Identity & Design
- **Deep Burgundy**: `#641F2B`
- **Dark Wine**: `#45151D`
- **Antique Gold**: `#C5A45C`
- **Champagne Gold**: `#D8C49A`
- **Ivory & Warm Cream**: `#F8F4EC` / `#EEE5D7`
- **Typography**: Cormorant Garamond, Cinzel Decorative, Great Vibes, and Montserrat.

---

## ✨ Features
1. **Physical 3D Card Opening Experience**:
   - Deep burgundy textured card laid over ivory floral lace.
   - Circular dark burgundy wax seal with antique-gold royal `S & S` monogram.
   - Interactive unsealing animation with wax fracture, spark burst, and authentic crack sound effect.
   - 3D gatefold flaps swing open to reveal the inner card with an antique gold Lord Ganesha bas-relief and Sanskrit blessing.
2. **Sacred Wedding Announcement**:
   - Archival framed romantic photograph of Sneha & Sooraj with subtle parallax and gold filigree.
3. **Editorial Couple Introduction**:
   - Magazine-style portrait layout of the Bride (Sneha Dilip) and Groom (Sooraj) featuring their actual photographs.
4. **Divine Sacred Union Invitation & Radha Krishna Artwork**:
   - Formal invitation text.
   - Classical royal painting of Lord Krishna & Radha in eternal divine love.
5. **Family Lineage**:
   - Exact bride and groom family details, parent names, and postal addresses with one-click "Copy Address" buttons.
6. **Ceremony Details & Vedic Traditions**:
   - Event card with placeholders for Wedding Date, Muhurtham, and Venue.
   - "Add to Calendar" (.ics file) feature.
   - Interactive Vedic rituals guide (Shri Ganesh Puja, Kanyadaanam, Mangalya Dharanam, Saptapadi).
7. **Location & Directions**:
   - Venue coordinates, stylized map preview, Google Maps directions button, and WhatsApp invitation sharing.
8. **Final Blessing & Guestbook**:
   - Warm closing message from the couple.
   - Quick RSVP response.
   - Interactive "Bless the Couple" guestbook with gold and rose petal confetti.
9. **Sound Design & Music Engine**:
   - Web Audio API synthesizer playing Raga Kalyani / Yaman on Indian Bamboo Flute (Bansuri) and Tanpura drone.
   - Real-time equalizer visualizer on floating music controller.
   - Wax seal crack sound and sacred temple bell chimes.
10. **Ambient Falling Petals**:
    - Canvas-based falling jasmine and golden marigold petals with a toggle control.

---

## 🚀 Running the Project Locally

```bash
# Install dependencies
npm install

# Start development server
npm run dev
# The website will be available at http://localhost:3000/

# Create production build
npm run build
```

---

## 📝 Customizing Event Details
When the wedding date, time, and venue are finalized, update the placeholder constants in:
- `src/components/SectionCeremony.tsx`
- `src/components/SectionLocation.tsx`

