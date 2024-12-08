export default function BrowseRange() {
    return (
        <section className="py-12">
            <div className="container mx-auto px-4 lg:px-16 text-center">
                <h2 className="browse text-3xl lg:text-4xl font-bold mb-2">
                    Browse The Range
                </h2>
                <p className="text-gray-600 text-base lg:text-lg mb-10">
                    Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                </p>

                {/* Grid Items */}
                <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-5">
                    {/* Card 1 */}
                    <div className="rounded-lg overflow-hidden max-w-[370px] mx-auto">
                        <img
                            src="/images/Dining.png"
                            alt="Dining"
                            className="w-full h-auto object-cover"
                        />
                        <h3 className="text-lg font-semibold text-gray-700 mt-6">
                            Dining
                        </h3>
                    </div>

                    {/* Card 2 */}
                    <div className="rounded-lg overflow-hidden max-w-[370px] mx-auto">
                        <img
                            src="/images/Living.png"
                            alt="Living"
                            className="w-full h-auto object-cover"
                        />
                        <h3 className="text-lg font-semibold text-gray-700 mt-6">
                            Living
                        </h3>
                    </div>

                    {/* Card 3 */}
                    <div className="rounded-lg overflow-hidden max-w-[370px] mx-auto">
                        <img
                            src="/images/Bedroom.png"
                            alt="Bedroom"
                            className="w-full h-auto object-cover"
                        />
                        <h3 className="text-lg font-semibold text-gray-700 mt-6">
                            Bedroom
                        </h3>
                    </div>
                </div>
            </div>
        </section>
    );
}