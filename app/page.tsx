import React from "react";
import RootLayout from "./layout";
import './globals.css'

export default function Home() {
  return (
    <RootLayout>
      <HomePage />
    </RootLayout>
  )
}

function HomePage() {
  return (
    <div className="container">
      <h1 className="title">Pet Notes</h1>
    </div>
  )
}
