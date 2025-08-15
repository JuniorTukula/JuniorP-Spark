import React from "react";
import SkillCard from "./SkillCard";


const skillItem = [

  {
    imgSrc: '/images/figma.svg',
    label: 'Figma',
    desc: 'Design Tool'
  },
  {
    imgSrc: '/images/html.svg',
    label: 'HTML',
    desc: 'Structure'
  },
  {
    imgSrc: '/images/css.svg',
    label: 'CSS',
    desc: 'User Interface'
  },
  {
    imgSrc: '/images/tailwind.svg',
    label: 'TailwindCSS',
    desc: 'User Interface'
  }, {
    imgSrc: '/images/javascript.svg',
    label: 'JavaScript',
    desc: 'Interaction'
  },
  {
    imgSrc: '/images/reactjs.svg',
    label: 'React',
    desc: 'Framework'
  },
   {
    imgSrc: '/images/mongodb.svg',
    label: 'MongoDB',
    desc: 'Database'
  }, {
    imgSrc: '/images/node.svg',
    label: 'NodeJS',
    desc: 'Web Server'
  }, {
    imgSrc: '/images/nestjs.svg',
    label: 'NestJS',
    desc: 'Node Framework'
  },
]




const Skills = () => {
  return (
    <section className="section">
      <div className="container">

        <h2 className="headline-2">
          Essential Tools I use
        </h2>
        <p className="">
          Discover the powerful tools and technologies i
          use to create exceptional,
          high-performing websites and applications.

        </p>

        <div className="grid gap-3 grid-cols-[repeat(auto-fill,_minmax(250px,_1fr))]">
          {
            skillItem.map(({ imgSrc, label, desc }, key) =>
            (
              <SkillCard
                key={key}
                imgSrc={imgSrc}
                label={label}
                desc={desc}
              />
            ))
          }
        </div>

      </div>

    </section>
  );
};

export default Skills;