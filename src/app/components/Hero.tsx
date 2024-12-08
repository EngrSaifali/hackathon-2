export default function Hero() {
    return (
        <div
            className="relative bg-cover bg-center bg-no-repeat h-[500px] lg:h-[600px]"
            style={{
                backgroundImage: "url('/images/hero.png')",
            }}
        >
            <div className="container mx-auto px-4 lg:px-8 h-full flex items-center justify-end">
                <div
                    className="bg-yellow-50 p-6 lg:p-12 rounded-md"
                    style={{ maxWidth: "630px" }}
                >
                    <p className="text-sm font-medium text-gray-900 mb-2">
                        New Arrival
                    </p>
                    <h1 className="hero-header text-4xl lg:text-5xl font-bold text-gray-800 leading-tight mb-4">
                        Discover Our <br />
                        <span className="">New Collection</span>
                    </h1>
                    <p className="hero-text text-base mb-6">
                        Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                        Ut elit tellus, luctus nec ullamcorper mattis.
                    </p>
                    <button className="hero-btn text-white px-[70px] py-5">
                        BUY NOW
                    </button>
                </div>
            </div>
        </div>
    );
}
