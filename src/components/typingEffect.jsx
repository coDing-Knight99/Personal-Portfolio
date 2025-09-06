import { ReactTyped } from "react-typed";

const MyComponent = () => (
  <div className="bg-transparent">
    <ReactTyped strings={["Hey there,"]} typeSpeed={40} showCursor={false} className="md:text-6xl text-4xl text-[#00FFFF] " />
    <br />
    <br />
    <ReactTyped strings={["Myself"]} typeSpeed={40} showCursor={false} className="md:text-5xl text-4xl text-white " />
    <br/>
    <ReactTyped
      strings={[
        "# Dhruv Kanojia",
        "# Software Engineer",
        "# Full Stack Developer",
        "# Competitive Programmer",
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