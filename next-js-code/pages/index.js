import Head from 'next/head'; 

import { getFeaturedEvents } from "@/helpers/api-util";
import EventList from "@/components/events/event-list";

function HomePage(prpos) {
  return (
    <div>
      <Head>
        <title>NextJS Events</title>
        <meta name="description" content="Find a lot of great events that allows you to connect..." />
      </Head>
      <EventList items={prpos.events} />
      
    </div>
  );
}

export async function getStaticProps() {
  const featuredEvents = await getFeaturedEvents(); 
  
  return {
    props: { events: featuredEvents },
    revalidate: 1800
  };
}



export default HomePage; 