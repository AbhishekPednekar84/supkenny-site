import Head from "next/head";
import { Fragment } from "react";
import CommonHeadLayout from "./CommonHeadLayout";

const GalleryHeadLayout = (props) => {
  return (
    <Fragment>
      <CommonHeadLayout />
      <Head>
        <title>Suparna & Kenny | Photo Gallery</title>
        <meta
          name="description"
          content="The photo gallery from all the events - haldi, the wedding and the reception. The link to the live stream will be posted here as well."
        />
        <meta property="og:locale" content="en_US" />
        <meta property="og:type" content="website" />
        <meta property="og:title" content="Suparna & Kenny | Photo Gallery" />
        <meta
          property="og:description"
          content="The photo gallery from all the events - haldi, the wedding and the reception. The link to the live stream will be posted here as well."
        />
        <meta property="og:url" content="https://supkenny.site/gallery" />
        <meta property="og:site_name" content="supkenny.site" />
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: `[
            {
              "@context": "https://schema.org",
              "@type": "Event",
              "name": "Suparna and Kenneth's wedding site",
              "description": "The wedding of Suparna and Kenneth will take place at the RECCAA Club on 23rd August, 2021",
              "url": "https://supkenny.site",
              "startDate": "2021-08-23",
              "endDate": "2021-08-23",
              "maximumAttendeeCapacity": 50,
              "location": {
                "@type": "Place",
                  "name": "The RECCAA Club",
                "address": "Recca Valley Rd, Thrikkakara, Kakkanad, Kerala - 682030"
              },
              "eventAttendanceMode": "https://schema.org/MixedEventAttendanceMode",
              "eventStatus": "https://schema.org/EventScheduled",
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

export default GalleryHeadLayout;
