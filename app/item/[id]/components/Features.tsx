"use client";
import React, { useState } from "react";
import "../style/features.scss";
import { OfferItems } from "@/types/types";

interface DetailsProps {
  item: OfferItems;
}

const Features: React.FC<DetailsProps> = ({ item }) => {
  const [visibleCount, setVisibleCount] = useState(20);

  function formatFeatureName(name: string): string {
    return name.replace(/([a-z])([A-Z])/g, "$1 $2");
  }

  const featuresArray = item?.features ? Object.entries(item.features) : [];
  const visibleFeatures = featuresArray.slice(0, visibleCount);
  const hasMoreFeatures = visibleCount < featuresArray.length;

  return (
    <div className="Features">
      <div className="title-features">Xüsusiyyətlər</div>
      <div className="features-list">
        <div className="feature-left">
          {visibleFeatures.map(([featureName, featureValue]) => (
            <div className="features-name" key={featureName}>
              <span style={{ textTransform: "capitalize" }} className="name">
                {formatFeatureName(featureName)}
              </span>
              <span style={{ textTransform: "capitalize" }} className="param">
                {featureValue}
              </span>
            </div>
          ))}
        </div>
      </div>
      {hasMoreFeatures && (
        <button onClick={() => setVisibleCount(featuresArray.length)}>
          Hamısını göstər •••
        </button>
      )}
    </div>
  );
};

export default Features;
