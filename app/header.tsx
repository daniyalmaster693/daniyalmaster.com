'use client'
import { TextLoop } from '@/components/ui/text-loop'
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
          <div className="flex flex-col gap-1">
            Daniyal Master
            <TextLoop className="text-zinc-600 dark:text-zinc-500">
              <span>Student</span>
              <span>Developer</span>
            </TextLoop>
          </div>
        </div>
      </Link>
    </header>
  )
}
