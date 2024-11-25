import React, { useState } from "react";
import Card from "./components/Card";
import AIContentImage from "../assets/images/illustration-ai-content.webp";
import AudienceGrowthImage from "../assets/images/illustration-audience-growth.webp";
import ConsistentScheduleImage from "../assets/images/illustration-consistent-schedule.webp";
import CreatePostImage from "../assets/images/illustration-create-post.webp";
import FiveStarsImage from "../assets/images/illustration-five-stars.webp";
import GrowFollowersImage from "../assets/images/illustration-grow-followers.webp";
import MultiplePlatformsImage from "../assets/images/illustration-multiple-platforms.webp";
import ScheduleImage from "../assets/images/illustration-schedule-posts.webp";

// Données des cartes
const cardsData = [
  {
    title: "Create and schedule content quicker",
    content: "",
    bgColor: "bg-yellow-100",
    image: CreatePostImage,
    imagePosition: "bottom",
    textColor:"text-black",
    className: "nth-card-1",
  },
  {
    title: "Write your content using AI",
    content: "",
    bgColor: "bg-yellow-500",
    image: AIContentImage,
    imagePosition: "bottom",
    textColor:"text-black",
    className: "nth-card-2",
  },
  {
    title: "Social Media 10x Faster with AI",
    content: "Over 4,000 5-star reviews",
    bgColor: "bg-purple-500",
    image: FiveStarsImage,
    imagePosition: "bottom",
    textColor:"text-white",
    className: "nth-card-3",
  },
  {
    title: "Manage multiple accounts and platforms",
    content: "",
    bgColor: "bg-pink-50",
    image: MultiplePlatformsImage,
    imagePosition: "top",
    textColor:"text-black",
    className: "nth-card-4",
  },
  {
    title: ">56%",
    content: "Faster audience",
    bgColor: "bg-pink-50",
    image: AudienceGrowthImage,
    imagePosition: "bottom",
    textColor:"text-black",
    className: "nth-card-5",
  },
  {
    title: "Maintain a consistent posting schedule",
    content: "",
    bgColor: "bg-yellow-500",
    image: ConsistentScheduleImage,
    imagePosition: "bottom",
    textColor:"text-black",
    className: "nth-card-6",
  },
  {
    title: "Schedule to social media",
    content:
      "Optimize post timings to publish content at the perfect time for your audience",
    bgColor: "bg-purple-100",
    image: ScheduleImage,
    imagePosition: "top",
    textColor:"text-black",
    className: "nth-card-7",
  },
  {
    title: "Grow followers with non-stop content",
    content: "",
    bgColor: "bg-purple-500",
    image: GrowFollowersImage,
    imagePosition: "left",
    textColor:"text-white",
    className: "nth-card-8",
  },
];

const App = () => {
  const [searchTerm, setSearchTerm] = useState(""); // État pour la barre de recherche

  // Gestion des changements dans la barre de recherche
  const handleSearchChange = (event) => {
    setSearchTerm(event.target.value);
  };

  return (
    <div className="p-6 bg-gray-50 min-h-screen">
    {/* Implementer la barre de recherche */}
    <div className="w-full max-w-md mx-auto mb-16">
      <input
        type="text"
        placeholder="Recherchez vos cartes..."
        value={searchTerm}
        onChange={handleSearchChange}
        className="w-full p-3 border border-gray-300 rounded-md focus:outline-none focus:ring-0 text-gray-700"
      />
    </div>
  
    {/* Grille de cartes */}
    <div className="grid gap-6 lg:grid-template-desktop sm:grid-template-mobile md:grid-template-tablet w-full">
      {cardsData
        .filter((card) =>
          card.title.toLowerCase().includes(searchTerm.toLowerCase())
        )
        .map((card, index) => (
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




