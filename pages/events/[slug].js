import Link from "next/link";
import Image from "next/image";
import { FaPencilAlt, FaTimes } from "react-icons/fa";
import Layout from "@/components/Layout";
import { API_URL } from "@/config/index";
import styles from "@/styles/Event.module.css";

//Use getServerSideProps() as soon as page loads
//Get the Query routed to, it's embedded in the context object
//Use it to send a request again to the API to get the exact data for the Route
//And parse it back as a props
//We populate the html and it then renders on the page

export async function getServerSideProps(context) {
  //context.query.slug
  const { query } = context;
  const { slug } = query;
  const res = await fetch(API_URL + "/api/events/" + slug);
  const events = await res.json();
  return {
    props: { evt: events[0] },
  };
}

const EventPage = ({ evt }) => {
  const deleteEvent = () => {
    console.log("Delete");
  };
  return (
    <Layout>
      <div className={styles.event}>
        <div className={styles.controls}>
          <Link href={`/events/edit/${evt.id}`}>
            <a>
              <FaPencilAlt /> Edit Event
            </a>
          </Link>
          <a href="#" className={styles.delete} onClick={deleteEvent}>
            <FaTimes /> Delete Event
          </a>
        </div>
        <span>
          {evt.date} at {evt.time}
        </span>
        <h1>{evt.name}</h1>
        {evt.image && (
          <div className={styles.image}>
            <Image src={evt.image} width={960} height={600} />
          </div>
        )}
        <h3>Perfomers:</h3>
        <p>{evt.performers}</p>
        <h3>Description:</h3>
        <p>{evt.description}</p>
        <h3>Venue {evt.venue}</h3>
        <p>{evt.address}</p>

        <Link href="/events">
          <a className={styles.back}> {"<"} Go Back</a>
        </Link>
      </div>
    </Layout>
  );
};

export default EventPage;
// export async function getStaticPaths() {
//   const res = await fetch(API_URL + "/events/api");
//   const events = await res.json();

//   const paths = events.map((evt) => {
//     params = { slug: evt.slug };
//     return params;
//   });

//   return {
//     paths,
//   };
// }

// export async function getStaticProps(paths) {
//   const { params } = paths;
//   const { slug } = params;
//   const res = await fetch(API_URL + "/api/events/" + slug);
//   const events = await res.json();
//   return {
//     props: { evt: events[0] },
//   };
// }
