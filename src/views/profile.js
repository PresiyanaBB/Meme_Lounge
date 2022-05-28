import { html } from '../lib.js';
import { getMyPostsByUserId } from '../api/data.js';
import { getUserData } from '../util.js';

const profileTemplate = (posts,userData) => html`
<section id="user-profile-page" class="user-profile">
    <article class="user-info">
        <img id="user-avatar-url" alt="user-profile" src="/images/${userData.gender}.png">
        <div class="user-content">
            <p>Username: ${userData.username}</p>
            <p>Email: ${userData.email}</p>
            <p>My memes count: ${posts.length}</p>
        </div>
    </article>
    <h1 id="user-listings-title">User Memes</h1>
    <div class="user-meme-listings">
        <!-- Display : All created memes by this user (If any) -->
        ${posts.length == 0 
            ? html`<p class="no-memes">No memes in database.</p>` 
            : posts.map(postCard)}
    </div>
</section>
`;


const postCard = (post) => html`
<div class="user-meme">
    <p class="user-meme-title">${post.title}</p>
    <img class="userProfileImage" alt="meme-img" src=${post.imageUrl}>
    <a class="button" href="/details/${post._id}">Details</a>
</div>
`;

export async function profilePage(ctx) {
    const userData = getUserData();
    const posts = await getMyPostsByUserId(userData.id);
    ctx.render(profileTemplate(posts,userData));
}