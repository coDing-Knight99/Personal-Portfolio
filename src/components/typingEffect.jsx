import { ReactTyped } from "react-typed";

const MyComponent = () => (
  <div>
    <ReactTyped strings={["Hey there,"]} typeSpeed={40} showCursor={false} className="text-6xl text-[#00FFFF] " />
    <br />
    <br />
    <ReactTyped strings={["Myself"]} typeSpeed={40} showCursor={false} className="text-5xl text-white " />

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
      className="font-inter text-4xl text-red-600"
    >
      <input type="text" />
    </ReactTyped>
  </div>
);

export { MyComponent };