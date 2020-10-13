import Link from 'next/link'
export default function Home() {
  return (
    <div>
      Hello World.{' '}
      <br />
      <Link href="/about">
        <a>About</a>
      </Link>
      <br />
      <Link href="/day">
        <a>day</a>
      </Link>
    </div>
  )
}
