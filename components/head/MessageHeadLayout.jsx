import Head from "next/head";
import { Fragment } from "react";
import CommonHeadLayout from "./CommonHeadLayout";

const MessageHeadLayout = (props) => {
  return (
    <Fragment>
      <CommonHeadLayout />
      <Head>
        <title>Suparna & Kenny | Write To Us</title>
        <meta
          name="description"
          content="While we would have loved to invite the world to celebrate our special day with us, having our wedding amid a pandemic means that the number of guests is limited. However, please do leave us a message. We would love to hear from you."
        />
        <meta property="og:locale" content="en_US" />
        <meta property="og:type" content="website" />
        <meta property="og:title" content="Suparna & Kenny | Write To Us" />
        <meta
          property="og:description"
          content="While we would have loved to invite the world to celebrate our special day with us, having our wedding amid a pandemic means that the number of guests is limited. However, please do leave us a message. We would love to hear from you."
        />
        <meta property="og:url" content="https://supkenny.site/messages" />
        <meta property="og:site_name" content="supkenny.site" />
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: `[
                {
                    "@context": "https://schema.org",
                    "@type": "Event",
                    "name": "The wedding of Suparna and Kenneth",
                    "url": "https://supkenny.site",
                    "startDate": "2021-08-23",
                    "endDate": "2021-08-23",
                    "maximumAttendeeCapacity": 50,
                    "location": {
                        "@type": "Postal Address",
                        "streetAddress": "Recca Valley Rd, Thrikkakara, Kakkanad, Kerala",
                        "postalCode": "682030",
                        "addressCountry": "India"
                    },
                    "eventSchedule": [
                        {
                        "name": "Haldi",
                        "startDate": "2021-08-22",
                        "startTime": "17:00",
                        "scheduleTimezone": "IST"
                        },
                        {
                        "name": "Wedding",
                        "startDate": "2021-08-23",
                        "startTime": "11:45",
                        "endTime": "12:15",
                        "scheduleTimezone": "IST"
                        },
                        {
                        "name": "Reception",
                        "startDate": "2021-08-23",
                        "startTime": "17:00",
                        "scheduleTimezone": "IST"
                        }
                    ]
                }
            ]`,
          }}
        />
      </Head>
      {props.children}
    </Fragment>
  );
};

export default MessageHeadLayout;
