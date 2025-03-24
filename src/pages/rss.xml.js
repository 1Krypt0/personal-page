import rss from "@astrojs/rss";
import { SITE_TITLE, SITE_DESCRIPTION } from "../consts";
import { getAllPosts, getAllProjects } from "../lib/strapi";

export async function GET(context) {
  const posts = await getAllPosts();
  const projects = await getAllProjects();

  const allPosts = posts.map((post) => ({
    ...post.data,
    link: `/blog/${post.slug}/`,
  }));

  const allProjects = projects.map((project) => ({
    ...project.data,
    link: `/projects/${project.slug}/`,
  }));

  return rss({
    title: SITE_TITLE,
    description: SITE_DESCRIPTION,
    site: context.site,
    items: [...allPosts, ...allProjects],
  });
}
