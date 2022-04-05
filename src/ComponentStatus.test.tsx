import React from "react";
import { render, screen } from "@testing-library/react";
import { ComponentStatus } from "./ComponentStatus";

describe("ComponentStatus", () => {
    test("renders ComponentStatus loading = true", () => {
        render(<ComponentStatus isLoading={true} error="" />);
        const textElement = screen.getByText(/Loading/i);
        expect(textElement).toBeInTheDocument();
    });

    test("renders ComponentStatus error", () => {
        render(<ComponentStatus isLoading={false} error="error" />);
        const textElement = screen.getByText(/error/i);
        expect(textElement).toBeInTheDocument();
    });

    test("renders ComponentStatus children", () => {
        render(
            <ComponentStatus isLoading={false} error="">
                display text
            </ComponentStatus>
        );
        const textElement = screen.getByText(/display text/i);
        expect(textElement).toBeInTheDocument();
    });
});
