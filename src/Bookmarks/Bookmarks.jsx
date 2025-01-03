
import PropTypes from "prop-types";
import Bookmark from "./Bookmark";

const Bookmarks = ({ bookmarks, readingTime }) => {
    return (
        <div className="md:w-1/3 mt-6 p-4 bg-gray-300 rounded-2xl">
            <div>
                <h3 className="font-bold md:pt-5 text-center text-3xl">Reading Time : {readingTime}</h3>
            </div>
            <h2 className="font-bold md:py-5 text-center text-3xl">Bookmarked Blogs : {bookmarks.length}</h2>
            {
                bookmarks.map(bookmark =>
                    <Bookmark key={bookmark.id} bookmark={bookmark}></Bookmark>
                )
            }
        </div>
    );
};

Bookmarks.propTypes = {
    bookmarks: PropTypes.array,
    readingTime: PropTypes.number
}

export default Bookmarks;