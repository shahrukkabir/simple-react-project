import PropTypes from 'prop-types';

const Blog = ({blog}) => {
    const {title, cover,reading_time,author,author_img,posted_date,hashtags} = blog;
    console.log(blog);
    return (
        <div>
            <img className='mt-10 w-full'  src={cover} alt="`cover picture of the title ${title}`" />
            <div className='flex justify-between mt-8'>
                <div className='flex'>
                    <img className='w-14' src={author_img} alt="" />
                    <div className='ml-6'>
                        <h3 className='text-2xl font-bold'>{author}</h3>
                        <p>{posted_date}</p>
                    </div>
                </div>
                <div>
                    <span>{reading_time} min read</span>
                </div>
            </div>
            <h2 className='text-4xl font-bold my-4'>{title}</h2>
            <p>
                {
                    hashtags.map((hash,idx) => <span className='text-gray-500 ml-4' key={idx}><a href="">#{hash}</a></span>)
                }
            </p>
        </div>
    );
};

Blog.propTypes = {
    blog: PropTypes.object.isRequired
}
export default Blog;