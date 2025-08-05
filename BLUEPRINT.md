# Shuttle Up App Blueprint

## Overview
Shuttle Up is a badminton-focused application that connects players, organizes games,
and simplifies scoring and tournaments. The frontend will be built with **Next.js**,
**TypeScript**, and **Tailwind CSS** to deliver a fast, responsive interface.

## Core Features
1. **User Authentication**
   - Sign up/log in using Google OAuth or email/password.
2. **Rules Guide**
   - Beginner-friendly guide with complete badminton rules.
3. **Club Creation and Joining**
   - Users create clubs and specify skill levels (beginner, intermediate, advanced).
4. **Game Hosting and Match History**
   - Host games, record results, and display historical match data.
5. **Secure Messaging**
   - Encrypted conversations between players using end-to-end encryption.
6. **Player Profiles**
   - Stats, preferences, and bio for each player.
7. **Player Connections**
   - Request, approve, or decline connections with other players.
8. **Theme Selection**
   - Toggle between light and dark interface themes.
9. **Match Scoring**
   - Real-time point scoring during matches.
10. **Virtual Toss**
    - Randomized toss to determine initial server.
11. **Tournament Creation**
    - Create tournaments with basic or custom rules and editable parameters before start.
12. **User Data Storage**
    - Persistent database for user accounts, clubs, matches, and messages.

## Architectural Notes
- **Frontend**: Next.js pages and components written in TypeScript, styled with Tailwind CSS.
- **Backend**: Next.js API routes or a separate Node.js service for authentication, messaging,
  and data access.
- **Database**: PostgreSQL with Prisma ORM (or similar) for type-safe queries.
- **Authentication**: NextAuth.js integrating Google OAuth and email login flows.
- **Messaging**: WebSocket or WebRTC for real-time secure messaging; messages encrypted
  client-side with libraries like `tweetnacl`.
- **State Management**: React Query or Zustand for client state and server caching.

## UI/UX Guidelines
### Color Palette
- **Light Theme**
  - Background: `#F9FAFB`
  - Primary: `#2563EB`
  - Accent: `#F59E0B`
  - Text: `#1F2937`
- **Dark Theme**
  - Background: `#111827`
  - Primary: `#3B82F6`
  - Accent: `#FBBF24`
  - Text: `#F3F4F6`

### Layout
- Clean, card-based layout with generous spacing for readability.
- Consistent padding and margins (e.g., Tailwind `p-6`, `m-4`).

### Typography
- Use `'PT Sans', sans-serif` for all text.
- Headings utilize semi-bold weights; body text remains regular for clarity.

### Iconography
- Minimalist icons representing badminton equipment and actions (shuttlecock,
  racket, court, etc.) for intuitive navigation.

### Animation
- Subtle transitions (`transition`, `duration-200`, `ease-in-out`) on button presses,
  modal openings, and theme switches.

## Next Steps
- Scaffold a Next.js project with TypeScript and Tailwind configured.
- Implement authentication flows.
- Design database schema and setup migration tooling.
- Build UI components adhering to the guidelines above.

