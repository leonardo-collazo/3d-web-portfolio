import { VerticalTimelineElement } from "react-vertical-timeline-component";

const ExperienceCard = ({ experience }) => {
  return (
    <VerticalTimelineElement
      contentStyle={{ background: "#58009F", color: "#fff" }}
      contentArrowStyle={{ borderRight: "10px solid #fff" }}
      iconStyle={{ background: experience.iconBg }}
      date={experience.date}
      icon={
        <div className="w-full h-full flex justify-center items-center">
          <img
            src={experience.icon}
            alt={experience.companyName}
            className="w-[85%] h-[85%] rounded-full object-contain"
          />
        </div>
      }
    >
      <div className="text-[24px] font-bold text-white">
        <h3>{experience.title}</h3>
      </div>
    </VerticalTimelineElement>
  );
};

export { ExperienceCard };
