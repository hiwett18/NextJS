import { getFeaturedEvents } from "@/helpers/api-util";
import EventList from "@/components/events/event-list";

function HomePage(prpos) {
  return (
    <div>
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