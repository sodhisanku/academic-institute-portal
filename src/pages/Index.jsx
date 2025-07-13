import React from 'react';
import HeroSlider from '../components/homepage/HeroSlider';
import DirectorMessage from '../components/homepage/DirectorMessage';
import NoticeBoard from '../components/homepage/NoticeBoard';
import EventsNews from '../components/homepage/EventsNews';
import QuickLinks from '../components/homepage/QuickLinks';

const Index = () => {
  return (
    <div className="min-h-screen">
      <HeroSlider />
      <DirectorMessage />
      <NoticeBoard />
      <EventsNews />
      <QuickLinks />
    </div>
  );
};

export default Index;
