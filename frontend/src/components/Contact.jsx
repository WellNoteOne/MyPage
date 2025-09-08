export default function Contact() {
  return (
    <section id="contact" className="py-20 max-w-2xl mx-auto text-center px-4">
      <h3 className="text-3xl font-bold mb-6">Связаться</h3>
      <p className="mb-6 text-gray-700">
        Можно написать мне в соцсети или на email 👇
      </p>
      <div className="space-x-6">
        <a
          href="mailto:you@example.com"
          className="text-blue-600 hover:underline"
        >
          Email
        </a>
        <a
          href="https://github.com/WellNoteOne"
          className="text-blue-600 hover:underline"
        >
          GitHub
        </a>
        <a
          href="https://t.me/username"
          className="text-blue-600 hover:underline"
        >
          Telegram
        </a>
      </div>
    </section>
  );
}
