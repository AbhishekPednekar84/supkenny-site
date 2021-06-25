import React from "react";
import Image from "next/image";

const OurStory = ({ styles }) => {
  return (
    <div className={styles.ourstory__container}>
      <h2 className={styles.ourstory__heading}>Our Story</h2>
      <div className={styles.ourstory__paragraph__container}>
        <div className={styles.ourstory__paragraph__text}>
          We have learned that fate has a funny way of bringing you right where
          you belong. A trip to Dubai and getting introduced by our mutual
          friend, didn’t take us long to break the ice.
          <br />
          <br /> When we started talking little did we know that our story would
          not end there. The quick hello turned into hours of conversation that
          neither of us wanted to end and after discovering our mutual love for
          travel, dance and adventure, the rest is history!
          <br />
          <br />
          Two years later, we are best friends, true loves, and partners in
          life. Our adventurous souls have been on a beautiful journey together
          and we are ready for the next chapter of our lives... and can’t wait
          to celebrate with all of our favorite people.
        </div>
        <div className={styles.ourstory__paragraph__image}>
          <Image
            src="/images/our-story/ourstory__1.jpeg"
            height={500}
            width={550}
          />
        </div>
      </div>
    </div>
  );
};

export default OurStory;
