import * as React from "react"
import { OpenInV0Button } from "@/components/open-in-v0-button"
import { HelloWorld } from "@/registry/new-york/hello-world/hello-world"
import { ExampleForm } from "@/registry/new-york/example-form/example-form"
import PokemonPage from "@/registry/new-york/complex-component/page"

// This page displays items from the custom registry.
// You are free to implement this with your own design as needed.

const Displayer = ({ children, title, name }: { children: React.ReactNode, title: string, name: string }) => {
  return (
    <div className="flex flex-col gap-4 border rounded-lg p-4 min-h-[450px] relative">
      <div className="flex items-center justify-between">
        <h2 className="text-sm text-muted-foreground sm:pl-3">{title}</h2>
        <OpenInV0Button name={name} className="w-fit" />
      </div>
      {children}
    </div>
  )
}

export default function Home() {
  return (
    <div className="max-w-3xl mx-auto flex flex-col min-h-svh px-4 py-8 gap-8">
      <header className="flex flex-col gap-1">
        <h1 className="text-3xl font-bold tracking-tight">سجل مخصص</h1>
        <p className="text-muted-foreground">
          سجل مخصص لتوزيع الكود باستخدام shadcn.
        </p>
      </header>
      <main className="flex flex-col flex-1 gap-8">
        <Displayer title="مكون مرحبا بالعالم البسيط" name="hello-world">
          <div className="flex items-center justify-center min-h-[400px] relative">
            <HelloWorld />
          </div>
        </Displayer>

        <Displayer title="نموذج اتصال مع التحقق من Zod." name="example-form">
          <div className="flex items-center justify-center min-h-[500px] relative">
            <ExampleForm />
          </div>
        </Displayer>

        <Displayer title="مكون معقد يعرض الـ hooks والمكتبات والمكونات." name="complex-component">
          <div className="flex items-center justify-center min-h-[400px] relative">
            <PokemonPage />
          </div>
        </Displayer>

      </main>
    </div>
  )
}
