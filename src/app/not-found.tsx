"use client";
import Link from "next/link";

function NotFound() {
  return (
    <html lang="en">
      <body className="flex flex-col items-center justify-center h-screen bg-gray-900 text-white gap-3">
        <h1 className="text-2xl font-medium">404 | Page Not Found</h1>
        <p>The requested page could not be found.</p>
        <Link href="/" className="px-3 py-1 bg-orange-600 rounded-md mt-5">
          Go Home
        </Link>
      </body>
    </html>
  );
}

export default NotFound;
