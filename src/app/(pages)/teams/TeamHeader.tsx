export default function TeamHeader() {
  return (
    <div className="flex min-h-screen items-center justify-center bg-black px-4 text-white">
      <div className="mx-auto max-w-2xl lg:max-w-6xl">
        <h1 className="mb-6 text-7xl font-bold lg:text-8xl">
          Take a look at our brilliant team members.
        </h1>
        <div className="mb-4 h-1 w-full bg-white"></div>
        <div className="flex flex-wrap gap-8">
          <div className="max-w-lg">
            <p className="text-3xl font-semibold leading-relaxed text-zinc-300 lg:text-4xl">
              We are a diverse group of individuals, united by our passion for
              innovation and excellence.
            </p>
          </div>
          <div className="max-w-lg">
            <p className="text-3xl font-normal leading-relaxed text-zinc-300 lg:text-4xl">
              Our team is committed to redefining what's possible and making a
              meaningful impact.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}
