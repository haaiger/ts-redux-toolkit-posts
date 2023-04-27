import { posts } from "../db/posts";
import "../css/home.css";
import { deleteFromFavorites } from "../redux/postSlice";
import { getAllFavoritesSelector } from "../redux/posts.selectors";
import { useAppDispatch, useAppSelector } from "../redux/hooks";

function Favorites() {
  const dispatch = useAppDispatch();
  const favoritesId = useAppSelector(getAllFavoritesSelector);

  return (
    <div className="home-main">
      <p>Favorites</p>
      <div className="posts-container">
        {posts.map(
          (post, i) =>
            favoritesId.includes(post.id) && (
              <div key={"fav-" + i} className="post">
                <div className="post-header">
                  <p className="author">
                    Author: <span className="author-name">{post.author}</span>
                  </p>
                  <div className="fav-btn">
                    <button
                      onClick={() => dispatch(deleteFromFavorites(post.id))}
                    >
                      Delete
                    </button>
                  </div>
                </div>
                <div className="content">{post.content}</div>
              </div>
            )
        )}
      </div>
    </div>
  );
}

export default Favorites;
