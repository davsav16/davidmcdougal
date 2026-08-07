import Link from "next/link";

export default function NotFound() {
  return (
    <div className="container mx-auto px-16 py-25 text-center">
      <h1>404 - Hello There!</h1>
      <p>This is not the page you are looking for.</p>
      <Link href="/">You want to go back to the primary landing page</Link>
    </div>
  );
}
