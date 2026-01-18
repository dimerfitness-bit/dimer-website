import './globals.css'

export const metadata = {
  title: 'Dimer - White-Label Fitness Community for Gyms',
  description: 'Increase member retention with workout partner matching',
}

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body>{children}</body>
    </html>
  )
}
