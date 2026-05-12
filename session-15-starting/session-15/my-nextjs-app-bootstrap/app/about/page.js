"use client";
import ControlledCarousel from "../component/Carousel";
import styles from "./styles.module.css";
import { Suspense } from "react";

// remove this to generate the error

export default function AboutPage() {
  return (
    <main className={styles.header}>
      <h1>About Us</h1>
      {/* <ControlledCarousel /> */}
      <Suspense fallback={<div>Loading carousel...</div>}>
        <ControlledCarousel />
      </Suspense>
    </main>
  );
}
