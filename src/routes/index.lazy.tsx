import { ProfilePic } from "@/components/home/ProfilePic";
import { SocialCard } from "@/components/home/SocialCard";
import { createEnterAnimProps } from "@/lib/utils";
import { createLazyFileRoute } from "@tanstack/react-router";
import { motion } from "framer-motion";
import { FaGithub, FaLinkedin, FaEnvelope } from "react-icons/fa";

export const Route = createLazyFileRoute("/")({
  component: Index,
});

function Index() {
  return (
    <div className="flex flex-col items-center px-4 sm:px-12 md:px-20 lg:px-40 py-10">
      <div className="text-center mb-12">
        <ProfilePic
          className="block md:hidden mb-6"
          extraProps={createEnterAnimProps(0.3, 0)}
        />

        <motion.h1
          className="text-5xl sm:text-6xl font-extrabold text-ctp-mauve mb-2 hover:text-ctp-lavender transition-colors duration-300"
          {...createEnterAnimProps(0.3)}
        >
          Hey!
        </motion.h1>
        <motion.h1
          className="text-5xl sm:text-6xl font-extrabold text-ctp-lavender mb-4 hover:text-ctp-mauve transition-colors duration-300"
          {...createEnterAnimProps(0.3)}
        >
          I'm Malachi
        </motion.h1>
        <motion.h2
          className="text-xl font-medium text-ctp-text"
          {...createEnterAnimProps(0.4)}
        >
          Full Stack Developer
        </motion.h2>
      </div>

      <motion.div
        className="grid grid-cols-1 md:grid-cols-2 gap-10 items-center"
        {...createEnterAnimProps(0.6, 0)}
      >
        <div className="text-ctp-subtext space-y-6 text-lg sm:text-xl md:text-2xl text-center md:text-left">
          <p>A self-taught, passionate Full Stack developer from Israel 🇮🇱</p>
          <p>
            I have been coding since the age of 13 and building with React since
            2019. I use Linux (
            <span className="font-bold text-ctp-sapphire">NixOS</span>) as my
            daily driver and{" "}
            <span className="font-bold text-ctp-sapphire">Neovim</span> for my
            IDE.
          </p>
          <p>
            I am a self-learner who loves to learn new things, and always
            looking to improve my skills and knowledge.
          </p>
        </div>

        <ProfilePic className="hidden md:block" />
      </motion.div>

      <motion.div
        className="flex flex-row items-center mt-8 md:mt-24 gap-5 md:gap-12"
        {...createEnterAnimProps(0.8)}
      >
        <SocialCard icon={<FaGithub />} link="https://github.com/nktfh100">
          GitHub
        </SocialCard>
        <SocialCard
          icon={<FaLinkedin />}
          link="https://www.linkedin.com/in/malachi-turjeman/"
        >
          LinkedIn
        </SocialCard>
        <SocialCard icon={<FaEnvelope />} link="mailto:me@malachi.io">
          Email
        </SocialCard>
      </motion.div>
    </div>
  );
}
