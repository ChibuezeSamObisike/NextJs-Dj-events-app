import Layout from "@/components/Layout";
import { API_URL } from "../../config/index";
import EventItem from "@/components/EventItem";

export default function EventsPage(props) {
  const { events } = props;
  return (
    <Layout>
      <h1>Events</h1>
      {events.length === 0 ? <h3>No Events to show</h3> : null}
      {events.map((evt) => (
        <EventItem key={evt.id} evt={evt} />
      ))}
    </Layout>
  );
}

export async function getStaticProps() {
  const res = await fetch(API_URL + "/api/events");
  const events = await res.json();

  return {
    props: { events },
    revalidate: 1,
  };
}
