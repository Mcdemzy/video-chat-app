import Image from "next/image";
import Link from "next/link";

export default function Home() {
  return (
    <main className="flex flex-col items-center justify-center min-h-screen bg-gradient-to-b from-blue-500 to-blue-700 text-white">
      <h1 className="text-4xl font-bold mb-8 text-center">
        Video Conferencing Made Simple
      </h1>

      <p className="text-xl mb-12 text-center max-w-prose">
        Join high-quality video conferences anytime, anywhere with our secure
        and reliable platform.
      </p>

      <div className="mt-16">
        <Link
          href="/room"
          className="bg-white text-blue-500 px-10 py-6 rounded-full font-semibold hover:bg-blue-100 transition-colors text-2xl"
        >
          Get Started
        </Link>
      </div>
    </main>
  );
}
