# Implementation Plan

## Phase 1: Project Setup & Infrastructure
- [ ] Initialize monorepo structure (`/client` / `/server`)
- [ ] Set up Express + TypeScript backend
- [ ] Set up React + TypeScript
- [ ] Configure PostgreSQL database

## Phase 2: Database Schema & Models
- [ ] Configure environment variables and .env files
- [ ] Design and create Prisma schema (Users, Tickets, Sessions)
- [ ] Set up Prisma ORM anand connect to database
- [ ] Define enums for ticket status (Open, Resolved, Closed) and category (General Question, Technical Question, Refund Request)
- [ ] Define user roles (Admin, Agent)
- [ ] Run initial migration
- [ ] Seed database with default admin user

## Phase 3: Authentication
- [ ] Implement session-based auth with database sessions
- [ ] Login endpoint
- [ ] Logout endpoint
- [ ] Session validation middleware
- [ ] Role-based access control middleware (admin vs agent)

## Phase 4: User Management (Admin)
- [ ] API: Create agent account
- [ ] API: List all agents
- [ ] API: Update agent
- [ ] API: Delete/deactivate agent
- [ ] Frontend: User management page (admin only)

## Phase 5: Ticket CRUD
- [ ] API: Create ticket
- [ ] API: List tickets with filtering (status, category) and sorting
- [ ] API: Get ticket detail
- [ ] API: Update ticket status
- [ ] API: Assign ticket to agent
- [ ] Frontend: Ticket list view with filters and sorting
- [ ] Frontend: Ticket detail view

## Phase 6: AI Features
- [ ] Integrate Anthropic Claude API
- [ ] Auto-classify incoming tickets into category
- [ ] Generate ticket summary on creation
- [ ] Generate suggested reply based on ticket content and knowledge base
- [ ] Frontend: Display AI classification, summary, and suggested reply on ticket detail
- [ ] Allow agent to accept, edit, or discard suggested reply

## Phase 7: Email Integration
- [ ] Set up SendGrid/Mailgun account and API keys
- [ ] Inbound webhook endpoint to receive emails and create tickets
- [ ] Parse sender, subject, and body from inbound email
- [ ] Outbound email service for sending replies to students
- [ ] Link replies on a ticket back to the student via email

## Phase 8: Dashboard
- [ ] API: Aggregate ticket stats (open/resolved/closed counts, by category)
- [ ] Frontend: Dashboard with ticket overview and stats
- [ ] Frontend: Quick filters to jump to ticket subsets

## Phase 9: Polish & Deployment
- [ ] Error handling and input validation across all endpoints
- [ ] Loading states and error states on frontend
- [ ] Responsive layout
- [ ] Dockerize frontend and backend
- [ ] Docker Compose for full stack (frontend + backend + postgres)
- [ ] Deploy to cloud provider
- [ ] End-to-end smoke test in production
