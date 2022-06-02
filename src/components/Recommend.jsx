import React, { useState } from "react";
import styled from "styled-components";
import event1 from "../assets/event1.jpg";
import event2 from "../assets/event2.jpg";
import event3 from "../assets/event3.jpg";
import event4 from "../assets/event4.jpg";
import event5 from "../assets/event5.jpg";
import event6 from "../assets/event6.jpg";
import event7 from "../assets/event7.jpg";
import event8 from "../assets/event8.jpg";
import event9 from "../assets/event9.jpg";
import event10 from "../assets/event10.jpg";
import event11 from "../assets/event11.jpg";
import event12 from "../assets/event12.jpg";
/*import info1 from "../assets/info1.png";
import info2 from "../assets/info2.png";
import info3 from "../assets/info3.png";
import info5 from "../assets/info5.png";*/


export default function Recommend() {
  const data = [
    {
      image: event1,
      title: "Hassan El Fad - Who Is Kabour à Tétouan",
      subTitle: "Tétouan, Teatro Cinema Español ",
      cost: "200 MAD",
      
    },
    {
      image: event2,
      title: "Soirée Masquée",
      subTitle: "Casablanca , FENCE",
      cost: "250 MAD",
      
    },
    {
      image: event3,
      title: "Marrakech du Rire 2022 - Humouraji",
      subTitle: "Marrakech, PALAIS BADII",
      cost: "200 MAD",
      
    },
    {
      image: event4,
      title: "MALUMA World Tour - MARRAKECH",
      subTitle: "Grand Stade de Marrakech",
      cost: "180 MAD",
      
    },
    {
      image: event5,
      title: "STAGE DE FOOTBALL POUR ENFANTS DE 4 A 18 ANS",
      subTitle: "Bouskoura, LA JUVENTUS ACADEMY",
      cost: "390 MAD",
      
    },
    {
      image: event6,
      title: "FESTIVAL IL NUOVO CINEMA ITALIANO DI RAI CINEMA ",
      subTitle: "266 Ave Mohammed V, Rabat 10010 ",
      cost: "150 MAD",
      
    },
    {
      image: event7,
      title: "YOGA & AEROBIC",
      subTitle: "Mohammedia, la piscine du complexe Boca Cinco ",
      cost: "50 MAD",
      
    },
    {
      image: event8,
      title: "Rachid Rafik - Lhmimik",
      subTitle: "Centre culturel Ahmed Boukmakh ",
      cost: "200 MAD",
      
    },
    {
      image: event9,
      title: "SOUFI, MON AMOUR ",
      subTitle: "Agadir, Hôtel Allegro",
      cost: "100 MAD",
      
    },
    {
      image: event10,
      title: "Kabareh Cheikhats ",
      subTitle: "Rabat,Théâtre Bahnini ",
      cost: "100 MAD",
      
    },
    {
      image: event11,
      title: "Green Challenge Tghazout Bay",
      subTitle: "Taghazout Bay ",
      cost: "300 MAD",
      
    },
    {
      image: event12,
      title: "Gnaoua Tour 2022",
      subTitle: "ESSAOUIRA, Place Moulay Hassan ",
      cost: "400 MAD",
      
    },
  ];

    const packages = [
    
    ];

  const [active, setActive] = useState(1);
  return (
    <Section id="recommend">
      <div className="title">
        <h2>Nos Recommandations :</h2>
      </div>
      <div className="packages">
        <ul>
          {packages.map((pkg, index) => {
            return (
              <li
                className={active === index + 1 ? "active" : ""}
                onClick={() => setActive(index + 1)}
              >
                {pkg}
              </li>
            );
          })}
        </ul>
      </div>
      <div className="destinations">
        {data.map((destination) => {
          return (
            <div className="destination">
              <img src={destination.image} alt="" />
              <h3>{destination.title}</h3>
              <p>{destination.subTitle}</p>
              <div className="info">
                
                <h4>{destination.cost}</h4>
              </div>
              
            </div>
          );
        })}
      </div>
    </Section>
  );
}

const Section = styled.section`
  padding: 2rem 0;
  .title {
    text-align: center;
  }
  .packages {
    display: flex;
    justify-content: center;
    margin: 2rem 0;
    ul {
      display: flex;
      list-style-type: none;
      width: max-content;
      li {
        padding: 1rem 2rem;
        border-bottom: 0.1rem solid black;
      }
      .active {
        border-bottom: 0.5rem solid #8338ec;
      }
    }
  }
  .destinations {
    display: grid;
    grid-template-columns: repeat(3, 1fr);
    gap: 3rem;
    padding: 0 3rem;
    .destination {
      padding: 1rem;
      display: flex;
      flex-direction: column;
      gap: 0.5rem;
      background-color: #8338ec14;
      border-radius: 1rem;
      transition: 0.3s ease-in-out;
      &:hover {
        transform: translateX(0.4rem) translateY(-1rem);
        box-shadow: rgba(0, 0, 0, 0.35) 0px 5px 15px;
      }
      img {
        width: 100%;
      }
      .info {
        display: flex;
        align-items: center;
        .services {
          display: flex;
          gap: 0.3rem;
          img {
            border-radius: 1rem;
            background-color: #4d2ddb84;
            width: 2rem;
            /* padding: 1rem; */
            padding: 0.3rem 0.4rem;
          }
        }
        display: flex;
        justify-content: space-between;
      }
      .distance {
        display: flex;
        justify-content: space-between;
      }
    }
  }
  @media screen and (min-width: 280px) and (max-width: 768px) {
    .packages {
      ul {
        li {
          padding: 0 0.5rem;
          font-size: 2vh;
          padding-bottom: 1rem;
        }
        .active {
          border-bottom-width: 0.3rem;
        }
      }
    }
    .destinations {
      grid-template-columns: 1fr;
      padding: 0;
    }
  }
`;
