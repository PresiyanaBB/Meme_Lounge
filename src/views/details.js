import { deletePostById, getPostById } from '../api/data.js';
import { html } from '../lib.js';
import { endpoints, getUserData } from '../util.js';

const detailsTemplate = (post, isOwner, onDelete) => html`
<section id="meme-details">
    <h1>Meme Title: ${post.title}</h1>
    <div class="meme-details">
        <div class="meme-img">
            <img alt="meme-alt" src=${post.imageUrl}>
        </div>
        <div class="meme-description">
            <h2>Meme Description</h2>
            <p>
                ${post.description}
            </p>
            ${isOwner ?
            html`<a class="button warning" href="/edit/${post._id}">Edit</a>
                <button @click=${onDelete} class="button danger">Delete</button>`
            : null}
        </div>
    </div>
</section>
`;

export async function detailsPage(ctx) {
    const post = await getPostById(ctx.params.id);

    const userData = getUserData();
    const isOwner = userData && post._ownerId == userData.id;

    ctx.render(detailsTemplate(post, isOwner, onDelete));

    async function onDelete(){
        const choice = confirm('Are you sure you want to delete this post?');

        if(choice){
            await deletePostById(ctx.params.id);
            ctx.page.redirect(endpoints.main);
        }
    }
}