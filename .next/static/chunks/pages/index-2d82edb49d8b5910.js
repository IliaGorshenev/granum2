(self.webpackChunk_N_E = self.webpackChunk_N_E || []).push([
  [405],
  {
    8312: function (e, t, i) {
      (window.__NEXT_P = window.__NEXT_P || []).push([
        '/',
        function () {
          return i(7737);
        },
      ]);
    },
    7737: function (e, t, i) {
      'use strict';
      i.r(t),
        i.d(t, {
          __N_SSG: function () {
            return tA;
          },
          default: function () {
            return tL;
          },
        });
      var r = i(5893),
        o = i(9008),
        a = i.n(o),
        n = i(7294),
        s = i(1686);
      let d = (0, s.F4)`
  from {
    opacity: 0;
    transform: translateY(20px);
  }
  to {
    opacity: 1;
    transform: translateY(0);
  }
`,
        l = (0, s.F4)`
  0% {
    background-position: -200% 0;
  }
  100% {
    background-position: 200% 0;
  }
`,
        c = s.ZP.section`
  padding: 4rem 1.5rem;
  max-width: 1200px;
  margin: 0 auto;
  animation: ${d} 0.8s ease-out forwards;
`,
        p = s.ZP.h2`
  font-size: 3rem;
  text-align: center;
  margin-bottom: 3rem;
  position: relative;
  color: #333;
  font-weight: 700;

  &:after {
    content: '';
    position: absolute;
    bottom: -15px;
    left: 50%;
    transform: translateX(-50%);
    width: 80px;
    height: 4px;
    background: linear-gradient(90deg, #3b7a57, #6a994e);
    border-radius: 2px;
  }
`,
        x = s.ZP.div`
  border: none;
  border-radius: 12px;
  margin-bottom: 1.5rem;
  overflow: hidden;
  box-shadow: 0 4px 20px rgba(0, 0, 0, 0.08);
  transition: all 0.3s ease;
  background-color: white;

  &:hover {
    box-shadow: 0 8px 30px rgba(0, 0, 0, 0.12);
    transform: translateY(-3px);
  }
`,
        m = s.ZP.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 1.2rem 1.5rem;
  background: white;
  cursor: pointer;
  border-left: 4px solid #3b7a57;
  transition: all 0.3s ease;
  position: relative;

  &:after {
    content: '';
    position: absolute;
    bottom: 0;
    left: 0;
    right: 0;
    height: 1px;
    background: linear-gradient(90deg, #3b7a57, transparent);
    opacity: 0.2;
  }

  h3 {
    margin: 0;
    font-size: 1.3rem;
    font-weight: 600;
    color: #2d3748;
    transition: color 0.3s ease;
  }

  &:hover {
    background-color: #f9f9f9;

    h3 {
      color: #3b7a57;
    }
  }
`,
        h = s.ZP.div`
  width: 28px;
  height: 28px;
  border-radius: 50%;
  background-color: ${(e) => (e.isOpen ? '#3b7a57' : '#f0f0f0')};
  display: flex;
  align-items: center;
  justify-content: center;
  position: relative;
  transition: all 0.3s ease;
  box-shadow: 0 2px 8px rgba(0, 0, 0, 0.1);

  &:hover {
    background-color: ${(e) => (e.isOpen ? '#346c4d' : '#e0e0e0')};
    transform: scale(1.05);
  }

  .icon-line {
    position: absolute;
    background-color: ${(e) => (e.isOpen ? 'white' : '#333')};
    border-radius: 2px;
    transition: all 0.3s ease;
  }

  .horizontal {
    width: 14px;
    height: 2px;
  }

  .vertical {
    width: 2px;
    height: 14px;
    transform: ${(e) => (e.isOpen ? 'scaleY(0)' : 'scaleY(1)')};
  }
`,
        g = s.ZP.div`
  padding: ${(e) => (e.isOpen ? '1.8rem 1.8rem' : '0 1.8rem')};
  max-height: ${(e) => (e.isOpen ? '2000px' : '0')};
  opacity: ${(e) => (e.isOpen ? 1 : 0)};
  overflow: hidden;
  transition: all 0.5s cubic-bezier(0.4, 0, 0.2, 1);
  line-height: 1.7;
  color: #4a5568;
  background-color: white;

  p {
    margin-bottom: 1.2rem;
    font-size: 1.05rem;
  }

  ul {
    padding-left: 1.5rem;
    margin-bottom: 1.2rem;

    li {
      margin-bottom: 0.7rem;
      position: relative;

      &::before {
        content: '•';
        color: #3b7a57;
        font-weight: bold;
        display: inline-block;
        width: 1em;
        margin-left: -1em;
      }
    }
  }

  strong {
    color: #2d3748;
    font-weight: 600;
  }
`,
        f = s.ZP.div`
  margin: 2rem 0;
  text-align: center;
  border-radius: 12px;
  overflow: hidden;
  box-shadow: 0 10px 30px rgba(0, 0, 0, 0.15);
  position: relative;
`,
        b = s.ZP.img`
  max-width: 100%;
  height: auto;
  display: block;
  transition: transform 0.5s ease;

  ${f}:hover & {
    transform: scale(1.03);
  }
`;
      s.ZP.p`
  font-style: italic;
  text-align: center;
  padding: 1rem;
  margin: 0;
  color: #4a5568;
  background-color: rgba(255, 255, 255, 0.9);
  position: absolute;
  bottom: 0;
  left: 0;
  right: 0;
  backdrop-filter: blur(5px);
  border-top: 1px solid rgba(0, 0, 0, 0.05);
`;
      let u = s.ZP.div`
  display: flex;
  flex-direction: column;
  margin-bottom: 4rem;
  background: linear-gradient(to right, #f8f9fa, #ffffff);
  border-radius: 16px;
  overflow: hidden;
  box-shadow: 0 15px 35px rgba(0, 0, 0, 0.1);

  @media (min-width: 768px) {
    flex-direction: row;
    align-items: stretch;
  }
`;
      s.ZP.div`
  flex: 1;
  position: relative;
  overflow: hidden;

  &::after {
    content: '';
    position: absolute;
    top: 0;
    left: 0;
    right: 0;
    bottom: 0;
    background: linear-gradient(to right, rgba(0, 0, 0, 0.4), rgba(0, 0, 0, 0));

    @media (min-width: 768px) {
      background: linear-gradient(to right, rgba(0, 0, 0, 0.4), rgba(0, 0, 0, 0));
    }
  }

  img {
    width: 100%;
    height: 100%;
    object-fit: cover;
    display: block;
    transition: transform 0.7s ease;

    ${u}:hover & {
      transform: scale(1.05);
    }
  }

  @media (max-width: 767px) {
    height: 300px;
  }
`,
        s.ZP.div`
  flex: 1;
  padding: 2.5rem;
  display: flex;
  flex-direction: column;
  justify-content: center;

  h3 {
    font-size: 2rem;
    margin-bottom: 1.5rem;
    color: #2d3748;
    position: relative;
    padding-bottom: 0.8rem;

    &::after {
      content: '';
      position: absolute;
      bottom: 0;
      left: 0;
      width: 60px;
      height: 3px;
      background: linear-gradient(90deg, #3b7a57, #6a994e);
      border-radius: 1.5px;
    }
  }

  p {
    font-size: 1.1rem;
    line-height: 1.8;
    margin-bottom: 1.2rem;
    color: #4a5568;
  }

  p:last-child {
    margin-bottom: 0;
  }
`;
      let w = s.ZP.div`
  margin-top: 2rem;
`,
        j = s.ZP.span`
  background: linear-gradient(120deg, rgba(59, 122, 87, 0.2) 0%, rgba(106, 153, 78, 0.2) 100%);
  padding: 0.2em 0.1em;
  border-radius: 3px;
  font-weight: 500;
`,
        v = s.ZP.div`
  position: absolute;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  opacity: 0.03;
  background-image: url('/images/stone-texture.jpg');
  background-size: cover;
  pointer-events: none;
  z-index: -1;
`,
        y = s.ZP.div`
  height: 2px;
  width: 100%;
  margin: 3rem 0;
  background: linear-gradient(90deg, transparent, rgba(59, 122, 87, 0.2), rgba(106, 153, 78, 0.2), rgba(59, 122, 87, 0.2), transparent);
  background-size: 200% 100%;
  animation: ${l} 3s infinite linear;
`;
      s.ZP.div`
  background: white;
  border-radius: 10px;
  padding: 1.5rem;
  margin-bottom: 1rem;
  box-shadow: 0 4px 12px rgba(0, 0, 0, 0.08);
  transition: all 0.3s ease;
  border-left: 3px solid #3b7a57;

  &:hover {
    transform: translateX(5px);
    box-shadow: 0 6px 16px rgba(0, 0, 0, 0.12);
  }
`;
      let k = s.ZP.div`
  display: flex;
  align-items: center;
  justify-content: center;
  margin: 3rem auto;
  max-width: 500px;

  .years-number {
    font-size: 5rem;
    font-weight: 700;
    color: #3b7a57;
    line-height: 1;
    margin-right: 1.5rem;
    position: relative;

    &::after {
      content: '+';
      position: absolute;
      top: 0;
      right: -20px;
      font-size: 2.5rem;
      color: #6a994e;
    }
  }

  .years-text {
    font-size: 1.2rem;
    line-height: 1.5;
    color: #4a5568;
  }
`,
        z = s.ZP.ul`
  list-style-type: none;
  padding: 0;
  margin: 0;

  li {
    margin-bottom: 1.5rem;
    padding-left: 1.5rem;
    position: relative;

    &:before {
      content: '•';
      color: #3b7a57; /* Use your theme color */
      font-size: 1.5rem;
      position: absolute;
      left: 0;
      top: -0.2rem;
    }

    strong {
      display: block;
      font-size: 1.1rem;
      margin-bottom: 0.5rem;
      color: #2d3748;
    }

    p {
      margin: 0;
      color: #4a5568;
      line-height: 1.5;
    }
  }
`,
        P = (e) => {
          let { title: t, children: i, isOpen: o, onClick: a } = e;
          return (0, r.jsxs)(x, {
            children: [
              (0, r.jsxs)(m, {
                onClick: a,
                children: [
                  (0, r.jsx)('h3', { children: t }),
                  (0, r.jsxs)(h, {
                    isOpen: o,
                    children: [(0, r.jsx)('span', { className: 'icon-line horizontal' }), (0, r.jsx)('span', { className: 'icon-line vertical' })],
                  }),
                ],
              }),
              (0, r.jsx)(g, { isOpen: o, children: i }),
            ],
          });
        };
      var D = () => {
        let [e, t] = (0, n.useState)(null),
          i = (i) => {
            t(e === i ? null : i);
          };
        return (0, r.jsxs)(c, {
          id: 'about',
          children: [
            (0, r.jsx)(v, {}),
            (0, r.jsx)(p, { children: 'О компании' }),
            ' ',
            (0, r.jsxs)(k, {
              children: [
                (0, r.jsx)('div', { className: 'years-number', children: '10' }),
                (0, r.jsx)('div', { className: 'years-text', children: 'лет опыта в обработке натурального камня и создании уникальных изделий' }),
              ],
            }),
            (0, r.jsx)(y, {}),
            (0, r.jsxs)(w, {
              children: [
                (0, r.jsxs)(P, {
                  title: 'Наша история',
                  isOpen: 0 === e,
                  onClick: () => i(0),
                  children: [
                    (0, r.jsxs)('p', {
                      children: [
                        'Компания ',
                        (0, r.jsx)(j, { children: '"Гранум"' }),
                        ' и ее команда профессионалов имеет многолетний опыт работы в камнеобрабатывающей отрасли. За годы работы мы выросли из небольшой мастерской в современное производство, оснащенное передовым оборудованием.',
                      ],
                    }),
                    (0, r.jsx)(f, {
                      children: (0, r.jsx)(b, { src: 'https://granum-stone.s3.regru.cloud/uploads/1746124324853-DSC02321.jpg', alt: 'Оборудование компании Гранум' }),
                    }),
                  ],
                }),
                (0, r.jsxs)(P, {
                  title: 'Наше производство',
                  isOpen: 1 === e,
                  onClick: () => i(1),
                  children: [
                    (0, r.jsx)('p', { children: 'У нас есть собственный цех с современным оборудованием. Мы делаем всё сами: от распила камня до финальной полировки.' }),
                    (0, r.jsx)(f, {
                      children: (0, r.jsx)(b, { src: 'https://granum-stone.s3.regru.cloud/uploads/1746123736646-DSC02266.jpg', alt: 'Оборудование компании Гранум' }),
                    }),
                    (0, r.jsx)('p', { children: 'В нашем цехе есть:' }),
                    (0, r.jsxs)('ul', {
                      children: [
                        (0, r.jsx)('li', { children: 'Станки для распила камня' }),
                        (0, r.jsx)('li', { children: 'Линия для шлифовки и полировки' }),
                        (0, r.jsx)('li', { children: 'Канатная машина для фигурной резки' }),
                        (0, r.jsx)('li', { children: 'Участок для термообработки камня' }),
                      ],
                    }),
                  ],
                }),
                (0, r.jsxs)(P, {
                  title: 'Наши материалы',
                  isOpen: 2 === e,
                  onClick: () => i(2),
                  children: [
                    (0, r.jsx)('p', {
                      children:
                        'Мы работаем с различными видами натурального камня, преимущественно с гранитом из разных месторождений России и ближнего зарубежья. Примеры гранита, с которым мы работаем:',
                    }),
                    (0, r.jsxs)('ul', {
                      children: [
                        (0, r.jsxs)('li', { children: [(0, r.jsx)(j, { children: 'Гранит Южно-Султаевский' }), ' (Челябинская область)'] }),
                        (0, r.jsxs)('li', { children: [(0, r.jsx)(j, { children: 'Гранит Мансуровский' }), ' (республика Башкортостан)'] }),
                        (0, r.jsxs)('li', { children: [(0, r.jsx)(j, { children: 'Гранит Камбулатовский' }), ' (Челябинская область)'] }),
                        (0, r.jsxs)('li', { children: [(0, r.jsx)(j, { children: 'Гранит Томирис II (Куртинский)' }), ' (Алматинская область)'] }),
                        (0, r.jsxs)('li', { children: [(0, r.jsx)(j, { children: 'Гранит Жельтау-2' }), ' (Жамбыльская область)'] }),
                        (0, r.jsxs)('li', { children: [(0, r.jsx)(j, { children: 'Гранит Авангард' }), ' (Урал, Челябинская область)'] }),
                        (0, r.jsxs)('li', { children: [(0, r.jsx)(j, { children: 'Гранит Исетский' }), ' (возможно изготовление)'] }),
                        (0, r.jsxs)('li', { children: [(0, r.jsx)(j, { children: 'Гранит Габбро Другорецкого' }), ' (возможно изготовление)'] }),
                      ],
                    }),
                    (0, r.jsx)('p', { children: 'Весь камень проходит проверку качества и радиационную безопасность.' }),
                  ],
                }),
                (0, r.jsxs)(P, {
                  title: 'Наши проекты',
                  isOpen: 3 === e,
                  onClick: () => i(3),
                  children: [
                    (0, r.jsxs)('p', {
                      children: [
                        'За 10+ лет компания ',
                        (0, r.jsx)(j, { children: '"Гранум"' }),
                        ' сделала сотни проектов — от домашних интерьеров до больших общественных зданий.',
                      ],
                    }),
                    (0, r.jsx)(f, {
                      children: (0, r.jsx)(b, { src: 'https://granum-stone.s3.regru.cloud/uploads/1746123747543-DSC02338.jpg', alt: 'Проект компании Гранум' }),
                    }),
                    (0, r.jsx)('p', {
                      children: 'Каждый проект особенный и учитывает пожелания заказчика. Многие клиенты возвращаются к нам снова и советуют нас друзьям.',
                    }),
                    (0, r.jsx)('p', { children: 'Мы беремся за любые задачи — от простых столешниц до сложных фасадов и интерьеров.' }),
                  ],
                }),
                (0, r.jsx)(P, {
                  title: 'Наши преимущества',
                  isOpen: 4 === e,
                  onClick: () => i(4),
                  children: (0, r.jsxs)(z, {
                    children: [
                      (0, r.jsxs)('li', {
                        children: [
                          (0, r.jsx)('strong', { children: 'Своё производство' }),
                          (0, r.jsx)('p', { children: 'Контролируем качество на всех этапах — от выбора камня до готового изделия.' }),
                        ],
                      }),
                      (0, r.jsxs)('li', {
                        children: [
                          (0, r.jsx)('strong', { children: 'Опытные мастера' }),
                          (0, r.jsx)('p', { children: 'Наши специалисты знают и любят камень, имеют большой опыт работы.' }),
                        ],
                      }),
                      (0, r.jsxs)('li', {
                        children: [
                          (0, r.jsx)('strong', { children: 'Индивидуальный подход' }),
                          (0, r.jsx)('p', { children: 'Создаём решения под ваши задачи, учитывая все пожелания.' }),
                        ],
                      }),
                      (0, r.jsxs)('li', {
                        children: [
                          (0, r.jsx)('strong', { children: 'Сопровождение проекта' }),
                          (0, r.jsx)('p', { children: 'Помогаем на всех этапах: от консультации и выбора материала до замеров, изготовления и монтажа.' }),
                        ],
                      }),
                      (0, r.jsxs)('li', {
                        children: [(0, r.jsx)('strong', { children: 'Гарантия качества' }), (0, r.jsx)('p', { children: 'Даём гарантию на все наши работы.' })],
                      }),
                      (0, r.jsxs)('li', {
                        children: [
                          (0, r.jsx)('strong', { children: 'Хорошие цены' }),
                          (0, r.jsx)('p', { children: 'Работаем без посредников, поэтому цены ниже при высоком качестве.' }),
                        ],
                      }),
                    ],
                  }),
                }),
              ],
            }),
            (0, r.jsx)(y, {}),
          ],
        });
      };
      let Z = s.ZP.div`
  display: flex;
  justify-content: center;
  align-items: center;
  height: 100vh;
`,
        B = s.ZP.div`
  width: 50px;
  height: 50px;
  border: 5px solid #ffffff;
  border-top: 5px solid #000000;
  border-radius: 50%;
  animation: spin 1s linear infinite;

  @keyframes spin {
    0% { transform: rotate(0deg); }
    100% { transform: rotate(360deg); }
  }
`,
        S = s.ZP.p`
  margin-left: 20px;
  font-size: 1.2rem;
  color: #000000;
  font-weight: 600;
  animation: pulse 1.5s ease-in-out infinite;

  @keyframes pulse {
    0%, 100% { opacity: 1; }
    50% { opacity: 0.5; }
  }
`;
      var C = (e) => {
        let { text: t = 'Loading...' } = e;
        return (0, r.jsxs)(Z, { children: [(0, r.jsx)(B, {}), (0, r.jsx)(S, { children: t })] });
      };
      let E = s.ZP.div`
  max-width: 1400px;
  box-sizing: border-box;
  width: 100%;
  margin: 0 auto;
  padding: 2rem;
  font-family: 'Segoe UI', Tahoma, Geneva, Verdana, sans-serif;
  background-color: #f9f9f9;
  border-radius: 20px;
  box-shadow: 0 5px 25px rgba(0, 0, 0, 0.03);
  margin-top: 2.5rem;
  margin-bottom: 2.5rem;

  @media (max-width: 768px) {
    padding: 1.5rem;
    border-radius: 15px;
  }

  @media (max-width: 480px) {
    padding: 1rem;
    margin-top: 1.5rem;
    margin-bottom: 1.5rem;
    border-radius: 10px;
  }
`,
        $ = s.ZP.h2`
  font-size: 2.8rem;
  text-align: center;
  margin-bottom: 3.5rem;
  color: #2d3748;
  position: relative;
  font-weight: 600;
  width: 100%;
  letter-spacing: -0.5px;

  &:after {
    content: '';
    position: absolute;
    bottom: -15px;
    left: 50%;
    transform: translateX(-50%);
    width: 100px;
    height: 4px;
    background: linear-gradient(90deg, #3b7a57, #6b8e23);
    border-radius: 4px;
  }

  @media (max-width: 768px) {
    font-size: 2.2rem;
    margin-bottom: 2.5rem;
  }

  @media (max-width: 480px) {
    font-size: 1.8rem;
    margin-bottom: 2rem;
  }
`,
        Y = s.ZP.div`
  display: grid;
  grid-template-columns: repeat(auto-fill, minmax(320px, 1fr));
  gap: 2.8rem;

  @media (max-width: 768px) {
    grid-template-columns: repeat(auto-fill, minmax(280px, 1fr));
    gap: 2rem;
  }

  @media (max-width: 480px) {
    grid-template-columns: 1fr;
    gap: 1.5rem;
  }
`,
        A = s.ZP.button`
  background-color: black;
  color: white;
  border: none;
  padding: 0.9rem 1.5rem;
  border-radius: 50px;
  cursor: pointer;
  font-size: 1.05rem;
  width: 100%;
  font-weight: 600;
  transition: all 0.3s ease;
  box-shadow: 0 5px 15px rgba(0, 0, 0, 0.25);
  letter-spacing: 0.5px;
  display: flex;
  align-items: center;
  justify-content: center;
  gap: 10px;
  margin-top: auto;

  &:hover {
    background-color: #333;
    box-shadow: 0 8px 20px rgba(0, 0, 0, 0.35);
    transform: translateY(-3px);
  }

  &:active {
    transform: translateY(1px);
    box-shadow: 0 3px 8px rgba(0, 0, 0, 0.25);
  }
`,
        L = s.ZP.img`
  width: 24px;
  height: 24px;
`,
        F = s.ZP.div`
  background-color: white;
  border-radius: 16px;
  box-shadow: 0 10px 30px rgba(0, 0, 0, 0.07);
  overflow: hidden;
  transition: all 0.5s cubic-bezier(0.175, 0.885, 0.32, 1.275);
  cursor: pointer;
  position: relative;
  border: 1px solid rgba(0, 0, 0, 0.03);

  &:hover {
    transform: translateY(-12px);
    box-shadow: 0 20px 40px rgba(0, 0, 0, 0.12);
  }

  &:before {
    content: '';
    position: absolute;
    top: 0;
    left: 0;
    width: 100%;
    height: 5px;
    background: linear-gradient(90deg, #3b7a57, #6b8e23);
    transform: scaleX(0);
    transform-origin: left;
    transition: transform 0.5s ease;
  }

  &:hover:before {
    transform: scaleX(1);
  }

  @media (max-width: 768px) {
    &:active {
      transform: translateY(-8px);
      box-shadow: 0 15px 30px rgba(0, 0, 0, 0.1);
    }

    &:active:before {
      transform: scaleX(1);
    }
  }
`,
        I = s.ZP.div`
  height: 240px;
  background-image: url(${(e) => e.bgImage});
  background-size: cover;
  background-position: center;
  transition: transform 1s ease;
  position: relative;

  &:after {
    content: '';
    position: absolute;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    background: linear-gradient(to bottom, rgba(0, 0, 0, 0) 60%, rgba(0, 0, 0, 0.3) 100%);
  }

  ${F}:hover & {
    transform: scale(1.08);
  }

  @media (max-width: 480px) {
    height: 200px;
  }
`,
        O = s.ZP.div`
  padding: 2rem;
  min-height: auto;
  display: flex;
  flex-direction: column;
  flex: 4;
  @media (max-width: 480px) {
    padding: 1.5rem;
  }
`,
        M = s.ZP.h3`
  font-size: 1.6rem;
  margin-bottom: 1rem;
  color: #2d3748;
  font-weight: 600;
  transition: color 0.3s ease;
  line-height: 1.3;
  margin: 0;
  margin-bottom: auto;

  ${F}:hover & {
    color: #3b7a57;
  }

  @media (max-width: 480px) {
    font-size: 1.4rem;
  }
`,
        _ = s.ZP.p`
  font-size: 1rem;
  color: #4a5568;
  margin-bottom: 1rem;
  display: flex;
  align-items: center;
  font-weight: 500;
`,
        N = s.ZP.div`
  display: flex;
  align-items: center;
  margin-bottom: 1.8rem;
`,
        V = s.ZP.span`
  font-size: 1rem;
  color: #4a5568;
  margin-right: 1rem;
  display: flex;
  align-items: center;
  font-weight: 500;
`,
        T = s.ZP.div`
  width: 28px;
  height: 28px;
  border-radius: 50%;
  background-color: ${(e) => {
    switch (e.color.toLowerCase()) {
      case 'коричневый':
        return '#8B4513';
      case 'серый':
        return '#808080';
      default:
        return '#CCCCCC';
    }
  }};
  box-shadow: 0 3px 8px rgba(0, 0, 0, 0.15);
  border: 2px solid white;
  transition: transform 0.3s ease, box-shadow 0.3s ease;

  &:hover {
    transform: scale(1.3);
    box-shadow: 0 5px 12px rgba(0, 0, 0, 0.2);
  }
`;
      s.ZP.button`
  background: linear-gradient(90deg, #3b7a57, #6b8e23);
  color: white;
  border: none;
  padding: 0.9rem 1.5rem;
  border-radius: 50px;
  cursor: pointer;
  font-size: 1.05rem;
  width: 100%;
  font-weight: 600;
  transition: all 0.3s ease;
  box-shadow: 0 5px 15px rgba(59, 122, 87, 0.25);
  letter-spacing: 0.5px;

  &:hover {
    background: linear-gradient(90deg, #346c4d, #5c7a1e);
    box-shadow: 0 8px 20px rgba(59, 122, 87, 0.35);
    transform: translateY(-3px);
  }

  &:active {
    transform: translateY(1px);
    box-shadow: 0 3px 8px rgba(59, 122, 87, 0.25);
  }
`;
      let X = s.ZP.div`
  position: fixed;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  background-color: rgba(0, 0, 0, 0.7);
  display: flex;
  justify-content: center;
  align-items: center;
  z-index: 1000;
  backdrop-filter: blur(8px);
  animation: fadeIn 0.4s ease;

  @keyframes fadeIn {
    from {
      opacity: 0;
    }
    to {
      opacity: 1;
    }
  }
`,
        H = s.ZP.div`
  background-color: white;
  border-radius: 20px;
  max-width: 1250px;
  width: 92%;
  max-height: 92vh;
  overflow-y: auto;
  position: relative;
  box-shadow: 0 30px 60px rgba(0, 0, 0, 0.25);
  animation: slideUp 0.5s cubic-bezier(0.175, 0.885, 0.32, 1.275);

  &::-webkit-scrollbar {
    display: none;
  }

  @keyframes slideUp {
    from {
      opacity: 0;
      transform: translateY(40px);
    }
    to {
      opacity: 1;
      transform: translateY(0);
    }
  }

  &::-webkit-scrollbar {
    width: 10px;
  }

  &::-webkit-scrollbar-track {
    background: #f1f1f1;
    border-radius: 10px;
  }

  &::-webkit-scrollbar-thumb {
    background: #c5c5c5;
    border-radius: 10px;
  }

  &::-webkit-scrollbar-thumb:hover {
    background: #a8a8a8;
  }

  @media (max-width: 768px) {
    width: 95%;
    max-height: 95vh;
  }

  @media (max-width: 480px) {
    width: 98%;
    max-height: 98vh;
    border-radius: 15px;
  }
`,
        R = s.ZP.div`
  padding: 2rem 2.5rem;
  border-bottom: 1px solid #f0f0f0;
  display: flex;
  justify-content: space-between;
  align-items: center;
  position: sticky;
  top: 0;
  background: white;
  z-index: 10;
  border-radius: 20px 20px 0 0;

  @media (max-width: 768px) {
    padding: 1.5rem 2rem;
  }

  @media (max-width: 480px) {
    padding: 1rem 1.5rem;
    border-radius: 15px 15px 0 0;
  }
`,
        q = s.ZP.h2`
  font-size: 2rem;
  color: #2d3748;
  margin: 0;
  font-weight: 600;
  letter-spacing: -0.5px;

  @media (max-width: 768px) {
    font-size: 1.8rem;
  }

  @media (max-width: 480px) {
    font-size: 1.5rem;
  }
`,
        G = s.ZP.button`
  background: none;
  border: none;
  font-size: 2rem;
  cursor: pointer;
  color: #718096;
  width: 45px;
  height: 45px;
  display: flex;
  align-items: center;
  justify-content: center;
  border-radius: 50%;
  transition: all 0.3s ease;

  &:hover {
    color: #2d3748;
    background-color: #f7fafc;
  }

  @media (max-width: 480px) {
    width: 40px;
    height: 40px;
    font-size: 1.8rem;
  }
`,
        U = s.ZP.div`
  padding: 2.5rem;

  @media (max-width: 768px) {
    padding: 2rem;
  }

  @media (max-width: 480px) {
    padding: 1.5rem;
  }
`,
        W = s.ZP.div`
  display: flex;
  align-items: flex-start;
  gap: 16px;

  @media (max-width: 1269px) {
    flex-direction: column;
  }
`,
        Q = s.ZP.img`
  width: 50%;
  height: 400px;
  object-fit: cover;
  border-radius: 16px;
  box-shadow: 0 15px 30px rgba(0, 0, 0, 0.15);
  transition: transform 0.6s ease, box-shadow 0.6s ease;
  margin-bottom: 2.5rem;

  &:hover {
    transform: scale(1.03);
    box-shadow: 0 20px 40px rgba(0, 0, 0, 0.2);
  }

  @media (max-width: 1269px) {
    width: 100%;
    height: 300px;
  }

  @media (max-width: 480px) {
    height: 220px;
    margin-bottom: 1.5rem;
    border-radius: 10px;
  }
`,
        J = s.ZP.p`
  font-size: 1.1rem;
  line-height: 1.8;
  color: #4a5568;
  margin: 0;
  margin-bottom: 2.5rem;
  text-align: justify;
  letter-spacing: 0.2px;
  width: 50%;

  @media (max-width: 1269px) {
    width: 100%;
  }

  @media (max-width: 768px) {
    font-size: 1rem;
    line-height: 1.7;
    margin-bottom: 2rem;
  }

  @media (max-width: 480px) {
    font-size: 0.95rem;
    line-height: 1.6;
    margin-bottom: 1.5rem;
  }
`,
        K = s.ZP.div`
  display: flex;
  flex-wrap: wrap;
  gap: 2rem;
  margin-bottom: 2.5rem;
  background-color: #f7fafc;
  padding: 2rem;
  border-radius: 16px;
  box-shadow: inset 0 2px 10px rgba(0, 0, 0, 0.05);

  @media (max-width: 768px) {
    padding: 1.5rem;
    gap: 1.5rem;
    margin-bottom: 2rem;
  }

  @media (max-width: 480px) {
    padding: 1.2rem;
    gap: 1rem;
    margin-bottom: 1.5rem;
    border-radius: 10px;
  }
`,
        ee = s.ZP.div`
  flex: 1;
  min-width: 220px;

  @media (max-width: 480px) {
    min-width: 100%;
  }
`,
        et = s.ZP.h4`
  font-size: 1.1rem;
  color: #718096;
  margin-bottom: 0.5rem;
  font-weight: 600;

  @media (max-width: 480px) {
    font-size: 1rem;
    margin-bottom: 0.3rem;
  }
`,
        ei = s.ZP.p`
  font-size: 1.2rem;
  color: #2d3748;
  display: flex;
  align-items: center;
  gap: 10px;
  font-weight: 500;

  ${T} {
    width: 20px;
    height: 20px;
    margin-left: 5px;
  }

  @media (max-width: 480px) {
    font-size: 1.1rem;
  }
`,
        er = s.ZP.table`
  width: 100%;
  border-collapse: collapse;
  margin-top: 1.5rem;
  box-shadow: 0 5px 20px rgba(0, 0, 0, 0.05);
  border-radius: 12px;
  overflow: hidden;

  @media (max-width: 480px) {
    font-size: 0.9rem;
    margin-top: 1rem;
    border-radius: 8px;
  }
`,
        eo = s.ZP.th`
  background-color: #f1f5f9;
  padding: 1.2rem 1.5rem;
  text-align: left;
  font-weight: 600;
  color: #475569;
  font-size: 1.1rem;
  border-bottom: 2px solid #e2e8f0;

  &:first-child {
    border-top-left-radius: 12px;
  }

  &:last-child {
    border-top-right-radius: 12px;
  }

  @media (max-width: 768px) {
    padding: 1rem 1.2rem;
    font-size: 1rem;
  }

  @media (max-width: 480px) {
    padding: 0.8rem 1rem;
    font-size: 0.9rem;
  }
`,
        ea = s.ZP.td`
  padding: 1.2rem 1.5rem;
  border-bottom: 1px solid #e2e8f0;
  color: #334155;
  font-size: 1.05rem;
  transition: background-color 0.2s ease;

  tr:last-child & {
    border-bottom: none;
  }

  tr:hover & {
    background-color: #f8fafc;
  }

  @media (max-width: 768px) {
    padding: 1rem 1.2rem;
    font-size: 0.95rem;
  }

  @media (max-width: 480px) {
    padding: 0.8rem 1rem;
    font-size: 0.85rem;
  }
`,
        en = (0, s.F4)`
  from {
    opacity: 0;
    transform: translateY(20px);
  }
  to {
    opacity: 1;
    transform: translateY(0);
  }

  
`,
        es = (0, s.ZP)(F)`
  opacity: 0;
  animation: ${en} 0.6s ease-out forwards;
  animation-delay: ${(e) => e.delay}s;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
`;
      var ed = (e) => {
        let { initialData: t = [] } = e,
          [i, o] = (0, n.useState)(t),
          [a, s] = (0, n.useState)(null),
          [d, l] = (0, n.useState)(0 === t.length),
          [c, p] = (0, n.useState)(null);
        (0, n.useEffect)(() => {
          if (t.length > 0) {
            o(t), l(!1);
            return;
          }
          (async () => {
            try {
              l(!0);
              let e =
                'https://docs.google.com/spreadsheets/d/e/2PACX-1vQnfEBU2jZvGQOqDX0hgA0dQXM9br26tBVhoN7ctaa1W4ChbfQkUrX6afNums1ZGA/pub?gid=1474798808&single=true&output=csv';
              console.log('Fetching from URL:', e);
              let t = await fetch(e);
              if (!t.ok) throw Error(`Failed to fetch file: ${t.status} ${t.statusText}`);
              let i = (await t.text()).split('\n').map((e) => {
                  let t = [],
                    i = '',
                    r = !1;
                  for (let o = 0; o < e.length; o++) {
                    let a = e[o];
                    '"' === a ? (r = !r) : ',' !== a || r ? (i += a) : (t.push(i), (i = ''));
                  }
                  return t.push(i), t;
                }),
                r = i[0],
                a = i.slice(1).map((e) => {
                  let t = {};
                  return (
                    r.forEach((i, r) => {
                      t[i.trim()] = e[r]?.trim() || '';
                    }),
                    t
                  );
                });
              console.log('Raw CSV data:', a);
              let n = new Map();
              a.forEach((e) => {
                let t = parseInt(e.id);
                if (!t) {
                  console.warn('Row missing ID, skipping:', e);
                  return;
                }
                n.has(t) ||
                  n.set(t, {
                    id: t,
                    name: e.name || '',
                    origin: e.origin || '',
                    color: e.color || '',
                    image: e.image || '',
                    description: e.description || '',
                    prices: [],
                  });
                let i = n.get(t);
                i && e.size && e.price && i.prices.push({ size: e.size, price: e.price, additional: e.additional || '' });
              });
              let s = Array.from(n.values());
              console.log('Processed catalog data:', s), o(s), l(!1);
            } catch (e) {
              console.error('Error loading CSV file:', e), p(`Failed to load catalog data: ${e instanceof Error ? e.message : String(e)}`), l(!1);
            }
          })();
        }, [t]);
        let x = (e) => {
            s(e);
          },
          m = () => {
            s(null);
          };
        return d
          ? (0, r.jsx)(C, { text: 'Загружаем данные' })
          : c
          ? (0, r.jsxs)('div', { children: ['Error: ', c] })
          : ((0, n.useEffect)(() => {
              if (a) {
                let e = setTimeout(() => {
                  let e = document.getElementById('price-table-heading');
                  e && e.scrollIntoView({ behavior: 'smooth', block: 'start' });
                }, 300);
                return () => clearTimeout(e);
              }
            }, [a]),
            (0, r.jsxs)(E, {
              children: [
                (0, r.jsx)($, { id: 'catalog', children: 'Каталог гранитных плит' }),
                (0, r.jsx)(Y, {
                  children: i.map((e, t) =>
                    (0, r.jsxs)(
                      es,
                      {
                        onClick: () => x(e),
                        delay: 0.1 * t,
                        children: [
                          (0, r.jsx)(I, { bgImage: e.image }),
                          (0, r.jsxs)(O, {
                            children: [
                              (0, r.jsx)(M, { children: e.name }),
                              (0, r.jsxs)(_, { children: ['Происхождение: ', e.origin] }),
                              (0, r.jsxs)(N, { children: [(0, r.jsx)(V, { children: 'Цвет:' }), (0, r.jsx)(T, { color: e.color })] }),
                              (0, r.jsxs)(A, {
                                children: [
                                  (0, r.jsx)(L, { src: 'https://storage.yandexcloud.net/ilia/2025-03-17%2015.36.35%20(2)%20(2).png', alt: 'Button icon' }),
                                  'Подробнее',
                                ],
                              }),
                            ],
                          }),
                        ],
                      },
                      e.id,
                    ),
                  ),
                }),
                a &&
                  (0, r.jsx)(X, {
                    onClick: m,
                    children: (0, r.jsxs)(H, {
                      onClick: (e) => e.stopPropagation(),
                      children: [
                        (0, r.jsxs)(R, { children: [(0, r.jsx)(q, { children: a.name }), (0, r.jsx)(G, { onClick: m, children: '\xd7' })] }),
                        (0, r.jsxs)(U, {
                          children: [
                            (0, r.jsxs)(W, { children: [(0, r.jsx)(Q, { src: a.image, alt: a.name }), (0, r.jsx)(J, { children: a.description })] }),
                            (0, r.jsxs)(K, {
                              children: [
                                (0, r.jsxs)(ee, { children: [(0, r.jsx)(et, { children: 'Происхождение:' }), (0, r.jsx)(ei, { children: a.origin })] }),
                                (0, r.jsxs)(ee, {
                                  children: [(0, r.jsx)(et, { children: 'Цвет:' }), (0, r.jsxs)(ei, { children: [a.color, ' ', (0, r.jsx)(T, { color: a.color })] })],
                                }),
                              ],
                            }),
                            (0, r.jsx)('h3', { id: 'price-table-heading', children: 'Цены' }),
                            (0, r.jsxs)(er, {
                              children: [
                                (0, r.jsx)('thead', {
                                  children: (0, r.jsxs)('tr', {
                                    children: [(0, r.jsx)(eo, { children: 'Размер' }), (0, r.jsx)(eo, { children: 'Термо' }), (0, r.jsx)(eo, { children: 'Полировка' })],
                                  }),
                                }),
                                (0, r.jsx)('tbody', {
                                  children: a.prices.map((e, t) =>
                                    (0, r.jsxs)(
                                      'tr',
                                      {
                                        children: [
                                          (0, r.jsx)(ea, { children: e.size }),
                                          (0, r.jsx)(ea, { children: e.price }),
                                          (0, r.jsx)(ea, { children: e.additional }),
                                        ],
                                      },
                                      t,
                                    ),
                                  ),
                                }),
                              ],
                            }),
                          ],
                        }),
                      ],
                    }),
                  }),
              ],
            }));
      };
      let el = s.ZP.div`
  width: 50%;
  max-width: 600px;
  margin: 0;
  margin-right: auto;
  margin-left: 9.5rem;
  padding: 2.5rem;
  background-color: rgba(255, 255, 255, 0.95);
  border-radius: 10px;
  box-shadow: 0 10px 30px rgba(0, 0, 0, 0.2);
  position: relative;
  z-index: 2;
  backdrop-filter: blur(5px);

  @media (max-width: 1024px) {
    width: 80%;
    margin: 0 auto;
    order: 1;
  }
  
  @media (max-width: 768px) {
    width: 90%;
    padding: 1.5rem;
    margin: 0 auto;
  }
  
  @media (max-width: 480px) {
    width: 83%;
    padding: 1rem;
  }
`,
        ec = s.ZP.h2`
  color: #333;
  margin-bottom: 1.5rem;
  text-align: center;
  font-size: 2rem;
  font-weight: 600;
  position: relative;

  &::after {
    content: '';
    display: block;
    width: 60px;
    height: 3px;
    background-color: #4caf50;
    margin: 0.8rem auto 0;
  }


  @media (max-width: 768px) {
    font-size: 1.75rem;
    margin-bottom: 1.2rem;
  }
  
  @media (max-width: 480px) {
    font-size: 1.5rem;
    margin-bottom: 1rem;
  }
`,
        ep = s.ZP.form`
  display: flex;
  flex-direction: column;
  gap: 1.2rem;
`,
        ex = s.ZP.div`
  display: flex;
  flex-direction: column;
  gap: 0.5rem;
`,
        em = s.ZP.label`
  font-weight: 500;
  color: #444;
  display: flex;
  align-items: center;

  svg {
    margin-right: 0.5rem;
    color: #4caf50;
  }
`,
        eh = s.ZP.input`
  padding: 1rem;
  border: 1px solid #ddd;
  border-radius: 6px;
  font-size: 1rem;
  transition: all 0.3s;
  background-color: rgba(255, 255, 255, 0.9);

  &:focus {
    outline: none;
    border-color: #4caf50;
    box-shadow: 0 0 0 3px rgba(76, 175, 80, 0.2);
    background-color: #fff;
  }

  &::placeholder {
    color: #aaa;
  }


  @media (max-width: 768px) {
    padding: 0.8rem;
    font-size: 0.95rem;
  }
  
  @media (max-width: 480px) {
    padding: 0.7rem;
    font-size: 0.9rem;
  }
`,
        eg = s.ZP.textarea`
  padding: 1rem;
  border: 1px solid #ddd;
  border-radius: 6px;
  font-size: 1rem;
  min-height: 140px;
  resize: vertical;
  transition: all 0.3s;
  background-color: rgba(255, 255, 255, 0.9);

  &:focus {
    outline: none;
    border-color: #4caf50;
    box-shadow: 0 0 0 3px rgba(76, 175, 80, 0.2);
    background-color: #fff;
  }

  &::placeholder {
    color: #aaa;
  }


  @media (max-width: 768px) {
    padding: 0.8rem;
    font-size: 0.95rem;
    min-height: 120px;
  }
  
  @media (max-width: 480px) {
    padding: 0.7rem;
    font-size: 0.9rem;
    min-height: 100px;
  }
`,
        ef = s.ZP.button`
  background-color: #000;
  color: white;
  border: none;
  padding: 1rem 1.5rem;
  border-radius: 6px;
  cursor: pointer;
  font-size: 1.1rem;
  font-weight: 600;
  transition: all 0.3s;
  margin-top: 1rem;
  text-transform: uppercase;
  letter-spacing: 1px;
  display: flex;
  align-items: center;
  justify-content: center;
  position: relative;
  overflow: hidden;
  box-shadow: 0 4px 10px rgba(0, 0, 0, 0.3);

  &::before {
    content: '';
    position: absolute;
    top: 0;
    left: -100%;
    width: 100%;
    height: 100%;
    background: linear-gradient(90deg, transparent, rgba(255, 255, 255, 0.2), transparent);
    transition: all 0.6s;
  }

  &:hover {
    background-color: #222;
    transform: translateY(-3px);
    box-shadow: 0 6px 15px rgba(0, 0, 0, 0.4);

    &::before {
      left: 100%;
    }
  }

  &:active {
    transform: translateY(-1px);
    box-shadow: 0 3px 8px rgba(0, 0, 0, 0.3);
  }

  &:disabled {
    background-color: #333;
    cursor: not-allowed;
    transform: none;
    box-shadow: 0 2px 5px rgba(0, 0, 0, 0.2);
    opacity: 0.7;

    &::before {
      display: none;
    }
  }

  svg {
    margin-right: 0.5rem;
    fill: white;
  }


  @media (max-width: 768px) {
    padding: 0.9rem 1.2rem;
    font-size: 1rem;
  }
  
  @media (max-width: 480px) {
    padding: 0.8rem 1rem;
    font-size: 0.9rem;
    letter-spacing: 0.5px;
  }
`,
        eb = s.ZP.div`
  padding: 1rem;
  margin-top: 1.5rem;
  border-radius: 6px;
  text-align: center;
  background-color: ${(e) => (e.isError ? '#ffebee' : '#e8f5e9')};
  color: ${(e) => (e.isError ? '#c62828' : '#2e7d32')};
  display: flex;
  align-items: center;
  justify-content: center;
  font-weight: 500;
  box-shadow: 0 2px 5px rgba(0, 0, 0, 0.1);

  svg {
    margin-right: 0.5rem;
    font-size: 1.2rem;
  }


  @media (max-width: 768px) {
    padding: 0.8rem;
    margin-top: 1.2rem;
    font-size: 0.9rem;
  }
  
  @media (max-width: 480px) {
    padding: 0.7rem;
    margin-top: 1rem;
    font-size: 0.85rem;
    
    svg {
      margin-right: 0.3rem;
      font-size: 1rem;
    }
  }
`,
        eu = s.ZP.span`
  color: #e53935;
  margin-left: 4px;
`,
        ew = s.ZP.div`
  margin-top: 1.5rem;
  text-align: center;
  font-size: 0.9rem;
  color: #666;
`,
        ej = s.ZP.div`
  display: flex;
  gap: 1rem;

  @media (max-width: 600px) {
    flex-direction: column;
  }

  & > * {
    flex: 1;
  }


  @media (max-width: 768px) {
    flex-direction: column;
    gap: 0.8rem;
  }

  @media (max-width: 600px) {
    flex-direction: column;
    gap: 0.5rem;
  }
 
`;
      s.ZP.a`
  display: flex;
  align-items: center;
  background-color: #4caf50;
  color: white;
  padding: 10px 15px;
  border-radius: 6px;
  text-decoration: none;
  font-weight: 600;
  box-shadow: 0 2px 10px rgba(0, 0, 0, 0.3);
  transition: all 0.3s ease;

  &:hover {
    background-color: #45a049;
    transform: translateY(-2px);
    box-shadow: 0 4px 15px rgba(0, 0, 0, 0.4);
  }
`,
        s.ZP.span`
  margin-right: 8px;
  display: flex;
  align-items: center;
`,
        s.ZP.div`
  position: absolute;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  background-image: ${(e) => (e.backgroundImage ? `url(${e.backgroundImage})` : 'none')};
  background-size: cover;
  background-position: center;
  cursor: pointer;

  &::after {
    content: '';
    position: absolute;
    top: 0;
    left: 0;
    right: 0;
    bottom: 0;
    background: linear-gradient(rgba(0, 0, 0, 0.5), rgba(0, 0, 0, 0.7));
    z-index: 1;
  }
`;
      let ev = s.ZP.section`
  width: 100%;
  min-height: 100vh;
  position: relative;
  display: flex;
  flex-direction: row;
  justify-content: flex-end;
  align-items: center;
  background-color: transparent;
  box-sizing: border-box;
 
  @media (max-width: 1024px) {
    flex-direction: column;
    justify-content: flex-start;
    padding: 4rem 1rem;
    min-height: auto;
  }
  
  @media (max-width: 768px) {
    padding: 3rem 0.5rem;
  }
  
  @media (max-width: 480px) {
    padding: 2rem 0.25rem;
  }
`;
      s.ZP.div`
  position: absolute;
  bottom: 30px;
  left: 30px;
  width: 40%;
  max-width: 500px;
  background-color: rgba(255, 255, 255, 0.9);
  border-radius: 10px;
  padding: 2rem;
  box-shadow: 0 10px 30px rgba(0, 0, 0, 0.2);
  z-index: 3;
  backdrop-filter: blur(5px);

  @media (max-width: 1024px) {
    position: relative;
    width: 80%;
    left: 0;
    bottom: 0;
    margin: 2rem auto 0;
  }
  
  @media (max-width: 768px) {
    width: 90%;
    padding: 1.5rem;
  }
  
  @media (max-width: 480px) {
    width: 95%;
    padding: 1rem;
  }
`,
        s.ZP.div`
  display: flex;
  align-items: flex-start;
  margin-bottom: 1.5rem;

  &:last-child {
    margin-bottom: 0;
  }
`,
        s.ZP.div`
  color: #4caf50;
  margin-right: 1rem;
  display: flex;
  align-items: center;
  justify-content: center;
`,
        s.ZP.h4`
  margin: 0 0 0.3rem 0;
  font-size: 1rem;
  font-weight: 600;
  color: #333;
`,
        s.ZP.p`
  margin: 0;
  font-size: 0.95rem;
  color: #666;
  line-height: 1.4;
`;
      let ey = s.ZP.div`
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  z-index: 0;
  overflow: hidden;

  iframe {
    width: 100%;
    height: 100%;
    border: 0;
  }
  
  @media (max-width: 1024px) {
    position: relative;
    height: 400px;
    margin-top: 2rem;
    order: 2;
  }
  
  @media (max-width: 768px) {
    height: 350px;
  }
  
  @media (max-width: 480px) {
    height: 300px;
  }
`,
        ek = s.ZP.div`
  position: absolute;
  top: 20px;
  right: 20px;
  z-index: 10;
  display: flex;
  justify-content: center;
  align-items: center;

  @media (max-width: 768px) {
    top: 15px;
    right: 15px;
  }
  
  @media (max-width: 480px) {
    top: 10px;
    right: 10px;
  }
`;
      var ez = (e) => {
        let { telegramBotToken: t, backgroundImage: i = 'https://storage.yandexcloud.net/ilia/1679098994_vsegda-pomnim-com-p-gabbro-norit-foto-53.jpg' } = e,
          [o, a] = (0, n.useState)(''),
          [s, d] = (0, n.useState)(''),
          [l, c] = (0, n.useState)(''),
          [p, x] = (0, n.useState)(''),
          [m, h] = (0, n.useState)(null),
          [g, f] = (0, n.useState)(!1),
          b = async (e) => {
            if ((e.preventDefault(), !o || !p || (!s && !l))) {
              h({ message: 'Please fill in your name, message, and either email or phone.', isError: !0 });
              return;
            }
            f(!0), h(null);
            try {
              let e = `
  Поступила новая заявка с сайта
  
  Имя: ${o}
  ${s ? `Почта: ${s}` : ''}
  ${l ? `Телефон: ${l}` : ''}
  
  💬 Сообщение:
  ${p}
      `,
                i = await fetch(`https://api.telegram.org/bot${t}/sendMessage`, {
                  method: 'POST',
                  headers: { 'Content-Type': 'application/json' },
                  body: JSON.stringify({ chat_id: -4767436757, text: e, parse_mode: 'HTML' }),
                }),
                r = await i.json();
              if (r.ok) h({ message: 'Спасибо! Заявка успешно отправлена.', isError: !1 }), a(''), d(''), c(''), x('');
              else throw Error(r.description || 'Ошибка при отправке заявки');
            } catch (e) {
              console.error('Error sending feedback:', e), h({ message: 'Произошла ошибка при отправке заявки. Попробуйте заново.', isError: !0 });
            } finally {
              f(!1);
            }
          };
        return (0, r.jsxs)(ev, {
          id: 'contact',
          children: [
            (0, r.jsxs)(ey, {
              children: [
                (0, r.jsx)('iframe', {
                  src: 'https://yandex.ru/map-widget/v1/?um=constructor%3A1&source=constructor&ll=61.332730%2C54.763927&z=16&pt=61.332730%2C54.763927&mode=search',
                  width: '100%',
                  height: '100%',
                  frameBorder: '0',
                  title: 'Yandex Map',
                  allow: 'geolocation',
                }),
                (0, r.jsx)(ek, {}),
              ],
            }),
            (0, r.jsxs)(el, {
              children: [
                (0, r.jsx)(ec, { children: 'Свяжитесь с нами' }),
                (0, r.jsxs)(ep, {
                  onSubmit: b,
                  children: [
                    (0, r.jsxs)(ex, {
                      children: [
                        (0, r.jsxs)(em, {
                          htmlFor: 'name',
                          children: [
                            (0, r.jsx)('svg', {
                              xmlns: 'http://www.w3.org/2000/svg',
                              width: '16',
                              height: '16',
                              fill: '#000',
                              viewBox: '0 0 16 16',
                              children: (0, r.jsx)('path', {
                                d: 'M8 8a3 3 0 1 0 0-6 3 3 0 0 0 0 6zm2-3a2 2 0 1 1-4 0 2 2 0 0 1 4 0zm4 8c0 1-1 1-1 1H3s-1 0-1-1 1-4 6-4 6 3 6 4zm-1-.004c-.001-.246-.154-.986-.832-1.664C11.516 10.68 10.289 10 8 10c-2.29 0-3.516.68-4.168 1.332-.678.678-.83 1.418-.832 1.664h10z',
                              }),
                            }),
                            'Имя ',
                            (0, r.jsx)(eu, { children: '*' }),
                          ],
                        }),
                        (0, r.jsx)(eh, { id: 'name', type: 'text', value: o, onChange: (e) => a(e.target.value), placeholder: 'Ваше полное имя', required: !0 }),
                      ],
                    }),
                    (0, r.jsxs)(ej, {
                      children: [
                        (0, r.jsxs)(ex, {
                          children: [
                            (0, r.jsxs)(em, {
                              htmlFor: 'email',
                              children: [
                                (0, r.jsx)('svg', {
                                  xmlns: 'http://www.w3.org/2000/svg',
                                  width: '16',
                                  height: '16',
                                  fill: '#000',
                                  viewBox: '0 0 16 16',
                                  children: (0, r.jsx)('path', {
                                    d: 'M0 4a2 2 0 0 1 2-2h12a2 2 0 0 1 2 2v8a2 2 0 0 1-2 2H2a2 2 0 0 1-2-2V4Zm2-1a1 1 0 0 0-1 1v.217l7 4.2 7-4.2V4a1 1 0 0 0-1-1H2Zm13 2.383-4.708 2.825L15 11.105V5.383Zm-.034 6.876-5.64-3.471L8 9.583l-1.326-.795-5.64 3.47A1 1 0 0 0 2 13h12a1 1 0 0 0 .966-.741ZM1 11.105l4.708-2.897L1 5.383v5.722Z',
                                  }),
                                }),
                                'Электронная почта',
                              ],
                            }),
                            (0, r.jsx)(eh, { id: 'email', type: 'email', value: s, onChange: (e) => d(e.target.value), placeholder: 'Ваш адрес электронной почты' }),
                          ],
                        }),
                        (0, r.jsxs)(ex, {
                          children: [
                            (0, r.jsxs)(em, {
                              htmlFor: 'phone',
                              children: [
                                (0, r.jsx)('svg', {
                                  xmlns: 'http://www.w3.org/2000/svg',
                                  width: '16',
                                  height: '16',
                                  fill: '#000',
                                  viewBox: '0 0 16 16',
                                  children: (0, r.jsx)('path', {
                                    fillRule: 'evenodd',
                                    d: 'M1.885.511a1.745 1.745 0 0 1 2.61.163L6.29 2.98c.329.423.445.974.315 1.494l-.547 2.19a.678.678 0 0 0 .178.643l2.457 2.457a.678.678 0 0 0 .644.178l2.189-.547a1.745 1.745 0 0 1 1.494.315l2.306 1.794c.829.645.905 1.87.163 2.611l-1.034 1.034c-.74.74-1.846 1.065-2.877.702a18.634 18.634 0 0 1-7.01-4.42 18.634 18.634 0 0 1-4.42-7.009c-.362-1.03-.037-2.137.703-2.877L1.885.511z',
                                  }),
                                }),
                                'Телефон',
                              ],
                            }),
                            (0, r.jsx)(eh, { id: 'phone', type: 'tel', value: l, onChange: (e) => c(e.target.value), placeholder: 'Ваш номер телефона' }),
                          ],
                        }),
                      ],
                    }),
                    (0, r.jsxs)(ex, {
                      children: [
                        (0, r.jsxs)(em, {
                          htmlFor: 'message',
                          children: [
                            (0, r.jsxs)('svg', {
                              xmlns: 'http://www.w3.org/2000/svg',
                              width: '16',
                              height: '16',
                              fill: '#000',
                              viewBox: '0 0 16 16',
                              children: [
                                (0, r.jsx)('path', {
                                  d: 'M14 1a1 1 0 0 1 1 1v8a1 1 0 0 1-1 1H4.414A2 2 0 0 0 3 11.586l-2 2V2a1 1 0 0 1 1-1h12zM2 0a2 2 0 0 0-2 2v12.793a.5.5 0 0 0 .854.353l2.853-2.853A1 1 0 0 1 4.414 12H14a2 2 0 0 0 2-2V2a2 2 0 0 0-2-2H2z',
                                }),
                                (0, r.jsx)('path', {
                                  d: 'M3 3.5a.5.5 0 0 1 .5-.5h9a.5.5 0 0 1 0 1h-9a.5.5 0 0 1-.5-.5zM3 6a.5.5 0 0 1 .5-.5h9a.5.5 0 0 1 0 1h-9A.5.5 0 0 1 3 6zm0 2.5a.5.5 0 0 1 .5-.5h5a.5.5 0 0 1 0 1h-5a.5.5 0 0 1-.5-.5z',
                                }),
                              ],
                            }),
                            'Сообщение ',
                            (0, r.jsx)(eu, { children: '*' }),
                          ],
                        }),
                        (0, r.jsx)(eg, {
                          id: 'message',
                          value: p,
                          onChange: (e) => x(e.target.value),
                          placeholder: 'Как мы можем помочь? Расскажите о вашем проекте или запросе...',
                          required: !0,
                        }),
                      ],
                    }),
                    (0, r.jsx)(ef, {
                      type: 'submit',
                      disabled: g,
                      children: g
                        ? (0, r.jsxs)(r.Fragment, {
                            children: [
                              (0, r.jsx)('svg', {
                                xmlns: 'http://www.w3.org/2000/svg',
                                width: '16',
                                height: '16',
                                fill: 'white',
                                className: 'bi bi-hourglass-split',
                                viewBox: '0 0 16 16',
                                children: (0, r.jsx)('path', {
                                  d: 'M2.5 15a.5.5 0 1 1 0-1h1v-1a4.5 4.5 0 0 1 2.557-4.06c.29-.139.443-.377.443-.59v-.7c0-.213-.154-.451-.443-.59A4.5 4.5 0 0 1 3.5 3V2h-1a.5.5 0 0 1 0-1h11a.5.5 0 0 1 0 1h-1v1a4.5 4.5 0 0 1-2.557 4.06c-.29.139-.443.377-.443.59v.7c0 .213.154.451.443.59A4.5 4.5 0 0 1 12.5 13v1h1a.5.5 0 0 1 0 1h-11zm2-13v1c0 .537.12 1.045.337 1.5h6.326c.216-.455.337-.963.337-1.5V2h-7zm3 6.35c0 .701-.478 1.236-1.011 1.492A3.5 3.5 0 0 0 4.5 13s.866-1.299 3-1.48V8.35zm1 0v3.17c2.134.181 3 1.48 3.48V8.35zm1 0v3.17c2.134.181 3 1.48 3 1.48a3.5 3.5 0 0 0-1.989-3.158C8.978 9.586 8.5 9.052 8.5 8.351z',
                                }),
                              }),
                              'Отправка...',
                            ],
                          })
                        : (0, r.jsxs)(r.Fragment, {
                            children: [
                              (0, r.jsx)('svg', {
                                xmlns: 'http://www.w3.org/2000/svg',
                                width: '16',
                                height: '16',
                                fill: 'white',
                                className: 'bi bi-send',
                                viewBox: '0 0 16 16',
                                children: (0, r.jsx)('path', {
                                  d: 'M15.854.146a.5.5 0 0 1 .11.54l-5.819 14.547a.75.75 0 0 1-1.329.124l-3.178-4.995L.643 7.184a.75.75 0 0 1 .124-1.33L15.314.037a.5.5 0 0 1 .54.11ZM6.636 10.07l2.761 4.338L14.13 2.576 6.636 10.07Zm6.787-8.201L1.591 6.602l4.339 2.76 7.494-7.493Z',
                                }),
                              }),
                              'Отправить сообщение',
                            ],
                          }),
                    }),
                    m &&
                      (0, r.jsxs)(eb, {
                        isError: m.isError,
                        children: [
                          m.isError
                            ? (0, r.jsxs)('svg', {
                                xmlns: 'http://www.w3.org/2000/svg',
                                width: '16',
                                height: '16',
                                fill: '#000',
                                className: 'bi bi-exclamation-triangle',
                                viewBox: '0 0 16 16',
                                children: [
                                  (0, r.jsx)('path', {
                                    d: 'M7.938 2.016A.13.13 0 0 1 8.002 2a.13.13 0 0 1 .063.016.146.146 0 0 1 .054.057l6.857 11.667c.036.06.035.124.002.183a.163.163 0 0 1-.054.06.116.116 0 0 1-.066.017H1.146a.115.115 0 0 1-.066-.017.163.163 0 0 1-.054-.06.176.176 0 0 1 .002-.183L7.884 2.073a.147.147 0 0 1 .054-.057zm1.044-.45a1.13 1.13 0 0 0-1.96 0L.165 13.233c-.457.778.091 1.767.98 1.767h13.713c.889 0 1.438-.99.98-1.767L8.982 1.566z',
                                  }),
                                  (0, r.jsx)('path', {
                                    d: 'M7.002 12a1 1 0 1 1 2 0 1 1 0 0 1-2 0zM7.1 5.995a.905.905 0 1 1 1.8 0l-.35 3.507a.552.552 0 0 1-1.1 0L7.1 5.995z',
                                  }),
                                ],
                              })
                            : (0, r.jsxs)('svg', {
                                xmlns: 'http://www.w3.org/2000/svg',
                                width: '16',
                                height: '16',
                                fill: '#000',
                                className: 'bi bi-check-circle',
                                viewBox: '0 0 16 16',
                                children: [
                                  (0, r.jsx)('path', { d: 'M8 15A7 7 0 1 1 8 1a7 7 0 0 1 0 14zm0 1A8 8 0 1 0 8 0a8 8 0 0 0 0 16z' }),
                                  (0, r.jsx)('path', {
                                    d: 'M10.97 4.97a.235.235 0 0 0-.02.022L7.477 9.417 5.384 7.323a.75.75 0 0 0-1.06 1.06L6.97 11.03a.75.75 0 0 0 1.079-.02l3.992-4.99a.75.75 0 0 0-1.071-1.05z',
                                  }),
                                ],
                              }),
                          m.message,
                        ],
                      }),
                  ],
                }),
                (0, r.jsx)(ew, { children: 'Мы ценим вашу конфиденциальность. Ваша информация будет использоваться только для ответа на ваш запрос.' }),
              ],
            }),
          ],
        });
      };
      let eP = s.ZP.footer`
  background-color: #1a1a1a;
  color: #fff;
  padding: 5rem 2rem 3rem;
  width: 100%;
  box-sizing: border-box;
  position: relative;
  overflow: hidden;

  &::before {
    content: '';
    position: absolute;
    top: 0;
    left: 0;
    right: 0;
    height: 4px;
    background: linear-gradient(90deg, #4caf50, #2e7d32, #4caf50);
    background-size: 200% 100%;
    animation: gradient 8s ease infinite;
  }

  @keyframes gradient {
    0% {
      background-position: 0% 50%;
    }
    50% {
      background-position: 100% 50%;
    }
    100% {
      background-position: 0% 50%;
    }
  }
`,
        eD = s.ZP.div`
  max-width: 1200px;
  margin: 0 auto;
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(280px, 1fr));
  gap: 3rem;
`,
        eZ = s.ZP.div`
  display: flex;
  flex-direction: column;
`,
        eB = s.ZP.h3`
  font-size: 1.3rem;
  font-weight: 600;
  margin-bottom: 1.8rem;
  position: relative;
  color: #ffffff;
  letter-spacing: 0.5px;

  &:after {
    content: '';
    position: absolute;
    left: 0;
    bottom: -0.8rem;
    width: 40px;
    height: 3px;
    background-color: #4caf50;
    transition: width 0.3s ease;
  }

  ${eZ}:hover &:after {
    width: 60px;
  }
`,
        eS = s.ZP.a`
  color: #b0b0b0;
  text-decoration: none;
  margin-bottom: 1rem;
  transition: all 0.3s ease;
  position: relative;
  padding-left: 0;
  display: inline-block;

  &:before {
    content: '';
    position: absolute;
    left: 0;
    bottom: -2px;
    width: 0;
    height: 1px;
    background-color: #4caf50;
    transition: width 0.3s ease;
  }

  &:hover {
    color: #ffffff;
    padding-left: 5px;

    &:before {
      width: 100%;
    }
  }
`,
        eC = s.ZP.p`
  color: #b0b0b0;
  margin-bottom: 1.2rem;
  line-height: 1.7;
  font-size: 0.95rem;
`;
      s.ZP.div`
  display: flex;
  gap: 1.2rem;
  margin-top: 1.5rem;
`,
        s.ZP.a`
  color: #b0b0b0;
  font-size: 1.5rem;
  transition: all 0.3s ease;
  display: flex;
  align-items: center;
  justify-content: center;
  width: 40px;
  height: 40px;
  border-radius: 50%;
  background-color: rgba(255, 255, 255, 0.05);

  &:hover {
    color: #ffffff;
    background-color: #4caf50;
    transform: translateY(-3px);
    box-shadow: 0 5px 15px rgba(76, 175, 80, 0.3);
  }
`;
      let eE = s.ZP.div`
  max-width: 1200px;
  margin: 3rem auto 0;
  padding-top: 2rem;
  border-top: 1px solid rgba(255, 255, 255, 0.08);
  display: flex;
  justify-content: space-between;
  align-items: center;
  flex-wrap: wrap;
  gap: 1.5rem;

  @media (max-width: 768px) {
    flex-direction: column;
    text-align: center;
  }
`,
        e$ = s.ZP.p`
  color: #808080;
  font-size: 0.9rem;
  letter-spacing: 0.5px;
`,
        eY = s.ZP.div`
  display: flex;
  gap: 2rem;

  @media (max-width: 768px) {
    flex-wrap: wrap;
    justify-content: center;
  }
`,
        eA = s.ZP.a`
  color: #808080;
  font-size: 0.9rem;
  text-decoration: none;
  transition: all 0.3s ease;
  position: relative;

  &:after {
    content: '';
    position: absolute;
    left: 0;
    bottom: -3px;
    width: 0;
    height: 1px;
    background-color: #4caf50;
    transition: width 0.3s ease;
  }

  &:hover {
    color: #ffffff;

    &:after {
      width: 100%;
    }
  }
`,
        eL = s.ZP.div`
  display: flex;
  align-items: flex-start;
  margin-bottom: 0.3rem;
`,
        eF = s.ZP.span`
  margin-right: 10px;
  color: #4caf50;
  display: flex;
  align-items: center;
  font-size: 1.1rem;
`;
      s.ZP.form`
  margin-top: 1rem;
  display: flex;
  flex-direction: column;
  gap: 1rem;
`,
        s.ZP.input`
  padding: 12px 15px;
  border-radius: 4px;
  border: 1px solid rgba(255, 255, 255, 0.1);
  background-color: rgba(255, 255, 255, 0.05);
  color: #ffffff;
  font-size: 0.9rem;
  transition: all 0.3s ease;

  &:focus {
    outline: none;
    border-color: #4caf50;
    background-color: rgba(255, 255, 255, 0.1);
  }

  &::placeholder {
    color: #808080;
  }
`,
        s.ZP.button`
  padding: 12px 20px;
  background-color: #4caf50;
  color: white;
  border: none;
  border-radius: 4px;
  cursor: pointer;
  font-weight: 600;
  transition: all 0.3s ease;
  text-transform: uppercase;
  letter-spacing: 1px;
  font-size: 0.9rem;

  &:hover {
    background-color: #3d8b40;
    transform: translateY(-2px);
    box-shadow: 0 4px 10px rgba(76, 175, 80, 0.3);
  }

  &:active {
    transform: translateY(0);
  }
`;
      var eI = () => {
        let e = new Date().getFullYear();
        return (0, r.jsxs)(eP, {
          children: [
            (0, r.jsxs)(eD, {
              children: [
                (0, r.jsxs)(eZ, {
                  children: [
                    (0, r.jsx)(eB, { children: 'О компании Гранум' }),
                    (0, r.jsx)(eC, { children: 'ООО "Гранум" - это качественный и надежный сервис, который помогает людям претворять идеи в реальность.' }),
                  ],
                }),
                (0, r.jsxs)(eZ, {
                  children: [
                    (0, r.jsx)(eB, { children: 'Быстрые ссылки' }),
                    (0, r.jsx)(eS, { href: '#catalog', children: 'Каталог' }),
                    (0, r.jsx)(eS, { href: '#works', children: 'Портфолио' }),
                    (0, r.jsx)(eS, { href: '#about', children: 'О нас' }),
                    (0, r.jsx)(eS, { href: '#contact', children: 'Контакты' }),
                  ],
                }),
                (0, r.jsxs)(eZ, {
                  children: [
                    (0, r.jsx)(eB, { children: 'Свяжитесь с нами' }),
                    (0, r.jsxs)(eL, {
                      children: [
                        (0, r.jsx)(eF, { children: (0, r.jsx)('i', { className: 'fas fa-map-marker-alt' }) }),
                        (0, r.jsxs)(eC, {
                          children: [
                            '456581, Челябинская область, м.р-н Еманжелинский,',
                            (0, r.jsx)('br', {}),
                            'г.п. Еманжелинское, г Еманжелинск, ул Советская, дом 11Б',
                          ],
                        }),
                      ],
                    }),
                    (0, r.jsxs)(eL, {
                      children: [(0, r.jsx)(eF, { children: (0, r.jsx)('i', { className: 'fas fa-phone-alt' }) }), (0, r.jsx)(eC, { children: '+7 912 790 26 95' })],
                    }),
                    (0, r.jsxs)(eL, {
                      children: [(0, r.jsx)(eF, { children: (0, r.jsx)('i', { className: 'fas fa-envelope' }) }), (0, r.jsx)(eC, { children: 'Alulianov@yandex.ru' })],
                    }),
                    (0, r.jsxs)(eL, {
                      children: [(0, r.jsx)(eF, { children: (0, r.jsx)('i', { className: 'fas fa-clock' }) }), (0, r.jsx)(eC, { children: 'Пн-Пт 8:00-19:00' })],
                    }),
                  ],
                }),
              ],
            }),
            (0, r.jsxs)(eE, {
              children: [
                (0, r.jsxs)(e$, { children: ['\xa9 ', e, ' ООО "Гранум". Все права защищены.'] }),
                (0, r.jsxs)(eY, {
                  children: [
                    (0, r.jsx)(eA, { href: '/privacy', children: 'Политика конфиденциальности' }),
                    (0, r.jsx)(eA, { href: '/terms', children: 'Условия использования' }),
                    (0, r.jsx)(eA, { href: '/sitemap', children: 'Карта сайта' }),
                  ],
                }),
              ],
            }),
          ],
        });
      };
      let eO = s.zo.header`
  position: fixed;
  top: ${(e) => (e.isScrolled ? '20px' : '0')};
  left: 0;
  right: 0;
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: ${(e) => (e.isScrolled ? '0.8rem 2rem' : '1.2rem 2rem')};
  background-color: ${(e) => (e.isScrolled ? 'rgba(255, 255, 255, 0.95)' : 'transparent')};
  box-shadow: ${(e) => (e.isScrolled ? '0 2px 10px rgba(0, 0, 0, 0.1)' : 'none')};
  transition: all 0.4s ease;
  z-index: 1000;
  box-sizing: border-box;
  backdrop-filter: ${(e) => (e.isScrolled ? 'blur(10px)' : 'none')};
  width: ${(e) => (e.isScrolled ? '60%' : '100%')};
  border-radius: ${(e) => (e.isScrolled ? '40px' : '0')};
  margin: ${(e) => (e.isScrolled, '0 auto')};
`,
        eM = s.zo.div`
  display: flex;
  align-items: center;
`,
        e_ = s.zo.img`
  height: 40px;
  margin-right: 10px;
`,
        eN = s.zo.h1`
  font-size: ${(e) => (e.isScrolled ? '1.5rem' : '1.8rem')};
  font-weight: 700;
  color: ${(e) => (e.isScrolled ? '#333' : '#fff')};
  margin: 0;
  transition: all 0.3s ease;
  text-shadow: ${(e) => (e.isScrolled ? 'none' : '0 2px 4px rgba(0, 0, 0, 0.3)')};
`,
        eV = s.zo.nav`
  display: flex;
  align-items: center;
`,
        eT = s.zo.ul`
  display: flex;
  list-style: none;
  margin: 0;
  padding: 0;

  @media (max-width: 768px) {
    display: none;
  }
`,
        eX = s.zo.li`
  margin-left: 2rem;

  a {
    color: ${(e) => (e.isScrolled ? '#333' : '#fff')};
    text-decoration: none;
    font-weight: 500;
    font-size: 1.1rem;
    transition: all 0.2s ease;
    text-shadow: ${(e) => (e.isScrolled ? 'none' : '0 1px 2px rgba(0, 0, 0, 0.3)')};

    &:hover {
      color: ${(e) => (e.isScrolled ? '#4caf50' : '#e0e0e0')};
    }
  }
`,
        eH = s.zo.button`
  display: none;
  background: none;
  border: none;
  color: ${(e) => (e.isScrolled ? '#333' : '#fff')};
  font-size: 1.5rem;
  cursor: pointer;

  @media (max-width: 768px) {
    display: block;
  }
`,
        eR = s.zo.div`
  position: fixed;
  top: 0;
  right: 0;
  width: 70%;
  max-width: 300px;
  height: 100vh;
  background-color: white;
  box-shadow: -2px 0 10px rgba(0, 0, 0, 0.1);
  transform: ${(e) => (e.isOpen ? 'translateX(0)' : 'translateX(100%)')};
  transition: transform 0.3s ease;
  z-index: 1001;
  padding: 2rem;
  display: flex;
  flex-direction: column;
`;
      s.zo.ul`
  list-style: none;
  padding: 0;
  margin: 2rem 0 0 0;
`;
      let eq = s.zo.li`
  margin-bottom: 1.5rem;

  a {
    color: #333;
    text-decoration: none;
    font-weight: 500;
    font-size: 1.2rem;

    &:hover {
      color: #4caf50;
    }
  }
`,
        eG = s.zo.button`
  align-self: flex-end;
  background: none;
  border: none;
  font-size: 1.5rem;
  cursor: pointer;
`,
        eU = s.zo.div`
  position: fixed;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  background-color: rgba(0, 0, 0, 0.5);
  opacity: ${(e) => (e.isOpen ? 1 : 0)};
  visibility: ${(e) => (e.isOpen ? 'visible' : 'hidden')};
  transition: all 0.3s ease;
  z-index: 999;
`;
      var eW = (e) => {
        let {
            initialLogoSrc: t = 'https://storage.yandexcloud.net/ilia/2025-03-17%2015.36.35%20(2)%20(2).png',
            scrolledLogoSrc: i = 'https://storage.yandexcloud.net/ilia/2025-03-17%2015.36.35%20(2)%20(3).png',
          } = e,
          [o, a] = (0, n.useState)(!1),
          [s, d] = (0, n.useState)(!1),
          [l, c] = (0, n.useState)(t);
        (0, n.useEffect)(() => {
          let e = () => {
            window.scrollY > 50 ? (a(!0), c(i)) : (a(!1), c(t));
          };
          return (
            window.addEventListener('scroll', e),
            () => {
              window.removeEventListener('scroll', e);
            }
          );
        }, [t, i]);
        let p = () => {
            d(!s);
          },
          x = (e, t) => {
            e.preventDefault();
            let i = document.getElementById(t);
            i && i.scrollIntoView({ behavior: 'smooth' }), s && p();
          };
        return (0, r.jsxs)(r.Fragment, {
          children: [
            (0, r.jsxs)(eO, {
              isScrolled: o,
              children: [
                (0, r.jsxs)(eM, { children: [(0, r.jsx)(e_, { src: l, alt: 'Granum Stone Works Logo' }), (0, r.jsx)(eN, { isScrolled: o, children: 'Гранум' })] }),
                (0, r.jsxs)(eV, {
                  children: [
                    (0, r.jsxs)(eT, {
                      children: [
                        (0, r.jsx)(eX, { isScrolled: o, children: (0, r.jsx)('a', { href: '#catalog', onClick: (e) => x(e, 'catalog'), children: 'Каталог' }) }),
                        (0, r.jsx)(eX, { isScrolled: o, children: (0, r.jsx)('a', { href: '#works', onClick: (e) => x(e, 'works'), children: 'Работы' }) }),
                        (0, r.jsx)(eX, { isScrolled: o, children: (0, r.jsx)('a', { href: '#about', onClick: (e) => x(e, 'about'), children: 'О нас' }) }),
                        (0, r.jsx)(eX, { isScrolled: o, children: (0, r.jsx)('a', { href: '#contact', onClick: (e) => x(e, 'contact'), children: 'Связаться' }) }),
                      ],
                    }),
                    (0, r.jsx)(eH, { isScrolled: o, onClick: p, children: '☰' }),
                  ],
                }),
              ],
            }),
            (0, r.jsxs)(eR, {
              isOpen: s,
              children: [
                (0, r.jsx)(eG, { onClick: p, children: '✕' }),
                (0, r.jsx)(eq, { children: (0, r.jsx)('a', { href: '#catalog', onClick: (e) => x(e, 'catalog'), children: 'Каталог' }) }),
                (0, r.jsx)(eq, { children: (0, r.jsx)('a', { href: '#works', onClick: (e) => x(e, 'works'), children: 'Работы' }) }),
                (0, r.jsx)(eq, { children: (0, r.jsx)('a', { href: '#about', onClick: (e) => x(e, 'about'), children: 'О нас' }) }),
                (0, r.jsx)(eq, { children: (0, r.jsx)('a', { href: '#contact', onClick: (e) => x(e, 'contact'), children: 'Связаться' }) }),
              ],
            }),
            (0, r.jsx)(eU, { isOpen: s, onClick: p }),
          ],
        });
      };
      let eQ = s.ZP.button`
  display: flex;
  justify-content: center;
  align-items: center;
  width: 48px;
  height: 48px;
  border-radius: 50%;
  background-color: rgba(0, 0, 0, 0.8);
  backdrop-filter: blur(5px);
  box-shadow: 0 2px 10px rgba(0, 0, 0, 0.1);
  transition: all 0.3s ease;
  cursor: pointer;
  border: none;
  outline: none;
  padding: 0;

  &:hover {
    background-color: rgba(0, 0, 0, 0.5);
    box-shadow: 0 4px 12px rgba(0, 0, 0, 0.2);
    transform: scale(1.05);
  }

  &:active {
    transform: scale(0.98);
  }

  &:focus-visible {
    box-shadow: 0 0 0 3px rgba(255, 255, 255, 0.5);
  }
`,
        eJ = s.ZP.svg`
  width: 28px;
  height: 28px;
  transition: all 0.3s ease;

  ${eQ}:hover & {
    transform: scale(1.1);
  }
`,
        eK = s.ZP.div`
  position: absolute;
  top: 50%;
  transform: translateY(-50%);
  ${(e) => ('left' === e.position ? 'left: 20px;' : 'right: 20px;')}
  z-index: 10;

  @media (max-width: 768px) {

    transform:  translateY(56px) scale(0.8);
  }
`,
        e0 = (e) => {
          let { onClick: t, position: i } = e;
          return (0, r.jsx)(eK, {
            position: i,
            children: (0, r.jsx)(eQ, {
              onClick: t,
              'aria-label': 'Previous slide',
              children: (0, r.jsx)(eJ, {
                viewBox: '0 0 24 24',
                fill: 'none',
                xmlns: 'http://www.w3.org/2000/svg',
                children: (0, r.jsx)('path', { d: 'M15 18L9 12L15 6', stroke: '#FFFFFF', strokeWidth: '2.5', strokeLinecap: 'round', strokeLinejoin: 'round' }),
              }),
            }),
          });
        },
        e1 = (e) => {
          let { onClick: t, position: i } = e;
          return (0, r.jsx)(eK, {
            position: i,
            children: (0, r.jsx)(eQ, {
              onClick: t,
              'aria-label': 'Next slide',
              children: (0, r.jsx)(eJ, {
                viewBox: '0 0 24 24',
                fill: 'none',
                xmlns: 'http://www.w3.org/2000/svg',
                children: (0, r.jsx)('path', { d: 'M9 18L15 12L9 6', stroke: '#FFFFFF', strokeWidth: '2.5', strokeLinecap: 'round', strokeLinejoin: 'round' }),
              }),
            }),
          });
        },
        e5 = s.ZP.div`
  position: fixed;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  background-color: rgba(0, 0, 0, 0.8);
  display: flex;
  align-items: center;
  justify-content: center;
  z-index: 1000;
  animation: fadeIn 0.3s ease;

  @keyframes fadeIn {
    from {
      opacity: 0;
    }
    to {
      opacity: 1;
    }
  }
`,
        e2 = s.ZP.div`
  background-color: black;
  width: 100%;
  height: 100%;
  position: relative;
  display: flex;
  flex-direction: column;
  animation: fadeIn 0.4s ease;

  @keyframes fadeIn {
    from {
      opacity: 0;
    }
    to {
      opacity: 1;
    }
  }
`,
        e3 = s.ZP.button`
  position: absolute;
  top: 20px;
  right: 20px;
  background: rgba(0, 0, 0, 0.6);
  color: white;
  border: none;
  width: 40px;
  height: 40px;
  border-radius: 50%;
  font-size: 24px;
  display: flex;
  align-items: center;
  justify-content: center;
  cursor: pointer;
  z-index: 10;
  transition: background 0.2s;

  &:hover {
    background: rgba(0, 0, 0, 0.8);
  }

  @media (max-width: 768px) {
    top: 10px;
    right: 10px;
    width: 36px;
    height: 36px;
    font-size: 20px;
  }
`,
        e8 = s.ZP.div`
  flex: 1;
  display: flex;
  align-items: center;
  justify-content: center;
  overflow: hidden;
  padding: 20px;
  position: relative;

  @media (max-width: 768px) {
    padding: 10px;
  }
`,
        e4 = s.ZP.img`
  max-width: 100%;
  max-height: 85vh;
  object-fit: contain;
  transition: opacity 0.3s ease;

  @media (max-width: 768px) {
    max-height: 75vh;
  }
`,
        e6 = s.ZP.div`
  display: flex;
  justify-content: center;
  gap: 10px;
  padding: 15px;
  background-color: rgba(0, 0, 0, 0.5);
  overflow-x: auto;

  &::-webkit-scrollbar {
    height: 6px;
  }

  &::-webkit-scrollbar-track {
    background: #333;
  }

  &::-webkit-scrollbar-thumb {
    background: #666;
    border-radius: 3px;
  }

  @media (max-width: 768px) {
    padding: 10px 5px;
    gap: 6px;
  }
`,
        e7 = s.ZP.img`
  width: 80px;
  height: 60px;
  object-fit: cover;
  border-radius: 4px;
  cursor: pointer;
  transition: transform 0.3s, box-shadow 0.3s;
  border: ${(e) => (e.isSelected ? '3px solid #3b7a57' : '3px solid transparent')};
  opacity: ${(e) => (e.isSelected ? 1 : 0.7)};

  &:hover {
    transform: translateY(-5px);
    box-shadow: 0 5px 15px rgba(0, 0, 0, 0.3);
    opacity: 1;
  }

  @media (max-width: 768px) {
    width: 60px;
    height: 45px;
    border-width: 2px;

    &:hover {
      transform: translateY(-3px);
    }
  }
`;
      s.ZP.h2`
  position: absolute;
  top: 20px;
  left: 20px;
  color: white;
  font-size: 1.5rem;
  background-color: rgba(0, 0, 0, 0.6);
  padding: 8px 15px;
  border-radius: 4px;
  max-width: 70%;
  text-overflow: ellipsis;
  overflow: hidden;
  white-space: nowrap;

  @media (max-width: 768px) {
    font-size: 1.1rem;
    top: 10px;
    left: 10px;
    padding: 6px 10px;
    max-width: 60%;
  }

  @media (max-width: 480px) {
    font-size: 0.9rem;
    max-width: 50%;
  }
`;
      let e9 = s.ZP.div`
  @media (max-width: 768px) {
    svg {
      width: 30px;
      height: 30px;
    }
  }

  @media (max-width: 480px) {
    svg {
      width: 24px;
      height: 24px;
    }
  }
`;
      var te = (e) => {
        let { isOpen: t, onClose: i, product: o } = e,
          [a, s] = (0, n.useState)(o.imageSrc),
          [d, l] = (0, n.useState)(0),
          c = [o.imageSrc, ...(o.additionalImages || [])];
        (0, n.useEffect)(() => {
          let e = c.findIndex((e) => e === a);
          l(e >= 0 ? e : 0);
        }, [a, c]),
          (0, n.useEffect)(
            () => (
              (document.body.style.overflow = 'hidden'),
              () => {
                document.body.style.overflow = 'auto';
              }
            ),
            [],
          ),
          (0, n.useEffect)(() => {
            let e = (e) => {
              'Escape' === e.key ? i() : 'ArrowRight' === e.key ? p() : 'ArrowLeft' === e.key && x();
            };
            return (
              window.addEventListener('keydown', e),
              () => {
                window.removeEventListener('keydown', e);
              }
            );
          }, [i, d]);
        let p = () => {
            if (c.length > 1) {
              let e = (d + 1) % c.length;
              l(e), s(c[e]);
            }
          },
          x = () => {
            if (c.length > 1) {
              let e = (d - 1 + c.length) % c.length;
              l(e), s(c[e]);
            }
          };
        return (0, r.jsx)(e5, {
          onClick: i,
          children: (0, r.jsxs)(e2, {
            onClick: (e) => e.stopPropagation(),
            children: [
              (0, r.jsx)(e3, { onClick: i, children: '\xd7' }),
              (0, r.jsxs)(e8, {
                children: [
                  (0, r.jsx)(e4, { src: a, alt: o.title }),
                  c.length > 1 &&
                    (0, r.jsxs)(r.Fragment, {
                      children: [
                        (0, r.jsx)(e9, { children: (0, r.jsx)(e0, { onClick: x, position: 'left' }) }),
                        (0, r.jsx)(e9, { children: (0, r.jsx)(e1, { onClick: p, position: 'right' }) }),
                      ],
                    }),
                ],
              }),
              c.length > 1 &&
                (0, r.jsx)(e6, {
                  children: c.map((e, t) =>
                    (0, r.jsx)(
                      e7,
                      {
                        src: e,
                        alt: `${o.title} - изображение ${t + 1}`,
                        onClick: () => {
                          s(e), l(t);
                        },
                        isSelected: a === e,
                      },
                      t,
                    ),
                  ),
                }),
            ],
          }),
        });
      };
      let tt = s.ZP.div`
  position: relative;
  width: 100%;
  height: 100vh;
  overflow: hidden;

  @media (max-width: 768px) {
    height: 100vh; /* Ensure full height on mobile */
  }
`,
        ti = s.ZP.div`
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  background-image: linear-gradient(rgba(0, 0, 0, 0.4), rgba(0, 0, 0, 0.3)), url(${(e) => e.imageSrc});
  background-size: cover;
  background-position: center;
  transition: opacity 0.5s ease-in-out;
  opacity: 0;
  animation: fadeIn 1s forwards;

  @keyframes fadeIn {
    to {
      opacity: 1;
    }
  }
`,
        tr = s.ZP.div`
  position: absolute;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  text-align: center;
  width: 80%;
  max-width: 800px;

  @media (max-width: 768px) {
    width: 90%;
  }

  @media (max-width: 480px) {
    width: 95%;
  }
`,
        to = s.ZP.div`
  position: relative;
  padding: 20px;
  border-radius: 10px;

  @media (max-width: 768px) {
    padding: 15px;
  }

  @media (max-width: 480px) {
    padding: 10px;
  }
`,
        ta = s.ZP.div`
  padding: 3rem;
  border-radius: 15px;
  text-align: center;

  @media (max-width: 768px) {
    padding: 2rem;
  }

  @media (max-width: 480px) {
    padding: 1.5rem;
  }
`,
        tn = s.ZP.h1`
  font-size: 3.5rem;
  font-weight: 700;
  color: #ffffff;
  margin-bottom: 1rem;
  text-shadow: 2px 2px 4px rgba(0, 0, 0, 0.5);

  @media (max-width: 768px) {
    font-size: 2.5rem;
  }

  @media (max-width: 480px) {
    font-size: 2rem;
  }
`,
        ts = s.ZP.h2`
  font-size: 1.8rem;
  font-weight: 400;
  color: #f0f0f0;
  margin-bottom: 2rem;
  text-shadow: 1px 1px 3px rgba(0, 0, 0, 0.5);

  @media (max-width: 768px) {
    font-size: 1.4rem;
  }

  @media (max-width: 480px) {
    font-size: 1.2rem;
  }
`,
        td = (0, s.F4)`
  0%, 100% {
    transform: rotateY(-15deg) scale(1) rotate(-4deg);
    opacity: 1;
  }
  30% {
    transform: rotateY(0deg) scale(1.15) rotate(-2deg);
    opacity: 1;
  }
  50% {
    transform: rotateY(15deg) scale(1.3) rotate(0deg);
    opacity: 1;
  }
  70% {
    transform: rotateY(0deg) scale(1.15) rotate(2deg);
    opacity: 1;
  }
`,
        tl = s.ZP.img`
  width: 24px;
  height: 24px;
  animation: ${td} 3s ease-in-out infinite;
  transform-style: preserve-3d;

  @media (max-width: 768px) {
    width: 20px;
    height: 20px;
  }

  @media (max-width: 480px) {
    width: 18px;
    height: 18px;
  }
`,
        tc = s.ZP.button`
  padding: 1rem 2.5rem;
  font-size: 1.2rem;
  font-weight: 600;
  background-color: rgb(0, 0, 0, 0.6);
  color: #ffffff;
  border: none;
  border-radius: 50px;
  cursor: pointer;
  transition: all 0.3s ease;
  text-transform: uppercase;
  letter-spacing: 1px;

  margin: 0 auto;
  display: flex;
  align-items: center;
  justify-content: center;
  gap: 10px;

  @media (max-width: 768px) {
    font-size: 1rem;
    padding: 0.8rem 2rem;

  }

  @media (max-width: 480px) {
    font-size: 0.9rem;
    padding: 0.7rem 1.5rem;
  }

  &:hover {
    background-color: rgb(0, 0, 0, 1);
    transform: translateY(-3px);
    box-shadow: 0 4px 8px rgba(0, 0, 0, 0.2);
  }

  &:active {
    transform: translateY(-1px);
    box-shadow: 0 2px 4px rgba(0, 0, 0, 0.2);
  }
`,
        tp = s.ZP.div`
  display: flex;
  justify-content: center;
  margin-top: 1rem;

  @media (max-width: 480px) {
    margin-top: 0.75rem;
  }
`,
        tx = s.ZP.div`
  width: 12px;
  height: 12px;
  border-radius: 50%;
  background-color: ${(e) => (e.active ? '#ffffff' : 'rgba(255, 255, 255, 0.5)')};
  margin: 0 5px;
  cursor: pointer;
  transition: background-color 0.3s ease, transform 0.3s ease;

  &:hover {
    transform: scale(1.2);
  }

  @media (max-width: 480px) {
    width: 10px;
    height: 10px;
    margin: 0 4px;
  }
`;
      s.ZP.button`
  position: absolute;
  top: 50%;
  transform: translateY(-50%);
  background: none;
  border: none;
  cursor: pointer;
  transition: color 0.3s ease;

  left: ${(e) => ('left' === e.position ? '10px' : 'auto')};
  right: ${(e) => ('right' === e.position ? '10px' : 'auto')};

  &:hover {
    color: #3b7a57;
  }

  &:before {
    content: '';
    display: inline-block;
    width: 2rem;
    height: 2rem;
    vertical-align: middle;

    ${(e) =>
      'left' === e.position
        ? `
            transform: rotate(180deg);
          `
        : ''}
  }

  svg {
    width: 100%;
    height: 100%;
    fill: currentColor;
  }

  @media (max-width: 768px) {
    &:before {
      width: 1.75rem;
      height: 1.75rem;
    }

  
  }

  @media (max-width: 480px) {
    &:before {
      width: 1.5rem;
      height: 1.5rem;
    }
  }
`;
      let tm = (0, s.F4)`
  from {
    opacity: 0;
    transform: translateY(20px);
  }
  to {
    opacity: 1;
    transform: translateY(0);
  }
`,
        th = s.ZP.div`
  opacity: 0;
  animation: ${tm} 0.8s ease-out forwards;
  animation-delay: ${(e) => e.delay || 0}s;
`,
        tg = s.ZP.div`
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  transition: opacity 0.5s ease-in-out;
  animation: fadeIn 1s forwards;

  &::after {
    content: '';
    position: absolute;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    background: rgba(0, 0, 0, 0.2);
  }

  video {
    width: 120%;
    height: 100%;
    object-fit: cover;
    object-position: center;
    min-height: 100%;
    min-width: 100%;
    position: absolute;
    top: 50%;
    left: 50%;
    transform: translate(-50%, -50%);
    z-index: 0;

    @media (max-width: 768px) {
      width: 130%; /* Slightly wider to ensure coverage on mobile */
    }

    @media (max-width: 480px) {
      width: 150%; /* Even wider for small screens */
    }
  }
`;
      s.ZP.p`
  display: flex;
  align-items: center;
  justify-content: center;
  height: 100%;
  padding: 20px;
  background-color: rgba(0, 0, 0, 0.7);
  color: white;
  text-align: center;
  font-size: 16px;
  line-height: 1.5;

  @media (max-width: 768px) {
    padding: 15px;
    font-size: 14px;
  }

  @media (max-width: 480px) {
    padding: 10px;
    font-size: 12px;
  }
`;
      var tf = (e) => {
        let { slides: t, buttonText: i, onButtonClick: o } = e,
          [a, s] = (0, n.useState)(1),
          [d, l] = (0, n.useState)(!1),
          c = (0, n.useRef)(null);
        return (
          (0, n.useEffect)(() => {
            if (t[0]?.type === 'video') {
              let e = document.createElement('video');
              (e.src = t[0].imageSrc),
                (e.preload = 'auto'),
                e.addEventListener('canplay', () => {
                  l(!0), s(0);
                }),
                e.addEventListener('error', (e) => {
                  console.error('Video loading error:', e);
                });
            }
          }, [t]),
          (0, r.jsxs)(tt, {
            children: [
              (() => {
                let e = t[a];
                return 'video' === (e.type || 'image') && d
                  ? (0, r.jsx)(tg, {
                      children: (0, r.jsx)('video', {
                        ref: c,
                        autoPlay: !0,
                        muted: !0,
                        loop: !0,
                        playsInline: !0,
                        poster: t[1]?.imageSrc,
                        onError: (e) => console.error('Video playback error:', e),
                        children: (0, r.jsx)('source', { src: e.imageSrc, type: 'video/mp4' }),
                      }),
                    })
                  : (0, r.jsx)(ti, { imageSrc: e.imageSrc });
              })(),
              (0, r.jsxs)(tr, {
                children: [
                  (0, r.jsx)(to, {
                    children: (0, r.jsxs)(ta, {
                      children: [
                        (0, r.jsx)(th, { children: (0, r.jsx)(tn, { children: t[a].title }) }),
                        (0, r.jsx)(th, { delay: 0.3, children: (0, r.jsx)(ts, { children: t[a].subtitle }) }),
                        (0, r.jsx)(th, {
                          delay: 0.6,
                          children: (0, r.jsxs)(tc, {
                            onClick: o,
                            children: [(0, r.jsx)(tl, { src: 'https://storage.yandexcloud.net/ilia/2025-03-17%2015.36.35%20(2)%20(2).png', alt: 'Button icon' }), i],
                          }),
                        }),
                      ],
                    }),
                  }),
                  (0, r.jsx)(tp, { children: t.map((e, t) => (0, r.jsx)(tx, { active: t === a, onClick: () => s(t) }, t)) }),
                  (0, r.jsx)(e0, {
                    onClick: () => {
                      s((e) => (0 === e ? t.length - 1 : e - 1));
                    },
                    position: 'left',
                  }),
                  (0, r.jsx)(e1, {
                    onClick: () => {
                      s((e) => (e + 1) % t.length);
                    },
                    position: 'right',
                  }),
                ],
              }),
            ],
          })
        );
      };
      i(4172), i(6936);
      var tb = i(9304),
        tu = i(2261);
      let tw = (0, s.F4)`
  from {
    opacity: 0;
    transform: translateY(20px);
  }
  to {
    opacity: 1;
    transform: translateY(0);
  }
`,
        tj = s.ZP.section`
  width: 100%;
  box-sizing: border-box;
  max-width: 1400px;
  margin: 4rem auto;
  padding: 0 1rem;
  position: relative;
  overflow: hidden;
`,
        tv = s.ZP.div`
  text-align: center;
  margin-bottom: 3rem;
  animation: ${tw} 0.8s ease-out forwards;
`,
        ty = s.ZP.h2`
  font-size: 2.5rem;
  font-weight: 700;
  color: #2d3748;
  margin-bottom: 1rem;
  
  @media (max-width: 768px) {
    font-size: 2rem;
  }
`,
        tk = s.ZP.div`
  position: relative;
  margin: 0 auto;
  max-width: 1400px;
  padding: 0 20px;
  
  .swiper {
    padding-bottom: 50px; /* Space for pagination dots */
  }
  
  .swiper-pagination {
    bottom: 0;
  }
  
  .swiper-pagination-bullet {
    width: 10px;
    height: 10px;
    background: #ccc;
    opacity: 0.7;
    transition: all 0.3s ease;
  }
  
  .swiper-pagination-bullet-active {
    background: #000;
    opacity: 1;
    width: 12px;
    height: 12px;
  }
`,
        tz = s.ZP.img`
  width: 100%;
  height: 300px;
  object-fit: cover;
  border-radius: 12px;
  transition: transform 0.5s ease;
`,
        tP = s.ZP.div`
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  background: linear-gradient(
    to bottom,
    rgba(0, 0, 0, 0.1) 0%,
    rgba(0, 0, 0, 0.7) 100%
  );
  border-radius: 12px;
  opacity: 0;
  transition: opacity 0.3s ease;
`,
        tD = s.ZP.div`
  position: absolute;
  bottom: 0;
  left: 0;
  width: 100%;
  box-sizing: border-box;
  padding: 1.0rem;
  color: white;
  z-index: 2;
  transform: translateY(20px);
  opacity: 0;
  transition: all 0.3s ease;
  
  div:hover & {
    transform: translateY(0);
    opacity: 1;
  }
`,
        tZ = s.ZP.h3`
  font-size: 1.2rem;
  font-weight: 600;
  margin-bottom: 0.5rem;
  text-shadow: 1px 1px 3px rgba(0, 0, 0, 0.9);
`,
        tB = s.ZP.p`
  font-size: 0.9rem;
  line-height: 1.4;
  margin: 0;
  text-shadow: 1px 1px 3px rgba(0, 0, 0, 0.5);
  display: -webkit-box;
  -webkit-line-clamp: 2;
  -webkit-box-orient: vertical;
  overflow: hidden;
`,
        tS = s.ZP.div`
  position: absolute;
  top: 50%;
  left: 0;
  right: 0;
  transform: translateY(-50%);
  z-index: 10;
  pointer-events: none;
  display: flex;
  justify-content: space-between;
  padding: 0 10px;
  
  /* This ensures the buttons themselves can be clicked */
  & > * {
    pointer-events: auto;
  }
  
  @media (max-width: 768px) {
    padding: 0 5px;
  }
`;
      var tC = (e) => {
          let { works: t, onWorkClick: i } = e,
            o = (0, n.useRef)(null);
          return (0, r.jsxs)(tj, {
            id: 'works',
            children: [
              (0, r.jsx)(tv, { children: (0, r.jsx)(ty, { children: 'Наши работы' }) }),
              (0, r.jsxs)(tk, {
                children: [
                  (0, r.jsx)(tu.tq, {
                    ref: o,
                    modules: [tb.tl, tb.pt],
                    spaceBetween: 30,
                    slidesPerView: 1,
                    pagination: { clickable: !0 },
                    autoplay: { delay: 5e3, disableOnInteraction: !1 },
                    breakpoints: { 600: { slidesPerView: 2 }, 900: { slidesPerView: 3 }, 1200: { slidesPerView: 4 } },
                    children: t.map((e) =>
                      (0, r.jsx)(
                        tu.o5,
                        {
                          children: (0, r.jsxs)('div', {
                            onClick: () => i(e),
                            style: { cursor: 'pointer', position: 'relative', borderRadius: '12px', overflow: 'hidden' },
                            children: [
                              (0, r.jsx)(tz, { src: e.imageSrc, alt: e.title }),
                              (0, r.jsx)(tP, {}),
                              (0, r.jsxs)(tD, { children: [(0, r.jsx)(tZ, { children: e.title }), e.description && (0, r.jsx)(tB, { children: e.description })] }),
                            ],
                          }),
                        },
                        e.id,
                      ),
                    ),
                  }),
                  (0, r.jsxs)(tS, {
                    children: [
                      (0, r.jsx)(e0, {
                        onClick: () => {
                          o.current && o.current.swiper && o.current.swiper.slidePrev();
                        },
                        position: 'left',
                      }),
                      (0, r.jsx)(e1, {
                        onClick: () => {
                          o.current && o.current.swiper && o.current.swiper.slideNext();
                        },
                        position: 'right',
                      }),
                    ],
                  }),
                ],
              }),
            ],
          });
        },
        tE = i(6950);
      let t$ = s.ZP.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  min-height: 100vh;
  width: 100%;
  background-color: #f5f5f5;
`;
      s.ZP.h1`
  color: #333;
  font-size: 2rem;
  margin-bottom: 1rem;
`,
        s.ZP.div`
  background-color: white;
  border-radius: 8px;
  box-shadow: 0 4px 8px rgba(0, 0, 0, 0.1);
  padding: 2rem;
  max-width: 500px;
  width: 100%;
  margin: 2rem 0;
`,
        s.ZP.button`
  background-color: #4caf50;
  color: white;
  border: none;
  padding: 0.5rem 1rem;
  border-radius: 4px;
  cursor: pointer;
  font-size: 1rem;
  margin-top: 1rem;

  &:hover {
    background-color: #45a049;
  }
`;
      var tY = function (e) {
          let { initialCatalogData: t = [] } = e,
            [i, o] = (0, n.useState)(null),
            [a, s] = (0, n.useState)(!1);
          return (0, r.jsxs)(t$, {
            children: [
              (0, r.jsx)(tE.Z, {}),
              (0, r.jsx)(eW, {}),
              (0, r.jsx)(tf, {
                slides: [
                  {
                    title: 'Собственное производство',
                    subtitle: 'Качество, которое восхищает',
                    imageSrc: 0.5 > Math.random() ? 'https://storage.yandexcloud.net/ilia/first_granum.mp4' : 'https://storage.yandexcloud.net/ilia/second_granum.mp4',
                    type: 'video',
                  },
                  {
                    title: 'Премиальные решения с камнем',
                    subtitle: 'Создайте пространство, которое восхищает',
                    imageSrc: 'https://storage.yandexcloud.net/ilia/IMG_5153-min.jpg',
                  },
                  {
                    title: 'Искусное мастерство',
                    subtitle: 'Неподвластное времени очарование и стиль',
                    imageSrc: 'https://storage.yandexcloud.net/ilia/11258999099890122_543e.jpg',
                  },
                  {
                    title: 'Беспрецедентное качество',
                    subtitle: 'Природная изящность, которая впечатляет',
                    imageSrc: 'https://storage.yandexcloud.net/ilia/Lez-4599-1-1536x1024.jpg',
                  },
                ],
                buttonText: 'К каталогу',
                onButtonClick: () => {
                  let e = document.getElementById('catalog');
                  e && e.scrollIntoView({ behavior: 'smooth' });
                },
              }),
              (0, r.jsx)(ed, { initialData: t }),
              (0, r.jsx)(tC, {
                works: [
                  {
                    id: 1,
                    title: 'Плита терм. гр.Мансуровский 600х300х30',
                    imageSrc: 'https://storage.yandexcloud.net/ilia/%D1%80%D0%B0%D0%B1%D0%BE%D1%82%D1%8B/%D0%BF%D0%BB%D0%B8%D1%82%D0%BA%D0%B0.jpg',
                  },
                  {
                    id: 2,
                    title: 'Подоконники полированные гр.Дымовский 1200х450х50.',
                    imageSrc:
                      'https://storage.yandexcloud.net/ilia/%D1%80%D0%B0%D0%B1%D0%BE%D1%82%D1%8B/%D0%BF%D0%BE%D0%B4%D0%BE%D0%BA%D0%BE%D0%BD%D0%BD%D0%B8%D0%BA.jpg',
                    additionalImages: [
                      'https://storage.yandexcloud.net/ilia/%D1%80%D0%B0%D0%B1%D0%BE%D1%82%D1%8B/%D0%BF%D0%BE%D0%B4%D0%BE%D0%BA%D0%BE%D0%BD%D0%BD%D0%B8%D0%BA%D0%B83.jpg',
                    ],
                  },
                  {
                    id: 3,
                    title: 'Входная группа: Южно-Султаевский гранит',
                    imageSrc: 'https://storage.yandexcloud.net/ilia/%D1%80%D0%B0%D0%B1%D0%BE%D1%82%D1%8B/%D0%B2%D1%85%D0%BE%D0%B43.jpg',
                    additionalImages: [
                      'https://storage.yandexcloud.net/ilia/%D1%80%D0%B0%D0%B1%D0%BE%D1%82%D1%8B/%D0%B2%D1%85%D0%BE%D0%B41.jpg',
                      'https://storage.yandexcloud.net/ilia/%D1%80%D0%B0%D0%B1%D0%BE%D1%82%D1%8B/%D0%B2%D1%85%D0%BE%D0%B42.jpg',
                    ],
                  },
                  {
                    id: 4,
                    title: 'Входная группа: Дымовский гранит (обработан пропиткой с эффектом мокрого камня)',
                    imageSrc: 'https://storage.yandexcloud.net/ilia/%D1%80%D0%B0%D0%B1%D0%BE%D1%82%D1%8B/%D1%81%D1%82%D1%8B%D0%BA4.jpg',
                    additionalImages: [
                      'https://storage.yandexcloud.net/ilia/%D1%80%D0%B0%D0%B1%D0%BE%D1%82%D1%8B/%D1%81%D1%82%D1%8B%D0%BA3.jpg',
                      'https://storage.yandexcloud.net/ilia/%D1%80%D0%B0%D0%B1%D0%BE%D1%82%D1%8B/%D1%81%D1%82%D1%8B%D0%BA1.jpg',
                    ],
                  },
                  {
                    id: 5,
                    title: 'Входная группа: Дымовский гранит (обработан пропиткой с эффектом мокрого камня)',
                    imageSrc: 'https://storage.yandexcloud.net/ilia/%D1%80%D0%B0%D0%B1%D0%BE%D1%82%D1%8B/%D1%81%D1%82%D1%8B%D0%BA5.jpg',
                    additionalImages: ['https://storage.yandexcloud.net/ilia/%D1%80%D0%B0%D0%B1%D0%BE%D1%82%D1%8B/%D1%81%D1%82%D1%8B%D0%BA6.jpg'],
                  },
                  {
                    id: 5,
                    title: 'Входная группа: Балтийский (Карелия)',
                    imageSrc: ' https://storage.yandexcloud.net/ilia/%D1%80%D0%B0%D0%B1%D0%BE%D1%82%D1%8B/%D1%81%D1%82%D1%8B%D0%BA7.jpg',
                  },
                ],
                onWorkClick: (e) => {
                  o(e), s(!0);
                },
              }),
              a && i && (0, r.jsx)(te, { isOpen: a, onClose: () => s(!1), product: i }),
              (0, r.jsx)(D, {}),
              (0, r.jsx)(ez, { telegramBotToken: '7694051593:AAGBls3mX5vQwvn4s95-gdOZHD9_96aNC7U' }),
              (0, r.jsx)(eI, {}),
            ],
          });
        },
        tA = !0;
      function tL(e) {
        let { catalogData: t } = e;
        return (
          console.log('Home component rendering with catalogData:', t ? t.length : 0, 'items'),
          (0, r.jsxs)(r.Fragment, {
            children: [
              (0, r.jsxs)(a(), {
                children: [
                  (0, r.jsx)('title', { children: 'Гранум - Изделия из натурального камня' }),
                  (0, r.jsx)('meta', { name: 'description', content: 'Премиальные решения с камнем - создайте пространство, которое восхищает' }),
                  (0, r.jsx)('meta', { name: 'viewport', content: 'width=device-width, initial-scale=1' }),
                  (0, r.jsx)('link', { rel: 'icon', href: '/favicon.ico' }),
                ],
              }),
              (0, r.jsx)(tY, { initialCatalogData: t }),
            ],
          })
        );
      }
    },
    6950: function (e, t, i) {
      'use strict';
      var r = i(7294);
      t.Z = (e) => {
        let {
          title: t = 'Купить гранит и мрамор от производителя Гранум в Челябинске | Выгодные цены',
          description:
            i = "Производство и продажа изделий из гранита и мрамора в Челябинске, Еманжелинске и во всех других регионах России от 'Гранум'. Заказать изделия из камня по выгодным ценам. Столешницы, ступени, подоконники, бордюры, балясины, толстомеры. Выгодные цены, доставка. Каталог и контакты.",
          keywords:
            o = 'натуральный камень Челябинск, гранит, мрамор, купить камень, изделия из камня, производство изделий из камня, Гранум Челябинск, столешницы из камня, подоконники из камня, ступени из камня, облицовка камнем, бордюры гранитные, балясины из камня, толстомеры гранитные, камень от производителя, продажа камня, доставка камня, контакты Гранум, слэб, гранитные полосы, тактильные плиты',
          ogImage: a = 'https://storage.yandexcloud.net/ilia/IMG_5153-min.jpg',
          canonicalUrl: n,
        } = e;
        return (
          (0, r.useEffect)(() => {
            document.title = t;
            let e = document.querySelector('meta[name="description"]');
            if (e) e.setAttribute('content', i);
            else {
              let e = document.createElement('meta');
              (e.name = 'description'), (e.content = i), document.head.appendChild(e);
            }
            let r = document.querySelector('meta[name="keywords"]');
            if (r) r.setAttribute('content', o);
            else {
              let e = document.createElement('meta');
              (e.name = 'keywords'), (e.content = o), document.head.appendChild(e);
            }
            let s = n || window.location.origin;
            [
              { property: 'og:type', content: 'website' },
              { property: 'og:url', content: s },
              { property: 'og:title', content: t },
              { property: 'og:description', content: i },
              { property: 'og:image', content: a },
              { property: 'twitter:card', content: 'summary_large_image' },
              { property: 'twitter:url', content: s },
              { property: 'twitter:title', content: t },
              { property: 'twitter:description', content: i },
              { property: 'twitter:image', content: a },
            ].forEach((e) => {
              let t = document.querySelector(`meta[property="${e.property}"]`);
              if (t) t.setAttribute('content', e.content);
              else {
                let t = document.createElement('meta');
                t.setAttribute('property', e.property), t.setAttribute('content', e.content), document.head.appendChild(t);
              }
            });
            let d = document.querySelector('link[rel="canonical"]');
            if (d) d.setAttribute('href', s);
            else {
              let e = document.createElement('link');
              (e.rel = 'canonical'), (e.href = s), document.head.appendChild(e);
            }
            let l = document.querySelector('script[type="application/ld+json"]');
            l && document.head.removeChild(l);
            let c = document.createElement('script');
            (c.type = 'application/ld+json'),
              (c.textContent = JSON.stringify({
                '@context': 'https://schema.org',
                '@type': 'Organization',
                name: 'Гранум',
                url: s,
                logo: a,
                description: i,
                address: { '@type': 'PostalAddress', addressLocality: 'Челябинск', addressRegion: 'Челябинская область', addressCountry: 'Россия' },
                contactPoint: { '@type': 'ContactPoint', telephone: '+7 912 790 26 95', email: 'Alulianov@yandex.ru', contactType: 'customer service' },
                priceRange: '₽₽₽',
                geo: { '@type': 'GeoCoordinates', latitude: '54.7518', longitude: '61.3215' },
                openingHoursSpecification: {
                  '@type': 'OpeningHoursSpecification',
                  dayOfWeek: ['Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday'],
                  opens: '09:00',
                  closes: '18:00',
                },
              })),
              document.head.appendChild(c);
          }, [t, i, o, a, n]),
          null
        );
      };
    },
  },
  function (e) {
    e.O(0, [0, 888, 774, 179], function () {
      return e((e.s = 8312));
    }),
      (_N_E = e.O());
  },
]);
