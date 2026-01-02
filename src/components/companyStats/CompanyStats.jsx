import { useEffect, useRef, useState } from "react";
import "./companyStats.css";

const statsData = [
  {
    type: "number",
    value: 7,
    suffix: "+",
    label: "Years of Experience",
    icon: (
       <svg viewBox="0 0 24 24" fill="none" stroke="currentColor">
    <circle cx="12" cy="8" r="4" />
    <path d="M8 14l-2 6 6-3 6 3-2-6" />
  </svg>
    )
  },
  {
    type: "number",
    value: 2000,
    suffix: "+",
    label: "Repairs Completed",
    icon: (
        <svg viewBox="0 0 24 24" fill="none" stroke="currentColor">
    <path d="M14 7a4 4 0 0 0-5 5L3 18l3 3 6-6a4 4 0 0 0 5-5l-3 3-3-3z" />
  </svg>
    )
  },
  {
    type: "number",
    value: 98,
    suffix: "%",
    label: "Customer Satisfaction",
    icon: (
      <svg viewBox="0 0 24 24" fill="none" stroke="currentColor">
        <path d="M12 17l-5 3 2-6-5-4 6-.5L12 4l2 5.5 6 .5-5 4 2 6z" />
      </svg>
    )
  },
  {
    type: "text",
    text: "Same-Day",
    label: "Response",
    icon: (
      <svg viewBox="0 0 24 24" fill="none" stroke="currentColor">
        <circle cx="12" cy="12" r="10" />
        <path d="M12 6v6l4 2" />
      </svg>
    )
  }
];

export default function CompanyStats() {
  return (
    <section className="company-stats paddingofblocks">
      <div className="stats-wrapper width">
        {statsData.map((item, index) => (
          <StatCard key={index} item={item} />
        ))}
      </div>
    </section>
  );
}

function StatCard({ item }) {
  const ref = useRef(null);
  const [count, setCount] = useState(0);

  useEffect(() => {
    if (item.type !== "number") return;

    let timer;

    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          let current = 0;
          const increment = item.value / 70;

          timer = setInterval(() => {
            current += increment;
            if (current >= item.value) {
              setCount(item.value);
              clearInterval(timer);
            } else {
              setCount(Math.floor(current));
            }
          }, 16);
        } else {
          clearInterval(timer);
          setCount(0);
        }
      },
      { threshold: 0.4 }
    );

    if (ref.current) observer.observe(ref.current);

    return () => {
      clearInterval(timer);
      observer.disconnect();
    };
  }, [item]);

  return (
    <div className="stat-card" ref={ref}>
      <div className="stat-icon">{item.icon}</div>

      <div className="stat-value">
        {item.type === "number" ? (
          <>
            {count}
            {item.suffix}
          </>
        ) : (
          <span className="stat-text">{item.text}</span>
        )}
      </div>

      <p className="stat-label">{item.label}</p>
    </div>
  );
}
