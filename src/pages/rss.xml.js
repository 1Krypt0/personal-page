import rss from '@astrojs/rss';
import { getCollection } from 'astro:content';
import { SITE_TITLE, SITE_DESCRIPTION } from '../consts';

export async function get(context) {
	const posts = await getCollection('blog');
	const projects = await getCollection('projects');
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
