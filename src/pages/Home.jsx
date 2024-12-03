import {
  FaInstagram,
  FaFacebookF,
  FaTwitter,
  FaMapMarkerAlt,
  FaPhone,
  FaEnvelope,
} from "react-icons/fa";
import Image from "../components/Image";
import { Link } from "react-router-dom";

export default function Home() {
  const shows = [
    {
      id: 1,
      title: "Nice Jewish Comedians",
      date: "Mon Dec 2",
      time: "7:00 PM",
      image:
        "https://i.pinimg.com/736x/10/44/3e/10443e0c58fc9c2092598442cd1e69f1.jpg",
      tagline: "Come roar on laughter!",
    },
    {
      id: 2,
      title: "The Bocchetti Headlines Stand Up NY",
      date: "Thu Dec 5",
      time: "5:00 PM",
      image:
        "https://i.pinimg.com/736x/10/44/3e/10443e0c58fc9c2092598442cd1e69f1.jpg",
      tagline: "A night of pure comedy!",
    },
    {
      id: 3,
      title: "The Gabriela Cohen Variety Show",
      date: "Mon Dec 9",
      time: "7:00 PM",
      image:
        "https://i.pinimg.com/736x/10/44/3e/10443e0c58fc9c2092598442cd1e69f1.jpg",
      tagline: "Featuring Kosha Dillz & Special Guests!",
    },
    {
      id: 4,
      title: "Chemistry Lab",
      date: "Tue Dec 10",
      time: "9:00 PM",
      image:
        "https://i.pinimg.com/736x/10/44/3e/10443e0c58fc9c2092598442cd1e69f1.jpg",
      tagline: "Where science meets comedy!",
    },
    {
      id: 5,
      title: "Nice Jewish Comedians",
      date: "Mon Dec 15",
      time: "7:00 PM",
      image:
        "https://i.pinimg.com/736x/10/44/3e/10443e0c58fc9c2092598442cd1e69f1.jpg",
      tagline: "Come roar on laughter!",
    },
    {
      id: 6,
      title: "Comics for Conversation",
      date: "Mon Dec 15",
      time: "8:00 PM",
      image:
        "https://i.pinimg.com/736x/10/44/3e/10443e0c58fc9c2092598442cd1e69f1.jpg",
      tagline: "Because It's Not Always a Laughing Matter!",
    },
  ];

  return (
    <div className="min-h-screen overflow-x-hidden bg-background dark:bg-darkPrimary">
      {/* Hero Section */}
      <section
        className="relative h-screen min-h-[400px] pt-16"
        style={{
          backgroundImage:
            "url('https://i.pinimg.com/1200x/22/83/96/2283964804abc1f88747f21a8e20b0db.jpg')",
          backgroundRepeat: "no-repeat",
          backgroundSize: "cover",
          backgroundPosition: "center",
        }}
      >
        <div className="absolute inset-0">
          <Image
            src="" // Replace with your image path
            alt="Times Square"
            cover
            className="object-cover brightness-50 "
          />
        </div>

        <div className="relative h-full flex flex-col items-center justify-center text-white text-center px-4">
          <h1 className="text-4xl md:text-6xl font-bold mb-4">Times Square</h1>
          <p className="text-lg md:text-xl max-w-2xl mx-auto mb-8">
            Stand Up NY is a historic comedy club in New York City's Times
            Square, featuring the best comedians from NYC to LA!
          </p>
          <button className="bg-primary hover:bg-opacity-90 text-white px-8 py-3 rounded-full">
            GET TICKETS
          </button>
        </div>
      </section>

      {/* Welcome Section */}
      <section className="py-16 px-4">
        <div className="max-w-4xl mx-auto text-center">
          <h2 className="text-3xl md:text-4xl font-bold mb-4 dark:text-darkText">
            Welcome to Stand Up <span className="text-primary">NY</span> Comedy
            Club
          </h2>
          <p className="text-gray-600 dark:text-gray-300">
            Stand Up NY opened its doors in 1986 and has since become one of New
            York City's premiere comedy clubs. Celebrated for its rich history,
            elegant interior, and exceptional performances, Stand Up NY has
            created an unparalleled comedy experience. It sets the standard by
            which comedy is judged, from Jerry Seinfeld and Chris Rock to
            emerging talents. Google it! Its Chris Rock and Amy Schumer-like
            stage continues to be a breeding ground for the brightest stars of
            today and tomorrow.
          </p>
        </div>
      </section>

      {/* Upcoming Shows Section */}
      <section className="py-16 px-4 bg-background dark:bg-darkPrimary ">
        <div className="max-w-7xl mx-auto">
          <h2 className="text-3xl md:text-4xl font-bold text-center mb-12">
            Upcoming Comedy <span className="text-primary">Shows</span>
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 ">
            {shows.map((show) => (
              <div
                key={show.id}
                className="bg-background dark:bg-darkBackground dark:shadow-primary rounded-lg overflow-hidden shadow-lg"
              >
                <Image
                  src={show.image}
                  alt={show.title}
                  width={400}
                  height={300}
                  className="w-full h-48 object-cover text-white"
                />
                <div className="p-6">
                  <div className="flex items-center justify-between mb-4">
                    <div className="text-primary">{show.date}</div>
                    <div className="text-primary">{show.time}</div>
                  </div>
                  <h3 className="text-xl font-bold mb-2">{show.title}</h3>
                  <p className="text-gray-600 dark:text-gray-300 mb-4">
                    {show.tagline}
                  </p>
                  <button className="w-full bg-primary hover:bg-opacity-90 text-white py-2 rounded">
                    TICKETS
                  </button>
                </div>
              </div>
            ))}
          </div>
          <div className="text-center mt-12">
            <button className="border-2 border-primary text-primary px-8 py-3 rounded hover:bg-primary hover:text-white transition-colors">
              VIEW FULL SCHEDULE
            </button>
          </div>
        </div>
      </section>

      {/* Education Section */}
      <section className="relative py-16 px-4 bg-black text-white">
        <div className="max-w-7xl mx-auto flex flex-col md:flex-row items-center justify-between">
          <div className="md:w-1/2 mb-8 md:mb-0">
            <h2 className="text-3xl md:text-4xl font-bold mb-4">
              Stand Up NY <span className="text-primary">Education</span>
            </h2>
            <p className="text-xl mb-6">
              Develop Your Best Five Minute Stand Up Set
            </p>
            <div className="flex gap-4">
              <button className="bg-primary hover:bg-opacity-90 text-white px-6 py-2 rounded">
                WATCH PROMO
              </button>
              <button className="border-2 border-white hover:bg-white hover:text-black px-6 py-2 rounded">
                LEARN MORE
              </button>
            </div>
          </div>
          <div className="md:w-1/2">
            <Image
              src="/placeholder.svg?height=400&width=600"
              alt="Comedy education"
              width={600}
              height={400}
              className="rounded-lg"
            />
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-darkPrimary text-white py-12 px-4">
        <div className="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-3 gap-8">
          <div>
            <Image
              src="/placeholder.svg?height=50&width=150"
              alt="Stand Up NY Logo"
              width={150}
              height={50}
              className="mb-4"
            />
            <div className="flex items-center gap-2 mb-2">
              <FaPhone className="text-primary" />
              <span>(555) 555-5555</span>
            </div>
            <div className="flex items-center gap-2 mb-2">
              <FaEnvelope className="text-primary" />
              <span>laugh@standupny.com</span>
            </div>
            <div className="flex items-center gap-2">
              <FaMapMarkerAlt className="text-primary" />
              <span>236 W 78th St, New York, NY 10024</span>
            </div>
          </div>

          <div>
            <h3 className="text-xl font-bold mb-4">SHOWS</h3>
            <ul className="space-y-2">
              <li>
                <Link href="home" className="hover:text-primary">
                  All Shows
                </Link>
              </li>
              <li>
                <Link href="home" className="hover:text-primary">
                  Vintage NY
                </Link>
              </li>
              <li>
                <Link href="home" className="hover:text-primary">
                  Stand Up After Work
                </Link>
              </li>
              <li>
                <Link href="home" className="hover:text-primary">
                  Laughs After Midnight
                </Link>
              </li>
            </ul>
          </div>

          <div>
            <h3 className="text-xl font-bold mb-4">FOLLOW US</h3>
            <div className="flex gap-4 mb-6">
              <Link href="home" className="hover:text-primary">
                <FaInstagram size={24} />
              </Link>
              <Link href="home" className="hover:text-primary">
                <FaFacebookF size={24} />
              </Link>
              <Link href="home" className="hover:text-primary">
                <FaTwitter size={24} />
              </Link>
            </div>
            <form className="space-y-4">
              <input
                type="email"
                placeholder="Email"
                className="w-full px-4 py-2 bg-darkBackground/20 rounded"
              />
              <input
                type="tel"
                placeholder="Phone Number"
                className="w-full px-4 py-2 bg-darkBackground/20 rounded"
              />
              <button className="w-full bg-primary hover:bg-opacity-90 text-white py-2 rounded">
                Subscribe
              </button>
            </form>
          </div>
        </div>
      </footer>
    </div>
  );
}
