import Link from "next/link";
import Image from "next/image";

export default function Home() {
  return (
    <div className="w-full">
      {/* Section 1: Hero Section */}
      <section className="hero min-h-screen bg-gradient-to-br from-primary/20 to-secondary/20">
        <div className="hero-content text-center">
          <div className="max-w-2xl">
            <h1 className="text-5xl md:text-7xl font-bold mb-6">
              Welcome to NextShop
            </h1>
            <p className="text-xl mb-8">
              Discover premium tech products at unbeatable prices. Quality
              guaranteed, fast shipping, amazing support.
            </p>
            <div className="flex gap-4 justify-center flex-wrap">
              <Link href="/items" className="btn btn-primary btn-lg">
                Browse Products
              </Link>
              <Link href="/login" className="btn btn-outline btn-lg">
                Get Started
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* Section 2: Features */}
      <section className="py-20 bg-base-200">
        <div className="container mx-auto px-4">
          <h2 className="text-4xl font-bold text-center mb-12">
            Why Choose NextShop?
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {/* Feature 1 */}
            <div className="card bg-base-100 shadow-xl">
              <div className="card-body items-center text-center">
                <div className="text-5xl mb-4">🚀</div>
                <h3 className="card-title">Fast Delivery</h3>
                <p>Get your products delivered within 2-3 business days</p>
              </div>
            </div>
            {/* Feature 2 */}
            <div className="card bg-base-100 shadow-xl">
              <div className="card-body items-center text-center">
                <div className="text-5xl mb-4">✅</div>
                <h3 className="card-title">Quality Assured</h3>
                <p>All products are verified and come with warranty</p>
              </div>
            </div>
            {/* Feature 3 */}
            <div className="card bg-base-100 shadow-xl">
              <div className="card-body items-center text-center">
                <div className="text-5xl mb-4">💰</div>
                <h3 className="card-title">Best Prices</h3>
                <p>Competitive pricing with regular discounts and offers</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Section 3: Stats */}
      <section className="py-20">
        <div className="container mx-auto px-4">
          <div className="stats stats-vertical md:stats-horizontal shadow w-full">
            <div className="stat place-items-center">
              <div className="stat-title">Products</div>
              <div className="stat-value text-primary">1,000+</div>
              <div className="stat-desc">Premium tech items</div>
            </div>
            <div className="stat place-items-center">
              <div className="stat-title">Customers</div>
              <div className="stat-value text-secondary">50K+</div>
              <div className="stat-desc">Happy customers worldwide</div>
            </div>
            <div className="stat place-items-center">
              <div className="stat-title">Reviews</div>
              <div className="stat-value">4.9★</div>
              <div className="stat-desc">Average rating</div>
            </div>
          </div>
        </div>
      </section>

      {/* Section 4: Categories */}
      <section className="py-20 bg-base-200">
        <div className="container mx-auto px-4">
          <h2 className="text-4xl font-bold text-center mb-12">
            Shop by Category
          </h2>
          <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
            {["Electronics", "Audio", "Wearables", "Accessories"].map(
              (category) => (
                <Link
                  key={category}
                  href="/items"
                  className="card bg-base-100 shadow-xl hover:shadow-2xl transition-all hover:scale-105"
                >
                  <div className="card-body items-center text-center">
                    <h3 className="card-title">{category}</h3>
                    <p className="text-sm opacity-70">Explore now →</p>
                  </div>
                </Link>
              )
            )}
          </div>
        </div>
      </section>

      {/* Section 5: Testimonials */}
      <section className="py-20">
        <div className="container mx-auto px-4">
          <h2 className="text-4xl font-bold text-center mb-12">
            What Our Customers Say
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {[
              {
                name: "Sarah J.",
                text: "Best shopping experience! Fast delivery and great products.",
              },
              {
                name: "Mike T.",
                text: "Amazing quality and customer service. Highly recommended!",
              },
              {
                name: "Lisa K.",
                text: "Love the variety of products. Will definitely shop again!",
              },
            ].map((testimonial, index) => (
              <div key={index} className="card bg-base-100 shadow-xl">
                <div className="card-body">
                  <div className="rating mb-2">
                    {[...Array(5)].map((_, i) => (
                      <input
                        key={i}
                        type="radio"
                        className="mask mask-star-2 bg-orange-400"
                        disabled
                        checked={i === 4}
                      />
                    ))}
                  </div>
                  <p className="italic">{testimonial.text}</p>
                  <p className="font-bold mt-2">- {testimonial.name}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Section 6: Newsletter */}
      <section className="py-20 bg-primary text-primary-content">
        <div className="container mx-auto px-4 text-center">
          <h2 className="text-4xl font-bold mb-4">Stay Updated</h2>
          <p className="text-xl mb-8">
            Subscribe to get special offers and updates
          </p>
          <div className="flex gap-2 max-w-md mx-auto">
            <input
              type="email"
              placeholder="Enter your email"
              className="input input-bordered w-full"
            />
            <button className="btn btn-secondary">Subscribe</button>
          </div>
        </div>
      </section>

      {/* Section 7: CTA (Call to Action) */}
      <section className="py-20 bg-base-200">
        <div className="container mx-auto px-4 text-center">
          <h2 className="text-4xl font-bold mb-6">Ready to Start Shopping?</h2>
          <p className="text-xl mb-8 max-w-2xl mx-auto">
            Join thousands of satisfied customers and find your perfect tech
            products today!
          </p>
          <Link href="/items" className="btn btn-primary btn-lg">
            Explore All Products
          </Link>
        </div>
      </section>
    </div>
  );
}
