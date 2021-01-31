export type BrowserRouterPropType = {
  history: any;
  location: any;
  match: any;
};

export type ReviewType = {
  rating: number;
  id: number;
  reviewHeader: string;
  reviewComment: string;
  coffeeId: number;
  createdAt: string;
  userId: number;
  author: string;
};

export type ReviewFormField = "rating" | "reviewHeader" | "reviewComment";

export const ReviewDefaultObject = {
  id: 0,
  reviewHeader: "",
  reviewComment: "",
  rating: 0,
  coffeeId: 0,
  createdAt: "",
  userId: 0,
  author: "",
};
