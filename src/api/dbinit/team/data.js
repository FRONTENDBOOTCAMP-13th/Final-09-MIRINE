import dayjs from "dayjs";

function getTime(day = 0, second = 0) {
  return dayjs().add(day, "days").add(second, "seconds").format("YYYY.MM.DD HH:mm:ss");
}

export const initData = async (clientId, nextSeq) => {
  return {
    // 회원
    user: [
      {
        _id: await nextSeq("user"),
        email: "gggg@market.com",
        password: "$2b$10$S.8GNMDyvUF0xzujPtHBu.j5gtS19.OhRmYbpJBnCHg2S83WLx1T2",
        name: "이름",
        phone: "01033334444",
        address: "서울시 서초구 반포동 817",
        type: "seller",
        loginType: "email",
        // image: `files/${clientId}/user-karina.jpg`,
        createdAt: getTime(-40),
        updatedAt: getTime(-20, -60 * 60 * 2),
        extra: {
          address: {
            zipCode: "06501",
            mainAddress: "서울시 서초구 반포동 817",
            detailAddress: "201동 1301호",
          },
        },
      },
      {
        _id: await nextSeq("user"),
        email: "karina@market.com",
        password: "$2b$10$S.8GNMDyvUF0xzujPtHBu.j5gtS19.OhRmYbpJBnCHg2S83WLx1T2",
        name: "카리나",
        phone: "01033334444",
        address: "서울시 서초구 반포동 817",
        type: "user",
        loginType: "email",
        // image: `files/${clientId}/user-karina.jpg`,
        createdAt: getTime(-40),
        updatedAt: getTime(-20, -60 * 60 * 2),
        extra: {
          address: {
            zipCode: "06501",
            mainAddress: "서울시 서초구 반포동 817",
            detailAddress: "201동 1301호",
          },
        },
      },
      {
        _id: await nextSeq("user"),
        email: "eunwoo@market.com",
        password: "$2b$10$S.8GNMDyvUF0xzujPtHBu.j5gtS19.OhRmYbpJBnCHg2S83WLx1T2",
        name: "차은우",
        phone: "01044445555",
        address: "서울시 송파구 잠실동 123",
        type: "user",
        loginType: "email",
        // image: `files/${clientId}/user-eunwoo.jpg`,
        createdAt: getTime(-35),
        updatedAt: getTime(-10, -60 * 60 * 1),
        extra: {
          address: {
            zipCode: "06911",
            mainAddress: "서울특별시 동작구 흑석동 204-104",
            detailAddress: "102동 201호",
          },
        },
      },
    ],

    // 상품
    product: [
      {
        _id: await nextSeq("product"),
        seller_id: 1,
        price: 22800,
        show: true,
        active: true,
        name: "캥거루 스턴트 독 로봇완구",
        quantity: 320,
        mainImages: [
          {
            path: `files/${clientId}/sample-bugatti.jpg`,
            name: "sample-bugatti.jpg",
            originalname: "스턴트 독.jpg",
          },
        ],
        createdAt: getTime(-41, -60 * 60 * 2),
        updatedAt: getTime(-40, -60 * 15),
        extra: {
          mainAccord: "sweet",
          brand: "조말론",
          brandInitialKR: "ㅈ",
          volumes: [50, 80, 100],
          prices: [57900, 82900, 99900],
          tags: ["시트러스", "플로럴", "상큼함", "데일리", "봄/여름"],
          content: "상큼한 시트러스와 부드러운 꽃 향이 조화를 이루는 산뜻한 퍼퓸.",
          detailContent: "첫 스프레이에서 느껴지는 상큼한 레몬과 오렌지 향, 이어지는 플로럴 노트가 매력적인 향수입니다. 일상에서 활력을 주는 가볍고 청량한 무드의 향기를 담았습니다.",
        },
      },
      {
        _id: await nextSeq("product"),
        seller_id: 1,
        price: 22800,
        show: true,
        active: true,
        name: "헬로카봇 스톰다이버",
        quantity: 320,
        mainImages: [
          {
            path: `files/${clientId}/sample-diver.jpg`,
            name: "sample-diver.jpg",
            originalname: "헬로카봇.jpg",
          },
        ],
        createdAt: getTime(-41, -60 * 60 * 2),
        updatedAt: getTime(-40, -60 * 15),
        extra: {
          mainAccord: "sweet",
          brand: "조말론",
          brandInitialKR: "ㅈ",
          volumes: [50, 80, 100],
          prices: [57900, 82900, 99900],
          tags: ["시트러스", "플로럴", "상큼함", "데일리", "봄/여름"],
          content: "상큼한 시트러스와 부드러운 꽃 향이 조화를 이루는 산뜻한 퍼퓸.",
          detailContent: "첫 스프레이에서 느껴지는 상큼한 레몬과 오렌지 향, 이어지는 플로럴 노트가 매력적인 향수입니다. 일상에서 활력을 주는 가볍고 청량한 무드의 향기를 담았습니다.",
        },
      },
      {
        _id: await nextSeq("product"),
        seller_id: 1,
        price: 32000,
        show: true,
        active: true,
        name: "라벤더 드림 퍼퓸",
        quantity: 150,
        buyQuantity: 89,
        mainImages: [
          {
            path: `files/${clientId}/perfume1.webp`,
            name: "perfume1.webp",
            originalname: "라벤더드림.webp",
          },
        ],
        createdAt: getTime(-41, -60 * 60 * 2),
        updatedAt: getTime(-40, -60 * 15),
        extra: {
          mainAccord: "sweet",
          brand: "조말론",
          brandInitialKR: "ㅈ",
          volumes: [50, 80, 100],
          prices: [57900, 82900, 99900],
          tags: ["시트러스", "플로럴", "상큼함", "데일리", "봄/여름"],
          content: "상큼한 시트러스와 부드러운 꽃 향이 조화를 이루는 산뜻한 퍼퓸.",
          detailContent: "첫 스프레이에서 느껴지는 상큼한 레몬과 오렌지 향, 이어지는 플로럴 노트가 매력적인 향수입니다. 일상에서 활력을 주는 가볍고 청량한 무드의 향기를 담았습니다.",
        },
      },
      {
        _id: await nextSeq("product"),
        seller_id: 1,
        price: 41500,
        show: true,
        active: true,
        name: "시트러스 블룸 퍼퓸",
        quantity: 150,
        mainImages: [
          {
            path: `files/${clientId}/perfume2.webp`,
            name: "perfume2.webp",
            originalname: "시트러스블룸.webp",
          },
        ],
        createdAt: getTime(-22, -60 * 60 * 5),
        updatedAt: getTime(-17, -60 * 30),
        extra: {
          mainAccord: "sweet",
          brand: "조말론",
          brandInitialKR: "ㅈ",
          volumes: [50, 80, 100],
          prices: [57900, 82900, 99900],
          tags: ["시트러스", "플로럴", "상큼함", "데일리", "봄/여름"],
          content: "상큼한 시트러스와 부드러운 꽃 향이 조화를 이루는 산뜻한 퍼퓸.",
          detailContent: "첫 스프레이에서 느껴지는 상큼한 레몬과 오렌지 향, 이어지는 플로럴 노트가 매력적인 향수입니다. 일상에서 활력을 주는 가볍고 청량한 무드의 향기를 담았습니다.",
        },
      },
      {
        _id: await nextSeq("product"),
        seller_id: 1,
        price: 28700,
        show: true,
        active: true,
        name: "바닐라 스카이 퍼퓸",
        quantity: 220,
        mainImages: [
          {
            path: `files/${clientId}/perfume3.webp`,
            name: "perfume3.webp",
            originalname: "바닐라스카이.webp",
          },
        ],
        createdAt: getTime(-18, -60 * 60 * 3),
        updatedAt: getTime(-14, -60 * 40),
        extra: {
          mainAccord: "citrus",
          brand: "샤넬",
          brandInitialKR: "ㅅ",
          volumes: [50, 80, 100],
          prices: [57900, 82900, 99900],
          tags: ["샤넬", "코롱", "세이지"],
          content: "샤넬 향수입니다.",
          detailContent: "샤넬 향수의 상세 설명입니다.",
        },
      },
      {
        _id: await nextSeq("product"),
        seller_id: 1,
        price: 2800,
        show: true,
        active: true,
        name: "바닐라 스카이 퍼퓸",
        quantity: 220,
        mainImages: [
          {
            path: `files/${clientId}/perfume4.webp`,
            name: "perfume4.webp",
            originalname: "향수4.webp",
          },
        ],
        createdAt: getTime(-18, -60 * 60 * 3),
        updatedAt: getTime(-14, -60 * 40),
        extra: {
          mainAccord: "citrus",
          brand: "샤넬",
          brandInitialKR: "ㅅ",
          volumes: [50, 80, 100],
          prices: [57900, 82900, 99900],
          tags: ["샤넬", "코롱", "세이지"],
          content: "샤넬 향수입니다.",
          detailContent: "샤넬 향수의 상세 설명입니다.",
        },
      },
    ],

    // 주문
    order: [
      {
        _id: await nextSeq("order"),
        user_id: 1,
        products: [
          {
            _id: 2,
            name: "헬로카봇 스톰다이버",
            image: {
              path: `files/${clientId}/sample-diver.jpg`,
              name: "sample-diver.jpg",
              originalname: "헬로카봇.jpg",
            },
            quantity: 2,
            price: 34520,
            // review_id: 3, 리뷰 작성한 구매내역이면 리뷰아이디를 patch해야함
          },
        ],
        cost: {
          total: 34520,
        },
        createdAt: getTime(-6, -60 * 60 * 3),
        updatedAt: getTime(-6, -60 * 60 * 3),
      },
    ],

    // 후기
    review: [
      {
        _id: await nextSeq("review"),
        user_id: 1,
        user: {
          _id: 1,
          name: "제이지",
          image: "user-jayg.webp",
        },
        order_id: 1,
        product_id: 2,
        rating: 5,
        content: "아이가 좋아해요.",
        createdAt: getTime(-4, -60 * 60 * 12),
      },
    ],

    // 장바구니
    cart: [],

    // 즐겨찾기/북마크
    bookmark: [
      {
        _id: await nextSeq("bookmark"),
        user_id: 1,
        user: {
          _id: 1,
          name: "제이지",
          image: `files/${clientId}/user-jayg.webp`,
        },
        type: "product",
        target_id: 4,
        createdAt: getTime(-3, -60 * 60 * 2),
      },
    ],

    // QnA, 공지사항 등의 게시판
    post: [
      {
        _id: await nextSeq("post"),
        type: "post",
        user: {
          _id: 2,
          name: "네오",
          image: `files/${clientId}/user-neo.png`,
        },
        extra: {
          answers: [1, 2, 3, 4, 4],
          products: [4, 5, 1],
        },
        createdAt: getTime(-1, -60 * 60 * 14),
        updatedAt: getTime(-1, -60 * 60 * 2),
      },
    ],

    // 코드
    code: [],

    // 설정
    config: [],
  };
};
