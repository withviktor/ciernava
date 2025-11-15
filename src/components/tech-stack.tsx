import Image from "next/image";
import { BlurFade } from "./ui/blur-fade";

const TechStack = () => {
  return (
    <section className="w-section">
      <div className="w-container">
        <p className="w-section-subtitle">Tech Stack</p>
        <h2 className="w-section-title">What I Use</h2>
        <div className="w-techstack">
          <BlurFade className="w-stack-info">
            <h3 className="w-stack-info-title">Frontend</h3>
            <div className="w-stack-blocks">
              <div className="w-stack-block">
                <Image
                  src="./assets/icons/React.svg"
                  alt="React Icon"
                  height={40}
                  width={40}
                  className="rounded-xl"
                />
                <div className="w-stack-block-content">
                  <h4 className="w-stack-block-title">React</h4>
                  <p className="w-stack-block-description">
                    For building fast, interactive UIs
                  </p>
                </div>
              </div>
              <div className="w-stack-block">
                <Image
                  src="./assets/icons/Nextjs.svg"
                  alt="NextJs Icon"
                  height={40}
                  width={40}
                  className="rounded-xl"
                />
                <div className="w-stack-block-content">
                  <h4 className="w-stack-block-title">Next.js</h4>
                  <p className="w-stack-block-description">
                    React framework with routing & SSR
                  </p>
                </div>
              </div>
              <div className="w-stack-block">
                <Image
                  src="./assets/icons/Typescript.svg"
                  alt="TypeScript Icon"
                  height={40}
                  width={40}
                  className="rounded-xl"
                />
                <div className="w-stack-block-content">
                  <h4 className="w-stack-block-title">TypeScript</h4>
                  <p className="w-stack-block-description">
                    Typed JavaScript for safer code
                  </p>
                </div>
              </div>
            </div>
          </BlurFade>
          <BlurFade className="w-stack-info">
            <h3 className="w-stack-info-title">Backend</h3>
            <div className="w-stack-blocks">
              <div className="w-stack-block">
                <Image
                  src="./assets/icons/Nodejs.svg"
                  alt="Node.js Icon"
                  height={40}
                  width={40}
                  className="rounded-xl"
                />
                <div className="w-stack-block-content">
                  <h4 className="w-stack-block-title">Node.js</h4>
                  <p className="w-stack-block-description">
                    JavaScript runtime for servers
                  </p>
                </div>
              </div>
              <div className="w-stack-block">
                <Image
                  src="./assets/icons/Express.svg"
                  alt="Express Icon"
                  height={40}
                  width={40}
                  className="rounded-xl"
                />
                <div className="w-stack-block-content">
                  <h4 className="w-stack-block-title">Express</h4>
                  <p className="w-stack-block-description">
                    Minimal framework for APIs
                  </p>
                </div>
              </div>
              <div className="w-stack-block">
                <Image
                  src="./assets/icons/Mongodb.svg"
                  alt="MongoDB Icon"
                  height={40}
                  width={40}
                  className="rounded-xl"
                />
                <div className="w-stack-block-content">
                  <h4 className="w-stack-block-title">MongoDB</h4>
                  <p className="w-stack-block-description">
                    Flexible NoSQL database system
                  </p>
                </div>
              </div>
            </div>
          </BlurFade>
          <BlurFade className="w-stack-info">
            <h3 className="w-stack-info-title">Tools</h3>
            <div className="w-stack-blocks">
              <div className="w-stack-block">
                <Image
                  src="./assets/icons/Github.svg"
                  alt="GitHub Icon"
                  height={40}
                  width={40}
                  className="rounded-xl"
                />
                <div className="w-stack-block-content">
                  <h4 className="w-stack-block-title">Git & GitHub</h4>
                  <p className="w-stack-block-description">
                    Version control and collaboration
                  </p>
                </div>
              </div>
              <div className="w-stack-block">
                <Image
                  src="./assets/icons/Docker.svg"
                  alt="Docker Icon"
                  height={40}
                  width={40}
                  className="rounded-xl"
                />
                <div className="w-stack-block-content">
                  <h4 className="w-stack-block-title">Docker</h4>
                  <p className="w-stack-block-description">
                    Containers for isolated environments
                  </p>
                </div>
              </div>
            </div>
          </BlurFade>
          <BlurFade className="w-stack-info">
            <h3 className="w-stack-info-title">Design</h3>
            <div className="w-stack-blocks">
              <div className="w-stack-block">
                <Image
                  src="./assets/icons/Figma.svg"
                  alt="Figma Icon"
                  height={40}
                  width={40}
                  className="rounded-xl"
                />
                <div className="w-stack-block-content">
                  <h4 className="w-stack-block-title">Figma</h4>
                  <p className="w-stack-block-description">
                    UI design and collaboration tool
                  </p>
                </div>
              </div>
              <div className="w-stack-block">
                <Image
                  src="./assets/icons/Mobbin.svg"
                  alt="Mobbin Icon"
                  height={40}
                  width={40}
                  className="rounded-xl"
                />
                <div className="w-stack-block-content">
                  <h4 className="w-stack-block-title">Mobbin</h4>
                  <p className="w-stack-block-description">
                    UI design collection for inspiration
                  </p>
                </div>
              </div>
            </div>
          </BlurFade>
        </div>
      </div>
    </section>
  );
};

export default TechStack;
