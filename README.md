
# 🛡️ AI-Powered Secure Customer Support Chatbot

An intelligent, secure-by-design AI chatbot built with **Next.js**, **OpenAI GPT models**, and a modern web stack. This full-stack solution delivers **personalized, authenticated, and secure customer support** experiences using real-time LLM responses and granular feedback collection.

---

## 📌 Project Overview

This project is a production-ready customer support chatbot that prioritizes **security**, **privacy**, and **compliance** in handling user interactions and chat data. By combining **authentication**, **data encryption**, **role-based access**, and **LLM-powered intelligence**, the chatbot creates a reliable support experience for both end users and admins.

---

## 🛠️ Tech Stack

| Category        | Tools & Frameworks                                  |
|----------------|------------------------------------------------------|
| Frontend       | **Next.js**, **Shadcn UI**, **TailwindCSS**          |
| Authentication | **NextAuth.js** (OAuth2, JWT, session security)      |
| Backend / API  | **Next.js API routes**, **OpenAI GPT API**           |
| Database       | **PostgreSQL** (via **Neon**), **Prisma ORM**        |
| GenAI Layer    | **OpenAI GPT Models** (via API or OpenRouter)        |
| Hosting        | Vercel / Railway / Neon Cloud                        |

---

## 🔐 Security-Centric Architecture

- ✅ **Authentication & Session Security**
  - Users are authenticated via **NextAuth** using OAuth (Google, GitHub, etc.)
  - JWTs and secure session cookies with HttpOnly, SameSite, and Secure flags
  - Access to chat and feedback routes requires active session validation

- ✅ **Data Protection & Isolation**
  - All user chat sessions, messages, and feedback are stored per user in PostgreSQL
  - Prisma enforces schema constraints and user-session separation
  - Input sanitization prevents XSS, SQL injection, and prompt leakage

- ✅ **Rate Limiting & Abuse Protection**
  - API routes are protected with **rate limiting middleware**
  - Supports future extension with **CAPTCHA** or bot detection via Cloudflare Turnstile

- ✅ **LLM Safety Layer**
  - OpenAI responses are filtered and monitored
  - Future plans to include prompt moderation and AI output scoring

- ✅ **Feedback Loop Auditing**
  - User feedback on chatbot replies is logged with user ID, message ID, and timestamp
  - Enables transparency and manual audit of LLM interactions

- ✅ **Secure Deployment (Neon + Vercel)**
  - Environment variables stored in `.env.local`, not committed to version control
  - Hosted PostgreSQL on **Neon** with SSL connections and read-only access roles
  - Fully serverless-ready for easy secure deployment to Vercel

---

## 🚀 Features

- 💬 **Conversational Chat Interface**
- 🤖 **LLM Response Engine (OpenAI GPT-3.5 / GPT-4 / Claude)**
- 🔐 **Secure Login & Session Storage**
- 📦 **Database Persistence of Chats**
- 📈 **Feedback Collection with User Binding**
- 🧑‍💼 **Future Admin Dashboard for Feedback Review**

---

## 🧠 Core Skills Demonstrated

- **GenAI API Integration (OpenAI, OpenRouter)**
- **Secure Full-Stack Authentication & Authorization (NextAuth + JWT)**
- **Database Security & Access Control (PostgreSQL + Prisma)**
- **LLM Interaction Logging, Feedback Tracking**
- **Frontend Integration with Secure Backend via API Routes**

