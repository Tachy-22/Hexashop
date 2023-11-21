import { useCallback, useEffect } from "react";
import { useLocation } from "react-router-dom"; // Import useLocation from React Router

const useScrollToTopOnNavigation = (element) => {
  const { pathname } = useLocation(); // Get the current pathname

  const scrollToTop = useCallback(() => {
    if (
      typeof element.current !== "undefined" &&
      typeof element !== "undefined"
    ) {
      element.current.scrollTop = 0;
      console.log(
        "element.current.scrollTop = element.current.scrollHeight;",
        element.current.scrollTop,
        element.current.scrollHeight
      );
    } else {
      console.error("did not run well");
    }
  }, [element]);

  useEffect(() => {
    scrollToTop();
  }, [pathname, scrollToTop]);

  // Add a resize event listener when the component mounts
};

export default useScrollToTopOnNavigation;
