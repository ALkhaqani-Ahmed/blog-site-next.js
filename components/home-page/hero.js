import Image from "next/image";

import classes from "./hero.module.css";

function Hero() {
  return(
    <section className={classes.hero}>
      <div className={classes.image}>
        <Image
          src="/images/site/ahmed.png"
          alt="An image showing Ahmed"
          width={400}
          height={400}
        />
      </div>
      <h1>Hi, I'm Ahmed</h1>
      <p>
        I'm a web developer specialist in frontend frameworks like React and
        Next.js
      </p>
    </section>
  );
}

export default Hero;
