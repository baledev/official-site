---
title: "BaitunaOS Architect"
description: "Designed a comprehensive travel management SaaS for Umrah and Hajj integrated with SISKOPATUH Kemenag, featuring complex profit-sharing algorithms, CRM, and multi-tenancy."
date: 2024-02-15
techStack: ["Go", "Fiber", "Sqlx", "PostgreSQL", "React", "Typescript", "TailwindCSS", "Shadcn UI"]
featured: true
lang: "en"
projectUrl: "https://siskopatuh.com"
---

# BaitunaOS Architect

BaitunaOS is a specialized, enterprise-grade travel management system designed for Hajj and Umrah travel agencies. It combines comprehensive operational modules with strict regulatory compliance and high-performance architecture.

## Core Features

### SISKOPATUH Integration
- Automated data synchronization with Kemenag's SISKOPATUH system.
- Real-time compliance monitoring for government regulations.
- Electronic document management for all pilgrims.

### Operations & Pilgrim Management
- **Lead Tracking**: Comprehensive pilgrim lead documentation with integrated follow-up actions and conversion tracking.
- **Passport Preparation**: Document tracking and preparation for pilgrim passport processing and visa handling.
- **Logistics**: Intuitive itinerary, bus, and hotel allocation management with a drag-and-drop interface.

### Financials & Payments
- **Invoice Management**: Professional billing with dot-matrix printing service support for physical receipts.
- **Profit-Sharing Algorithms**: Complex algorithms for automated commission calculations for agents and partners.
- **Financial Reporting**: Automated double-entry accounting integration and detailed financial reports.

### Advanced Infrastructure
- **Multi-Tenancy**: Robust tenant system for multiple travel agencies with isolated data and subscription management.
- **Regulatory Compliance**: Built-in automated checks and reporting to relevant government authorities.

## Challenges & Solutions

One of the primary challenges was architecting a flexible system for various types of Hajj and Umrah packages with highly complex, dynamic pricing. The solution involved a modular pricing engine supporting multi-currency, promo codes, and configurable additional fees across different travel tiers.

## Results

The implementation significantly improved the operational efficiency of Hajj and Umrah travel agencies, reducing booking processing time by up to 60%. It remains a benchmark for digital transformation in the religious travel industry, providing real-time visibility into financial and operational status for all stakeholders.

## Performance

- **Availability**: High availability with 99.9% uptime for critical religious travel periods.
- **Concurrency**: Optimized for high concurrent traffic during seasonal Hajj/Umrah spikes.
- **Data Integrity**: Transactional consistency for complex profit-sharing and financial settlement.

## Tech Stack

- **Language**: Golang (Fiber v2/v3)
- **Database**: PostgreSQL with Sqlx for optimized queries
- **Frontend**: React with TypeScript & TailwindCSS
- **UI Components**: Shadcn UI & Framer Motion
- **Reports**: Specialized dot-matrix printing service integration
