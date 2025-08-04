'use client'
import { useState, useEffect } from 'react';
import { deleteLike } from "@/lib/action";
import { getAllLikes } from "@/lib/function";
import { getAccessToken, getFile } from "@/lib/clientFunction";
import styles from '@/components/MypageAside/LikeList/likeList.module.css'
import Image from "next/image";
import { useRouter } from 'next/navigation';

export interface PerfumeInfo {
  _id: number;
  name: string;
  extra: {
    brand: string;
    mainAccord: string;
    content: string;
    prices: number[];
    volumes: number[];
    tags: string[];
  };
  mainImages: Array<{ name: string; path: string; originalname: string }>;
}

interface LikedPerfume {
  _id: number;
  product: PerfumeInfo;
}

export default function LikeListPage(){
  const router = useRouter();
  const [token, setToken] = useState('');
  const [likedPerfumes, setLikedPerfumes] = useState<LikedPerfume[]>([]);
  const [loading, setLoading] = useState(true);
  
  useEffect(()=>{
    const accessToken = getAccessToken();
    setToken(accessToken);
  }, []);
  // const token = getAccessToken();
  // const userID = +getUserID();
  // console.log("현재 로그인한 사용자:", userID);
  
  // 좋아요한 향수 목록
  useEffect(() => {
    if(!token) {
      setLoading(false);
      return;
    }

    const fetchLikedPerfumes = async () => {
      try {
        const result = await getAllLikes(token);
        console.log('찜 목록 응답:', result);

        console.log('result.item:', result.item);
        console.log('result.item.product:', result.item.product);
        console.log('Array.isArray(result.item.product):', Array.isArray(result.item.product));

        setLikedPerfumes(result.item|| []);
      } catch (error) {
        console.error('좋아요 목록 불러오기 실패:', error);
      } finally {
        setLoading(false);
      }
    };

    fetchLikedPerfumes();
  }, [token]);

  const handleItemClick = (id: number) => {
    router.push(`/perfumes/${id}`); 
  }

  // 좋아요 해제
  const handleLikeRemove = async (likeID: number) => {
    try {
      const result = await deleteLike({ target_id: likeID, token: token });
      console.log('좋아요 해제 결과:', result);

      // 목록에서 제거
      setLikedPerfumes(prev => prev.filter(item => item._id !== likeID));
    } catch (error) {
      console.error('좋아요 해제 실패:', error);
    }
  }

  if (loading) {
    return (
      <div className={styles.list_section}>
        <p className={styles.loading_text}>로딩 중...</p>
      </div>
    );
  }

  // 토큰이 없을 때 (로그인 안 함)
  if (!token) {
    return (
      <div className={styles.list_section}>
        <p className={styles.login_text}>로그인이 필요합니다.</p>
      </div>
    );
  }

  if (likedPerfumes.length === 0) {
    return (
      <div className={styles.list_section}>
        <p className={styles.like_text}>찜한 상품이 없습니다.</p>
      </div>
    );
  }

  return(
    <div className={styles.list_section}>
      {likedPerfumes.map((item) => (
        <div key={item._id} className={styles.list_wrapper}>
          <div 
            className={styles.list_group}
            onClick={() => handleItemClick(item.product._id)}
          >
            <Image 
              src={getFile(item.product.mainImages[0]?.path) || "/image/perfume1.svg"} 
              alt="`${item.product.name} 이미지`" 
              width={40} 
              height={40} 
              className={styles.perfume_img} 
            />
            
            <div className={styles.item_info}>
              <p className={styles.brand_name}>{item.product.extra.brand}</p>
              <p className={styles.product_name}>{item.product.name}</p>
            </div>
            
            <div className={styles.like_btn} onClick={(e) => e.stopPropagation()}>
              <button
                aria-label="찜하기 해제"
                type="button"
                onClick={() => handleLikeRemove(item._id)}
                style={{ background: 'none', border: 'none', cursor: 'pointer' }}
              >
                <svg width={20} height={20} viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                  <path d="M16.5 3.5C19.3045 3.5 21.5 5.68674 21.5 8.5C21.5 10.2206 20.7289 11.8259 19.2695 13.6113C17.8047 15.4035 15.699 17.3154 13.1143 19.6592L13.1133 19.6602L12 20.6729L10.8867 19.6602L10.8857 19.6592C8.30104 17.3154 6.19531 15.4035 4.73047 13.6113C3.27109 11.8259 2.5 10.2206 2.5 8.5C2.5 5.68674 4.69555 3.5 7.5 3.5C9.08865 3.5 10.6216 4.24211 11.6201 5.40527L12 5.84766L12.3799 5.40527C13.3784 4.24211 14.9114 3.5 16.5 3.5Z" fill="#EFE7FF" stroke="#B090EE" />
                </svg>
              </button>
            </div>
          </div>
        </div>
      ))}
    </div>
  )
}
// 'use client'
// import LikeButton from '@/components/MypageAside/LikeList/LikeButton/LikeButton';
// import styles from '@/components/MypageAside/LikeList/likeList.module.css'
// import Image from "next/image";
// import { useRouter } from 'next/navigation';

// export default function LikeListPage(){
//   const router = useRouter();

//   const handleItemClick = () => {
//     router.push('/perfumes'); 
//   }

//   return(
//     <div className={styles.list_section}>
//       <div className={styles.list_wrapper} onClick={handleItemClick} >
//         <div className={styles.list_group}>
//           <Image src="/image/perfume1.svg" alt="향수 이미지" width="40" height="40" className={styles.perfume_img} />
          
//           <div className={styles.item_info}>
//             <p className={styles.brand_name}>브랜드</p>
//             <p className={styles.product_name}>향수이름</p>
//           </div>
//           <div className={styles.like_btn}>
//             <LikeButton />
//           </div>
          
//         </div>
//       </div>


//     </div>
//   )
// }

