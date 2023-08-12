import MeetupList from "../components/meetups/MeetupList"
import Layout from "../components/layout/Layout";

const DUMMY_MEETUPS = [
    {
      id: 'm1',
      title: 'A First Meetup',
      image: 'https://upload.wikimedia.org/wikipedia/commons/thumb/d/d3/Stadtbild_M%C3%BCnchen.jpg/1280px-Stadtbild_M%C3%BCnchen.jpg',
      address: 'Some address 5, 12345 Some City',
      description: 'This is a first meetup!'
    },
    {
      id: 'm2',
      title: 'A Second Meetup',
      image: 'https://upload.wikimedia.org/wikipedia/commons/thumb/d/d3/Stadtbild_M%C3%BCnchen.jpg/1280px-Stadtbild_M%C3%BCnchen.jpg',
      address: 'Some address 10, 12345 Some City',
      description: 'This is a second meetup!'
    }
  ];

export default function HomePage(props){

    return(
       <MeetupList meetups={props.meetups} />
    )
}
//the getstaticProps() method must return an array containing a property called props 
export async function getStaticProps(){
  //fetch data from an api
    return {
        props: {
            meetups: DUMMY_MEETUPS
        },
        revalidate:10//this means this getStaticProps will be revalidated every 10 seconds 
    }
}
//the getServerSideProps() method will execute back for every request that is being sent back to the server
// so the revalidate property is useless in the getServerProps()
//export async function getServerProps(){
  //return {
    //props: {
      //meetups: DUMMY_MEETUPS
    //}
  //}
//}