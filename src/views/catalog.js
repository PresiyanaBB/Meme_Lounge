import { html } from '../lib.js';
import {getAllPosts} from '../api/data.js';

const catalogTemplate = (posts) => html`
<!-- All Memes Page ( for Guests and Users )-->
<section id="meme-feed">
    <h1>All Memes</h1>
    <div id="memes">
        <!--SAVE BUT CHANGE  ......................-->
        ${posts.length == 0 
            ? html`<p class="no-memes">No memes in database.</p>` 
            : posts.map(postCard)}
    </div>
</section>
`;

const postCard = (post) => html`
<div class="meme">
    <div class="card">
        <div class="info">
            <p class="meme-title">${post.title}</p>
            <img class="meme-image" alt="meme-img" src=${post.imageUrl}>
        </div>
        <div id="data-buttons">
            <a class="button" href="/details/${post._id}">Details</a>
        </div>
    </div>
</div>
`;

export async function catalogPage(ctx) {
    const posts = await getAllPosts();
    ctx.render(catalogTemplate(posts));
}