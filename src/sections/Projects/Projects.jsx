import styles from "./ProjectsStyles.module.css";
// import viberr from "../../assets/viberr.png";
import musicApp from "../../assets/music.avif";
import gameStore from "../../assets/game.png";
import ProjectCard from "../../common/ProjectCard";

function Projects() {
  return (
    <section id="projects" className={styles.container}>
      <h1 className="sectionTitle">Projects</h1>
      <div className={styles.projectsContainer}>
        <ProjectCard
          link="https://github.com/Kiranpharal/Music-Recommendation-System-Content-Based-.git"
          src={musicApp}
          h3="TuneFlow"
          p="Music Streaming App"
        />
        <ProjectCard
           link="https://github.com/Kiranpharal/GameStore.git"
          src={gameStore}
          h3="GameStore"
          p="Game Store"
        />
      </div>
    </section>
  );
}

export default Projects;
