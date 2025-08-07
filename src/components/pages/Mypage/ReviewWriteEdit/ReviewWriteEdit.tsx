"use client";
import { useState, useEffect, useRef, useActionState } from "react";
import CancelButton from "@/components/pages/Mypage/ReviewWriteEdit/Button/Cancel/CancelBtn";
import RegisterButton from "@/components/pages/Mypage/ReviewWriteEdit/Button/Register/RegisterBtn";
import styles from "@/components/pages/Mypage/ReviewWriteEdit/reviewWriteEdit.module.css";
import Image from "next/image";
import { useRouter } from "next/navigation";
import Container from "@/components/ui/Container";
import StarRating from "@/components/pages/Mypage/StartRating/StarRating";
import { getAccessToken, getUserID } from "@/lib/clientFunction";
import { getAllOrders, getAllReivews, getOrder, getReivew } from "@/lib/function";
import { patchReview, postReview } from "@/lib/action";

interface ReviewWriteEditProps {
  mode: "write" | "edit";
  pageID?: string;
  reviewId?: string;
  initialData?: {
    content?: string;
    rating?: number;
    images?: string[];
    productInfo?: {
      brand: string;
      name: string;
      image: string;
    };
  };
}

export default function ReviewWriteEdit({ mode = "write", pageID, reviewId, initialData }: ReviewWriteEditProps) {
  const [crtState, formAction, isLoading] = useActionState(postReview, null);
  const [crtStateByPatch, formActionByPatch, isLoadingByPatch] = useActionState(patchReview, null);
  console.log(crtState, isLoading);
  console.log(crtStateByPatch, isLoadingByPatch);
  const userID = getUserID();
  const token = getAccessToken();

  useEffect(() => {
    if (mode === "write") {
      if (crtState?.ok) {
        alert("리뷰 작성 완료!");
        router.push("/reviews");
      }
      if (crtState?.ok) console.log("crtState", crtState, "1");
      else console.log("crtState", crtState, "2");
      if (crtState?.ok) {
        const data = getAllReivews();
        const data1 = getAllOrders(token);
        console.log("getAllReivews", data);
        console.log("getAllOrders", data1);
      }
    } else {
      if (crtStateByPatch?.ok) {
        alert("리뷰 수정 완료!");
        router.push("/reviews");
      }
      if (crtStateByPatch?.ok) console.log("crtStateByPatch", crtStateByPatch, "1");
      else console.log("crtStateByPatch", crtStateByPatch, "2");
      if (crtStateByPatch?.ok) {
        const data = getAllReivews();
        const data1 = getAllOrders(token);
        console.log("getAllReivews", data);
        console.log("getAllOrders", data1);
      }
    }
  });
  const router = useRouter();
  const [productType, setProductType] = useState("");
  const [productName, setProductName] = useState("");
  const [brand, setBrand] = useState("");
  const [productPath, setProductPath] = useState("");
  const [productID, setProductID] = useState(0);
  const [quantity, setQuantity] = useState(0);
  const [volume, setVolume] = useState(0);
  const [price, setPrice] = useState(0);
  const [products, setProducts] = useState<{ id: number; name: string }[]>([]);
  const [content, setContent] = useState(initialData?.content || "");
  const [error, setError] = useState("");
  const [rating, setRating] = useState(initialData?.rating || 0);
  const [preview, setPreview] = useState<string[]>([]);
  const inputRef = useRef<HTMLInputElement | null>(null);

  useEffect(() => {
    (async () => {
      if (mode === "write") {
        const data = await getOrder(token, +pageID!);
        console.log("data", data);
        if (data.item.extra.type === "p") {
          setProductType("p");
          setProductName(data.item.products[0].name);
          setBrand(data.item.products[0].extra.brand);
          setProductPath(data.item.products[0].image.path);
          setProductID(data.item.products[0]._id);
          setQuantity(data.item.products[0].quantity);
          setVolume(data.item.extra.volume);
          setPrice(data.item.products[0].price);
        } else if (data.item.extra.type === "m") {
          setProductType("m");
          setProductName(data.item.extra.products.reduce((sum, item, i) => sum + item.name + (i !== data.item.extra.products.length - 1 ? " / " : ""), ""));
          setBrand("미리내");
          setProductPath(data.item.products[0].image.path);
          setProductID(1);
          const productList: { id: number; name: string }[] = data.item.extra.products.map((e) => ({ id: e.id, name: e.name }));
          setProducts(productList);
        }
      } else {
        console.log(pageID);
        const data = await getReivew(+reviewId!);
        console.log(data.item[0]);
        if (data.item[0].extra.type === "p") {
          setProductType("p");
          setProductName(data.item[0].product.name);
          setBrand(data.item[0].product.extra?.brand);
          setProductPath(data.item[0].product.image.path);
          setProductID(data.item[0].product._id);
          setQuantity(data.item[0].extra.quantity);
          setVolume(data.item[0].extra.volume);
          setPrice(data.item[0].extra.price);
          setRating(data.item[0].rating);
          setContent(data.item[0].content);
        } else if (data.item.extra.type === "m") {
          setProductType("m");
          setProductName(data.item.extra.products.reduce((sum, item, i) => sum + item.name + (i !== data.item.extra.products.length - 1 ? " / " : ""), ""));
          setBrand("미리내");
          setProductPath(data.item.products[0].image.path);
          setProductID(1);
          const productList: { id: number; name: string }[] = data.item.extra.products.map((e) => ({ id: e.id, name: e.name }));
          setProducts(productList);
          setRating(data.item.rating);
          setContent(data.item.content);
        }
      }
    })();
  }, []);

  // useEffect(() => {
  //   if (mode === "edit" && reviewId && !initialData) {
  //     fetchReviewData(reviewId);
  //   }
  // }, [mode, reviewId, initialData]);

  // const fetchReviewData = async (id: string) => {
  //   try {
  //     const response = await fetch(`${URL}/replies/${id}`);
  //     const data = await response.json();

  //     setContent(data.content || "");
  //     setRating(data.rating || 0);
  //     setImages(data.images || []);
  //   } catch (error) {
  //     console.error("리뷰 데이터 로드 실패:", error);
  //   }
  // };
  const handleClickUpload = () => {
    if (inputRef.current) {
      inputRef.current.click(); // 숨겨진 input 클릭
    }
  };

  const handleImageChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    console.log(e.target.files);
    const files = e.target.files;
    if (!files) return;

    const selectedFiles = Array.from(files).slice(0, 5 - (preview?.length || 0)); // 최대 5개 제한
    const imageUrls = selectedFiles.map((file) => URL.createObjectURL(file));

    setPreview((prev) => [...prev, ...imageUrls]);
  };

  const onSubmit = async () => {
    if (content.trim().length < 10) {
      setError("*최소 10자 이상 입력해 주세요.");
      return;
    }

    try {
      if (mode === "write") {
        // 새 리뷰 작성
        console.log("리뷰 등록됨:", { content, rating });
        // await createReview({ content, rating, images });
      } else {
        // 기존 리뷰 수정
        console.log("리뷰 수정됨:", { reviewId, content, rating });
        // await updateReview(reviewId, { content, rating, images });
      }

      setContent("");
      setError("");
      router.push("/myreviews");
    } catch (error) {
      console.error("리뷰 처리 실패:", error);
      setError("처리 중 오류가 발생했습니다.");
    }
  };
  console.log(onSubmit); // 빌드에러용

  const buttonText = mode === "write" ? "등록하기" : "수정하기";
  const pageTitle = mode === "write" ? "리뷰 작성" : "리뷰 수정";

  return (
    <Container>
      <h2 className={styles.page_title}>{pageTitle}</h2>

      <div className={styles.item_info}>
        <Image src={productPath || "/"} alt="향수 이미지" width="40" height="40" className={styles.perfume_img} />
        <div className={styles.name}>
          <p className={styles.brand_name}>{initialData?.productInfo?.brand || brand}</p>
          <p className={styles.product_name}>{initialData?.productInfo?.name || productName}</p>
        </div>
      </div>

      <form action={mode === "write" ? formAction : formActionByPatch}>
        {mode === "edit" && <input type="hidden" name="reviewID" defaultValue={reviewId} />}
        <input type="hidden" name="type" defaultValue={productType} />
        <input type="hidden" name="user_id" defaultValue={userID} />
        <input type="hidden" name="token" defaultValue={token} />
        <input type="hidden" name="order_id" defaultValue={pageID} />
        <input type="hidden" name="product_id" defaultValue={productID} />
        <input type="hidden" name="quantity" defaultValue={quantity} />
        <input type="hidden" name="volume" defaultValue={volume} />
        <input type="hidden" name="price" defaultValue={price} />
        {/* <input className={styles.input_files} type="file" name="uploadImages" multiple ref={inputRef} onChange={handleImageChange} /> */}
        <div className={styles.write_form}>
          {products &&
            products.map((e) => (
              <div key={e.name + e.id}>
                <input type="hidden" name="products_id" defaultValue={e.id} />
                <input type="hidden" name="products_name" defaultValue={e.name} />
              </div>
            ))}

          <div className={styles.section}>
            <label className={styles.label}>별점주기</label>
            <div>
              <StarRating rating={rating} onChange={setRating} />
            </div>
          </div>
          <hr className={styles.line} />
          <div className={styles.section}>
            <label className={styles.label}>사진 업로드</label>
            <input type="file" name="uploadImages" multiple ref={inputRef} onChange={handleImageChange} />
            <div className={styles.review_photo}>
              <div className={styles.photo_box}>
                {preview && (
                  <>
                    {preview.map((e, i) => (
                      <button
                        key={e}
                        className={styles.photo_img}
                        onClick={() => {
                          const newPreview = preview.filter((_, idx) => i !== idx);
                          setPreview(newPreview);
                        }}
                      >
                        <Image src={e} alt="이미지" width={76} height={76} />
                      </button>
                    ))}
                  </>
                )}
                {Array.from({ length: 5 - (preview?.length || 0) }).map((e, i) => (
                  <button key={i} className={styles.photo_img} onClick={handleClickUpload}>
                    <svg width="24" height="25" viewBox="0 0 24 25" fill="none" xmlns="http://www.w3.org/2000/svg">
                      <path d="M5 12.5H19M12 5.5V19.5" stroke="var(--black-300)" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
                    </svg>
                  </button>
                ))}
              </div>
              <p className={styles.error_text}>*최대 5까지 등록 가능합니다.</p>
            </div>
          </div>
          <hr className={styles.line} />
          <div className={styles.section}>
            <label htmlFor="review_text" className={styles.label}>
              리뷰 작성
            </label>
            <textarea
              id="review_text"
              name="content"
              className={styles.textarea}
              placeholder="*해당 상품과 무관한 내용이나 동일 문자의 반복 등 부적절한 내용은 삭제될 수 있습니다."
              value={content}
              onChange={(e) => {
                const value = e.target.value;
                setContent(value);

                if (value.trim().length >= 10) {
                  setError("");
                }
              }}
            />
            {error && <p className={styles.error_text}>{error}</p>}
          </div>
        </div>
        <div className={styles.btn_group}>
          <CancelButton />
          <RegisterButton
            onClickRegister={() => {
              console.log("저장");
            }}
            buttonText={buttonText}
          />
        </div>
      </form>
    </Container>
  );
}
