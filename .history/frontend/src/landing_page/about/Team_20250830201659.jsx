import React from "react";

function Team() {
  return (
    <div className="container my-5">
      {/* Section title */}
      <h3 className="text-center mb-5">People</h3>

      <div className="row justify-content-center align-items-start g-5">
        {/* Left: portrait + name + role */}
        <div className="col-m d-flex flex-column align-items-center">
          <img
            src="https://media.licdn.com/dms/image/v2/D5603AQE0_kgsXLpzww/profile-displayphoto-shrink_400_400/profile-displayphoto-shrink_400_400/0/1716127060210?e=1759363200&v=beta&t=FtsqXS6kGsNCSZgLTCAJMnOSlmlpLYULnaqjQqA2mOs"
            alt="Nithin Kamath"
            className="rounded-circle img-fluid shadow-sm"
            style={{ width: 260, height: 260, objectFit: "cover" }}
          />

          <div className="text-center mt-4">
            <div className="fw-medium">Vitthal Bissa</div>
            <div className="text-muted">MERN Stack Developer</div>
          </div>
        </div>

        {/* Right: bio */}
        <div className="col-md-5 fs-6">
        <p className="lh-lg mb-3">
            I’m <strong>Vitthal Bissa</strong>, a Computer Science and Engineering student at CMR University (Bangalore), 
            graduating in 2026 with a CGPA of 8.23. I am passionate about full-stack web development and 
            problem solving, with strong foundations in <em>Data Structures, Algorithms, and Data Science</em>.
        </p>
        <p className="lh-lg mb-3">
            I’ve built responsive, user-friendly web applications including an interactive to-do list. My personal 
            projects include an <strong>Airbnb Clone</strong> with user authentication, property listings, 
            booking workflows, and CI/CD automation, and a <strong>Twitter/X Clone</strong> supporting user 
            profiles, posting, and interactions.
        </p>
        <p className="lh-lg mb-3">
            My technical toolkit includes <strong>JavaScript, C++, React.js, Node.js, Express.js, 
            MongoDB, MySQL, Tailwind CSS, and Docker</strong>. I enjoy tackling new challenges and continuously 
            refining my skills through real-world projects and contributions.
        </p>
        <p className="lh-lg mb-0">
            Let’s connect on{" "}
            <a className="text-decoration-none" href="https://www.linkedin.com/in/vitthal-bissa/" target="_blank" rel="noreferrer">
            LinkedIn
            </a>{" "}
            /{" "}
            <a className="text-decoration-none" href="https://github.com/VishuThePlayer" target="_blank" rel="noreferrer">
            GitHub
            </a>{" "}
            /{" "}
            <a className="text-decoration-none" href="mailto:vishubissa.s@gmail.com" target="_blank" rel="noreferrer">
            Email
            </a>
        </p>
        </div>

      </div>
    </div>
  );
}

export default Team;
