export default function AboutHistory() {
  return (
    <div className="bg-black px-4 py-12 text-white">
      <div className="container mx-auto max-w-4xl">
        <h2 className="mb-8 text-4xl font-bold">Our History</h2>
        <ul className="timeline">
          <li className="mb-6">
            <div className="mb-2 flex items-center">
              <span className="mr-4 text-lg font-semibold">2015</span>
              <div className="h-px flex-1 bg-gray-600"></div>
            </div>
            <p className="text-lg">
              Tempus was founded with the vision of redefining the way people
              perceive time.
            </p>
          </li>
          <li className="mb-6">
            <div className="mb-2 flex items-center">
              <span className="mr-4 text-lg font-semibold">2016</span>
              <div className="h-px flex-1 bg-gray-600"></div>
            </div>
            <p className="text-lg">
              Secured initial funding to begin development of our first product.
            </p>
          </li>
          <li className="mb-6">
            <div className="mb-2 flex items-center">
              <span className="mr-4 text-lg font-semibold">2018</span>
              <div className="h-px flex-1 bg-gray-600"></div>
            </div>
            <p className="text-lg">
              Launched our first product, gaining significant traction in the
              market.
            </p>
          </li>
          <li className="mb-6">
            <div className="mb-2 flex items-center">
              <span className="mr-4 text-lg font-semibold">2020</span>
              <div className="h-px flex-1 bg-gray-600"></div>
            </div>
            <p className="text-lg">
              Expanded our team and developed innovative features to enhance
              user experience.
            </p>
          </li>
          <li className="mb-6">
            <div className="mb-2 flex items-center">
              <span className="mr-4 text-lg font-semibold">2024</span>
              <div className="h-px flex-1 bg-gray-600"></div>
            </div>
            <p className="text-lg">
              Reached a milestone of 1 million users, continuing to grow and
              innovate.
            </p>
          </li>
        </ul>
      </div>
    </div>
  );
}
