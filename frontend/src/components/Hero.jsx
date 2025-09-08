export default function Hero() {
  return (
    <section className="h-screen flex flex-col justify-center items-center text-center bg-gradient-to-r from-blue-500 to-purple-600 text-white">
      <img
        src="/profile.jpg"
        alt="Profile"
        style={{
          width: "120px",
          height: "180px",
          borderRadius: "100px",
          marginBlockStart: "13px",
        }}
      />
      <h2 className="text-4xl font-bold">Привет, я Валентин 👋</h2>
      <p className="mt-4 text-lg">Frontend / Backend Developer</p>
      <div className="mt-6 space-x-4">
        <a
          href="#projects"
          className="px-4 py-2 bg-white text-blue-600 rounded-lg shadow hover:bg-gray-200"
        >
          Мои проекты
        </a>
        <a
          href="#contact"
          className="px-4 py-2 border border-white rounded-lg hover:bg-white hover:text-blue-600"
        >
          Написать
        </a>
      </div>
    </section>
  );
}
