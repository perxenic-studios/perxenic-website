import { BlogPosts } from 'app/components/posts'

export default function Page() {
  return (
    <section>
      <h1 className="mb-8 text-2xl font-semibold tracking-tighter">
        Perxenic
      </h1>
      <p className="mb-4">
        {`Perxenic is a software studio founded by Auseawesome and LuckyMcDev. Currently we create minecraft mods which can be found mainly on modrinth`}
      </p>
      <div className="my-8">
        <BlogPosts />
      </div>
    </section>
  )
}
