import Link from "next/link"

export default function Home() {
  return (
    <main className="flex min-h-screen flex-col items-center justify-between p-24">
     <nav className ={`  `}>
     <Link href="/about">
       About
      </Link>

      <Link href="/services">
       Services
      </Link>

      <Link href="/specialist">
       Specialist
      </Link>

      <Link href="/contact">
       Contact
      </Link>
     </nav>
    </main>
  )
}
