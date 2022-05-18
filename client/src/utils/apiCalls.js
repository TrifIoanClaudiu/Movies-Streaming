import axios from "axios";

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
export {
    UpdateAll,
}