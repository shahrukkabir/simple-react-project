import PropTypes from 'prop-types';
import { FaRegBookmark } from "react-icons/fa6";

const Blog = ({ blog, handleAddToBookmark ,handleMarkAsRead}) => {
    const { title, cover, reading_time, author, author_img, posted_date, hashtags } = blog;
    return (
        <div>
            <img className='mt-10 w-full rounded-lg' src={cover} alt="`cover picture of the title ${title}`" />
            <div className='flex justify-between mt-8'>
                <div className='flex'>
                    <img className='w-14' src={author_img} alt="" />
                    <div className='ml-6'>
                        <h3 className='text-2xl font-bold'>{author}</h3>
                        <p>{posted_date}</p>
                    </div>
                </div>
                <div className='flex items-center gap-3'>
                    <span>{reading_time} min read</span>
                    <button onClick={() => handleAddToBookmark(blog)}><FaRegBookmark /></button>
                </div>
            </div>
            <h2 className='text-4xl font-bold my-4'>{title}</h2>
            <p>
                {
                    hashtags.map((hash, idx) => <span className='text-gray-500 mr-4' key={idx}><a href="">#{hash}</a></span>)
                }
            </p>
            <button onClick={() =>handleMarkAsRead(reading_time)} className='text-purple-600 font-bold mb-9 mt-3 underline'>Mark as read</button>
            <hr />
        </div>
    );
};

Blog.propTypes = {
    blog: PropTypes.object.isRequired,
    handleAddToBookmark: PropTypes.func,
    handleMarkAsRead : PropTypes.func
}
export default Blog;