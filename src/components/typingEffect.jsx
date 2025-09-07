import { ReactTyped } from "react-typed";

const MyComponent = () => (
  <div className="bg-transparent mt-30">
    <ReactTyped strings={["Hey there,"]} typeSpeed={40} showCursor={false} className="xl:text-6xl text-4xl text-[#00FFFF] " />
    <br />
    <br />
    <ReactTyped strings={["Myself"]} typeSpeed={40} showCursor={false} className="xl:text-5xl text-4xl text-white " />
    <br/>
    <ReactTyped
      strings={[
        "# Dhruv Kanojia",
        "# Software Engineer",
        "# Full Stack Developer",
        "# DSA Enthusiast",
        "# CP Enthusiast",
      ]}
      typeSpeed={40}
      backSpeed={50}
      loop
      className="font-inter md:text-5xl text-red-600 text-3xl"
    >
      <input type="text" />
    </ReactTyped>
  </div>
);

export { MyComponent };