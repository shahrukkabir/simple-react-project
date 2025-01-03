
import PropTypes from "prop-types";
import Bookmark from "./Bookmark";

const Bookmarks = ({bookmarks}) => {
    return (
        <div className="w-1/3 bg-gray-400 rounded-2xl">
            <h2 className="font-bold mt-7 text-center text-3xl">Bookmarked Blogs : {bookmarks.length}</h2>
            {
                bookmarks.map(bookmark => 
                    <Bookmark key={bookmark.id}  bookmark={bookmark}></Bookmark>
                )
            }
        </div>
    );
};

Bookmarks.propTypes = {
    bookmarks : PropTypes.array
}

export default Bookmarks;