export default function Contact() {
  return (
    <div className="bg-white py-16 px-6">
      <div className="max-w-4xl mx-auto text-center">
        <h1 className="text-4xl font-bold text-red-600">Contact Us</h1>
        <p className="text-gray-600 mt-2">We respond quickly — usually within minutes!</p>
      </div>

      <form className="max-w-3xl mx-auto mt-10 grid grid-cols-1 gap-6">
        <input className="border rounded-lg px-4 py-3" placeholder="Your Name" />
        <input className="border rounded-lg px-4 py-3" placeholder="Email" />
        <input className="border rounded-lg px-4 py-3" placeholder="Phone Number" />
        <textarea rows="4" className="border rounded-lg px-4 py-3" placeholder="Your Message"></textarea>

        <button className="bg-red-600 text-white py-3 rounded-lg font-semibold hover:bg-red-700 transition">
          Send Message
        </button>
      </form>
    </div>
  );
}
