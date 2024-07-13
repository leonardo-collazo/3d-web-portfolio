import { VerticalTimelineElement } from "react-vertical-timeline-component";

const ExperienceCard = ({ experience }) => {
  return (
    <VerticalTimelineElement
      contentStyle={{ background: "#46007e", color: "#fff" }}
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
      <div>
        <h3 className="text-[26px] font-bold text-white">{experience.title}</h3>
        <p className="!m-0 !text-[18px] font-semibold text-secondary">{experience.companyName}</p>
      </div>

      <p className="!text-[16px] text-white">{experience.description}</p>
    </VerticalTimelineElement>
  );
};

export { ExperienceCard };
