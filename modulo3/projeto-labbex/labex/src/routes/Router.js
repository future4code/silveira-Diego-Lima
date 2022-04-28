import { BrowserRouter, Routes, Route } from "react-router-dom";
import {AdminHomePage} from "../pages/AdminHomePage/AdminHomePage"
import {HomePage} from "../pages/HomePage/HomePage"
import { LoginPage } from "../pages/LoginPage/LoginPage";
import {ListTripsPage} from "../pages/ListTripsPage/ListTripsPage"
import { ApplicationFormPage } from "../pages/ApplicationFormPage/ApplicationFormPage";
import {TripDetails} from "../pages/TripDetails/TripDetails"
import { CreateTripPage } from "../pages/CreateTripPage/CreateTripPage";

export const Router = () => {

    return (
        <BrowserRouter>
            <Routes>
                <Route index element={<HomePage />} />
                <Route path="admin" element={<AdminHomePage />} />
                <Route path="login" element={<LoginPage />} />
                <Route path="listtrips" element={<ListTripsPage />} />
                <Route path="application" element={<ApplicationFormPage/>} />
                <Route path="createtrip" element={<CreateTripPage/>} />
                <Route path="trip" element = {<TripDetails/>}/>



            </Routes>
        </BrowserRouter>

    )

}