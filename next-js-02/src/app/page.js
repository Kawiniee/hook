"use client"
import Image from "next/image";
import { useState } from "react";

function Header(){
  return (
    <>
    <p>This is header</p>
    </>
  );
}

export default function Home() {
  return (
    <div>
      <Header />
      <p>Hello React</p>
      <Counter/>
    </div>
  );
}

