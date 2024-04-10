import { lazyLoad } from "core/utils/loadable";

export const ErrorIcon = lazyLoad(() => import("../svg/error-icon.svg?react"));
export const SearchIcon = lazyLoad(() => import("../svg/search-icon.svg?react"));

export const SuccessCheckIcon = lazyLoad(
    () => import("../svg/success-check-icon.svg?react"),
  );