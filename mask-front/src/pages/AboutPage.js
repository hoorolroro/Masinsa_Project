import React from "react";
import Header from "../components/Header";
import MaskInfo from "../components/about/MaskInfo";
import Analysis from "../components/about/Analysis";
import MaskDetail from "../components/about/MaskDetail";
import Reviews from "../components/about/Reviews";
import RecentView from "../components/RecentView";
import UpBtn from "../components/UpBtn";
import { useParams } from "react-router-dom";

function AboutPage() {
  const { maskId } = useParams();
  return (
    <div>
      <Header />
      <hr></hr>
      {/* 마스크기본정보 */}
      <MaskInfo maskId={maskId} />
      {/* 리뷰통계 */}
      <Analysis />
      {/* 상세정보 */}
      <MaskDetail />
      {/* 리뷰창 */}
      <Reviews />
    </div>
  );
}

export default AboutPage;