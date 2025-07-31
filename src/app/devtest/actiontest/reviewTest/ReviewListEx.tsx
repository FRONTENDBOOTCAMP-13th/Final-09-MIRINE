"use client";

import ReviewEx from "./ReviewEx";

export interface ReviewItem {
  _id: number;
  user: { _id: number; name: string };
  rating: number;
  content: string;
  createdAt: string;
  product: {
    _id: number;
    name: string;
    image: {
      path: string;
    };
  };
  extra: {
    images: string[];
  };
}
export default function ReviewListEx({ data }: { data: ReviewItem[] }) {
  console.log(data);
  return (
    <ul style={{ display: "flex", flexFlow: "column nowrap", padding: "12px", gap: "12px" }}>
      {data.map((e) => (
        <li key={e._id} style={{ display: "content" }}>
          <ReviewEx data={e} />
        </li>
      ))}
    </ul>
  );
}
