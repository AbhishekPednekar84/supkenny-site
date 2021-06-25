import Head from "next/head";
import { Fragment } from "react";
import CommonHeadLayout from "./CommonHeadLayout";

const HomeHeadLayout = (props) => {
  return (
    <Fragment>
      <CommonHeadLayout />
      <Head>
        <title>Suparna & Kenny | We Are Getting Married</title>
        <meta
          name="description"
          content="Welcome to our site. We are getting married on the 23rd of August 2021. Leave us a message, view our gallery or simply browse through the site. Thanks for stopping by!"
        />
        <meta property="og:locale" content="en_US" />
        <meta property="og:type" content="website" />
        <meta
          property="og:title"
          content="Suparna & Kenny | We Are Getting Married"
        />
        <meta
          property="og:description"
          content="Welcome to our site. We are getting married on the 23rd of August 2021. Leave us a message, view our gallery or simply browse through the site. Thanks for stopping by!"
        />
        <meta property="og:url" content="https://supkenny.site/" />
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

export default HomeHeadLayout;
