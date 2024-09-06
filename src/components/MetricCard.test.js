import React from "react";
import { render } from "@testing-library/react";
import MetricCard from "./MetricCard";
import { FaUser } from "react-icons/fa";

describe("MetricCard", () => {
  it("renders the title and value correctly", () => {
    const { getByText } = render(
      <MetricCard title="Total Users" value="100,000" icon={<FaUser />} />
    );

    expect(getByText("Total Users")).toBeInTheDocument();
    expect(getByText("100,000")).toBeInTheDocument();
  });

  it("renders the icon correctly", () => {
    const { container } = render(
      <MetricCard title="Total Users" value="100,000" icon={<FaUser />} />
    );

    expect(container.querySelector("svg")).toBeInTheDocument();
  });

  it("applies the dark mode classes correctly", () => {
    const { container } = render(
      <MetricCard title="Total Users" value="100,000" icon={<FaUser />} />
    );

    expect(container.querySelector("div")).toHaveClass("dark:bg-gray-800");
  });
});
