import Container from "./common/Container";

function Hero() {
  return (
    <section
      id="home"
      className="min-h-screen flex items-center bg-slate-950 text-white"
    >
      <Container>
        <div className="grid lg:grid-cols-2 items-center gap-10">

            {/* Left Side */}
            <div className="space-y-6">

            <p className="text-cyan-400 font-semibold tracking-widest uppercase">
                Welcome to my Portfolio 👋
            </p>

            <h1 className="text-5xl lg:text-6xl font-extrabold leading-tight">
                Hi, I'm <br />
                <span className="text-cyan-400">
                Bhavani Shankar
                </span>
            </h1>

            <h2 className="text-2xl text-gray-300 font-semibold">
                Software Engineer
            </h2>

            <p className="text-gray-400 max-w-xl leading-8">
                I build scalable, responsive and modern web applications using Java,
                Spring Boot, React and SQL.
            </p>

            </div>

            {/* Right Side */}
            <div className="flex justify-end">

            <div className="w-80 h-80 rounded-full bg-cyan-500/10 border border-cyan-400 flex items-center justify-center">

                <span className="text-gray-500 text-xl">
                Profile Image
                </span>

            </div>

            </div>

        </div>
        </Container>
    </section>
  );
}

export default Hero;