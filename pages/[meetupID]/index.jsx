import { useRouter } from "next/router";
import MeetupDetail from "../../components/meetups/MeetupDetail";

export default function MeetupDetails() {
    const router = useRouter();


    return <MeetupDetail
        image={'https://www.bigfootdigital.co.uk/wp-content/uploads/2020/07/image-optimisation-scaled.jpg'}
        title={'First Meetup'}
        address={'Meetup Address'}
        description={'Meetup Description'}
    />
};