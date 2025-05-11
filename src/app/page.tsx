import Image from 'next/image'
import TodoApp from '../components/todoApp'

export default function Home() {
  return (
    <div className="grid grid-rows-[20px_1fr_20px] items-center justify-items-center gap-16 p-8 pb-20 font-[family-name:var(--font-geist-sans)] sm:p-20">
      <main className="row-start-2 flex w-full max-w-[600px] flex-col items-center gap-[32px] sm:items-start">
        <div className="flex w-full items-center justify-between">
          <div className="bg-gray-500 p-3">
            <Image
              className="dark:invert"
              src="/next.svg"
              alt="Next.js logo"
              width={90}
              height={20}
              priority
            />
          </div>
        </div>
        <TodoApp />
      </main>
    </div>
  )
}
