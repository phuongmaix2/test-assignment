import TodoList from "./TodoList";
import { test, afterEach, expect } from "vitest";
import { render, screen, cleanup, fireEvent } from "@testing-library/react";
import '@testing-library/jest-dom/vitest';

test("add todo", () => {
  render(<TodoList />);

  const desc = screen.getByPlaceholderText("Description");
  fireEvent.change(desc, { target: { value: "Go to coffee" } });
  const date = screen.getByPlaceholderText("Date");
  fireEvent.change(date, { target: { value: "20.11.2025" } });
  
  const button = screen.getByText("Add");
  fireEvent.click(button);

  expect(screen.getByRole("table")).toHaveTextContent(/go to coffee/i);
});

afterEach(() => {
  cleanup();
});