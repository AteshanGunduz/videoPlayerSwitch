
import '../styles/globals.css'


export const metadata = {
  title: 'Video Player',
  description: 'Video Player',
}

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body>{children}</body>
    </html>
  )
}
