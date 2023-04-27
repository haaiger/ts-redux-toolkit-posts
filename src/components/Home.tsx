import { posts } from "../db/posts";
import "../css/home.css";
import { getAllFavoritesSelector } from "../redux/posts.selectors";
import { addToFavorites } from "../redux/postSlice";
import { useAppDispatch, useAppSelector } from "../redux/hooks";

function Home() {
  const dispatch = useAppDispatch();
  const favoritesId = useAppSelector(getAllFavoritesSelector);

  return (
    <div className="home-main">
      <p>Home</p>
      <div className="posts-container">
        {posts.map((post, i) => (
          <div key={"post" + i} className="post">
            <div className="post-header">
              <p className="author">
                Author: <span className="author-name">{post.author}</span>
              </p>
              <div className="fav-btn">
                {!favoritesId.includes(post.id) && (
                  <button onClick={() => dispatch(addToFavorites(post.id))}>
                    Add
                  </button>
                )}
              </div>
            </div>
            <div className="content">{post.content}</div>
          </div>
        ))}
      </div>
    </div>
  );
}

export default Home;
