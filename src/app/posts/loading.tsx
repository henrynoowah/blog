const loading = () => {
  return (
    <div className="w-full max-w-2xl px-4 xl:px-0 py-4">
      <div className="border-b py-2 mb-2 border-solid border-gray-400/20 flex flex-col gap-y-2 animate-pulse">
        <h1 className="h-[1.5rem] leading-[2rem] rounded-md bg-gray-400/20" />
        <span className="h-[1rem] leading-[1.5rem] rounded-md w-full max-w-[60%] flex justify-start bg-gray-400/20" />
      </div>

      <article className="flex flex-col gap-2 pt-6 animate-pulse">
        <span className="h-[400px] leading-[1.5rem] rounded-md w-full flex justify-start bg-gray-400/20" />
        {Array.from({ length: 20 }).map((_, i) => (
          <span key={i} className="h-[2rem] leading-[1.5rem] rounded-md w-full flex justify-start bg-gray-400/20" />
        ))}
      </article>
    </div>
  )
}

export default loading
