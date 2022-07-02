import { axiosInstance } from "../config";
import { loginFailure, loginStart, loginSuccess } from "./authContext/AuthActions";

const UpdateAll = () => {
    UpdateBest();
    UpdateNewest();
    UpdateGolden();
}
const UpdateBest = () => {

    const updateBestCarousel = async () => {
        try {
            await axiosInstance.put(`api/carousels/rating`)
        } catch (err) {
            console.log(err);
        }
    };
    updateBestCarousel();
}

const UpdateNewest = () => {
    const updateNewestCarousel = async () => {
        try {
            await axiosInstance.put(`/api/carousels/newest`);
        } catch (err) {
            console.log(err);
        }
    };
    updateNewestCarousel();
}

const UpdateGolden = () => {
    const updateGoldenCarousel = async () => {
        try {
            await axiosInstance.put(`/api/carousels/golden`);
        } catch (err) {
            console.log(err);
        }
    };
    updateGoldenCarousel();
}

const updateByDirector = (director) => {

    const updateDirectorCarousel = async () => {
        try {
            await axiosInstance.put(`api/carousels/` + director)
        } catch (err) {
            console.log(err);
        }
    };
    updateDirectorCarousel();
}


const login = async (user, dispatch) => {
    dispatch(loginStart());
    try {
        const res = await axiosInstance.post("/api/auth/login", user);
        dispatch(loginSuccess(res.data));
    } catch (err) {
        dispatch(loginFailure());
    }
}


export {
    UpdateAll,
    updateByDirector,
    login
}