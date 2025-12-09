import styles from "./HeroStyles.module.css";
import heroimg from "../../assets/hero-img.png";
// import hero from "../../assets/hero.jpg";
import sun from "../../assets/sun.webp";
import moon from "../../assets/moon.svg";
import githubLight from "../../assets/github-light.svg";
import githubDark from "../../assets/github-dark.svg";
import linkedinLight from "../../assets/linkedin-light.svg";
import linkedinDark from "../../assets/linkedin-dark.svg";
import CV from "../../assets/Kiran.p_CV.pdf";
import { useTheme } from "../../common/ThemeContext.jsx";

function Hero() {
  const { theme, toggleTheme } = useTheme();

  const themeIcon = theme === "light" ? sun : moon;
  const githubIcon = theme === "light" ? githubLight : githubDark;
  const linkedinIcon = theme === "light" ? linkedinLight : linkedinDark;

  return (
    <section id="hero" className={styles.container}>
      <div className={styles.colorModeContainer}>
        <img
          className={styles.hero}
          src={heroimg}
          alt="Profile picture of Kiran Pharal"
        />
        <img
          className={styles.colorMode}
          src={themeIcon}
          alt="Color mode icon"
          onClick={toggleTheme}
        />
      </div>

      <div className={styles.info}>
        <h1>
          Kiran
          <br />
          Pharal
        </h1>
        <h2>Frontend Developer</h2>
        <span>
          
          <a href="https://github.com/Kiranpharal/" target="_blank">
            <img src={githubIcon} alt="Github icon" />
          </a>
          <a href="www.linkedin.com/in/kiran-p-12723b286" target="_blank">
            <img src={linkedinIcon} alt="Linkedin icon" />
          </a>
        </span>
        <p className={styles.description}>
          I'm a frontend developer specializing in building exceptional digital
          experiences. Currently, I'm focused on building responsive web
          applications.
        </p>
        <a href={CV} download>
          <button className="hover"> Resume </button>
        </a>
      </div>
    </section>
  );
}

export default Hero;
