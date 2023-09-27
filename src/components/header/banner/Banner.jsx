import './Banner.css'
const Banner = () => {
    return (
        <div className="banner ">
            <div className='grid gap-4 place-content-center h-[400px] '>
            <div className="form-control">
  <div className="input-group">
    <input type="text" placeholder="Search…" className="input input-bordered" />
    <button className="btn btn-square bg-pink-700 w-auto">
    Search
    </button>
  </div>
</div>
            </div>
        </div>
    );
};

export default Banner;