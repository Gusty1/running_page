interface ISiteMetadataResult {
  siteTitle: string;
  siteUrl: string;
  description: string;
  logo: string;
  navLinks: {
    name: string;
    url: string;
  }[];
}

const data: ISiteMetadataResult = {
  siteTitle: 'Running Page',
  siteUrl: 'https://running-page-git-master-gusty1.vercel.app/',
  logo: 'https://github.com/Gusty1/GustyLittleWorld/blob/gh-pages/images/index/icon-rm.png?raw=true',
  description: 'Personal site and blog',
  navLinks: [
    {
      name: 'Blog',
      url: 'https://gusty1.github.io/GustyLittleWorld/',
    },
    {
      name: 'About',
      url: 'https://github.com/yihong0618/running_page',
    },
  ],
};

export default data;
