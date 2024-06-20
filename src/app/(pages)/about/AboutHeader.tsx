export default function AboutHeader() {
  return (
    <div className="flex min-h-screen items-center justify-center bg-gray-100 px-4">
      <div className="mx-auto max-w-2xl lg:max-w-6xl">
        <h1 className="mb-6 text-7xl font-bold text-gray-900 lg:text-8xl">
          Watch how Tempus is changing your perception of time.
        </h1>
        <div className="mb-4 h-1 w-full bg-gray-700"></div>
        <div className="flex flex-wrap gap-8">
          <div className="max-w-lg">
            <p className="text-2xl font-semibold leading-relaxed text-gray-800 lg:text-4xl">
              Behind Tempus is a team of passionate individuals who are
              dedicated to creating a new way of experiencing time.
            </p>
          </div>
          <div className="max-w-lg">
            <p className="text-2xl font-normal leading-relaxed text-gray-800 lg:text-4xl">
              Our mission is to help you make the most of your time by providing
              a new way of experiencing time.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}
