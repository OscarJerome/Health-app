import Link from "next/link"

export default function AboutPage() {
  return (
    <section className = {`flex min-h-screen flex-col items-center justify-between p-24`}>
      <h1>About Page</h1>
      <Link href="/">
        <a className="text-4xl font-bold text-gray-900">Home</a>
      </Link>
    </section>
  )
}
