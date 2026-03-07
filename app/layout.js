export const metadata = {
  title: '832 Cash - We Buy Houses Fast for Cash',
  description: 'Sell your house fast for cash in Houston and surrounding areas. No repairs, no commissions, no hassle. Get a fair cash offer today.',
  keywords: 'we buy houses houston, sell house fast, cash for houses, 832 cash home buyers',
}

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <head>
        <script src="https://cdn.tailwindcss.com"></script>
      </head>
      <body className="antialiased">{children}</body>
    </html>
  )
}
