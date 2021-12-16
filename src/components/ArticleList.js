import Article from "./Article";

function articleArr(posts) {
    posts.map((post) => {
        return (
            <Article 
                key={post.id} 
                title={post.title} 
                date={post.date} 
                preview={post.preview} 
            />
        )
    })
}

function ArticleList({ posts }) {
    
    return (
        <main>
            {articleArr(posts)}
        </main>
    )
}

export default ArticleList;