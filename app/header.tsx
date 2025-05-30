'use client'
import { TextEffect } from '@/components/ui/text-effect'
import Link from 'next/link'

export function Header() {
  return (
    <header className="mb-8 flex items-center justify-between">
      <Link href="/" className="font-medium text-black dark:text-white">
        <div className="flex items-center space-x-4">
          <img
            src="/Daniyal.webp"
            alt="Daniyal"
            className="mr-5 h-14 w-14 rounded-full object-cover"
          />
          <div>
            Daniyal Master
            <TextEffect
              as="p"
              preset="fade"
              per="char"
              className="text-zinc-600 dark:text-zinc-500"
              delay={0.5}
            >
              Software Engineer
            </TextEffect>
          </div>
        </div>
      </Link>
    </header>
  )
}
