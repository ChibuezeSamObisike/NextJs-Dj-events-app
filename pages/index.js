import Layout from "@/components/Layout";
import { API_URL } from "../config/index";
import EventItem from "@/components/EventItem";
import Link from "next/link";

//props takes props from the getStaticProps()
export default function Home(props) {
  const { events } = props;
  return (
    <Layout>
      <h1>Upcoming Events</h1>
      {events.length === 0 ? <h3>No Events to show</h3> : null}
      {events.map((evt) => (
        <EventItem key={evt.id} evt={evt} />
      ))}
      {events.length > 0 && (
        <Link href="/events">
          <a className="btn-secondary">View all Events</a>
        </Link>
      )}
    </Layout>
  );
}

export async function getStaticProps() {
  const res = await fetch(API_URL + "/api/events");
  const events = await res.json();

  return {
    props: { events: events.slice(0, 3) },
    //Build every 1s
    revalidate: 1,
  };
}
