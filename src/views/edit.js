import { editPostByIdAndPost,getPostById } from '../api/data.js';
import { html } from '../lib.js';
import { endpoints } from '../util.js';
import {notify} from '../views/notify.js';

const editTemplate = (post, onSubmit) => html`
<section id="edit-meme">
    <form @submit=${onSubmit} id="edit-form">
        <h1>Edit Meme</h1>
        <div class="container">
            <label for="title">Title</label>
            <input id="title" type="text" placeholder="Enter Title" name="title" .value=${post.title}>
            <label for="description">Description</label>
            <textarea id="description" placeholder="Enter Description" name="description" .value=${post.description}></textarea>
            <label for="imageUrl">Image Url</label>
            <input id="imageUrl" type="text" placeholder="Enter Meme ImageUrl" name="imageUrl" .value=${post.imageUrl}>
            <input type="submit" class="registerbtn button" value="Edit Meme">
        </div>
    </form>
</section>
`;

export async function editPage(ctx) {
    const post = await getPostById(ctx.params.id);

    ctx.render(editTemplate(post, onSubmit));

    async function onSubmit(event) {
        event.preventDefault();

        const formData = new FormData(event.target);
        const title = formData.get('title').trim();
        const description = formData.get('description').trim();
        const imageUrl = formData.get('imageUrl').trim();

        if(title == '' || description == '' || imageUrl == ''){
            //return alert('All fields are required!');
            return notify('All fields are required!');
        }

        await editPostByIdAndPost(ctx.params.id,{
            title,
            description,
            imageUrl
        });
        ctx.page.redirect(endpoints.main);
    }
}