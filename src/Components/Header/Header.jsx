import profile from '../../assets/images/profile.png'
const Header = () => {
    return (
        <div className='flex justify-between items-center max-w-7xl p-6 mx-auto border-b-4'>
            <h1 className='text-3xl font-bold'>Knowledge Cafe</h1>
            <img src={profile} alt="" />
        </div>
    );
};

export default Header;