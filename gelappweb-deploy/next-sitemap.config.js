/** @type {import('next-sitemap').IConfig} */
module.exports = {
  siteUrl: 'https://gelapp.com.tr',
  generateRobotsTxt: true,
  sitemapSize: 5000,
  changefreq: 'weekly',
  priority: 0.7,
  robotsTxtOptions: {
    additionalSitemaps: [],
    policies: [
      { userAgent: '*', allow: '/' },
    ],
  },
  exclude: ['/api/*'],
  transform: async (config, path) => {
    let priority = 0.7;
    let changefreq = 'weekly';
    if (path === '/') { priority = 1.0; changefreq = 'daily'; }
    else if (path.startsWith('/hizmetler')) { priority = 0.8; }
    else if (path.startsWith('/rehber')) { priority = 0.8; changefreq = 'weekly'; }
    else if (['/hakkimizda', '/iletisim', '/indir'].includes(path)) { priority = 0.9; }
    return {
      loc: path,
      changefreq,
      priority,
      lastmod: new Date().toISOString(),
    };
  },
};
