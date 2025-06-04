import { Button } from "@/components/ui/button";
import { FileQuestion, Search } from "lucide-react";
import Link from "next/link";

export default function NotFound() {
  return (
    <div className="min-h-screen flex items-center justify-center px-4 flex-col">
      <div className="max-w-md w-full text-center">
        <FileQuestion size={64} className="text-gray-100 mx-auto mb-5" />
      </div>

      <div className="relative inline-block mb-3 font-sans text-8xl font-bold text-white">
        <h2>404</h2>
      </div>

      <p className="text-gray-100 mb-8">Página não encontrada</p>

      <div className="mt-6 flex justify-center gap-4">
        <Button asChild >
          <Link href="/" className="text-gray-100">
            Home
          </Link>
        </Button>

        <Button asChild variant="secondary">
          <Link href="/blog?q=" className="text-gray-100">
            <Search size={16} />
            Pesquisar posts
          </Link>
        </Button>
      </div>
    </div>
  )
}