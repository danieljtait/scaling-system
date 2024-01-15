import Parser from "rss-parser";
import type { PageServerLoad } from "./$types";

const parser = new Parser();

export const load = (async ({ params: { id } }) => {
    const scheme = "https://";
    const url = `${scheme}${id}`;
    console.log(id);
    console.log(url);

    const feed = await parser.parseURL(url);
    // const feed = await parser.parseURL('https://www.relay.fm/upgrade/feed');
    // console.log(feed.items.slice(0, 1));
    return {
        title: feed.title,
        items: feed.items.map(item => { return {
            title: item.title,
            link: item.link
        }})
    }
}) satisfies PageServerLoad