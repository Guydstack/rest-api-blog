const userUrl = "http://localhost:3000/users";
const commentsUrl = "http://localhost:3000/comments";
const postsUrl = "http://localhost:3000/posts";
const photosUrl = "http://localhost:3000/photos";
const postTitle = document.querySelector(".post-title");
const postPageTitle = document.getElementById("post_page_title");


const users = async () => {
    try {
        const response = await fetch(postsUrl);
        const posts = await response.json();
        console.log(posts);
        creatNewPosts(posts)
    } catch (error) {
        console.log(error);
    }
};


function creatNewPosts(posts){

    posts.forEach(element => {

            console.log(element.post);

            postTitle.innerHTML += `                    
                <div class="post-preview">
                    <a href="post.html">
                        <h2 class="post-title">${element.post}</h2>
                        <h3 class="post-subtitle">${element.comment}</h3>
                    </a>
                    <p class="post-meta">
                        Posted by
                        <a href="#!">Rest API</a>
                        on ${formatDate(element.date)}
                    </p>
                </div>
        `

    });


};

function formatDate(inputDateStr) {
    try {
        // Create a new Date object from the input date string
        const inputDate = new Date(inputDateStr);

        // Define the options for formatting the date
        const options = { year: 'numeric', month: 'long', day: 'numeric' };

        // Format the date using the options
        const formattedDate = inputDate.toLocaleDateString(undefined, options);

        return formattedDate;
    } catch (error) {
        return "Invalid date format";
    }
}


users()