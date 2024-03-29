import { useMemo, useCallback } from "react";

import { scroller, animateScroll } from "react-scroll";

const DefOptions = {
  smooth: "easeInOutQuart",
};

const useSmoothScrollTo = (anchorOrPosition, options = {}) => {
  const opts = useMemo(
    () => ({
      ...DefOptions,
      ...options,
    }),
    [options],
  );

  const handleScrollTo = useCallback(() => {
    switch (typeof anchorOrPosition) {
      case "number":
      case "bigint":
        animateScroll.scrollTo(anchorOrPosition, opts);
        break;
      case "string":
        scroller.scrollTo(anchorOrPosition, opts);
        break;
      default:
        break;
    }
  }, [anchorOrPosition, opts]);

  return handleScrollTo;
};

export default useSmoothScrollTo;
