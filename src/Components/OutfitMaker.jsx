import React , {useContext, useState} from 'react'
import { Link } from 'react-router-dom';
import { MyContext } from '../Utilities/Context/ContextProvider';


const OutfitMaker = () => {
  const [isOpen, setIsOpen] = useState(false);
 const {outfit ,setOutfit}=useContext(MyContext)
     const handleImageChange = (event) => {
       const files = event.target.files;
       const newImageSrcs = Array.from(files).map((file) =>
         URL.createObjectURL(file)
       );
       setOutfit((prevImageSrc) => [...prevImageSrc, ...newImageSrcs]);
     };
  console.log(outfit.length)
  const toggleDropdown = () => {
    setIsOpen(!isOpen);
  };

  
  return (
    <div className="min-h-screen md:flex ">
      <div className="left  p-3 w-full  bg-slate-100  md:w-[70%] flex justify-center item center">
        <div className=" p-2  ">
          <div className="img-container grid grid-cols-3 gap-2">
            {outfit.length &&
              outfit.map((img, id) => (
                <div className="img-card">
                  <img
                    key={id}
                    className=" w-64  h-80 object-cover "
                    src={img}
                    alt="product"
                  />
                </div>
              ))}
          </div>
        </div>
      </div>
      <div className="right   w-full md:w-[30%] flex flex-col gap-24 justify-center items-center">
        <div className="w-96">
          <p className="text-black text-xl font-normal italic">
            {" "}
            "True style is the art of crafting your unique expression, blending
            authenticity with creativity to leave an indelible mark."
          </p>
        </div>
        <div className="btn flex flex-col gap-5 ">
          <div className=" ">
            <div className="relative">
              <button
                id="dropdownButton"
                onClick={toggleDropdown}
                className=" text-white text-xl font-bold w-80 p-3 bg-[#FF3E6C] rounded-md">
                Add an Item
              </button>
              <div
                id="dropdown"
                className={`z-10 ${
                  isOpen ? "block" : "hidden"
                } text-base  list-none bg-white  absolute bottom-13  right-0  rounded-lg shadow-lg w-40 `}>
                <ul className="py-2" aria-labelledby="dropdownButton">
                  <li>
                    <input
                      id="file-input"
                      type="file"
                      accept="image/*"
                      onChange={handleImageChange}
                      className="hidden"
                    />
                    <label
                      htmlFor="file-input"
                      className="block px-4 py-2 text-sm text-black font-normal cursor-pointer">
                      Add from Device
                    </label>
                  </li>
                  <li>
                    <Link
                      to="/"
                      className="block px-4 py-2 text-sm text-black font-normal cursor-pointer">
                      Continue On Myntra
                    </Link>
                  </li>
                </ul>
              </div>
            </div>
          </div>
          <button className="  text-white text-xl font-bold  w-80 p-3 bg-[#FF3E6C] rounded-md">
            <Link to="/community">Upload Outfit</Link>
          </button>
        </div>
      </div>
    </div>
  );
}

export default OutfitMaker