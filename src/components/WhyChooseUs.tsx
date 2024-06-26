"use client";
import React from 'react'

import { StickyScroll } from "./ui/sticky-scroll-reveal";


const mentalHealthContent = [
    {
      title: 'Discover Your Calm with Us: A Personal Journey in Mental Wellness',
      description:
        'Embark on a mental wellness journey that’s uniquely yours. Our personalized guidance adapts to your individual needs, setting the stage for unparalleled growth and serenity. At our company, your aspirations meet our dedicated support, creating a harmonious path to mental clarity.',
    },
    {
      title: 'Personalized Mental Health Support',
      description:
        'Embark on a journey to mental wellness that’s uniquely yours. Our personalized guidance adapts to your individual needs, setting the stage for unparalleled growth and serenity. At our company, your mental health goals meet our dedicated support, creating a harmonious path to clarity.',
    },
    {
      title: 'Tailored Mindfulness Techniques',
      description:
        'Explore mindfulness techniques that are uniquely yours. Our personalized approach adapts to your individual needs, promoting unparalleled growth in focus and relaxation. At our company, your mental wellness goals are supported with dedication, creating a serene path to clarity.',
    },
    {
      title: 'Live Feedback & Engagement',
      description:
        'Immerse yourself in an interactive mental health experience where feedback is immediate, just like real-time support in a collaborative environment. This approach enhances your understanding and mastery of mindfulness and focus techniques.',
    },
    {
      title: 'Cutting-Edge Mental Health Strategies',
      description:
        'Our strategies are continuously updated to include the latest mental health trends and technologies, ensuring you’re always learning with the most current and effective methods. Say goodbye to outdated techniques and welcome an approach that evolves with the field.',
    },
    {
      title: 'Limitless Growth Opportunities',
      description:
        'With our expansive resource library and dynamic program offerings, you’ll never find yourself without something new to explore. Our platform provides continuous opportunities for mental growth, ensuring your well-being is always advancing.',
    },
  ];

const WhyChooseUs = () => {
  return (
    <div>
        <StickyScroll content={mentalHealthContent}/>
    </div>
  )
}

export default WhyChooseUs
