import React from "react";
import Card from "./components/Card";
import AIContentImage from "../assets/images/illustration-ai-content.webp";
import AudienceGrowthImage from "../assets/images/illustration-audience-growth.webp";
import ConsistentScheduleImage from "../assets/images/illustration-consistent-schedule.webp";
import CreatePostImage from "../assets/images/illustration-create-post.webp";
import FiveStarsImage from "../assets/images/illustration-five-stars.webp";
import GrowFollowersImage from "../assets/images/illustration-grow-followers.webp";
import MultiplePlatformsImage from "../assets/images/illustration-multiple-platforms.webp";
import ScheduleImage from "../assets/images/illustration-schedule-posts.webp";

const cardsData = [
  {
    title: "Create and schedule content quicker",
    content: "",
    bgColor: "bg-yellow-100",
    image: CreatePostImage,
    imagePosition: "bottom",
    className: "nth-card-1",
  },
  {
    title: "Write your content using AI",
    content: "",
    bgColor: "bg-yellow-500",
    image: AIContentImage,
    imagePosition: "bottom",
    className: "nth-card-2",
  },
  {
    title: "Social Media 10x Faster with AI",
    content: "Over 4,000 5-star reviews",
    bgColor: "bg-purple-500",
    image: FiveStarsImage,
    imagePosition: "bottom",
    className: "nth-card-3",
  },
  {
    title: "Manage multiple accounts and platforms",
    content: "",
    bgColor: "bg-pink-50",
    image: MultiplePlatformsImage,
    imagePosition: "top",
    className: "nth-card-4",
  },
  {
    title: ">56%",
    content: "Faster audience",
    bgColor: "bg-pink-50",
    image: AudienceGrowthImage,
    imagePosition: "top",
    className: "nth-card-5",
  },
  {
    title: "Maintain a consistent posting schedule",
    content: "",
    bgColor: "bg-yellow-500",
    image: ConsistentScheduleImage,
    imagePosition: "top",
    className: "nth-card-6",
  },
  {
    title: "Schedule to social media",
    content:
      "Optimize post timings to publish content at the perfect time for your audience",
    bgColor: "bg-purple-100",
    image: ScheduleImage,
    imagePosition: "top",
    className: "nth-card-7",
  },
  {
    title: "Grow followers with non-stop content",
    content: "",
    bgColor: "bg-purple-500",
    image: GrowFollowersImage,
    imagePosition: "bottom",
    className: "nth-card-8",
  },
];


/* declarer mes classes grid template areas de mes versions desktops et mobile */
const App = () => {
  return (
    <div className="p-0 bg-gray-50 min-h-screen">
      {/* implementation version desktop et mobile */}
      <div className="grid gap-6 lg:grid-template-desktop sm:grid-template-mobile w-full">
        {cardsData.map((card, index) => (
          <Card
            key={index}
            title={card.title}
            content={card.content}
            bgColor={card.bgColor}
            image={card.image}
            imagePosition={card.imagePosition}
            className={`${card.className} card`} 
          />
        ))}
      </div>
    </div>
  );
};


export default App;




/*



import React from "react";
import Card from "./components/Card";
import AIContentImage from "../assets/images/illustration-ai-content.webp";
import AudienceGrowthImage from "../assets/images/illustration-audience-growth.webp";
import ConsistentScheduleImage from "../assets/images/illustration-consistent-schedule.webp";
import CreatePostImage from "../assets/images/illustration-create-post.webp";
import FiveStarsImage from "../assets/images/illustration-five-stars.webp";
import GrowFollowersImage from "../assets/images/illustration-grow-followers.webp";
import MultiplePlatformsImage from "../assets/images/illustration-multiple-platforms.webp";
import ScheduleImage from "../assets/images/illustration-schedule-posts.webp";

const cardsData = [
  {
    title: "Create and schedule content quicker",
    content: "",
    bgColor: "bg-yellow-100",
    image: CreatePostImage,
    imagePosition: "bottom",
    className: "nth-card-1",
  },
  {
    title: "Write your content using AI",
    content: "",
    bgColor: "bg-yellow-500",
    image: AIContentImage,
    imagePosition: "bottom",
    className: "nth-card-2",
  },
  {
    title: "Social Media 10x Faster with AI",
    content: "Over 4,000 5-star reviews",
    bgColor: "bg-purple-500",
    image: FiveStarsImage,
    imagePosition: "bottom",
    className: "nth-card-3",
  },
  {
    title: "Manage multiple accounts and platforms",
    content: "",
    bgColor: "bg-beige-100",
    image: MultiplePlatformsImage,
    imagePosition: "top",
    className: "nth-card-4",
  },
  {
    title: ">56%",
    content: "Faster audience",
    bgColor: "bg-beige-100",
    image: AudienceGrowthImage,
    imagePosition: "top",
    className: "nth-card-5",
  },
  {
    title: "Maintain a consistent posting schedule",
    content: "",
    bgColor: "bg-yellow-500",
    image: ConsistentScheduleImage,
    imagePosition: "top",
    className: "nth-card-6",
  },
  {
    title: "Schedule to social media",
    content:
      "Optimize post timings to publish content at the perfect time for your audience",
    bgColor: "bg-purple-100",
    image: ScheduleImage,
    imagePosition: "top",
    className: "nth-card-7",
  },
  {
    title: "Grow followers with non-stop content",
    content: "",
    bgColor: "bg-purple-500",
    image: GrowFollowersImage,
    imagePosition: "bottom",
    className: "nth-card-8",
  },
];

const App = () => {
  return (
    <div className="p-6 bg-gray-50 min-h-screen">
      <div className="lg:grid-template-desktop mobile:grid-template-mobile gap-6">
        {cardsData.map((card, index) => (
          <Card
            key={index}
            title={card.title}
            content={card.content}
            bgColor={card.bgColor}
            image={card.image}
            imagePosition={card.imagePosition}
            className={card.className}
          />
        ))}
      </div>
    </div>
  );
};

export default App;




*/