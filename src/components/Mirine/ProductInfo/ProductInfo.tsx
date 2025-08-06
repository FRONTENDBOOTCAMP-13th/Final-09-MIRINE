import { addHashTag, addPriceTemplate } from "@/lib/clientFunction";
import styles from "./productInfo.module.css";
export interface ProductInfoProp {
  brand: string;
  name: string;
  price: number;
  content: string;
  tags: string[];
}
export default function ProductInfo({ data }: { data: ProductInfoProp }) {
  return (
    <div>
      <section className={styles.info}>
        <div className={styles.product_info}>
          <span className={styles.brand_name}>{data.brand}</span>
          <h2 className={styles.product_name}>{data.name}</h2>
          <span className={styles.price}>{addPriceTemplate(data.price)}</span>
        </div>

        <p className={styles.product_description}>{data.content}</p>

        <div>
          <ul style={{ display: "flex", flexFlow: "row nowrap", gap: "8px" }}>
            {data.tags.map((e) => (
              <li key={e}>
                <p className={styles.tag}>{addHashTag(e)}</p>
              </li>
            ))}
          </ul>
        </div>
      </section>
    </div>
  );
}
