import React from 'react';
import { useState, useEffect } from 'react';
import { api } from '../../services/api';

import { Container, Banner, Section, Content } from './styles';
import { Header } from '../../components/Header';
import { Footer } from '../../components/Footer';
import { Card } from '../../components/Card';

import HomeImage from '../../assets/home_image.png';

import { Navigation } from 'swiper';
import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css';
import 'swiper/css/navigation';

export function Home() {
  const [plates, setPlates] = useState([]);
  const [search, setSearch] = useState('');

  useEffect(() => {
    async function fetchPlates() {
      const response = await api.get(`/plates?title=${search}`);
      setPlates(response.data);
    }
    fetchPlates();
  }, [search]);
  return (
    <Container>
      <Header search={setSearch} />

      <Content>
        <Banner>
          <img src={HomeImage} alt="Imagem de ingredientes" />

          <div className="banner">
            <div className="title">
              <h1>Sabores inigualáveis</h1>
              <span>
                Sinta o cuidado do preparo com ingredientes selecionados
              </span>
            </div>
          </div>
        </Banner>

        <div className="cards">
          <p>Pratos principais</p>

          {plates.filter((dish) => dish.category == 'dishes').length > 0 && (
            <Swiper
              grabCursor={true}
              loop={true}
              loopFillGroupWithBlank={true}
              breakpoints={{
                '@0.00': {
                  slidesPerView: 1,
                  spaceBetween: 10
                },
                '@0.75': {
                  slidesPerView: 2,
                  spaceBetween: 20
                },
                '@1.00': {
                  slidesPerView: 3,
                  spaceBetween: 40
                },
                '@1.20': {
                  slidesPerView: 4,
                  spaceBetween: 100
                }
              }}
              navigation={true}
              modules={[Navigation]}
              className="mySwiper"
            >
              {plates
                .filter((dish) => dish.category == 'dishes')
                .map((item, index) => (
                  <SwiperSlide key={String(index)}>
                    <Card data={item} />
                  </SwiperSlide>
                ))}
            </Swiper>
          )}

          <p>Sobremesas</p>

          {plates.filter((dish) => dish.category == 'dessert').length > 0 && (
            <Swiper
              grabCursor={true}
              loop={true}
              loopFillGroupWithBlank={true}
              breakpoints={{
                '@0.00': {
                  slidesPerView: 1,
                  spaceBetween: 10
                },
                '@0.75': {
                  slidesPerView: 2,
                  spaceBetween: 20
                },
                '@1.00': {
                  slidesPerView: 3,
                  spaceBetween: 40
                },
                '@1.20': {
                  slidesPerView: 4,
                  spaceBetween: 100
                }
              }}
              navigation={true}
              modules={[Navigation]}
              className="mySwiper"
            >
              {plates
                .filter((dish) => dish.category == 'dessert')
                .map((dish) => (
                  <SwiperSlide key={String(dish.id)}>
                    <Card data={dish} />
                  </SwiperSlide>
                ))}
            </Swiper>
          )}

          <p>Bebidas</p>

          {plates.filter((dish) => dish.category == 'drinks').length > 0 && (
            <Swiper
              grabCursor={true}
              loop={true}
              loopFillGroupWithBlank={true}
              breakpoints={{
                '@0.00': {
                  slidesPerView: 1,
                  spaceBetween: 10
                },
                '@0.75': {
                  slidesPerView: 2,
                  spaceBetween: 20
                },
                '@1.00': {
                  slidesPerView: 3,
                  spaceBetween: 40
                },
                '@1.20': {
                  slidesPerView: 4,
                  spaceBetween: 100
                }
              }}
              navigation={true}
              modules={[Navigation]}
              className="mySwiper"
            >
              {plates
                .filter((dish) => dish.category == 'drinks')
                .map((dish) => (
                  <SwiperSlide key={String(dish.id)}>
                    <Card data={dish} />
                  </SwiperSlide>
                ))}
            </Swiper>
          )}
        </div>
      </Content>
      <Footer />
    </Container>
  );
}
