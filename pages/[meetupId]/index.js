import MeetupDetail from "../../components/meetups/MeetupDetail";


export default function MeetupDetails(){
    return (
        <MeetupDetail
      image='https://upload.wikimedia.org/wikipedia/commons/thumb/d/d3/Stadtbild_M%C3%BCnchen.jpg/1280px-Stadtbild_M%C3%BCnchen.jpg'
      title='First Meetup'
      address='Some Street 5, Some City'
      description='This is a first meetup'
    />
    )
}

export async function getStaticPaths() {
    return {
      fallback: false,//this fallback property is used to tell next js whether your paths array contains all the supported params id for you dynamic pages, when it is set to false that means it contains and any params id entered for the dynamic pages that is not in the paths array will result to an error and if it is set the true that means it doesn't contain all 
      paths: [
        {
          params: {
            meetupId: 'm1',
          },
        },
        {
          params: {
            meetupId: 'm2',
          },
        },
      ],
    };
  }
  
  export async function getStaticProps(context) {
    // fetch data for a single meetup
  
    const meetupId = context.params.meetupId;
  
    console.log(meetupId);
  
    return {
      props: {
        meetupData: {
          image:
            'https://upload.wikimedia.org/wikipedia/commons/thumb/d/d3/Stadtbild_M%C3%BCnchen.jpg/1280px-Stadtbild_M%C3%BCnchen.jpg',
          id: meetupId,
          title: 'First Meetup',
          address: 'Some Street 5, Some City',
          description: 'This is a first meetup',
        },
      },
    };
  }