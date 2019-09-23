module.exports = {
  siteTitle: "Share CI Library",
  siteDescription: "IEEE Computational Intelligence Society",
  authorName: "IEEE Computational Intelligence Society",
  twitterUsername: "ieeecis",
  authorAvatar: "avatar.jpeg", // file in content/images
  multilangPosts: true, // enable/disable flags in post lists
  authorDescription: `
  IEEE CIS<br>
  Do you want to know more? <a href="https://github.com/IEEETechnology/Share-CI-Library" target="_blank">Edit this repository!</a>
  `,
  siteUrl: "https://cis.ieee.org/",
  disqusSiteUrl: "",
  // Prefixes all links. For cases when deployed to maxpou.fr/gatsby-starter-morning-dew/
  pathPrefix: "/ieeecis", // Note: it must *not* have a trailing slash.
  siteCover: "iStock-942607194.jpg", // file in content/images
  googleAnalyticsId: "",
  background_color: "#ffffff",
  theme_color: "#222222",
  display: "standalone",
  icon: "content/images/cis-logo.png",
  postsPerPage: 6,
  disqusShortname: "maxpou",
  headerTitle: "Share CI Library",
  headerLinksIcon: "cis-logo.png", //  (leave empty to disable: '')
  headerLinks: [
    {
      label: "Blog",
      url: "/"
    },
    {
      label: "Repositories",
      url: "/repositories"
    },
    {
      label: "About",
      url: "/about-share-ci-library"
    }
    // {
    //   label: "Installation",
    //   url: "/how-to-install"
    // }
  ],
  // Footer information (ex: Github, Netlify...)
  websiteHost: {
    name: "GitHub",
    url: "https://github.com"
  },
  footerLinks: [
    {
      sectionName: "Explore",
      links: [
        {
          label: "Blog",
          url: "/"
        },
        {
          label: "Repositories",
          url: "/repositories"
        },
        {
          label: "About",
          url: "/about-share-ci-library"
        }
        // {
        //   label: "Installation",
        //   url: "/how-to-install"
        // }
      ]
    },
    {
      sectionName: "Follow IEEE CIS",
      links: [
        {
          label: "Github",
          url: "https://github.com/IEEETechnology/Share-CI-Library"
        },
        {
          label: "Website",
          url: "https://cis.ieee.org"
        },
        {
          label: "Twitter",
          url: "#"
        }
      ]
    }
  ]
};
