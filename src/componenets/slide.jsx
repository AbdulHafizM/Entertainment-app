import { Scrollbar, A11y } from 'swiper';
import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';
import 'swiper/css/scrollbar';
import MovieCard from './movie-card';
import './section.scss'

const SlideWrapper = ({movies}) => {
    return(
        <div className='container-slide'>
            <Swiper
            // install Swiper modules
            breakpoints={{
                248:{
                    slidesPerView: 1.2
                },
                265:{
                    slidesPerView : 1.4
                },
                297:{
                    slidesPerView: 1.6
                },
                341: {
                    slidesPerView: 1.65
                },
                500:{
                    slidesPerView: 2
                },
                652: {
                    slidesPerView: 2.1
                },
                801: {
                    slidesPerView : 2.4
                },
                955: {
                    slidesPerView: 2.8
                },  
                1026:{
                    
                    slidesPerView: 3
                }
              }}
                modules={[Scrollbar, A11y]}
                spaceBetween={20}
                slidesPerView={3}
                scrollbar={{ draggable: true }}
                
            >
            {
                movies.map((movie) =>(
                    <SwiperSlide key={movie.id}><MovieCard key={movie.id} movie={movie} /></SwiperSlide>
                ))
            }
            
            </Swiper>
        </div>
    )
}

export default SlideWrapper