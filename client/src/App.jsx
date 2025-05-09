import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Home from './assets/pages/Home';
import SignIn from './assets/pages/SignIn';
import SignUp from './assets/pages/SignUp';
import About from './assets/pages/About';
import Profile from './assets/pages/Profile';
import Header from './components/Header';
import PrivateRoute from './components/PrivateRoute';
import CreateListing from './assets/pages/CreateListing';
import UpdateListing from './assets/pages/UpdateListing';
import Listing from './assets/pages/Listing';
import Search from './assets/pages/Search';

export default function App() {
    return (
            <BrowserRouter>
                <Header />
                <Routes>
                    <Route path="/" element={<Home />} />
                    <Route path="/sign-in" element={<SignIn />} />
                    <Route path="/sign-up" element={<SignUp />} />
                    <Route path="/about" element={<About />} />
                    <Route path="/search" element={<Search />} />
                    <Route path="/listing/:listingId" element={<Listing />} />

                    <Route element={<PrivateRoute />}>
                        <Route path="/profile" element={<Profile />} />
                        <Route path="/create-listing" element={<CreateListing />} />
                        <Route path='/update-listing/:listingId' element={<UpdateListing />}></Route>

                    </Route>
                </Routes>
            </BrowserRouter>
    );
}
