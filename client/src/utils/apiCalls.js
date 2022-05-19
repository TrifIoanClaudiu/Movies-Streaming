import axios from "axios";
import { loginFailure, loginStart, loginSuccess } from "./authContext/AuthActions";

const UpdateAll = () => {
    UpdateBest();
    UpdateNewest();
    UpdateGolden();
}
const UpdateBest = () => {

    const updateBestCarousel = async () => {
        try {
            const res = await axios.put(`http://localhost:4000/api/carousels/rating`)
        } catch (err) {
            console.log(err);
        }
    };
    updateBestCarousel();
}

const updateByDirector = (director) =>{
    
    const updateDirectorCarousel = async () => {
        try {
            const res = await axios.put(`http://localhost:4000/api/carousels/` + director)
        } catch (err) {
            console.log(err);
        }
    };
    updateDirectorCarousel();
}

const UpdateNewest = () => {
        const updateNewestCarousel = async () => {
            try {
                const res = await axios.put(`http://localhost:4000/api/carousels/newest`);
            } catch (err) {
                console.log(err);
            }
        };
        updateNewestCarousel();
}

const UpdateGolden = () => {
    const updateGoldenCarousel = async () =>{
        try {
            const res = await axios.put(`http://localhost:4000/api/carousels/golden`);
        } catch (err) {
            console.log(err);
        }
    };
    updateGoldenCarousel();
}

const login = async (user, dispatch) =>{
    dispatch(loginStart());
    try{
        const res = await axios.post("http://localhost:4000/api/auth/login", user);
        dispatch(loginSuccess(res.data));
    }catch(err){
        dispatch(loginFailure());
    }
}


export {
    UpdateAll,
    updateByDirector,
    login
}