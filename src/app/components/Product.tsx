import Link from 'next/link';

export default function Product() {
  return (
    <section className="p-8 bg-white mr-12 ml-12">
      <h1 className="text-4xl font-bold text-center mb-8">Our Products</h1>
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
        {/* Card 1 */}
        <div className="bg-gray-100 overflow-hidden">
          <div className="relative">
            <img
              src="/Images/Product 1.png"
              alt="Syltherine"
              className="w-full h-86 object-cover"
            />
            <div className="absolute top-2 left-2 bg-red-500 text-white text-xs px-2 py-1 rounded">
              -30%
            </div>
          </div>
          <div className="p-4">
            <h2 className="font-semibold text-lg">Syltherine</h2>
            <p className="text-sm text-gray-500">Stylish cafe chair</p>
            <div className="mt-2 flex items-center">
              <span className="text-lg font-bold">Rp 2.500.000</span>
              <span className="text-sm text-gray-400 line-through ml-2">
                Rp 3.500.000
              </span>
            </div>
          </div>
        </div>

        {/* Card 2 */}
        <div className="bg-gray-100 overflow-hidden">
          <div className="relative">
            <img
              src="/Images/Product 2.png"
              alt="Leviosa"
              className="w-full h-86 object-cover"
            />
          </div>
          <div className="p-4">
            <h2 className="font-semibold text-lg">Leviosa</h2>
            <p className="text-sm text-gray-500">Stylish cafe chair</p>
            <div className="mt-2">
              <span className="text-lg font-bold">Rp 2.500.000</span>
            </div>
          </div>
        </div>

        {/* Card 3 */}
        <div className="bg-gray-100 overflow-hidden">
          <div className="relative">
            <img
              src="/Images/Product 3.png"
              alt="Lolito"
              className="w-full h-86 object-cover"
            />
            <div className="absolute top-2 left-2 bg-red-500 text-white text-xs px-2 py-1 rounded">
              -50%
            </div>
          </div>
          <div className="p-4">
            <h2 className="font-semibold text-lg">Lolito</h2>
            <p className="text-sm text-gray-500">Luxury big sofa</p>
            <div className="mt-2 flex items-center">
              <span className="text-lg font-bold">Rp 7.000.000</span>
              <span className="text-sm text-gray-400 line-through ml-2">
                Rp 14.000.000
              </span>
            </div>
          </div>
        </div>

        {/* Card 4 */}
        <div className="bg-gray-100 overflow-hidden">
          <div className="relative">
            <img
              src="/Images/Product 4.png"
              alt="Respira"
              className="w-full h-86 object-cover"
            />
            <div className="absolute top-2 right-2 bg-green-500 text-white text-xs px-2 py-1 rounded">
              New
            </div>
          </div>
          <div className="p-4">
            <h2 className="font-semibold text-lg">Respira</h2>
            <p className="text-sm text-gray-500">Outdoor bar table and stool</p>
            <div className="mt-2">
              <span className="text-lg font-bold">Rp 500.000</span>
            </div>
          </div>
        </div>

        {/* Card 5 */}
        <div className="bg-gray-100 overflow-hidden">
          <div className="relative">
            <img
              src="/Images/Product 5.png"
              alt="Respira"
              className="w-full h-86 object-cover"
            />
            <div className="absolute top-2 right-2 bg-green-500 text-white text-xs px-2 py-1 rounded">
              New
            </div>
          </div>
          <div className="p-4">
            <h2 className="font-semibold text-lg">Respira</h2>
            <p className="text-sm text-gray-500">Outdoor bar table and stool</p>
            <div className="mt-2">
              <span className="text-lg font-bold">Rp 500.000</span>
            </div>
          </div>
        </div>

        {/* Card 6 */}
        <div className="bg-gray-100 overflow-hidden">
          <div className="relative">
            <img
              src="/Images/Product 6.png"
              alt="Respira"
              className="w-full h-86 object-cover"
            />
            <div className="absolute top-2 right-2 bg-green-500 text-white text-xs px-2 py-1 rounded">
              New
            </div>
          </div>
          <div className="p-4">
            <h2 className="font-semibold text-lg">Respira</h2>
            <p className="text-sm text-gray-500">Outdoor bar table and stool</p>
            <div className="mt-2">
              <span className="text-lg font-bold">Rp 500.000</span>
            </div>
          </div>
        </div>

        {/* Card 7 */}
        <div className="bg-gray-100 overflow-hidden">
          <div className="relative">
            <img
              src="/Images/Product 7.png"
              alt="Respira"
              className="w-full h-86 object-cover"
            />
            <div className="absolute top-2 right-2 bg-green-500 text-white text-xs px-2 py-1 rounded">
              New
            </div>
          </div>
          <div className="p-4">
            <h2 className="font-semibold text-lg">Respira</h2>
            <p className="text-sm text-gray-500">Outdoor bar table and stool</p>
            <div className="mt-2">
              <span className="text-lg font-bold">Rp 500.000</span>
            </div>
          </div>
        </div>

        {/* Card 8 */}
        <div className="bg-gray-100 overflow-hidden">
          <div className="relative">
            <img
              src="/Images/Product 8.png"
              alt="Respira"
              className="w-full h-86 object-cover"
            />
            <div className="absolute top-2 right-2 bg-green-500 text-white text-xs px-2 py-1 rounded">
              New
            </div>
          </div>
          <div className="p-4">
            <h2 className="font-semibold text-lg">Respira</h2>
            <p className="text-sm text-gray-500">Outdoor bar table and stool</p>
            <div className="mt-2">
              <span className="text-lg font-bold">Rp 500.000</span>
            </div>
          </div>
        </div>
      </div>
      <div className="flex justify-center w-full mt-8">
        <Link href="/shop">
          <button className="product-btn text-white px-[70px] py-3">
            Show More
          </button>
        </Link>
      </div>
    </section>
  );
}