"use client";

import style from "./page.module.css";
import { useState } from "react";
import { useRouter } from "next/navigation";

export default function Navbar() {
  const router=useRouter()
  const [activeCountry, setActiveCountry] = useState("Global");

  const handleCountryClick = (c) =>{
    setActiveCountry(c)
    const country=c.toLowerCase()
    router.push(`/?country=${country}`)
  }
  const countries = [
    "Global",
    "India",
    "Japan",
    "US",
    "Germany",
  ];

  return (
    <nav className={style.Navbar}>
      <div className={style.nav_container}>
        <div className={style.app_name}>The Daily Globe</div>
        <div className={style.country_links}>
          {countries.map((country) => (
            <button
              key={country}
              className={`${style.country_link} ${
                activeCountry === country ? style.active : ""
              }`}
              onClick={() => handleCountryClick(country)}
            >
              {country}
            </button>
          ))}
        </div>
      </div>
    </nav>
  );
}
