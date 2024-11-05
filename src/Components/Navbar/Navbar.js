// import React, { useState, useEffect } from 'react';
// import { Link, useNavigate, useLocation } from 'react-router-dom';
// import './Navbar.css';
// import { FaRegHeart } from 'react-icons/fa';
// import { GrCart } from 'react-icons/gr';
// import { CgProfile } from "react-icons/cg";
// import { auth } from '../Login/firebaseConfig'; // Firebase config file
// import { IoSearchOutline } from "react-icons/io5";

// const Navbar = () => {
//   const [isOpen, setIsOpen] = useState(false);
//   const [searchQuery, setSearchQuery] = useState('');
//   const [suggestions, setSuggestions] = useState([]);
//   const [user, setUser] = useState(null);
//   const [userDetails, setUserDetails] = useState({ firstName: '', lastName: '', photo: '' });
//   const [imageLoaded, setImageLoaded] = useState(false); // New state for image loading
//   const navigate = useNavigate();
//   const location = useLocation();

//   useEffect(() => {
//     const unsubscribe = auth.onAuthStateChanged((currentUser) => {
//       setUser(currentUser);
//       if (currentUser) {
//         fetchUserDetails(currentUser.uid);
//       }
//     });

//     return () => unsubscribe();
//   }, []);

//   useEffect(() => {
//     if (location.pathname === '/') {
//       setSearchQuery('');
//       setSuggestions([]);
//     }
//   }, [location]);

//   const fetchUserDetails = async (userId) => {
//     try {
//       const response = await fetch(`http://localhost:5000/api/personal-details/${userId}`);
//       const data = await response.json();
//       if (response.ok) {
//         setUserDetails({
//           firstName: data.firstName,
//           lastName: data.lastName,
//           photo: data.photo || ''
//         });
//         setImageLoaded(false); // Reset loading status
//       } else {
//         console.error('Failed to fetch user details:', data);
//       }
//     } catch (error) {
//       console.error('Failed to fetch user details:', error);
//     }
//   };

//   const handleImageLoad = () => {
//     setImageLoaded(true);
//   };

//   // Define the handleSearchChange function
//   const handleSearchChange = (e) => {
//     const query = e.target.value;
//     setSearchQuery(query);

//     if (query.trim() === '') {
//       setSuggestions([]);
//       return;
//     }

//     const matchedSubcategories = Object.keys(subcategories).filter(
//       (subcategory) => subcategory.toLowerCase().includes(query.toLowerCase())
//     );

//     setSuggestions(matchedSubcategories);
//   };

//   // Define the handleSearchSubmit function
//   const handleSearchSubmit = (e) => {
//     e.preventDefault();
//     setSuggestions([]);
//     setSearchQuery('');

//     if (searchQuery.trim() === '') {
//       return;
//     }

//     if (suggestions.length > 0) {
//       navigate(subcategories[suggestions[0]]);
//     }
//   };

//   // Define the handleSuggestionClick function
//   const handleSuggestionClick = (suggestion) => {
//     navigate(subcategories[suggestion]);
//     setSearchQuery('');
//     setSuggestions([]);
//   };

//   const subcategories = {
//     "Bedroom Sets": "/combos/bedroomsets",
//     "Living Sets": "/combos/livingsets",
//     "Dining Sets": "/combos/diningsets",
//     "Sofas": "/living/sofas",
//     "Curtains": "/living/curtains",
//     "Teapoy": "/living/teapoys",
//     "Carpets": "/living/carpets",
//     "Cots": "/bedrooms/cots",
//     "Mattress": "/bedrooms/mattress",
//     "Dressing Units": "/bedrooms/dressingunits",
//     "Blankets": "/bedrooms/blankets",
//     "Pillows": "/bedrooms/pillows",
//     "Dining Tables": "/dining/tables",
//     "Crockery units": "/dining/crockery-units",
//     "Desks": "/study-office/desks",
//     "Office Chairs": "/study-office/office-chairs",
//     "Bookcases": "/study-office/bookcases",
//     "Reception Counters": "/study-office/reception-counters",
//     "Hydraulic Beds": "/bedrooms/hydraulicbeds",
//     "Normal Sofas": "/living/normalsofas",
//     "Recliner": "/living/recliner",
//     "LShapedSofas": "/living/lshapedsofa",
//     "King Beds with Storage": "/bedrooms/kingstorage",
//     "King Beds without Storage": "/bedrooms/kingbeds",
//     "Queen Beds with Storage": "/bedrooms/queenstorage",
//     "Queen Beds without Storage": "/bedrooms/queenbeds"
//   };

//   return (
//     <nav className="navbar">
//       <div className="navbar-logo">
//         <Link to="/"> <img src="/images/logo4.png" alt="MyApp Logo" /></Link>
//       </div>

//       <form className="search-form" onSubmit={handleSearchSubmit}>
//         <div className="search-input-container">
//           <input
//             type="text"
//             placeholder="What are you looking for?"
//             value={searchQuery}
//             onChange={handleSearchChange}
//           />
//           <button type="submit" className="search-button">
//             <IoSearchOutline className='searchicon' />
//           </button>
//         </div>

//         {suggestions.length > 0 && (
//           <ul className="suggestions-list">
//             {suggestions.map((suggestion) => (
//               <li key={suggestion} onClick={() => handleSuggestionClick(suggestion)}>
//                 {suggestion}
//               </li>
//             ))}
//           </ul>
//         )}
//       </form>

//       <ul className={`navbar-links ${isOpen ? 'active' : ''}`}>
//         <li>
//           <Link to="/wishlist" className="nav-item">
//             <FaRegHeart className="icon1" />
//             <span className='name'>Wishlist</span>
//           </Link>
//         </li>
//         <li>
//           <Link to="/cart" className="nav-item">
//             <GrCart className="icon1" />
//             <span className='name'>Cart</span>
//           </Link>
//         </li>
//         <li>
//           <Link to="/profile" className="nav-item">
//             {user && userDetails.photo ? (
//               <img
//                 src={`data:image/jpeg;base64,${userDetails.photo}`}
//                 alt="User Profile"
//                 className={`profile-photo ${imageLoaded ? 'loaded' : 'loading'}`}
//                 onLoad={handleImageLoad}
//                 onError={(e) => { e.target.src = '/images/1.jpg'; }}
//                 style={{ width: '40px', height: '40px', borderRadius: '50%' }}
//               />
//             ) : (
//               <CgProfile className="icon1" />
//             )}
//             <span className='name'>
//               {user ? `${userDetails.firstName} ${userDetails.lastName}` : 'Login'}
//             </span>
//           </Link>
//         </li>
//       </ul>
//     </nav>
//   );
// };

// export default Navbar;


import React, { useState, useEffect } from 'react';
import { Link, useNavigate, useLocation } from 'react-router-dom';
import './Navbar.css';
import { FaRegHeart } from 'react-icons/fa';
import { GrCart } from 'react-icons/gr';
import { CgProfile } from "react-icons/cg";
import { auth } from '../Login/firebaseConfig'; // Firebase config file
import { IoSearchOutline } from "react-icons/io5";

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [isLoading, setIsLoading] = useState(true);
  const [searchQuery, setSearchQuery] = useState('');
  const [suggestions, setSuggestions] = useState([]);
  const navigate = useNavigate();
  const location = useLocation();
  const [user, setUser] = useState(null);
  const [userDetails, setUserDetails] = useState({
    firstName: '',
    lastName: '',
    photo: ''
  });
  const [imageSrc, setImageSrc] = useState('');
  // const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    const unsubscribe = auth.onAuthStateChanged((currentUser) => {
      setUser(currentUser);
      if (currentUser) {
        fetchUserDetails(currentUser.uid);
      }
    });

    return () => {
      unsubscribe();
    };
  }, []);

  useEffect(() => {
    if (location.pathname === '/') {
      setSearchQuery('');
      setSuggestions([]);
    }
  }, [location]);

  const getImage = async (userId) => {
    try {
      const response = await fetch(`http://localhost:5000/api/getImageById/${userId}`);
      console.log('id:',userId)
      if (response.ok) {
        const blob = await response.blob(); // Get the image as a Blob
        const url = URL.createObjectURL(blob); // Create a URL for the Blob
        console.log('url',url);
        
        setImageSrc(url); // Set the image URL
      } else {
        console.error('Failed to fetch image');
      }
    } catch (error) {
      console.error('Failed to get Image:', error);
    }
  };

  // useEffect(() => {
  //   if (userId) {
  //     getImage(userId);
  //   }
  // C:\Users\LENOVO-V14 UFI\Desktop\UC\server\uploads\EVgfSqYwsqSBatJprJom9TBe6vC3.jpg
  // }, [userId]);

  const fetchUserDetails = async (userId) => {
    try {
      const response = await fetch(`http://localhost:5000/api/personal-details/${userId}`);
      getImage(userId)
      const data = await response.json();
      if (response.ok) {
        setUserDetails({
          firstName: data.firstName,
          lastName: data.lastName,
          photo: data.photo || ''
        });
      } else {
        console.error('Failed to fetch user details:', data);
      }
    } catch (error) {
      console.error('Failed to fetch user details:', error);
    }
  };

  const subcategories = {
"Bedroom Sets": "/combos/bedroomsets",
    "Living Sets": "/combos/livingsets",
    "Dining Sets": "/combos/diningsets",
    "Sofas": "/living/sofas",
    "Curtains": "/living/curtains",
    "Teapoy": "/living/teapoys",
    "Carpets": "/living/carpets",
    "Cots": "/bedrooms/cots",
    "Mattress": "/bedrooms/mattress",
    "Dressing Units": "/bedrooms/dressingunits",
    "Blankets": "/bedrooms/blankets",
    "Pillows": "/bedrooms/pillows",
    "Dining Tables": "/dining/tables",
    "Crockery units": "/dining/crockery-units",
    "Desks": "/study-office/desks",
    "Office Chairs": "/study-office/office-chairs",
    "Bookcases": "/study-office/bookcases",
    "Reception Counters": "/study-office/reception-counters",
    "Hydraulic Beds":"/bedrooms/hydraulicbeds",
    "Normal Sofas":"/living/normalsofas",
    "Recliner":"/living/recliner",
    "LShapedSofas":"/living/lshapedsofa",
    "King Beds with Storage":"/bedrooms/kingstorage",
    "King Beds without Storage":"/bedrooms/kingbeds",
    "Queen Beds with Storage":"/bedrooms/queenstorage",
    "Queen Beds without Storage":"/bedrooms/queenbeds"        
  };

  const handleSearchChange = (e) => {
    const query = e.target.value;
    setSearchQuery(query);

    if (query.trim() === '') {
      setSuggestions([]);
      return;
    }

    const matchedSubcategories = Object.keys(subcategories).filter(
      (subcategory) => subcategory.toLowerCase().includes(query.toLowerCase())
    );

    setSuggestions(matchedSubcategories);
  };

  const handleSearchSubmit = (e) => {
    e.preventDefault();
    setSuggestions([]);
    setSearchQuery('');

    if (searchQuery.trim() === '') {
      return;
    }

    if (suggestions.length > 0) {
      navigate(subcategories[suggestions[0]]);
    }
  };

  const handleSuggestionClick = (suggestion) => {
    navigate(subcategories[suggestion]);
    setSearchQuery('');
    setSuggestions([]);
  };

  return (
    <nav className="navbar">
      <div className="navbar-logo">
        <Link to="/"> <img src="/images/logo4.png" alt="MyApp Logo" /></Link>
      </div>

      <form className="search-form" onSubmit={handleSearchSubmit}>
        <div className="search-input-container">
          <input
            type="text"
            placeholder="What are you looking for?"
            value={searchQuery}
            onChange={handleSearchChange}
          />
          <button type="submit" className="search-button">
            <IoSearchOutline className='searchicon' />
          </button>
        </div>

        {suggestions.length > 0 && (
          <ul className="suggestions-list">
            {suggestions.map((suggestion) => (
              <li key={suggestion} onClick={() => handleSuggestionClick(suggestion)}>
                {suggestion}
              </li>
            ))}
          </ul>
        )}
      </form>

      <ul className={`navbar-links ${isOpen ? 'active' : ''}`}>
        <li>
          <Link to="/wishlist" className="nav-item">
            <FaRegHeart className="icon1" />
            <span className='name'>Wishlist</span>
          </Link>
        </li>
        <li>
          <Link to="/cart" className="nav-item">
            <GrCart className="icon1" />
            <span className='name'>Cart</span>
          </Link>
        </li>
        <li>
          <Link to="/profile" className="nav-item">
            {user && userDetails.photo ? (
            <img
            src={imageSrc || '/images/default.png'} // Display fetched image or fallback
            alt="User Profile"
            className="profile-photo"
            onLoad={() => setIsLoading(false)}
            onError={(e) => {
              e.target.src = '/images/default.png'; // Set fallback image on error
              setIsLoading(false);
            }}
            style={{
              width: '30px',
              height: '30px',
              borderRadius: '50%',
              display: isLoading ? 'none' : 'block', // Hide until loaded
            }}
            
          />
        
          
            ) : (
              <CgProfile className="icon1" />
            )}
            <span className='name'>
              {user ? `${userDetails.firstName} ${userDetails.lastName}` : 'Login'}
            </span>
          </Link>
        </li>
      </ul>
    </nav>
  );
};

export default Navbar;