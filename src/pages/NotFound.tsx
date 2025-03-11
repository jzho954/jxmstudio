import React from "react";
import { Link } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { useScrollToTop } from "@/hooks/useScrollToTop";
import NotFoundComponent from "@/components/NotFoundComponent";

const NotFound: React.FC = () => {
  // Use the scroll to top hook
  useScrollToTop();

  return <NotFoundComponent />;
};

export default NotFound;
