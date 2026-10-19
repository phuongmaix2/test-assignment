import TodoList from "./TodoList";
import { test, afterEach, expect } from "vitest";
import { render, screen, cleanup, fireEvent } from "@testing-library/react";
import '@testing-library/jest-dom/vitest';

test("clear todos", () => {
    render(<TodoList />);

    // Add a todo
    const desc = screen.getByPlaceholderText("Description");
    fireEvent.change(desc, {
        target: { value: "Go to coffee" },
    });

    const date = screen.getByPlaceholderText("Date");
    fireEvent.change(date, {
        target: { value: "2025-11-20" },
    });

    const addButton = screen.getByText("Add");
    fireEvent.click(addButton);

    // Check that the todo exists
    expect(screen.getByRole("table"))
        .toHaveTextContent("Go to coffee");

    // Click Clear
    const clearButton = screen.getByText("Clear");
    fireEvent.click(clearButton);

    // Check that the todo has been removed
    expect(screen.getByRole("table"))
        .not.toHaveTextContent("Go to coffee");
});

test("does not add a todo when fields are empty", () => {
    render(<TodoList />);

    const button = screen.getByText("Add");
    fireEvent.click(button);

    expect(screen.getByRole("table")).not.toHaveTextContent(
        /Go to coffee/i
    );
});

afterEach(() => {
    cleanup();
});