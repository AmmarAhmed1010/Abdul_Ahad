# Web Development Services Website

A modern, responsive website for a web development services business, built with Next.js and Tailwind CSS. The website features a contact form that sends emails using Email.js.

## Features

- Responsive design that works on all devices
- Modern UI with smooth animations using Framer Motion
- Contact form with Email.js integration
- Clean and maintainable code structure
- Optimized for performance and SEO

## Prerequisites

- Node.js 14.6.0 or later
- npm or yarn
- Email.js account (for the contact form)

## Getting Started

1. Clone the repository:
   ```bash
   git clone <repository-url>
   cd abdul_ahad
   ```

2. Install dependencies:
   ```bash
   npm install
   # or
   yarn install
   ```

3. Set up environment variables:
   Create a `.env.local` file in the root directory and add your Email.js credentials:
   ```
   NEXT_PUBLIC_EMAILJS_SERVICE_ID=your_service_id
   NEXT_PUBLIC_EMAILJS_TEMPLATE_ID=your_template_id
   NEXT_PUBLIC_EMAILJS_PUBLIC_KEY=your_public_key
   ```

4. Run the development server:
   ```bash
   npm run dev
   # or
   yarn dev
   ```

5. Open [http://localhost:3000](http://localhost:3000) in your browser to see the result.

## Email.js Setup

1. Sign up for a free account at [Email.js](https://www.emailjs.com/)
2. Create an email service (Gmail, Outlook, etc.)
3. Create an email template with the following variables:
   - `user_name`: Sender's name
   - `user_email`: Sender's email
   - `subject`: Email subject
   - `budget`: Project budget
   - `message`: Project details

## Project Structure

- `/app` - Next.js app directory
  - `page.js` - Main page component
  - `layout.js` - Root layout
  - `globals.css` - Global styles
- `/components` - Reusable UI components
  - `Navbar.jsx` - Navigation bar
  - `Hero.jsx` - Hero section
  - `Services.jsx` - Services section
  - `ContactForm.jsx` - Contact form with Email.js integration
- `/public` - Static files

## Technologies Used

- [Next.js](https://nextjs.org/) - React framework
- [Tailwind CSS](https://tailwindcss.com/) - Utility-first CSS framework
- [Framer Motion](https://www.framer.com/motion/) - Animation library
- [Email.js](https://www.emailjs.com/) - Email service
- [React Icons](https://react-icons.github.io/react-icons/) - Icon library

## Deployment

Deploy the application using [Vercel](https://vercel.com/new?utm_medium=default-template&filter=next.js&utm_source=create-next-app&utm_campaign=create-next-app-readme):

[![Deploy with Vercel](https://vercel.com/button)](https://vercel.com/new?utm_medium=default-template&filter=next.js&utm_source=create-next-app&utm_campaign=create-next-app-readme)

## License

This project is open source and available under the [MIT License](LICENSE).
