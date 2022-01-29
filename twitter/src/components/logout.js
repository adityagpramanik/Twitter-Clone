import axios from "axios";
import { replace } from "lodash";
import React, { Component, useState } from "react";
import { Navigate } from "react-router";

export default function Home() {
  const logout = async (e) => {
    e.preventDefault();
    await axios.get("http://localhost:3001/logout");
  };
  return (
    <div>
      <button onSubmit={logout}>Logout</button>
    </div>
  );
}
