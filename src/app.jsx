import React, { useState } from "react";
import people from "./data";
import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation, Autoplay, Scrollbar, A11y, Pagination } from "swiper";
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";
const App = () => {
    // const [human, setHuman] = useState(people);
    // const [value, setValue] = useState(0);
    //    console.log(human);
    //   const {id, image, name, quote, title} = human[value];
    //   console.log(name);
    return (
        <div>
            <div className="text-center mt-10 md:text-3xl text-xl duration-500 font-bold">
                Sliders
            </div>
            <div className="h-1 md:w-32 w-24 duration-500 bg-white mx-auto"></div>
            <div className="h-96 md:w-[36rem] w-80 bg-white mx-auto my-4 rounded-md shadow-md flex">
                <Swiper
                    modules={[Navigation, Autoplay, Pagination]}
                    navigation={true}
                    pagination={{ clickable: true }}
                    a11y
                    loop
                    autoplay
                    speed={900}
                >
                    {people.map((person, index) => {
                        return (
                            <SwiperSlide key={person.id}>
                                <div className="text-center p-6 w-[80%] mx-auto">
                                    <img
                                        src={person.image}
                                        alt={person.name}
                                        className={
                                            "md:h-32 md:w-32 w-20 h-20 duration-500 mx-auto object-cover rounded-full"
                                        }
                                    />
                                    <div>
                                        <h2
                                            className={"mt-2 font-bold text-lg"}
                                        >
                                            {person.name}
                                        </h2>
                                        <h3>{person.title}</h3>
                                        <p>{person.quote}</p>
                                    </div>
                                </div>
                            </SwiperSlide>
                        );
                    })}
                </Swiper>
            </div>
        </div>
    );
};

export default App;
