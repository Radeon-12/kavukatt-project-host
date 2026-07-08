export const contactInfo = {
  address: {
    title: "Address",
    lines: [
      "Cause for the Beatification of Mar Mathew Kavukatt",
      "St Mary's Metropolitan Church",
      "Changanassery",
      "Kottayam",
    ],
  },
  museumAddress: {
    title: "Mar Mathew Kavukatt Museum",
    lines: [
      "St Mary's Metropolitan Church",
      "Mar Mathew Kavukatt Museum",
      "Kavukatt P.O., Changanassery",
      "Kottayam District, Kerala – 686532",
      "India",
    ],
  },
  phone: {
    number: "+91 85475 84954",
    label: "Vice postulator",
  },
  email: "markavukattmuseum@gmail.com",
  visitingTimes: {
    weekday: {
      days: "Mon, Wed, Thu",
      hours: "10:00 AM – 12:00 PM",
    },
    weekend: {
      days: "Sat, Sun & Holidays",
      hours: "10:00 AM – 12:30 PM & 2:30 PM – 4:30 PM",
    },
  },
  officeHours: [
    {
      days: "Monday, Wednesday, and Thursday",
      hours: "10:00 AM to 12:00 PM",
    },
    {
      days: "Saturday, Sunday and public holidays",
      hours: "10:00 AM to 12:30 PM & 2:30 PM – 4:30 PM",
    },
  ],
  tombServices: [
    { num: 1, service: "Confession", time: "4:00 PM" },
    { num: 2, service: "Eucharistic Adoration", time: "4:30 PM" },
    { num: 3, service: "Prayer for Canonization", time: "5:00 PM" },
    { num: 4, service: "Holy Qurbana", time: "5:10 PM" },
    { num: 5, service: "Memorial Service at Tomb", time: "6:00 PM" },
  ],
  mapsUrl:
    "https://www.google.com/maps/place/Mar+Mathew+Kavukatt+museum/@9.4431,76.5365,17z",
  mapsEmbed:
    "https://maps.google.com/maps?q=Mar+Mathew+Kavukatt+museum,+Changanassery,+Kerala&output=embed",
};

export const socialLinks = [
  {
    name: "Facebook",
    href: "https://facebook.com",
    color: "#1877F2",
    icon: "facebook",
  },
  {
    name: "Instagram",
    href: "https://instagram.com",
    color: "#E4405F",
    icon: "instagram",
  },
  {
    name: "YouTube",
    href: "https://www.youtube.com/playlist?list=PLESHXsMRYmd0sM2jihStEDlCci2co_s3u",
    color: "#FF0000",
    icon: "youtube",
  },
] as const;

export const contactSectionContent = {
  intro:
    "We would love to hear from you. Whether you have a question, need more information, or want to share your experience, feel free to reach out to us.",
  prayerCta: {
    title: "Need Prayers?",
    subtitle: "We are here to pray with you.",
    button: "Send Prayer Request",
  },
};

export const biographyParagraphs = [
  "Mar Mathew Kavukatt (1904–1969) was a pioneering leader of the Syro-Malabar Church and the first Archbishop of Changanacherry. Born on 17 July 1904 in Pravithanam, near Palai, he was the son of Chummar and Tresa of the Kavukatt family from Anthinadu.",
  "He began his education at the local school in Anthinadu and later studied at St. Thomas High School, Pala. After completing his schooling in 1923, he continued his higher studies at St. Berchmans College, Changanacherry, and later in Trivandrum, graduating in 1927.",
  "Responding to his call to priesthood, he entered St. Thomas Minor Seminary, Kottayam, in 1928 and continued his formation at the Major Seminary in Aluva. He was ordained a priest on 21 December 1935 by Bishop Kalacherry and celebrated his first Holy Mass shortly afterward in his home parish. Over the next fifteen years, he served the Church in various roles, including pastor, educator, and administrator.",
  'On 9 November 1950, he was consecrated as a bishop in Rome. He assumed leadership of the Diocese of Changanacherry on 3 January 1951, choosing the motto "Caritate Servire" ("To serve with love"). When the diocese was elevated to an archdiocese in 1956, he became its first Archbishop.',
  "Archbishop Kavukatt played a significant role during a crucial period in Kerala's history, particularly in guiding the faithful during socio-political challenges and contributing to movements that protected the rights of minority communities. His leadership was recognized internationally, including by Pope John XXIII during a meeting in 1960.",
  "Marking the silver jubilee of his priesthood (1959–1960), he encouraged initiatives for social welfare, especially housing projects for the poor. His concern for the marginalized remained central to his ministry. He also took active part in major events of the universal Church, including the Second Vatican Council and the Eucharistic Congress held in Bombay.",
  "Despite declining health and undergoing major surgery in Germany, he continued his pastoral mission with dedication, especially serving the poor and suffering. His compassion was often reflected in his desire that no one in need should be left unattended.",
  "He passed away on 9 October 1969. In recognition of his holy life and service, he was declared Servant of God on 25 September 1994, and his cause for canonization had been initiated earlier in 1991.",
];

export const logoImg = "/images/church-logo.webp";

export const portraitImg = "/images/mar-mathew-kavukatt-full-portrait.png";

/** Full Life & Legacy shrine — portrait, window, flowers & plaque */
export const legacyShrineImg = "/images/legacy-shrine-full.png";

/** Shrine portrait for Prayer for Canonization section */
export const canonizationShrineImg = "/images/prayer-canonization-shrine.png";

/** Full-length painted portrait for Life & Legacy */
export const legacyPortraitImg = "/images/mar-mathew-kavukatt-full-portrait.png";

/** Memorial shrine — flowers, candles & plaque */
export const legacyMemorialShrineImg = "/images/legacy-memorial-shrine-warm.png";

/** Warm cathedral interior for Life & Legacy hero background */
export const legacyInteriorBg = "/images/hero-church-painting.png";

export const churchImg =
  "https://res.cloudinary.com/dfftcmdxw/image/upload/f_auto,dpr_auto,q_70,c_limit,w_3840,fl_progressive/v1778604312/kavukattu/images/1778604277072-church-a7a861b1.png";

export const altarImg = "/images/mar-mathew-kavukatt-full-portrait.png";

export const gallerySectionContent = {
  intro:
    "A glimpse into the life, mission, and legacy of Servant of God Mar Mathew Kavukatt. Explore moments that reflect his faith, leadership, and unwavering devotion.",
  albumsTitle: "Our Photo Albums",
  albumsSubtitle:
    "Browse through our collection of photographs that capture important moments from his life and the places that preserve his memory.",
};

const galleryUpload = (path: string) =>
  path.startsWith("/") ? path : `https://marmathewkavukatt.org/${path}`;

export const galleryAlbums = [
  {
    id: "family",
    title: "Family",
    sourceUrl:
      "https://marmathewkavukatt.org/gallery/cmq26lo8u00009mmo7jw9iuhe",
    photos: [
      "/images/gallery/family/01-house.webp",
      "/images/gallery/family/02-room.webp",
      "/images/gallery/family/03-father.webp",
      "/images/gallery/family/04-mother.webp",
      "/images/gallery/family/family-group-enhanced.webp",
      "/images/gallery/family/as-bishop-enhanced.webp",
    ].map(galleryUpload),
    icon: "family" as const,
  },
  {
    id: "methrabhishekam",
    title: "Methrabhishekam",
    sourceUrl:
      "https://marmathewkavukatt.org/gallery/cmq25xv9d00009m7ol2xl1l6r",
    photos: [
      "/images/gallery/methrabhishekam/01-deepika-newspaper.webp",
      "/images/gallery/methrabhishekam/02-consecration-ceremony.webp",
      "/images/gallery/methrabhishekam/laying-on-hands-enhanced.webp",
      "/images/gallery/methrabhishekam/04-two-bishops-seated.webp",
      "/images/gallery/methrabhishekam/05-pope-meeting.webp",
    ].map(galleryUpload),
    icon: "church" as const,
  },
  {
    id: "vatican-council",
    title: "Second Vatican Council",
    sourceUrl:
      "https://marmathewkavukatt.org/gallery/cmq26qwir000y9mmoi4uiu1v9",
    photos: [
      "/images/gallery/vatican-council/01-council-assembly.webp",
      "/images/gallery/vatican-council/02-council-procession.webp",
      "/images/gallery/vatican-council/03-council-session.webp",
      "/images/gallery/vatican-council/04-council-plaque.webp",
    ].map(galleryUpload),
    icon: "council" as const,
  },
  {
    id: "eminent-persons",
    title: "With eminent persons",
    sourceUrl:
      "https://marmathewkavukatt.org/gallery/cmq260osy000b9m7ohm2sm72y",
    photos: [
      "/images/gallery/eminent-persons/clergy-conversation-enhanced.webp",
      "/images/gallery/eminent-persons/bishops-portrait-enhanced.webp",
      "/images/gallery/eminent-persons/president-giri-meeting-enhanced.webp",
      "/images/gallery/eminent-persons/pope-meeting-enhanced.webp",
    ].map(galleryUpload),
    icon: "person" as const,
  },
  {
    id: "funeral",
    title: "Funeral",
    sourceUrl:
      "https://marmathewkavukatt.org/gallery/cmq26oc6e000d9mmomauqk69m",
    photos: [
      "uploads/1780740680514-WhatsApp-Image-2026-06-01-at-10-42-45-PM-9ecec56c.webp",
      "uploads/1780740681364-MMK-14-76-770ed7fa.webp",
      "uploads/1780740681859-MMK-14-75-7859777a.webp",
      "uploads/1780740682372-MMK-14-74-e9035843.webp",
      "uploads/1780740682798-MMK-14-31-4c7d3dab.webp",
      "uploads/1780740683300-MMK-14-28-8a81f3f7.webp",
      "uploads/1780740683743-MMK-14-15-b732e8ca.webp",
      "uploads/1780740683869-MMK-12-60-05a8ba9f.webp",
      "uploads/1780740684313-020-ebc5ecea.webp",
    ].map(galleryUpload),
    icon: "candle" as const,
  },
] as const;

export type GalleryAlbum = (typeof galleryAlbums)[number];

export function getGalleryAlbum(id: string) {
  return galleryAlbums.find((album) => album.id === id);
}

export function getGalleryCoverImage(album: GalleryAlbum) {
  return album.photos.find((photo) => photo.startsWith("/")) ?? album.photos[0];
}

export const videoSectionContent = {
  intro:
    "Watch and listen to inspiring talks, lectures, interviews, and programs that highlight the life, mission, and legacy of Servant of God Mar Mathew Kavukatt.",
  youtubeBannerTitle: "Latest from Our YouTube Channel",
  youtubeBannerText:
    "Explore our latest videos featuring spiritual talks, celebrations, and special programs.",
  albumsTitle: "Video Albums",
  albumsSubtitle:
    "Browse our collection of videos organized into albums.",
  subscribeTitle: "Don't Miss an Update",
  subscribeText:
    "Subscribe to our YouTube channel and stay connected with our latest videos and programs.",
};

/** Primary YouTube playlist for the memorial channel */
export const youtubeChannelUrl =
  "https://www.youtube.com/playlist?list=PLESHXsMRYmd0sM2jihStEDlCci2co_s3u";

export const videoAlbums = [
  {
    id: "spiritual-talks",
    title: "Spiritual Talks & Lectures",
    icon: "mic" as const,
    videoCount: 1,
    href: "https://www.youtube.com/watch?v=95rZXORSo9k",
    embedUrl: "https://www.youtube.com/embed/95rZXORSo9k",
    thumbnail: "https://i.ytimg.com/vi/95rZXORSo9k/hqdefault.jpg",
    platform: "youtube" as const,
    description:
      "Mar Thomas Tharayil reflects on the exemplary life of Mar Mathew Kavukatt.",
  },
  {
    id: "homilies-messages",
    title: "Homilies & Messages",
    icon: "church" as const,
    videoCount: 1,
    href: "https://www.facebook.com/share/v/1BKHmoTwS3/",
    embedUrl:
      "https://www.facebook.com/plugins/video.php?href=https://www.facebook.com/share/v/1BKHmoTwS3/&show_text=false&width=960",
    thumbnail: legacyPortraitImg,
    platform: "facebook" as const,
    description: "Homilies and messages honoring Servant of God Mar Mathew Kavukatt.",
  },
  {
    id: "liturgical-celebrations",
    title: "Liturgical Celebrations",
    icon: "chalice" as const,
    videoCount: 12,
    href: "https://www.youtube.com/watch?v=W0Y9WICNh-E&list=PLESHXsMRYmd0sM2jihStEDlCci2co_s3u",
    embedUrl:
      "https://www.youtube.com/embed/W0Y9WICNh-E?list=PLESHXsMRYmd0sM2jihStEDlCci2co_s3u",
    thumbnail: "https://i.ytimg.com/vi/W0Y9WICNh-E/hqdefault.jpg",
    platform: "youtube" as const,
    description:
      "Holy Qurbana, homily, and prayer on the death anniversary of Mar Mathew Kavukatt — MAAC TV Live.",
  },
  {
    id: "events-programs",
    title: "Events & Programs",
    icon: "events" as const,
    videoCount: 1,
    href: "https://youtu.be/hBiV6q7Pw1w",
    embedUrl: "https://www.youtube.com/embed/hBiV6q7Pw1w",
    thumbnail: "https://i.ytimg.com/vi/hBiV6q7Pw1w/hqdefault.jpg",
    platform: "youtube" as const,
    description:
      "Nalla Amarakkaran — Bishop Kavukatt feature on Shalom Television.",
  },
  {
    id: "interviews-documentaries",
    title: "Interviews & Documentaries",
    icon: "book" as const,
    videoCount: 1,
    href: "https://www.youtube.com/watch?v=m2yzlMirbQA",
    embedUrl: "https://www.youtube.com/embed/m2yzlMirbQA",
    thumbnail: "https://i.ytimg.com/vi/m2yzlMirbQA/hqdefault.jpg",
    platform: "youtube" as const,
    description:
      "From birth home to tomb — a visual journey through the life of Mar Mathew Kavukatt.",
  },
] as const;

export type VideoAlbum = (typeof videoAlbums)[number];

export function getVideoAlbum(id: string) {
  return videoAlbums.find((album) => album.id === id);
}

/** Official Malayalam prayer for canonization — from marmathewkavukatt.org */
export const canonizationPrayer = {
  motto: "SERVIRE IN CARITATE",
  title: "Prayer for Canonization",
  subtitle: "Join us in prayer for the canonization of our beloved shepherd",
  paragraphs: [
    "പിതാവും പുത്രനും പരിശുദ്ധാത്മാവുമായ ത്രിയേക ദൈവമേ, ദൈവസ്നേഹത്തിന്റെയും പരസ്നേഹത്തിന്റെയും പുതിയ പ്രമാണം ഞങ്ങളെ പഠിപ്പിച്ച ഈശോ മിശിഹായെ അടുത്തുകരിച്ച്, അങ്ങേ മഹത്വത്തിനും ആജഗണങ്ങളിൽ അങ്ങേ ദിവ്യസ്നേഹം പകർന്നു കൊടുക്കുന്നതിനുംവേണ്ടി, ജീവിതകാലം മുഴുവൻ ചെലവഴിച്ച കാവുകാട്ടുപിതാവിന്, വിശുദ്ധിയുടെ കിരീടം നൽകുവാൻ കൃപയുണ്ടാകണമേ.",
    "ഞങ്ങളുടെ പിതാവിൽ വിളങ്ങിയിരുന്ന കരുണാർദ്രമായ സ്നേഹവും, വിനയം നിറഞ്ഞ ദീർഘശാന്തതയും, വീരോചിതമായ സഹനവും, സഭാത്മകമായ ചൈതന്യവും, പാവങ്ങളോടുള്ള അനുകമ്പയും ഞങ്ങളിലും വളർന്നുവരുവാൻ അനുഗ്രഹം തരണമേ.",
    "ഇടയന്മാരുടെ നാഥനായ ദൈവമേ, ജീവിതകാലത്ത് അനേകർക്കാശ്രയവും ആലംബവുമായിരുന്ന ഞങ്ങളുടെ നല്ല ഇടയൻ കാവുകാട്ടുപിതാവിന്റെ ജീവിതവിശുദ്ധിയും, അങ്ങേ പക്കലുള്ള മാദ്ധ്യസ്ഥ്യ ശക്തിയും ഏവരും അറിയുവാൻവേണ്ടി ഞങ്ങളപേക്ഷിക്കുന്നതും, കണ്ണുനീരിന്റെ താഴ്വരയിൽ അലയുന്ന ഞങ്ങൾക്ക് ഏറ്റവും ആവശ്യമായതുമായ.... അനുഗ്രഹം അങ്ങയുടെ വിശ്വസ്തദാസൻ വഴി നൽകി അദ്ദേഹത്തെ മഹത്വപ്പെടുത്തുവാൻ കൃപയുണ്ടാകണമേ.",
  ],
  amen: "ആമേൻ.",
  closing: "1 സ്വർഗ്ഗ. 1 നന്മ. 1 ത്രിത്വ.",
  quote:
    "A life rooted in faith, a heart filled with love, and a legacy that continues to inspire generations.",
};

/** Eight-day prayer booklet — pages in upload order (book pages 4–15) */
export const prayerBookPages = Array.from({ length: 12 }, (_, i) =>
  `/images/prayer-book/page-${String(i + 1).padStart(2, "0")}.png`,
) as readonly string[];

export const prayerBookPdfFilename =
  "ashtadina-prayer-mar-mathew-kavukatt.pdf";
